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
let localanimate = false
let t = 0

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
            y -= 5
            y2 -= 5

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

    if (localanimate) {

        t++

        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, cnv.width, cnv.height)

        ctx.lineWidth = 5
        ctx.strokeStyle = "rgb(0, 0, 255)"
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(cnv.width, y - 50)
        ctx.stroke()

        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.arc(350, y2 - 27, 20, 0, 2 * Math.PI)
        ctx.fill()

        if (t >= 1800) {
            ctx.lineWidth = 5
            ctx.strokeStyle = "gray"
            ctx.beginPath()
            ctx.moveTo(0, y-30)
            ctx.lineTo(300, y - 60)
            ctx.stroke()

            ctx.lineWidth = 5
            ctx.strokeStyle = "gray"
            ctx.beginPath()
            ctx.moveTo(0, y-60)
            ctx.lineTo(300, y - 90)
            ctx.stroke()
        }

    }

    requestAnimationFrame(animate)
}


global.addEventListener("click", globalsym)
local.addEventListener("click", localsym)

function globalsym() {
    globalanimate = true

}

function localsym() {
    localanimate = true
}