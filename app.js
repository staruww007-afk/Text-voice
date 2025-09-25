let text = document.getElementById('text');
let til = document.getElementById('til');

function Voice(){
    responsiveVoice.speak(`${text.value}`, `${til.value} Female`)
}

