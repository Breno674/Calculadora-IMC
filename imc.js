// Constantes e elementos do DOM
const form = document.getElementById('calculadora');
const heightInput = document.getElementById('altura');
const weightInput = document.getElementById('peso');
const calculateButton = document.getElementById('calcular');
const modeButton = document.getElementById('mode-icon');
const resultDiv = document.getElementById('hidden-resultado');
const resultText = document.getElementById('result');

// Constantes para classificação do IMC
const IMC_CLASSIFICATIONS = {
    ABAIXO_PESO: { max: 18.5, message: 'Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.' },
    NORMAL: { min: 18.5, max: 24.9, message: 'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.' },
    SOBREPESO: { min: 25, max: 29.9, message: 'Você está na faixa chamada de "sobrepeso". Como sua medida de cintura está acima dos 90 centímetros, provavelmente você está acumulando um excesso de tecido adiposo no interior do abdômen. Este tecido adiposo, chamado de gordura visceral, é o que mais acarreta riscos para a saúde. Portanto você se situa em um grupo de maior probabilidade de complicações como diabetes, hipertensão arterial e hipercolesterolemia.' },
    OBESIDADE_I: { min: 30, max: 34.9, message: 'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.' },
    OBESIDADE_II: { min: 35, max: 39.9, message: 'Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.' },
    OBESIDADE_III: { min: 40, message: 'Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.' }
};

// Função para calcular o IMC
function calcularIMC(altura, peso) {
    return (peso / (altura * altura)).toFixed(2);
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return { classification: 'ABAIXO_PESO', message: IMC_CLASSIFICATIONS.ABAIXO_PESO.message };
    } else if (imc >= 18.5 && imc < 25) {
        return { classification: 'NORMAL', message: IMC_CLASSIFICATIONS.NORMAL.message };
    } else if (imc >= 25 && imc < 30) {
        return { classification: 'SOBREPESO', message: IMC_CLASSIFICATIONS.SOBREPESO.message };
    } else if (imc >= 30 && imc < 35) {
        return { classification: 'OBESIDADE_I', message: IMC_CLASSIFICATIONS.OBESIDADE_I.message };
    } else if (imc >= 35 && imc < 40) {
        return { classification: 'OBESIDADE_II', message: IMC_CLASSIFICATIONS.OBESIDADE_II.message };
    } else {
        return { classification: 'OBESIDADE_III', message: IMC_CLASSIFICATIONS.OBESIDADE_III.message };
    }
}

// Função para atualizar a interface
function atualizarInterface(imc, { classification, message }) {
    // Remove todas as classes ativas
    document.querySelectorAll('[id^="abaixo18"], [id^="entre"]').forEach(el => {
        el.classList.remove(el.id + 'active');
    });

    // Mapeia a classificação para o ID do elemento
    const classificationToId = {
        'ABAIXO_PESO': 'abaixo18',
        'NORMAL': 'entre18',
        'SOBREPESO': 'entre25',
        'OBESIDADE_I': 'entre30',
        'OBESIDADE_II': 'entre35',
        'OBESIDADE_III': 'acima40'
    };

    // Adiciona a classe ativa correspondente
    const elementId = classificationToId[classification];
    if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.add(elementId + 'active');
        }
    }

    // Atualiza o resultado
    resultDiv.classList.remove('resultado-hidden');
    resultDiv.classList.add('resultado');
    resultText.innerHTML = `Seu IMC é ${imc}. ${message}`;
}

// Event Listeners
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const altura = parseFloat(heightInput.value);
    const peso = parseFloat(weightInput.value);

    if (!altura || !peso) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    if (altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos maiores que zero.');
        return;
    }

    const imc = calcularIMC(altura, peso);
    const classification = classificarIMC(imc);
    atualizarInterface(imc, classification);
});

// Tema escuro/claro
modeButton.addEventListener('click', () => {
    const form = document.getElementById('calculadora');
    const isDark = modeButton.classList.contains('fa-cloud-sun');
    
    modeButton.classList.toggle('fa-cloud-sun', !isDark);
    modeButton.classList.toggle('fa-moon', isDark);
    form.classList.toggle('dark', isDark);
});
