const contextMenu = document.querySelector(".wrapper"),
    shareMenu = document.querySelector(".share-menu");


window.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    let x = e.offsetX, y = e.offsetY,
        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        cmWidth = contextMenu.offsetWidth,
        cmHeight = contextMenu.offsetHeight;

    console.log({ x, y, "winwidth": winWidth, "winheight": winHeight, "contextwidth": cmWidth, "contextheihgt": cmHeight })
    if (x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-210px"
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px"


    }
    x = x > innerWidth - cmWidth ? innerWidth - cmWidth : x;
    y = y > innerHeight - cmHeight ? innerHeight - cmHeight : y;
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible"

})



document.addEventListener("click", () => contextMenu.style.visibility = "hidden");


