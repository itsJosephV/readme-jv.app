import {SortableContext, verticalListSortingStrategy, arrayMove} from "@dnd-kit/sortable";
import {DndContext, DragEndEvent, closestCenter} from "@dnd-kit/core";
import {restrictToVerticalAxis} from "@dnd-kit/modifiers";
import {useState} from "react";

import {useSectionStore} from "../store";
import {sectionsData} from "../data";
import {SectionProps} from "../types";

import {Section} from "./Section";

enum CurrentSection {
  MY_SECTIONS = "MY-SECTIONS",
  OPTIONS_SECTIONS = "OPTIONS-SECTIONS",
}

const Sections = () => {
  const [sectionShift, setSetctionShift] = useState<CurrentSection>(CurrentSection.MY_SECTIONS);
  const {sections, setSectionsData} = useSectionStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const {active, over} = event;

    const oldIndex = sections.findIndex((section) => section.id === active.id);
    const newIndex = sections.findIndex((section) => section.id === over?.id);

    const newOrder = arrayMove(sections, oldIndex, newIndex);

    setSectionsData(newOrder);
  };

  const currentSection: Record<CurrentSection, JSX.Element> = {
    [CurrentSection.MY_SECTIONS]: (
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <ul className="flex flex-col gap-2 ">
          <SortableContext items={sections} strategy={verticalListSortingStrategy}>
            {sections?.map((item) => <Section key={item.id} item={item} />)}
          </SortableContext>
        </ul>
      </DndContext>
    ),
    [CurrentSection.OPTIONS_SECTIONS]: (
      <ul className="flex flex-col gap-2 ">
        {sectionsData?.map((item) => <OptionSection key={item.id} item={item} />)}
      </ul>
    ),
  };

  return (
    <>
      <div className="flex justify-between gap-2">
        <button
          className="w-full rounded-md bg-stone-500 p-1"
          onClick={() => setSetctionShift(CurrentSection.MY_SECTIONS)}
        >
          My Sections
        </button>
        <button
          className="w-full rounded-md bg-stone-500 p-1"
          onClick={() => setSetctionShift(CurrentSection.OPTIONS_SECTIONS)}
        >
          Add New
        </button>
      </div>

      <p className="py-2 text-xs">Click on a section below to edit the contents</p>
      {currentSection[sectionShift]}
    </>
  );
};

export default Sections;

const OptionSection = ({item}: {item: SectionProps}) => {
  const {sections, setSectionsData, setCurrentSection} = useSectionStore();

  const handleAddSection = () => {
    const newSectionWithNewId = {
      ...item,
      id: crypto.randomUUID(),
    };

    setSectionsData([...sections, newSectionWithNewId]);
    //console.log(sections);
  };

  return (
    <li
      className="flex w-full max-w-72 rounded-md bg-stone-800 p-2 transition-colors hover:bg-stone-600"
      role="button"
      onClick={() => {
        handleAddSection();
        setCurrentSection(item);
      }}
    >
      <p className="">{item.title}</p>
    </li>
  );
};
