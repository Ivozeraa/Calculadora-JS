var visor = document.getElementById("visor");

function insValor(valor) {
    visor.value += valor;
}

function limparVisor() {
    visor.value = null;
}

function calcResultado() {
    try {
        visor.value = eval(visor.value);
    } catch {
        alert("ERRO: Cálculo inválido.");
        visor.value = null;
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        insValor(key);
    }

    if (key === 'Enter' || key === "=") {
        calcResultado();
    }

    if (key === 'Backspace') {
        visor.value = visor.value.slice(0, -1);
    }

    if (key === 'Escape') {
        limparVisor();
    }
});
