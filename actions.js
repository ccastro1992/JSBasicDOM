btn_calcular = document.querySelector('#btn_calcular');
my_form = document.querySelector('#myForm');

function btnCalcularClick(event){
    console.log(event);
    event.preventDefault();
    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');
    const result = document.querySelector('#result');

    const suma_input = parseInt(input1.value) + parseInt(input2.value);
    console.log(suma_input);

    result.innerText = "Resultado: " + suma_input    
}

my_form.addEventListener('submit', btnCalcularClick);