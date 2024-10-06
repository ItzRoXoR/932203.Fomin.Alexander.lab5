const buttons = [...document.getElementsByClassName("button")];
const modal = document.getElementById("modal");
const news = document.getElementById("news");
const finalP = document.getElementById("p");
const finalH = document.getElementById("h");

const text1 = "Новость1 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!"
const text2 = "Новость2 : Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias."
const text3 = "Новость3 : Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem Lorem Lorem Lorem labore fugiat id, eligendi."

function showNews(event, buttonNum) {
    event.stopPropagation();
    if (!buttonNum) return;
    modal.classList.remove("empty");
    const parent = buttonNum.parentElement;
    const child = parent.querySelector("h2");
    finalH.innerHTML = child.innerHTML;
    if (child.innerHTML === "Новость 1") {
        finalP.innerHTML = text1;
    }
    else if (child.innerHTML === "Новость 2") {
        finalP.innerHTML = text2;
    }
    else {
        finalP.innerHTML = text3;
    }
}

function closeNews(event){
    modal.classList.add("empty");
}

buttons.forEach(element => {
    element.addEventListener("click", (event) => showNews(event, element));
});

news.addEventListener("click", showNews);
window.addEventListener("click", closeNews);