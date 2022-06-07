// CANVAS CODE
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 700;

let local = document.getElementById("local")
let global = document.getElementById("global")
let y = 650
let y2 = y - 20
let globalanimate = false

requestAnimationFrame(animate)
function animate() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    ctx.fillStyle = "blue"
    ctx.fillRect(0, y, cnv.width, 5)

    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.arc(350, y2, 20, 0, 2 * Math.PI)
    ctx.fill()

    if (globalanimate) {

        if (y >= 500) {
            y += -1
        }

        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, cnv.width, cnv.height)

        ctx.fillStyle = "blue"
        ctx.fillRect(0, y, cnv.width, 5)

        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.arc(350, y2, 20, 0, 2 * Math.PI)
        ctx.fill()
    }
}


global.addEventListener("click", globalsym)

function globalsym() {
    globalanimate = true

}