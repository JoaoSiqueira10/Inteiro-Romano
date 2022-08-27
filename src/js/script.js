let inputroma = document.getElementById("arabicoRomano");
let inputarabic = document.getElementById("romanoArabico");
let bot = document.getElementById("converterBotao").addEventListener("click",escolheConversao);
let resultado = document.getElementById("result");

function escolheConversao(event){
    let valor = document.getElementById("inputText").value;
    event.preventDefault();
    if(inputroma.checked){
        arabRoma(valor);
    }else{
        romaAra(valor);
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
            valorEntrada = valorEntrada - algarismosArabicos[i];
            resultado.innerText = algarismosRomanos[i];
            arr.push(algarismosRomanos[i])
        }
    }

    resultado.innerText = arr.join('');
}

function romaAra(valorEntrada){
    let numInteiro = 0;
    let numRomano = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    
    valorEntrada = valorEntrada.toUpperCase();
   
    // deteccao de erros
    if(valorEntrada.split("V").length > 2 || valorEntrada.split("L").length > 2 || valorEntrada.split("D").length > 2){
        alert("Algarismo Romano invalido: Possui 2 ou mais Vs, Ls ou Ds");
        return 
    }

    if(valorEntrada == "IVXLCDM"){
        alert("Algarismo Romano invalido: Formato nao existe");
        return
    }

    if(valorEntrada.includes('IIII') || valorEntrada.includes('XXXX') || valorEntrada.includes('CCCC') || valorEntrada.includes('MMMM')){
        alert("Algarismo Romano invalido: Possui 4 ou mais Is, Xs ou Cs em sequencia");
        return
    }
    
    if(valorEntrada.includes('IL') || valorEntrada.includes('IC') || valorEntrada.includes('ID') || valorEntrada.includes('IM') || valorEntrada.includes('XD') || valorEntrada.includes('XM')){
        alert("Algarismo Romano invalido: Possui I antes de L, C, D ou M e/ou X antes de D ou M");
        return
    }
  
    for(let i = 2;i < valorEntrada.length; i++){
        if(valorEntrada.at(i) == valorEntrada.at(i - 2)  && valorEntrada.at(i - 1) == valorEntrada.at(i + 1)){
            alert("Algarismo Romano invalido: Posicionamento errado");
            return 
        }
    }

    for(let i = 1; i < valorEntrada.length; i++ ){
        if(numRomano[valorEntrada.at(i)] > numRomano[valorEntrada.at(i - 2)]){
            alert("Algarismo Romano invalido: Posicionamento errado");
            return
        }

        if((numRomano[valorEntrada.at(i - 1)]/numRomano[valorEntrada.at(i)] >= 0.1)){
            if(valorEntrada.at(i - 1) != 'I' && valorEntrada.at(i-1) != 'X' && valorEntrada.at(i - 1) != 'C'){
                alert("Algarismo Romano invalido: Somente I, X e C que podem preceder um algarismo de maior valor");
                return 
            }
            
        }else{
            alert("Algarismo Romano invalido: Somente I, X e C que podem preceder um algarismo de maior valor");
            return 
        }
    }

    // processamento do resultado
    for(let i = 0; i < valorEntrada.length; i++){
        
        if (i > 0 && numRomano[valorEntrada.at(i)] > numRomano[valorEntrada.at(i - 1)]) {
            numInteiro += numRomano[valorEntrada.at(i)] - 2 * numRomano[valorEntrada.at(i - 1)];
        }
        else {
            numInteiro += numRomano[valorEntrada.at(i)];
        }
        
        
    }

    // resultado   
    resultado.innerText = numInteiro;
}

