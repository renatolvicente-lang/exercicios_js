function op_duasvar(){

    let var1 = prompt("Digite um numero inteiro: ");
    let var2 = prompt("Digite mais um numero inteiro: ");
    let dif;
    let db_tp;
    let mult;

   
    dif = var1 - var2;
    db_tp = (var1 * 2) + (var2*  3);
    mult = var1 * var2;

    alert("A diferença entre os números é de:"+ dif +"\n O Dobro do primeiro numero mais o triplo do segundo número é: "+ db_tp +"\n A multiplicação dos dois número é de: "+ mult +".");

}