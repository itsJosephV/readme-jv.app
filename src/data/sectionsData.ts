import {type SectionProps} from "../types";

const sectionsData: SectionProps[] = [
  {id: "1", title: "H1", content: "# Title"},
  {id: "2", title: "H2", content: "## Subtitle"},
  {id: "3", title: "H3", content: "### Subheading"},
  {id: "4", title: "Paragraph", content: "This is a paragraph of text."},
  {id: "5", title: "Code", content: "`inline code`"},
  {id: "6", title: "Code Block", content: "```\ncode block\n```"},
  {
    id: "7",
    title: "Image",
    content:
      "![Alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png)",
  },
  {id: "8", title: "Link", content: "[Link text](https://example.com)"},
  {id: "9", title: "List", content: "- Item 1\n- Item 2\n- Item 3"},
  {id: "10", title: "Ordered List", content: "1. First item\n2. Second item\n3. Third item"},
  {id: "11", title: "Blockquote", content: "> This is a blockquote."},
  {id: "12", title: "Checkbox List", content: "- [x] Checked item\n- [ ] Unchecked item"},
  {
    id: "13",
    title: "Table",
    content: "| Header 1 | Header 2 |\n| --------- | --------- |\n| Cell 1    | Cell 2    |",
  },
  {id: "14", title: "Horizontal Rule", content: "---"},
  {id: "15", title: "Inline HTML", content: "<div>Inline HTML</div>"},
];

export {sectionsData};
