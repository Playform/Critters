var r={nodeName:{get(){return this.tagName.toUpperCase()}},id:reflectedProperty("id"),className:reflectedProperty("class"),insertBefore(t,e){return e?(DomUtils.prepend(e,t),t):this.appendChild(t)},appendChild(t){return DomUtils.appendChild(this,t),t},removeChild(t){DomUtils.removeElement(t)},remove(){DomUtils.removeElement(this)},textContent:{get(){return DomUtils.getText(this)},set(t){this.children=[],DomUtils.appendChild(this,new Text(t))}},setAttribute(t,e){this.attribs==null&&(this.attribs={}),e==null&&(e=""),this.attribs[t]=e},removeAttribute(t){this.attribs!=null&&delete this.attribs[t]},getAttribute(t){return this.attribs!=null&&this.attribs[t]},hasAttribute(t){return this.attribs!=null&&this.attribs[t]!=null},getAttributeNode(t){const e=this.getAttribute(t);if(e!=null)return{specified:!0,value:e}},exists(t){return cachedQuerySelector(t,this)},querySelector(t){return selectOne(t,this)},querySelectorAll(t){return selectAll(t,this)}};export{r as default};
