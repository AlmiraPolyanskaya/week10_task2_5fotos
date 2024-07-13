let image = document.getElementById('image');

let b = 1;

function nextFoto() {
    if (b === 5) {
        b = 1;
    } else {
        b += 1;
    }
    image.src = `./assets/images/${b}.png`;
    return b;
}

function previousFoto() {
    if (b === 1) {
        b = 5;
    } else {
        b -= 1;
    }
    image.src = `./assets/images/${b}.png`;
    return b;
};

/* Примечание для меня: return b не перезаписывает переменную b, но новое значение переменной b сохраняется между вызовами функции
Проверить можно с помощью console.log(nextFoto()), которая выведет текущее значение b после увеличения */



