var visor = document.getElementById("visor");

function insValor(valor) {
  visor.value += valor;
}

function limparVisor() {
  visor.value = "";
}

function calcResultado() {
  try {
    if (visor.value.trim() === "") {
      visor.value = "";
      return;
    }

    const resultado = eval(visor.value);
    
    if (resultado === undefined || resultado === null || isNaN(resultado)) {
      visor.value = "";
    } else {
      visor.value = resultado;
    }
  } catch {
    alert("ERRO: Cálculo inválido.");
    visor.value = "";
  }
}


document.addEventListener("keydown", function (event) {
  const key = event.key;

  switch (true) {
    case key >= "0" && key <= "9":

    case ["+", "-", "*", "/"].includes(key):
      insValor(key);
      break;
    case key === "Enter" || key === "=":
      calcResultado();
      break;
    case key === "Backspace":
      visor.value = visor.value.slice(0, -1);
      break;
    case key === "Escape":
      limparVisor();
      break;
  }
});


