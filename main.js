window.onload = () => {
    document.body.classList.remove("container");

    // Ensure message is shown
    let message = document.createElement("div");
    message.className = "valentine-message";
    message.innerText = "Happy Valentine's Day Naushu";
    document.body.appendChild(message);
};
