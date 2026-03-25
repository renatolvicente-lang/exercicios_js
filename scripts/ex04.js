function ordem_decre(){
    let numeros = [];
    for(let i = 0; i < 4; i++){
        numeros[i] = parseInt(prompt("Digite o "+ i +"º numero de 4: "));
    }

    numeros.sort((a, b) => b-a);

    alert(numeros);
}