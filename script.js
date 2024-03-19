function navigateToYouTubeIfEnter(event) {
    if (event.key == "Enter") {
        navigateToYouTube();
    }
}

function navigateToYouTube() {
    let query = document.getElementById("queryInputField").value;
    window.location.href = `https://www.youtube.com/results?search_query=${query}`;
}
