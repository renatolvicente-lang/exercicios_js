function folha_pagamento(){
    let sl_bruto = parseFloat(prompt("Informe seu salário bruto: "));
    let inss;
    let taxa;
    if(sl_bruto <= 1000.00){
        taxa = 8;
        inss = sl_bruto*(taxa/100);
    }else if(sl_bruto >= 1000.01 && sl_bruto <= 1500.00){
        taxa = 8.5;
        inss = sl_bruto*(taxa/100);
    }else{
        taxa = 9;
        inss = sl_bruto*(taxa/100);
    }

    let desc_inss = sl_bruto - inss;

    alert("O salário informado foi de : R$"+sl_bruto+"\n Porém com uma taxa de "+ taxa +"% \n Será descontado : R$"+inss+"\n Ficando : R$"+desc_inss+".");
}