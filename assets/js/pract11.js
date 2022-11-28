// === task 1 ===
let array = [];

const containerArray = document.querySelector(".container__array");
const addButton = document.querySelector(".add__button");
const shiftButton = document.querySelector(".shift__button");
const replaceButton = document.querySelector(".replace__button");

var count = array.length;

addButton.addEventListener("click", () => {
    let block = document.createElement("div");
    block.classList.add("card");
    let title = document.createElement("h2");
    title.classList.add("title", "title_h2");
    title.innerHTML = "Element N" + count;
    array.push(title.innerHTML);
    block.append(title);
    containerArray.append(block);
    count++;
});

shiftButton.addEventListener("click", event => {
    if (array.length > 0) {
        containerArray.removeChild(containerArray.firstElementChild);
        array.shift();
    }
});

replaceButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild);
    }
    let n = Math.floor(Math.random() * array.length);
    let m = Math.floor(Math.random() * array.length);
    [array[n], array[m]] = [array[m], array[n]];
    for (let el of array){
        let block = document.createElement("div");
        block.classList.add("card");
        let title = document.createElement("h2");
        title.classList.add("title", "title_h2");
        title.innerHTML = el;
        block.append(title);
        containerArray.append(block);
    }
});

// === task 3 ===
const ascendingSortButton = document.querySelector(".ascending__sort__button");
const descendingSortButton = document.querySelector(".descending__sort__button");
let list = document.querySelectorAll(".array_to_sort");
let array_to_sort = [];
for(let el of list){
    array_to_sort.push(Number(el.innerHTML));
}

ascendingSortButton.addEventListener("click", event => {
    array_to_sort.sort((a, b) => Number(a) - Number(b));
    for(let i = 0; i < array_to_sort.length; i++){
        list[i].innerHTML = array_to_sort[i];
    }
});
descendingSortButton.addEventListener("click", event => {
    array_to_sort.sort((a, b) => Number(b) - Number(a));
    for(let i = 0; i < array_to_sort.length; i++){
        list[i].innerHTML = array_to_sort[i];
    }
});

// === task 3 ===
function myFilter(array, a, b) {
    return array.filter((el) => el >= a && el <= b);
}