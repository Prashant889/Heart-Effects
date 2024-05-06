let body = document.querySelector("body");
let span = document.querySelector("span");

body.addEventListener("mousemove", (e)=> {
    let xPos = e.offsetX
    let yPos = e.offsetY
    let spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    let size = Math.random() * 100; //point ke pahle 2 digit tak lane ke liye
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px"
    body.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove()
    }, 3000)
})
