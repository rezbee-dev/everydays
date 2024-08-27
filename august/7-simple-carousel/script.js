imgs = document.querySelectorAll(".gallery-img")
btns = document.querySelectorAll(".btn")
left = document.getElementById("left")
right = document.getElementById("right")
progress = document.getElementById("progress")
// left = getComputedStyle(document.querySelector(".circles", ":before"))
// right = getComputedStyle(document.querySelector(".circles", ":after"))
active = 0


left.addEventListener("click", () => {
    imgs[active].classList.remove("active")
    active--
    onClickGuard()
    imgs[active].classList.add("active")
    progress.style.width = (active/(imgs.length - 1) * 100) + "%";
})

right.addEventListener("click", () => {
    imgs[active].classList.remove("active")
    active++
    onClickGuard()
    imgs[active].classList.add("active")
    progress.style.width = (active/(imgs.length - 1) * 100) + "%";
})

function onClickGuard() {
    if(active === 0) {
        active = 0
        left.disabled = true
    } else if (active === imgs.length-1) {
        active = imgs.length - 1
        right.disabled = true
    } else {
        left.disabled = false
        right.disabled = false
    }
}

// imgs.forEach(img => {
//     img.addEventListener("click", () => {
//         active.classList.remove("active")
//         active = img
//         active.classList.add("active")
//     })
// });