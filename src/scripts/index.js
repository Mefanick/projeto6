import  albumList  from "./albunsDatabase.js"

function applyInputRangeStyle(){
    const inputRange = document.querySelector("#rangeInput")
    inputRange.addEventListener("input", (event) => {
        const currentInputValue = event.target.value;
        const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
        
        inputRange.style.background = `linear-gradient(to right, 
        var(--brand-1) ${runnableTrackProgress}%, 
        var(--color-gray-5) ${runnableTrackProgress}%)`;
    });
}

function createAlbum(index) {
    const ul = document.querySelector("#albunsContainer");
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const titleDiv = document.createElement("div");
    const genereDiv = document.createElement("div");
    const priceDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const h4 = document.createElement("h4");
    const button = document.createElement("button");

    ul.appendChild(li);
    li.appendChild(img);
    li.appendChild(div)
    div.appendChild(titleDiv);
    div.appendChild(genereDiv);
    div.appendChild(priceDiv);
    titleDiv.appendChild(h3);
    genereDiv.appendChild(p1);
    genereDiv.appendChild(p2);
    priceDiv.appendChild(h4);
    priceDiv.appendChild(button);

    li.classList.add("album__box");

    img.src = albumList[index].img;
    div.classList.add("album__comment--box");

    titleDiv.classList.add("album__comment--title");
    h3.innerText = albumList[index].title;

    genereDiv.classList.add("album__comment--genre");
    p1.innerText = albumList[index].band;
    p2.innerText = albumList[index].genre;

    priceDiv.classList.add("album__comment--price");
    button.classList.add("album__button")
    h4.innerText = "R$" + albumList[index].price;
    button.innerText = "Comprar";
}
function renderElements(albuns) {
    const ul = document.querySelector("#albunsContainer");
    for (let i = 1; i <= albuns.length; i++) {
        let li = document.querySelector('.album__box');
        li.remove();
    }
    for (let i = 0;i < albuns.length; i++) {
        createAlbum(i);
    }
    
}

function routine(){
    applyInputRangeStyle();
    renderElements(albumList);
}
routine();
