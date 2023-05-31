

const calcular = document.getElementById("calcular")

const imc = () => {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado")

    if (nome !== "" && altura !== "" && peso !== "") {
        const resultImc = (peso / (altura * altura)).toFixed(2);

        let nivel = 0

        if (resultImc <= 18.5) {
            nivel = "abaixo do peso"
        }
        else if (resultImc <= 25) {
            nivel = "com o peso ideal. Parabéns!"
        } else if (resultImc <= 30) {
            nivel = "Vocês levemente acima do peso"
        } else if (resultImc <= 40) {
            nivel = "Você está com obesidade"
        }
        else {
            nivel = "Obesidade nível III, Cuide-se"
        }

        resultado.textContent = `${nome} seu IMC é ${resultImc} e você está ${nivel}`

    } else {
        resultado.textContent = "Preencha todos os campo!!"
    }

}

calcular.addEventListener("click", imc);