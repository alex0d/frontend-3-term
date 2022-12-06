// task 1 - links
let links = document.querySelectorAll(".link");
for(let el of links){
    if(!el.getAttribute('href')) continue;  // if there is no href attribute
    if (el.getAttribute('href').includes("://")) {
        el.style.color = "orange";
    }
}

// task 2 - list
const list = document.querySelector(".list");
const create_list_btn = document.querySelector(".create_list");
create_list_btn.addEventListener("click", () => {
    let text = prompt("Ввелите содержимое элемента списка");
    while (text) {
        let el = document.createElement("li");
        el.textContent = text;
        list.append(el);
        text = prompt("Ввелите содержимое элемента списка");
    }
});

// task 3 - show notification
const header = document.querySelector(".header");
const textNotification = document.querySelector(".text__notification");
const sendNotification = document.querySelector(".send__notification");
function showNotification(options) {
    let div = document.createElement("div");
    div.classList.add("notification");
    div.textContent = options;
    header.append(div);
    setTimeout(() => {
        div.remove();
    }, 1500);
}
sendNotification.addEventListener("click", event => {
    let text = textNotification.value;
    if (text) {
        showNotification(text);
    }
})

// task 4 - centralize element
const border = document.querySelector(".border");
const img = document.querySelector(".img");
const centralize_btn = document.querySelector(".centralize");
border.style.margin = '0 auto';
centralize_btn.addEventListener("click", event => {
    img.style.left = Math.round((border.clientWidth - img.offsetWidth) / 2) + "px";
    img.style.top = Math.round((border.clientHeight - img.offsetHeight) / 2) + "px";
});
border.addEventListener("click", event => {
    alert("Координата x=" + event.pageX + "\nКоордината y=" + event.pageY);
});


// task 5 - delete element
let panes = document.querySelectorAll('.pane');

for (let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}