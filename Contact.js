document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const newMessage = { name, email, message };
    let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    messages.push(newMessage);
    localStorage.setItem("contactMessages", JSON.stringify(messages));

    alert("Message sent successfully!");
    this.reset();
});