// Declaracao de funcoes
function gridBuilder (squareNumber) {
    const container = document.querySelector("#container");
    container.innerHTML=""; // limpa o anterior
    container.style.gridTemplateColumns = `repeat(${squareNumber}, auto)`;
    container.style.gridTemplateRows = `repeat(${squareNumber}, auto)`;
    let cell;
    for (let i = 0; i < squareNumber*squareNumber;i++) {
        cell=document.createElement("div");
        cell.className="cell";
        container.appendChild(cell);
    }
    setCellListeners();
}
function setCellListeners(){
    const cells=document.querySelectorAll(".cell") // cria nodeList
    cells.forEach(setColor);
}
function setColor(element){
    element.addEventListener("mouseover", event => {
        if (mode==="default") {
            element.style.backgroundColor="black";
            element.style.opacity=1; // default opacity = 0 in stylesheet
        } else if (mode==="color"){
            let r,g,b,a;
            r=Math.floor((Math.random() * 255) + 1); // random generates from 0 to 255
            g=Math.floor((Math.random() * 255) + 1);
            b=Math.floor((Math.random() * 255) + 1);
            a=Math.floor((Math.random()*10)+1)/10; // random generates from 0 to 1 in 0.1 steps
            element.style.backgroundColor="rgb("+r+","+g+","+b+")";
            element.style.opacity=a;
        } else {
            element.style.backgroundColor="black";
            element.style.opacity=Number(element.style.opacity)+0.1;
        }
    })
}
function doReset(){
    squareNumber=prompt("Digite o numero de celulas por linha");
    gridBuilder(squareNumber);
    }
// Codigo executado ao carregar a pagina
let squareNumber=16;
let mode = "default";
gridBuilder(squareNumber);
// Botões
const reset=document.querySelector("#resetButton");
reset.addEventListener("click",doReset);
const color=document.querySelector("#colorButton");
color.addEventListener("click", ()=>{
    mode="color";
});
const tone=document.querySelector("#toneButton");
tone.addEventListener("click", ()=>{
    mode="tone";
});
const regular=document.querySelector("#defaultButton");
regular.addEventListener("click", ()=>{
    mode="default";
});
