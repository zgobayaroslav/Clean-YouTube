function navigateToYouTubeIfEnter(event) {
    if (event.key == "Enter") {
        navigateToYouTube();
    }
}

function navigateToYouTube() {
    let query = document.getElementById("queryInputField").value;
    if (query.toString().length == 0) {
        // Navigate to rickroll
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    } else {
        window.location.href = `https://www.youtube.com/results?search_query=${query}`;
    }
}
