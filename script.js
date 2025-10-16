const userName = document.getElementById('nome')
const height = document.getElementById('altura')
const weight = document.getElementById('peso')
const button = document.getElementById('calcular')
const resultTotal = document.querySelector('.result')

function valorFinal() {
 if (userName.value !== '' && height.value !== '' && weight.value !== '')  {
  
    const imc = (weight.value / (height.value * height.value)).toFixed(2)

    if(imc < 16) {
        resultTotal.innerHTML = `Olá, ${userName.value}, seu iMC é de ${imc} e você está abaixo do peso.`
    } else if( imc >= 16 && imc < 17) {
        resultTotal.innerHTML = `Olá, ${userName.value}, seu iMC é de ${imc} e você está com magreza moderada`
    } else if(imc >= 17 && imc < 18.5) {
        resultTotal.innerHTML = `Olá, ${userName.value}, seu iMC é de ${imc} e você está com magreza leve`
    }
    else if(imc >= 18.5 && imc < 25) {
        resultTotal.innerHTML = `Olá, ${userName.value}, seu iMC é de ${imc} e você está saudável`
    }
    else if(imc >= 25 && imc < 30) {
        resultTotal.innerHTML = `Olá, ${userName.value}, seu iMC é de ${imc} e você está sobrepeso`
    }
    else if(imc >= 30 && imc < 35) {
        resultTotal.innerHTML = `Olá, ${userName.value}, seu iMC é de ${imc} e você está com obesidade grau |`
    }
    else if(imc >= 35 && imc < 40) {
        resultTotal.innerHTML = `Olá, ${userName.value}, seu iMC é de ${imc} e você está com obesidade grau ||`
    }
    else{
        resultTotal.innerHTML = `Olá, ${userName.value}, seu iMC é de ${imc} e você está com obesidade grau |||`
    }
  } else {
    resultTotal.innerHTML = 'Preencha todos os campos!'
    }
}

button.addEventListener('click', valorFinal)