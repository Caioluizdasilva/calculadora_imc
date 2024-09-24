const form = document.getElementById('form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do evento submit do JS, ou seja,
    // impede o recarregamento da página
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Limpa a mensagem de erro
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');

    // Verifica se o peso ou altura são negativos
    if (weight < 0 || height < 0) {
        errorMessage.textContent = "Por favor, insira valores positivos para peso e altura.";
        errorMessage.classList.remove('hidden');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (bmi < 18.5) {
            description = 'Cuidado! Você está abaixo do peso!';
        } else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal!";
            value.classList.remove('attention');
            value.classList.add('normal');
        } else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você está com sobrepeso!";
        } else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Você está com obesidade moderada!";
        } else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
        } else {
            description = "Cuidado! Você está com obesidade mórbida!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});
