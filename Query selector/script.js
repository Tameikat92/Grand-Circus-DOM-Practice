function selectByClass() {
    const element = document.getElementsByClassName('paragraph1')[0];

    console.log("Selected by getElementsByClassName", + element.textContent );
}

function selectByQuerySelector(){
    const element = document.querySelector('.paragraph2');

    console.log("selected by querySelector:", + element.tagName)
}