const reasons = [
    "You have the most beautiful smile.",
    "I love the way you laugh at my terrible jokes.",
    "You always know how to make me feel better.",
    "Your kindness inspires me every day.",
    "You're the most amazing person I know.",
    "I love spending every moment with you.",
    "You challenge me to be a better person.",
    "Your adventurous spirit makes life so exciting.",
    "You are my best friend and my greatest love.",
    "I like every moment yenye huwa unanichezea.Actually sometimes i just remember venye ulikuwa unanichezea and i just find myself smiling peke yangu tu."
];

const reasonButton = document.getElementById('reason-button');
const reasonDisplay = document.getElementById('reason-display');

// New: Get the audio elements for both songs
const birthdaySong = document.getElementById('birthday-song');
const reasonsSong = document.getElementById('reasons-song');

// Event listener for the "Reasons I Love You" button
reasonButton.addEventListener('click', () => {
    // 1. Get a random reason from the array
    const randomIndex = Math.floor(Math.random() * reasons.length);
    const randomReason = reasons[randomIndex];
    reasonDisplay.textContent = randomReason;

    // 2. Pause the first song and start the second song
    birthdaySong.pause();
    birthdaySong.currentTime = 0; // Rewind the song
    
    reasonsSong.play().catch(error => {
        console.error("Audio play failed:", error);
    });
});

// New: Code for the reveal button and song
const revealButton = document.getElementById('reveal-button');
const contentContainer = document.querySelector('.content-container');
const revealButtonContainer = document.querySelector('.reveal-button-container');

revealButton.addEventListener('click', () => {
    // 1. Play the birthday song immediately
    birthdaySong.play().catch(error => {
        console.error("Audio play failed:", error);
    });

    // 2. Add a class to make the content visible
    contentContainer.classList.add('revealed');

    // 3. Animate the reveal button container away
    revealButtonContainer.style.opacity = '0';
    
    // 4. Hide the button container completely after the animation
    setTimeout(() => {
        revealButtonContainer.style.visibility = 'hidden';
    }, 1500);
});
