function ord_duble(){

    let nums = [];

    for(let i = 0; i < 2; i++){
        nums[i]= parseInt(prompt("Digite o numero para a posição "+ i +": "));
    }
   
    nums.sort((a, b) => a-b);

    alert("Os números em ordem crescente são: "+ nums +".");

    console.log(nums);
}