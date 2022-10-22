let email = prompt("Enter your text: ");
let urls = extractURLs(email);
document.getElementById("urls").innerHTML = urls;

function extractURLs(text) {
    let urlRegex = /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/g;
    return text.match(urlRegex);
}