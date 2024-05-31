import {useState} from "react";

import {MarkdownComponent as Markdown} from "./markdown";
import {MonacoComponent as Monaco} from "./monaco";
import {type SectionProps} from "./types";
import {sectionsData as sectionsDataArr} from "./data";
import Sections from "./sections/Sections";

function App() {
  const [sectionsData, setSectionsData] = useState<SectionProps[]>(sectionsDataArr);
  const [currentSection, setCurrentSection] = useState<SectionProps>(sectionsDataArr[0]);

  function updateSection(value: string | undefined) {
    if (value !== undefined) {
      const updatedData: SectionProps[] = sectionsData.map((section) =>
        section.id === currentSection.id ? {...section, content: value} : section,
      );

      setSectionsData(updatedData);
    }
  }

  return (
    <main className="grid min-h-screen grid-rows-[auto,1fr,auto] px-5 pb-5">
      <header className="text-xl font-bold capitalize leading-[4rem]">readme-jv</header>
      <div className="flex gap-3">
        <div className="flex-0 flex flex-col gap-2 rounded-md border border-stone-100/20 p-3">
          <Sections
            sectionsData={sectionsData}
            setCurrentSection={setCurrentSection}
            setSectionsData={setSectionsData}
          />
        </div>
        <div className="flex flex-1 gap-3">
          <div className="w-1/2 ">
            <Monaco data={currentSection.content} onChange={updateSection} />
          </div>
          <div className="flex-1">
            <Markdown data={sectionsData} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
