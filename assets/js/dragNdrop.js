let draggingBegan = false;  // флаг начала перетаскивания
let clone = null;  // клон элемента, который перетаскивается
let totalPurchase = 0.0;
const dropZoneArray = new Array(1);
dropZoneArray[0] = "dZone";

let uniqueNumber = 1;

function makeElementDraggable(obj) {
    let startX = 0;
    let startY = 0;

    function initiateDrag(event) {
        draggingBegan = true;

        startX = parseInt(event.pageX);
        startY = parseInt(event.pageY);

        clone = obj.cloneNode(true);

        clone.style.position = 'absolute';
        clone.style.top = parseInt(startY) + 'px';
        clone.style.left = parseInt(startX) + 'px';

        document.body.appendChild(clone);

        document.onmousemove = drag;
        document.onmouseup = drop;

        return false;
    }

    function drop(event) {
        const dZone = document.getElementById("dZone");

        if (event.pageX > dZone.offsetLeft && event.pageX < (dZone.offsetLeft + dZone.offsetWidth)
            && event.pageY > dZone.offsetTop && event.pageY < (dZone.offsetTop + dZone.offsetHeight))  // if in drop zone
        {
            addPrice();
        }

        document.onmouseup = null;
        document.onmousemove = null;

        document.body.removeChild(clone);
        draggingBegan = false;
    }

    function addPrice() {
        const title = clone.childNodes[1].innerHTML;
        const price = clone.childNodes[3].innerHTML;

        const dZone = document.getElementById("dZone");
        const textNode = document.createTextNode(`${title} - ${price}`);
        const item = document.createElement('div');
        item.id = 'itemDiv' + uniqueNumber;

        item.appendChild(textNode);
        dZone.appendChild(item);

        totalPurchase += Math.ceil(Number(price));
        document.getElementById("divTotal").innerHTML = totalPurchase;
        uniqueNumber++;
    }

    function drag(event) {
        if (draggingBegan === true) {
            clone.style.top = event.pageY + 'px';
            clone.style.left = event.pageX + 'px';
        }
    }

    obj.onmousedown = initiateDrag;
}

const dragElements = document.getElementsByClassName('dragElement');
for (let i = 0; i < dragElements.length; i++) {
    makeElementDraggable(dragElements[i]);
}
