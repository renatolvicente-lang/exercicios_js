function ordem_decre(){
    let numeros = [];
    for(let i = 0; i < 3; i++){
        numeros[i] = parseInt(prompt("Digite o "+ i +"º numero de 4: "));
    }

    for(let j = 0; j < 3; j++){
        console.log("Agora os numeros em ordem decrescente");
        alert("Agora os numeros em ordem decrescente");
        
        console.log(numeros[j]);
        alert(numeros[j]);
    }
}