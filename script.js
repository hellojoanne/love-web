const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", function() {
    document.body.innerHTML = "<h1>耶！💖 我就知道你會答應！🥰</h1>";
});

noBtn.addEventListener("mouseover", function() {
    let newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    let newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

setInterval(createHeart, 300);
