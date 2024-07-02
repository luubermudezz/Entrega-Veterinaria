function setLightTheme() {
    document.body.classList.remove('dark-theme');
    document.getElementById('lightButton').disabled = true;
    document.getElementById('darkButton').disabled = false;
}

function setDarkTheme() {
    document.body.classList.add('dark-theme');
    document.getElementById('darkButton').disabled = true;
    document.getElementById('lightButton').disabled = false;
}