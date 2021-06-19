

function somaDosImpares(num1,num2){

    let soma = 0;


    if(num1 < num2){

        while(num1 <= num2){

            if(num1 % 2 != 0){
                soma+= num1;
            }

            num1++;
        }
    }else{

        while(num1 >= num2){

            if(num1 % 2 != 0){
                soma+= num1;
            }

            num1--;
        }

    }


    return soma;


}


let num1 = parseInt(prompt('Digite um valor para o começo do intervalo'));
let num2 = parseInt(prompt('Digite um valor para o fim do intervalo'));

alert(`A soma dos números ímpares do intervalo [${num1}, ${num2}] é:  ${somaDosImpares(num1, num2)}`);

