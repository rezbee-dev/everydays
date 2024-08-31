const boxes = document.querySelectorAll(".box")
window.addEventListener("scroll", checkBoxes)

checkBoxes()

function checkBoxes(){
    // set trigger point for objects appearing
    const triggerBottom = (window.innerHeight / 2)
    console.log("Bottom", triggerBottom)
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}