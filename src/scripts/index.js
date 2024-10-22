import { albumList } from "./albunsDatabase"

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


function routine(){
    applyInputRangeStyle();
    console.log(albumList[1])
}
routine();
