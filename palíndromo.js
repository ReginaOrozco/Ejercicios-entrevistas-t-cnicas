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