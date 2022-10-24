//function extractor() {
const fileSelector = document.getElementById('output');
var phishing = new Set();

fileSelector.addEventListener('change', (event) => {
  const filelists = event.target.files;
  const content = document.querySelector('.content');
  //console.log(files);
  for (const file of filelists) {
    var reader = new FileReader()
    reader.addEventListener("load", () => {
      // this will then display a text file
      //var lines = reader.split('\n');
      //content.innerText = reader.result;
      var result = reader.result;
      var lines = result.split('\n');
      for (var i = 0; i < lines.length; i++) {
        phishing.add(lines[i])
      }
      detector();
    }, false);

    if (file) {
      reader.readAsText(file);
    }
  }
});

//Extract URLs
let email = prompt("Enter your text: ");
var urls = extractURLs(email);
const url = document.getElementById("urls");
url.innerText = urls;

function extractURLs(text) {
    let urlRegex = /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/g;
    return text.match(urlRegex);
}

function detector() {
  for(u of urls) {
    if (phishing.has(u)) {
        console.log("Danger!!")
        document.getElementById("detection").innerText = "Danger!! -> " + u
    } else {
      console.log("Go ahead!")
      document.getElementById("detection").innerText = "Go ahead! -> " + u
    }
  }
}