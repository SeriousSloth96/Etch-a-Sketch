const containerElement = document.querySelector("#container");
const choiceButtonElement = document.querySelector("#choiceButton");

choiceButtonElement.addEventListener("click",() => {
    const promptResult = prompt("Choose grid size (max 100)");
    generateGrid(parseInt(promptResult));
})

const lowerOpacity = (element) => {
    element.style.opacity = window.getComputedStyle(element).getPropertyValue("opacity") * 1.2;
}

const generateGrid = (size) => {
    containerElement.textContent = "";
    size = Math.min(size,100);
    for (let i = 0; i < size**2;i++){
        const boxElement = document.createElement("div");
        boxElement.classList.add("box");
        boxElement.addEventListener("mouseover", () => {
            boxElement.classList.add("hover");
            lowerOpacity(boxElement);

        });
        boxElement.setAttribute("style",'width:' + (1 / size * 100).toFixed(3) + '%;background-color:rgb(' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ')');
        containerElement.appendChild(boxElement);
    } 
}

generateGrid(16);