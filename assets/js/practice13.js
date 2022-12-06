// task 1 - предупреждение перехода по ссылке
const contents = document.getElementById('contents');
contents.onclick = function (event) {
    function makeAlertOnLink(href) {
        let isLeaving = confirm(`Перейти на ${href}?`);
        if (!isLeaving) return false;
    }
    let target = event.target.closest('a');
    if (target && contents.contains(target)) {
        return makeAlertOnLink(target.getAttribute('href'));
    }
};


// task 2 - галерея изображений
const thumbs = document.getElementById('thumbs');
thumbs.onclick = function (event) {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) return;
    showThumbnail(thumbnail.href);
    event.preventDefault();  // предотвратить переход по ссылке (открытие картинки)
}
function showThumbnail(href) {
    document.getElementById('largeImg').src = href;
}


// task 3 - список с возможностью выделения
function toggleSelect(li) {
    li.classList.toggle('selected');
}

function singleSelect(li) {
    let selected = selectable_list.querySelectorAll('.selected');
    for (let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}

const selectable_list = document.getElementById('selectable_list');
selectable_list.onclick = function (event) {
    if (event.target.tagName !== 'LI') return;
    if (event.ctrlKey) {
        toggleSelect(event.target);
    } else {
        singleSelect(event.target);
    }
}

selectable_list.onmousedown = function () {  // запретить выделение текста при клике на список
    return false;
};


// task 4 - слайдер
const slider = document.getElementById('slider');
const thumb = slider.querySelector('.thumb');

thumb.onmousedown = function (event) {
    event.preventDefault(); // предотвратить выделение текста при клике на thumb

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;  // отступ от курсора до левого края thumb

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);  // отследить окончание переноса

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;  // новое положение thumb относительно slider

        // Если курсор вышел из слайдера, то оставить thumb в его границах.
        if (newLeft < 0) {
            newLeft = 0;
        }

        let rightEdge = slider.offsetWidth - thumb.offsetWidth;  // правая граница слайдера

        // Если курсор вышел из слайдера, то оставить thumb в его границах.
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};

thumb.ondragstart = function () {
    return false;
};