var AddEvent = (function () {
   if (document.addEventListener) {
      return function (el, type, fn) {
         if (el && el.nodeName || el === window) {
            el.addEventListener(type, fn, false);
         } else if (el && el.length) {
            for (var i = 0; i < el.length; i++) {
               AddEvent(el[i], type, fn);
            }
         }
      };
   } else {
      return function (el, type, fn) {
         if (el && el.nodeName || el === window) {
            el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
         } else if (el && el.length) {
            for (var i = 0; i < el.length; i++) {
               AddEvent(el[i], type, fn);
            }
         }
      };
   }
})();

var pDragElement = document.createElement('p');
var chemicalElements = document.querySelectorAll('div > p'), el = null;
for (var i = 0; i < chemicalElements.length; i++) {
   el = chemicalElements[i];
   el.setAttribute('draggable', 'true');
   AddEvent(el, 'dragstart', dragStartElement);
   AddEvent(el, 'dragend', dragEndElement);
}

function dragStartElement(e) {
   e.dataTransfer.effectAllowed = 'copy';
   e.dataTransfer.setData('Text', this.id);
   e.dataTransfer.setData('Type', this.innerHTML);

   this.style.backgroundColor = "#ffa31a";
}

function dragEndElement(e) {
   this.style.backgroundColor = "#fff9f0";
}

var divBoxElements = document.querySelector('#divBoxElements');

AddEvent(divBoxElements, 'dragover', function (e) {
   if (e.preventDefault) e.preventDefault();
   e.dataTransfer.dropEffect = 'copy';
   return false;
});

AddEvent(divBoxElements, 'drop', function (e) {
   if (e.stopPropagation) e.stopPropagation();
   console.log("E ->");
   console.log(e);

   var element = e.dataTransfer.getData('Type');
   console.log("Element ->");
   console.log(element);
   pDragElement.innerHTML = "Adding " + element + " element";

   var pClone = pDragElement.cloneNode(true);
   var newDiv = document.createElement("div");
   newDiv.appendChild(pClone);
   divBoxElements.appendChild(newDiv);
   InsertTestElement(element);

   return false;
});