function r(n){const e=parseDocument(n,{decodeEntities:!1});defineProperties(e,DocumentExtensions),defineProperties(Element.prototype,ElementExtensions);let t=e.querySelector("[data-critters-container]");return t||(e.documentElement.setAttribute("data-critters-container",""),t=e.documentElement),e.crittersContainer=t,buildCache(t),e}export{r as createDocument};
