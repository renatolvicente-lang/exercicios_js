function salario_simples(){

    let nome = prompt("Digite o nome do funcionário: ");
    let sl_bruto = prompt("Informe seu salário bruto: ");
    let inss = sl_bruto*(8/100);
    let desc_inss = sl_bruto - inss;

    alert("Olá "+nome+"\n Seu salário bruto é de : R$"+sl_bruto+" Porém com menos R$"+inss+"\n Seu salário bruto ficará : R$"+desc_inss+"\n");
    
}