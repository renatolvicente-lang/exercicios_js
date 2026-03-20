function fin_anual(){
    let ganho_mes = 0;
    let gasto_mes = 0; 
    

    for(let i = 1; i < 12; i++){
        let ganho_ano;
        let gasto_ano;
        
        ganho_mes = parseFloat(prompt("Ganho do mês " + i + " :"));
        gasto_mes = parseFloat(prompt("Gastos do mês " + i + ":"));

        ganho_ano += ganho_mes;
        gasto_ano += gasto_mes;
    }

    alert("O ganho anual foi de : R$" + ganho_ano);
    alert("O gasto anual foi de : R$" + gasto_ano);
}