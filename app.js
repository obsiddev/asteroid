//
// asteroid by backslash.
//

//functions

//visited w3schools, took cookie functions from there - thanks
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function returnCookie(name) {
    let val = getCookie(name)
    if (val != "") {
        return val;
    }
    else {
        return ""
    }
}

function tts() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.getElementById("maineditor").innerText;
    var voices = window.speechSynthesis.getVoices();
    msg.lang = "de-AT"
    window.speechSynthesis.speak(msg);
}

function clearfile() {
    document.getElementById("maineditor").innerHTML = ""
}

function download() {
    var content = document.getElementById("maineditor").innerText;
    
    var blob = new Blob([content], { type: "text/plain" });
    var a = document.createElement("a");
    a.download = document.getElementById("filename").value + ".txt";
    a.href = window.URL.createObjectURL(blob);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("maineditor").innerHTML);
}

//not working
function paste() {
    document.getElementById("maineditor").innerHTML = navigator.clipboard.read;
}

//site technic

window.onbeforeunload = function(){
    setCookie("mainContent", document.getElementById("maineditor").innerText)
}

window.onload = function() {
    document.getElementById("maineditor").innerText = returnCookie("mainContent")
}