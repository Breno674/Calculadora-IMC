let height = document.getElementById('altura');
let weight = document.getElementById('peso');

// peso / (altura * altura)

function imc(){

    event.preventDefault()
    let altura = height;
    let peso = weight;

    console.log(altura.value);
    console.log(peso.value);

    var resultado = (weight.value / ((height.value * height.value))).toFixed(2);
    console.log(resultado);

    if(resultado < 18.5){
        document.querySelector('#abaixo18').classList.add('abaixo18active');

        document.getElementById('entre18').classList.remove('entre18active');
        document.getElementById('entre25').classList.remove('entre25active');
        document.getElementById('entre30').classList.remove('entre30active');
        document.getElementById('entre35').classList.remove('entre35active');
        document.getElementById('acima40').classList.remove('acima40active');

    }
    else if(resultado >=18.5 && resultado < 24.9){
        document.querySelector('#entre18').classList.add('entre18active');

        document.getElementById('abaixo18').classList.remove('abaixo18active');
        document.getElementById('entre25').classList.remove('entre25active');
        document.getElementById('entre30').classList.remove('entre30active');
        document.getElementById('entre35').classList.remove('entre35active');
        document.getElementById('acima40').classList.remove('acima40active');
    }
    else if(resultado >=25 && resultado <=29.9){
        document.querySelector('#entre25').classList.add('entre25active');

        document.getElementById('entre18').classList.remove('entre18active');
        document.getElementById('abaixo18').classList.remove('abaixo18active');
        document.getElementById('entre30').classList.remove('entre30active');
        document.getElementById('entre35').classList.remove('entre35active');
        document.getElementById('acima40').classList.remove('acima40active');
    }
    else if(resultado >=30 && resultado <=34.9){
        document.querySelector('#entre30').classList.add('entre30active');

        document.getElementById('entre18').classList.remove('entre18active');
        document.getElementById('abaixo18').classList.remove('abaixo18active');
        document.getElementById('entre35').classList.remove('entre35active');
        document.getElementById('entre25').classList.remove('entre25active');
        document.getElementById('acima40').classList.remove('acima40active');
    }
    else if(resultado >=35 && resultado <=39.9 ){
        document.querySelector('#entre35').classList.add('entre35active');

        document.getElementById('entre18').classList.remove('entre18active');
        document.getElementById('entre25').classList.remove('entre25active');
        document.getElementById('entre30').classList.remove('entre30active');
        document.getElementById('abaixo18').classList.remove('abaixo18active');
        document.getElementById('acima40').classList.remove('acima40active');
    }
    else if (resultado > 40){
        document.querySelector('#acima40').classList.add('acima40active');

        document.getElementById('entre18').classList.remove('entre18active');
        document.getElementById('entre25').classList.remove('entre25active');
        document.getElementById('entre30').classList.remove('entre30active');
        document.getElementById('entre35').classList.remove('entre35active');
        document.getElementById('abaixo18').classList.remove('abaixo18active');
    }

}

document.getElementById('calcular').addEventListener("click", function(){
    var resultado = (weight.value / ((height.value * height.value))).toFixed(2);

    if(resultado < 18.5){
        document.getElementById('hidden-resultado').classList.remove('resultado-hidden');
        document.getElementById('hidden-resultado').classList.add('resultado');

        result.innerHTML = `Seu IMC é ${resultado} . Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. 
        Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.`
    }
    else if(resultado >=18.5 && resultado < 24.9){
        document.getElementById('hidden-resultado').classList.remove('resultado-hidden');
        document.getElementById('hidden-resultado').classList.add('resultado');

        result.innerHTML = `Seu IMC é ${resultado} . Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada. `
    }
    else if(resultado >=25 && resultado <=29.9){
        document.getElementById('hidden-resultado').classList.remove('resultado-hidden');
        document.getElementById('hidden-resultado').classList.add('resultado');

        result.innerHTML = `Seu IMC é ${resultado} . Você está na faixa chamada de “sobrepeso”. Como sua medida de cintura está acima dos 90 centímetros, provavelmente você está acumulando um excesso de tecido adiposo no interior do abdômen. 
        Este tecido adiposo, chamado de gordura visceral, é o que mais acarreta riscos para a saúde. 
        Portanto você se situa em um grupo de maior probabilidade de complicações como diabetes, hipertensão arterial e hipercolesterolemia. `
    }
    else if(resultado >=30 && resultado <=34.9){
        document.getElementById('hidden-resultado').classList.remove('resultado-hidden');
        document.getElementById('hidden-resultado').classList.add('resultado');

        result.innerHTML = `Seu IMC é ${resultado} . Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. 
        Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista. `
    }
    else if(resultado >=35 && resultado <=39.9 ){
        document.getElementById('hidden-resultado').classList.remove('resultado-hidden');
        document.getElementById('hidden-resultado').classList.add('resultado');

        result.innerHTML = `Seu IMC é ${resultado} . Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde. `
    }
    else if (resultado > 40){
        document.getElementById('hidden-resultado').classList.remove('resultado-hidden');
        document.getElementById('hidden-resultado').classList.add('resultado');

        result.innerHTML = `Seu IMC é ${resultado} . Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente. `
    }

})





const form = document.getElementById('calcular');
const input1 = document.getElementById('altura');
const input2 = document.getElementById('peso');

form.addEventListener('click', function(event){
    if(input1.value === '' || input2.value === ''){
        event.preventDefault();
        alert('Por favor, preencha os campos.')
    }
});


var mode = document.getElementById('mode-icon');

mode.addEventListener('click', ()=>{
    var form = document.getElementById('calculadora');
    if(mode.classList.contains('fa-cloud-sun')){
        mode.classList.remove('fa-cloud-sun');
        mode.classList.add('fa-moon');
        form.classList.add('dark');
    }else{
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-cloud-sun');
        form.classList.remove('dark');
    }

})