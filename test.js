let el = document.querySelector(".scroller")
let heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop
    el.style.width = `${(scrollTop / heigth) * 100}% `
})