//Sin métodos
const isPalindrome = (texto) => {
        texto = texto.toLowerCase();
        let txtPalindrome = texto.length;
        for(let i = 0; i < txtPalindrome/2; i++){
          if(texto[i]!=texto[txtPalindrome-1-i]){
            return("No es un palindromo");
           } else {
            return("Sí es un palíndromo");
           }
         }        
       };
      
      isPalindrome("anitalavalatina");
    
    console.log (isPalindrome("arroz"));

    //Otra solución sin métodos
    const isPalindromo = (textString) => {
        let flag = true;
        let i = 0;
        let j = textString.length - 1;

        while(i != j)
        //Calcular diferencia
        let firstChar = textString.charCodeAt(i);
        let secondChar = textString.charCodeAt(j);
        if ((firstChar < 65 || firstChar > 90) && (firstChar < 97 || firstChar > 122)) {
            i++;
        } else if ((secondChar < 65 || secondChar > 90) && (secondChar < 97 || secondChar > 122)) {
            j--;
        } else {
            let res = firstChar - secondChar;
            res = res * Math.sign(res);
            //Comparación
            if(res != 32 && res != 0) {
                flag = false;
                break;
            }
            i++;
            j--;
        }
    }
    return `For '$(textString)': $(flag)`;

    console.log(isPalindromo('Anita LAVA.La tina'));