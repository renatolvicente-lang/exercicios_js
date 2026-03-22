function vogal_cons(){
    let letra = prompt("Digite uma letra:");

    if(letra == "a" || letra == "A"){
        alert("Sua letra é uma vogal!!");
    }else if(letra == "e" || letra == "E"){
        alert("Sua letra é uma vogal!!");
    }else if(letra == "o" || letra == "O"){
        alert("Sua letra é uma vogal!!");
    }else if(letra == "u" || letra == "U"){
        alert("Sua letra é uma vogal!!");
    }else{
        if(isNaN(letra)){
            alert("Sua letra é uma consoante !!");
        }else{
            alert("Isso é um número!!");
        }
    }
}