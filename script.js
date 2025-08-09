let inputnumber = document.querySelector(".number");
let submit = document.querySelector(".submit");
let chat = document.querySelector(".chat");
let span = document.querySelector("span");
let number = localStorage.getItem("secretNumber");
if (!number) {
    number = Math.floor(Math.random() * 100) + 1;
    localStorage.setItem("secretNumber", number);
} else {
    number = parseInt(number);
}

let cnt = localStorage.getItem("cntrecord");
if (cnt) {
    cnt = parseInt(cnt);
} else {
    cnt = 0;
}

let score = localStorage.getItem("score");
if (score) {
    score = parseInt(score);
}
else {
    score = null;
}
console.log("Рекорд:", score);
console.log(number);
if (score !== null) {
    span.innerHTML = score;
}
else {
    span.innerHTML = "Нет рекорда";
}
submit.onclick = () => {
    let guess = parseInt(inputnumber.value);

    if (isNaN(guess)) {
        chat.innerHTML = "Введите число!";
        return;
    }

    cnt++;
    localStorage.setItem("cntrecord", cnt);

    if (guess === number) {
        chat.innerHTML = `🏆 Вы угадали за ${cnt} попыток!`;

        if (score == null || cnt < score) {
            score = cnt;
            localStorage.setItem("score", score);
            chat.innerHTML += `<br>🎯 Новый рекорд: ${score} попыток!`;
            span.innerHTML = score;
        } else {
            chat.innerHTML += `<br>Ваше  рекорд: ${score} попыток.`;
        }

        number = Math.floor(Math.random() * 100) + 1;
        cnt = 0;
        localStorage.setItem("cntrecord", cnt);
        console.log("Новое число:", number);

    } else if (guess > number) {
        chat.innerHTML = `📉 Ваше  число больше чем рандом число ! Попыток: ${cnt}`;
    } else {
        chat.innerHTML = `📈 Ваше  число меньше чем рандом число! Попыток: ${cnt}`;
    }

    inputnumber.value = "";
};
