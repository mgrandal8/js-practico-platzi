const input1=document.querySelector('#calculo1')
const input2= document.querySelector('#calculo2')
const boton= document.querySelector('#btnCalcular')
const pResult= document.querySelector('#result')
const form=document.querySelector('#form');
function btnOnClick(event) {
    console.log(event);
    event.preventDefault()
    const sumaInputs= (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText= "Resultado:" + sumaInputs;
}

form.addEventListener('mouseover', btnOnClick)

 