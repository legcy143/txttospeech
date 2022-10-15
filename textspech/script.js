let txt = document.getElementById("txt")
let startbtn = document.getElementById("startbtn")
let pausebtn = document.getElementById("pausebtn")
let resumebtn = document.getElementById("resumebtn")
let stopbtn = document.getElementById("stopbtn")
let speed = document.getElementById("speed")
let speech = new SpeechSynthesisUtterance()

txt.value = ` enter your paragraph story to listen.`

speed.addEventListener("input", (e) => {
    stopspeech()
    playtxt(txt.value)
})

startbtn.addEventListener("click", () => {
    if (!speechSynthesis.speaking) {
        playtxt(txt.value)
    }
    stopbtn.style.display = "block"
    startbtn.style.display = "none"
    pausebtn.style.display = "block"
})
pausebtn.addEventListener("click", () => {
    pausespeech()
    // pausebtn.style.transform = "scale(0)"
    resumebtn.style.display = "block"
    pausebtn.style.display = "none"
})
resumebtn.addEventListener("click", () => {
    resumespeech()
    resumebtn.style.display = "none"
    pausebtn.style.display = "block"
})
stopbtn.addEventListener("click", () => {
    stopspeech()
})
function playtxt(txt) {
    speech.text = txt
    speech.rate = speed.value || 1
    // speech.voice = window.speechSynthesis.getVoices([1])
    window.speechSynthesis.speak(speech)
    speech.addEventListener("end", () => {
        startbtn.style.display = "block"
        pausebtn.style.display = "none"
        resumebtn.style.display = "none"
    })
}
function pausespeech() {
    if (speechSynthesis.speaking) {
        speechSynthesis.pause()
    }
}
function resumespeech() {
    speechSynthesis.resume()
}
function stopspeech() {
    resumespeech()
    speechSynthesis.cancel()
    startbtn.style.display = "block"
    resumebtn.style.display = "none"
    pausebtn.style.display = "none"
}

window.onclose = function closeall() {
    (stopspeech())
}