const containerElement = document.querySelector("#container");

for (let i = 0; i < 16 * 16;i++){
    const boxElement= document.createElement("div");
    boxElement.classList.add("box");
    containerElement.appendChild(boxElement);
}