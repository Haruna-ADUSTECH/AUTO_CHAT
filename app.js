function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const fileInput = document.getElementById('file-input');
    const chatMessages = document.getElementById('chat-messages');

    const messageText = messageInput.value;
    const file = fileInput.files[0];

    // If there is a message, display it
    if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message text-message';
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);
    }

    // If there is a file, display it
    if (file) {
        const fileElement = document.createElement('div');
        fileElement.className = 'message file-message';
        
        // Create a file URL and set it based on the file type
        const fileUrl = URL.createObjectURL(file);

        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = fileUrl;
            img.style.maxWidth = '100%';
            img.style.borderRadius = '8px';
            fileElement.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            const video = document.createElement('video');
            video.src = fileUrl;
            video.controls = true;
            video.style.maxWidth = '100%';
            video.style.borderRadius = '8px';
            fileElement.appendChild(video);
        } else if (file.type.startsWith('audio/')) {
            const audio = document.createElement('audio');
            audio.src = fileUrl;
            audio.controls = true;
            fileElement.appendChild(audio);
        } else {
            const fileLink = document.createElement('a');
            fileLink.href = fileUrl;
            fileLink.textContent = `Download ${file.name}`;
            fileLink.download = file.name;
            fileElement.appendChild(fileLink);
        }
        chatMessages.appendChild(fileElement);
    }

    // Clear input fields
    messageInput.value = '';
    fileInput.value = '';

    // Scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
