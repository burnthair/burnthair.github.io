!function(){
  function t(e){
    for(var a=0;a<e.length;a++){
      if(1==e[a].nodeType&&e[a].hasAttribute("data-delay")){
        var i=e[a].getAttribute("data-delay");
        n.insertRule(e[a].tagName+"#"+e[a].id+"{-webkit-animation-delay: "+i+"s; animation-delay: "+i+"s;}",0)
      }
      if(1==e[a].nodeType&&e[a].hasAttribute("data-duration")){
        var d=e[a].getAttribute("data-duration");
        n.insertRule(e[a].tagName+"#"+e[a].id+"{-webkit-animation-duration: "+d+"s; animation-duration: "+d+"s;}",0)
      }
      if(1==e[a].nodeType&&e[a].hasChildNodes()){
        var o=e[a].childNodes;t(o)}}}function e(){this.className="shift-play"}var a=document.getElementById("shift-container");
        a.addEventListener("click",e,!1);
        var i=a.childNodes,n=function(){
          var t=document.createElement("style");
          return t.appendChild(document.createTextNode("")),document.head.appendChild(t),t.sheet}();
          t(i)
}();
