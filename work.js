let isListening = false;
const b = document.getElementById("z");
const t = document.getElementById("y");
const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-IN';

recognition.onresult = function (event) {
    let final = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
        const word = event.results[i][0].transcript;  
        if (event.results[i].isFinal) {
            final += word + '\n';
        }
    }
    t.value += final;
};

b.onclick = function () {
    if (!isListening) {
        recognition.start();
        t.value=''
        b.innerText = "Stop Listening";
        isListening = true;
    } else {
        recognition.stop();
        b.innerText = "Start Listening";
        isListening = false;
    }
};
