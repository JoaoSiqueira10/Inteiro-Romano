let inputroma = document.getElementById("arabicoRomano");
let inputarabic = document.getElementById("romanoArabico");
let bot = document.getElementById("converterBotao").addEventListener("click",escolheConversao);
let resultado = document.getElementById("result");


function escolheConversao(event){
    let valor = document.getElementById("inputText").value;
    event.preventDefault();
    if(inputroma.checked){
        console.log(valor)
        arabRoma(valor);
    }else{
        console.log("input arab")
        romaAra()
    }
}

function arabRoma(valorEntrada){
    if(valorEntrada < 0 || valorEntrada > 3999){
        alert("Valor invalido, precisa estar entre 0 e 3999");
        return 
    }
    
    let algarismosArabicos = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let algarismosRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let arr = [];

    for(let i = 0; i < algarismosArabicos.length;i++){
        while(valorEntrada >= algarismosArabicos[i]){
            console.log('entrou no while')
            valorEntrada = valorEntrada - algarismosArabicos[i];
            resultado.innerText = algarismosRomanos[i];
            arr.push(algarismosRomanos[i])
            console.log(valorEntrada);
            console.log('array', arr)
        }
    }

    resultado.innerText = arr.join('');

}

function romaAra(){
    if(valor==0){
        valor = 1;
    }

}

