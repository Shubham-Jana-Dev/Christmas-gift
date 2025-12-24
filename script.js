const audio = document.getElementById('xmas-audio');
const muteIcon = document.getElementById('mute-icon');
let isMuted = false;

// 26 Developer Fortunes
const fortunes = [
    "LEGENDARY: Your next project will go viral on GitHub!",
    "RARE: You will solve that one bug in 5 minutes.",
    "EPIC: Every console.log() will make sense today.",
    "UNCOMMON: Your coffee will stay warm while you code.",
    "MYSTIC: No merge conflicts in your next big repo.",
    "LEGENDARY: You will master a new framework by January!",
    "RARE: A 3-hour meeting will be replaced by a 1-sentence email.",
    "EPIC: A stakeholder will change their mind BEFORE you start coding.",
    "MYSTIC: Your LinkedIn inbox will only have real job offers.",
    "UNCOMMON: You will find the legacy code author and they'll be helpful.",
    "LEGENDARY: You will receive a 'No Changes Required' on your first PR.",
    "EPIC: You will center a div on your first try without tutorials.",
    "RARE: You successfully exited Vim on your first attempt today.",
    "MYSTIC: Your CSS works in Safari, Chrome, and Firefox perfectly.",
    "LEGENDARY: You will master the 'this' keyword in JS.",
    "UNCOMMON: You'll remember why you wrote that code 6 months ago.",
    "EPIC: You'll explain DSA to a rubber duck, and it will understand.",
    "RARE: You will solve a LeetCode Hard without solutions.",
    "MYSTIC: Your Big O notation will be O(1) in your dreams tonight.",
    "UNCOMMON: You will find a Python library that does exactly what you need.",
    "RARE: Your teacher will use your project as the Gold Standard.",
    "EPIC: You'll find a Stack Overflow answer that explains the WHY.",
    "MYSTIC: Local and production environments will finally match.",
    "UNCOMMON: Your code indentation will be PEP-8 perfect.",
    "LEGENDARY: Your project will get its first 100 Stars on GitHub!",
    "RARE: You will fix that bug you've been dreaming about."
];

function toggleMute() {
    isMuted = !isMuted;
    audio.muted = isMuted;
    muteIcon.innerText = isMuted ? "🔇" : "🔊";
}

function generateFortune() {
    const text = document.getElementById('fortune-text');
    text.innerText = "Consulting compiler...";
    setTimeout(() => {
        text.innerText = fortunes[Math.floor(Math.random() * fortunes.length)];
    }, 400);
}

function handleOpen() {
    const container = document.getElementById('gift-trigger');
    const main = document.getElementById('main-view');
    const surpriseInner = document.querySelector('#surprise-card > div');

    if (audio && !isMuted) {
        audio.loop = true;
        audio.volume = 0.4;
        audio.play().catch(() => console.log("Audio requires interaction"));
    }

    // 1. Trigger Box Open
    container.classList.add('is-open');

    // 2. Wait for box animation to finish before showing dashboard
    setTimeout(() => {
        main.style.opacity = "0";
        setTimeout(() => {
            main.style.display = "none";
            surpriseInner.classList.add('reveal-card');
        }, 400);
    }, 450);
}

function resetMagic() { location.reload(); }

// Snowflake Engine
setInterval(() => {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.innerHTML = ['❄', '⭐', '🎄', '❄', '⭐', '🎄'][Math.floor(Math.random()*4)];
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.fontSize = (Math.random() * 20 + 10) + "px";
    flake.style.animationDuration = (Math.random() * 3 + 4) + "s";
    flake.style.opacity = Math.random();
    document.body.appendChild(flake);
    setTimeout(() => flake.remove(), 6000);
}, 350);