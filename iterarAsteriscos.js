//Con métodos
let limit = 20;
let array = [];
for(let i=0; i < limit; i++){
  array.push('*');
  console.log(array.join(' '));
};

//Sin métodos
const asterisco= " *";
let contador = " ";

function prueba (){
  for(let i=0; i < 20; i++){

    contador += asterisco;
    console.log(contador);
  };
};

prueba(asterisco);