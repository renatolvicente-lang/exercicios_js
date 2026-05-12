function op_duasvar(){
    alert("Funcionalidade em desenvolvimento...");

    let var1 = 1;
    let var2 = prompt("Digite um numero inteiro: ");
    let dif;
    let db_tp;
    let mult;

    if (var1 > var2){
        dif = var1 - var2;
    }else{
        dif = var2 - var1
    }

    db_tp = (var1 * 2) + (var2*  3);
    mult = var1 * var2;

    alert("A diferença entre os números é de: ${dif}/n O Dobro do primeiro numero mais o triplo do segundo número é: ${db_tp}/n A multiplicação dos dois número é de: ${multi}.");
    
}