var i = 0;
var text = "S.i.G.A.";
var speed = 100;

function typewriterSiga() {
    if (i < text.length){
        document.getElementById("SIGA").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriterSiga, speed);
    }
}

typewriterSiga();

var j = 0;
var texto = "Sistema Integrado de Gerenciamento de Acesso";
var speed = 100;

function typewriterSistema() {
    if (j < texto.length){
        document.getElementById("Sistema").innerHTML += texto.charAt(j);
        j++;
        setTimeout(typewriterSistema, speed);
    }
}

typewriterSistema();