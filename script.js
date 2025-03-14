const messages = [
    "Chúc em ngủ ngon như một nàng công chúa! 🌙💕",
    "Hãy ngủ thật sâu để mơ thấy những điều ngọt ngào nhất nhen! 😴💖",
    "Anh gửi một nụ hôn qua gió, mong nó sẽ đến bên em trong giấc mơ! 😘🌹",
    "Trăng đã lên cao, đêm đã yên ắng, chỉ còn anh nhớ em! Ngủ ngon nha! 💫❤️",
    "Chúc em ngủ thật ngon và sáng mai thức dậy với nụ cười rạng rỡ! 😊💞"
];

function generateMessage() {
    const messageElement = document.getElementById("message");
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];

    createRoseEffect();
}

function createRoseEffect() {
    const roseContainer = document.getElementById("rose-container");
    for (let i = 0; i < 15; i++) {
        let rose = document.createElement("div");
        rose.classList.add("rose");
        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.animationDuration = (Math.random() * 2 + 3) + "s";
        rose.style.animationDelay = Math.random() * 3 + "s";
        roseContainer.appendChild(rose);
        
        setTimeout(() => {
            rose.remove();
        }, 10000);
    }
}