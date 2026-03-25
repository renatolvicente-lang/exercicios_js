function picoleteria(){
    alert("Sabores Disponives: \n código      Sabor Preço\n a     Chocolate R$1,50\n b     Morango R$2,50\n c    Creme R$2,50\n d    Manga R$ 3,20\n e    Melancia R$3,40\n f   Vanilla ice R$3,00\n g    Céu Azul R$ 3,60\n h   Brownie R$4,00\n i   Hawaiano R$5,00 ");
    let escolha = prompt("Digite o sabor escolhido da tabela anterior: ");



    switch(escolha){
        case "a":
            alert("Seu pedido ficou R$1,50");
            console.log("Seu pedido ficou R$1,50");
            break;
        case "b" :
            alert("Seu pedido ficou em R$2,50");
            break;
        case "c":
            alert("Seu pedido ficou em R$2,50");
            break;
        case "d":            
            alert("Seu pedido ficou em R$3,20");
            break;
        case "e":
            alert("Seu pedido ficou em R$3,40");
            break;
        case "f":
            alert("Seu pedido ficou em R$3,00");
            break;
        case "g":
            alert("Seu pedido ficou em R$3,60");
            break;
        case "h":
            alert("Seu pedido ficou em R$4,00");
            break;
        case "i":
            alert("Seu pedido ficou em R$5,00");
            break;
    }
}