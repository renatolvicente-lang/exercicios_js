function soma_numeros(){
    let soma = 0;
    let continuar = true;

    while(continuar){
        let numero = parseFloat(prompt("Digite um número para soma: "));
        if(!isNaN(numero)){
            soma += numero;
        }else{
            alert("Recomendo que coloque um numero!!")
        }
        
        continuar = confirm("Deseja Continuar a adicionar numeros? ");
    }
    alert("A soma dos numeros é : "  + soma);
}