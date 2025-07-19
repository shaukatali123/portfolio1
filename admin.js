function adminLogin() {
    const user = document.getElementById("adminUser").value;
    const pass = document.getElementById("adminPass").value;

    if (user === "shaukat65" && pass === "Shaukat@97") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("adminPanel").style.display = "flex";
        showSection("dashboard");
        loadMessages();
    } else {
        document.getElementById("loginError").innerText = "Invalid login!";
    }
}

function showSection(id) {
    const sections = document.getElementsByClassName("panel-section");
    for (let s of sections) s.style.display = "none";
    document.getElementById(id).style.display = "block";
}

function logout() {
    location.reload();
}

// Load messages from localStorage
function loadMessages() {
    const messageList = document.getElementById("messageList");
    const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];

    messageList.innerHTML = "";
    let editIndex = null;

    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
        const list = document.getElementById("messageList");
        list.innerHTML = "";

        messages.forEach((msg, index) => {
            const box = document.createElement("div");
            box.className = "message-box";
            box.innerHTML = `
      <strong>${msg.name}</strong> (${msg.email})<br>
      <p>${msg.message}</p>
      <button class="btn" onclick="editMessage(${index})">Update</button>
      <button class="btn" onclick="deleteMessage(${index})">Delete</button>
    `;
            list.appendChild(box);
        });
    }


    // Load messages on page load
    window.onload = loadMessages;


    if (messages.length === 0) {
        messageList.innerHTML = "<p>No messages found.</p>";
    } else {
        messages.forEach((msg, index) => {
            const div = document.createElement("div");
            div.innerHTML = `<b>${msg.name}</b> (${msg.email})<br>${msg.message}<hr>`;
            messageList.appendChild(div);
        });
    }
}