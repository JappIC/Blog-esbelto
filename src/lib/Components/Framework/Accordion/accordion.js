// Idea sacada y actualizada en para Esbelto de https://github.com/diwakersurya/svelte-accordion

import {default as Accordion} from "./Accordion.svelte";
import {default as Section} from "./AccordionSection.svelte";
import {default as Header} from "./AccordionHeader.svelte";
Accordion.Section=Section;
Accordion.Header=Header;
export default Accordion;