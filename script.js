let image = document.getElementById('image');

let currentIndex = 1;

function nextFoto() {
    if (currentIndex === 5) {
        currentIndex = 1;
    } else {
        currentIndex += 1;
    }
    image.src = `./assets/images/${currentIndex}.png`;
    return currentIndex;
}

function previousFoto() {
    if (currentIndex === 1) {
        currentIndex = 5;
    } else {
        currentIndex -= 1;
    }
    image.src = `./assets/images/${currentIndex}.png`;
    return currentIndex;
};

/* Примечание для меня: return currentIndex не перезаписывает переменную currentIndex, но новое значение переменной currentIndex сохраняется между вызовами функции
Проверить можно с помощью console.log(nextFoto()), которая выведет текущее значение currentIndex после увеличения */



