function appendNewDiv () {
    let newDiv=document.createElement("div");
    newDiv.className="new-div";
    return mainContainer.appendChild(newDiv); // appends created div to the mainContainer
}
// function paint(element){
//     element.addEventListener("mouseover",(element)=> {
//         element.classList.add("painted");
//     })
// }
//let mainContainer = document.querySelector("#mainContainer");
let grid =[];
for (let i = 0; i < 255; i++) { // creates grid
    grid[i]= appendNewDiv();
}
const element=document.querySelectorAll("div");
element.forEach(element=>element.addEventListener("mouseover",event => {
    element.classList.add("painted");
}));
