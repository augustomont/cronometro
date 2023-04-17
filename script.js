let cronometro = document.getElementById("cronometro");
let iniciar = document.getElementById("iniciar");
let pausar = document.getElementById("pausar");
let zerar = document.getElementById("zerar");
let resultado = document.getElementById("resultado");
let milissegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function iniciarCronometro() {
	intervalo = setInterval(function() {
		milissegundos++;
		if (milissegundos == 100) {
			milissegundos = 0;
			segundos++;
			if (segundos == 60) {
				segundos = 0;
				minutos++;
				if (minutos == 60) {
					minutos = 0;
					horas++;
				}
			}
		}
		cronometro.innerHTML = formatarTempo(horas) + ":" + formatarTempo(minutos) + ":" + formatarTempo(segundos) + ":" + formatarMilissegundos(milissegundos);
	}, 10);
}

function pausarCronometro() {
	clearInterval(intervalo);
}

function zerarCronometro() {
	clearInterval(intervalo);
	cronometro.innerHTML = "00:00:00";
	resultado.innerHTML = "";
	segundos = 0;
	minutos = 0;
	horas = 0;
}

function formatarTempo(tempo) {
	if (tempo < 10) {
		tempo = "0" + tempo;
	}
	return tempo;
}

function formatarMilissegundos(tempo) {
	if (tempo < 10) {
		tempo = "0" + tempo;
	}
	return tempo;
}