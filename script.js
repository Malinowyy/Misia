const messages = [
    "Na pewno?",
    "Jak to ):",
    "No weeeeź",
    "Nina?",
    "Ninaaaa.....",
    "Jeśli to zrobisz będzie mi bardzo przykro ): ):",
    "Ostatnia szansa, bo powiem misiuni...",
    "A za jogurtową milke?",
    "Okej, czyli nie...",
    "NO ZGÓDŹ SIEEEEEEEE PROSZEEE"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "ezkochamcie.html";
}
