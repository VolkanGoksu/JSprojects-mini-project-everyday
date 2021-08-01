const textId = document.getElementById('text')
const speedId = document.getElementById('speed')
const text = 'Javascript'
let id = 1
let speed = 300 / speedId.value

showText()

function showText() {
    textId.innerText = text.slice(0, id)
    id++
    setTimeout(showText, speed)
    setInterval(()=>window.location.reload(false),5000);
}
speedId.addEventListener('input', (e) => speed = 300 / e.target.value)  