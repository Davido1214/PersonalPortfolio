const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const downloadButton = document.querySelector("#downloadBtn");

burger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    
})

downloadButton.addEventListener("click",()=>{
    var link = document.createElement("a");
    link.href = "./assets/Davidresume.pdf"
    link.download = "Davidresume.pdf"
    link.click();
})

