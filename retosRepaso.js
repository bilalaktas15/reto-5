

// let numeroUno = 21;
// let  numeroDos = 12;

// let valor = numeroUno + numeroDos;



// console.log(valor); 


// ///////////////////////////

// let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus nuncquam, nec dictum erat feugiat vitae.";

// let num_caracteres = texto.length;

// console.log("El numero de caracteres es:", num_caracteres);

// ///////////////////////////////////////

// let texto1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus nuncquam, nec dictum erat feugiat vitae.";

// let texto_sin_espacios = texto1.replace(/\s/g, "");

// console.log(texto_sin_espacios);

// /////////////////////////////////////


// let texto2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus nuncquam, nec dictum erat feugiat vitae.";

// let producto = 6 * 5; 

// let resultado = producto > 30 && texto2.includes("amet");

// console.log(resultado); 

// /////////////////////////////////////////


// let precio = 2500; 
// let esEnEspaña = true;

// let importeBruto;

// if (esEnEspaña) { 
//   if (precio >= 2000) {
//     importeBruto = precio * 1.16;
//   } else {
//     importeBruto = precio * 1.10;
//   }
// } else { 
//   importeBruto = precio * 1.10 * 1.16;
// }

// console.log("El importe bruto es:", importeBruto);






// /////////////////////////////////////////


// let suma = 0;

// for (let i = 1; i <= 100; i++) {
//   suma += i * i;
// }

// console.log("La suma de los cuadrados es:", suma);





// //////////////////////////////////////////////



// let array = [2, 10, 45, 33, 22, 14];
// let arrayMultiplicado = [];

// for (let elemento of array) {
//   arrayMultiplicado.push(elemento * 2);
// }

// console.log("El nuevo array es:", arrayMultiplicado);



// ///////////////////////////////////////////////

// let ovejas = [
//     { nombre: "Carlos", color: "Blanco" },
//     { nombre: "Juanita", color: "Rojo" },
//     { nombre: "Fernando", color: "Rojo" },
//     { nombre: "Fabio", color: "Verde" },
//     { nombre: "Ana", color: "Rojo" },
//     { nombre: "Pepe", color: "Rojo" },
//     { nombre: "Neomi", color: "Rojo" },
//     { nombre: "Maria", color: "Rojo" },
//   ];
  
//   function buscarOvejasRojasConNa(nombre, color) {
//     let nombreMin = nombre.toLowerCase();
//     return color.toLowerCase() === "rojo" && nombreMin.includes("n") && nombreMin.includes("a");
//   }
  
//   let ovejasFiltradas = ovejas.filter((oveja) => buscarOvejasRojasConNa(oveja.nombre, oveja.color));
  
//   console.log("Las ovejas que cumplen con las condiciones son:", ovejasFiltradas);
  


  ////////////////////////////////////////



// let libros = [
//   "Ready player one",
//   "El nombre del viento",
//   "El temor de un hombre sabio",
//   "Cien años de soledad",
//   "Origen"
// ];

// let tituloMasLargo = "";
// for (let i = 0; i < libros.length; i++) {
//   if (libros[i].length > tituloMasLargo.length) {
//     tituloMasLargo = libros[i];
//   }
//   console.log(libros[i] + " [" + libros[i].length + "]");
// }

// console.log("<b>" + tituloMasLargo + "</b> [" + tituloMasLargo.length + "]");






let libros = [
  "Ready player one",
  "El nombre del viento",
  "El temor de un hombre sabio",
  "Cien años de soledad",
  "Origen"
];

let tituloMasLargo = "";
for (let i = 0; i < libros.length; i++) {
  let tituloSinEspacios = libros[i].replace(/\s/g, ''); // Elimina los espacios
  if (tituloSinEspacios.length > tituloMasLargo.length) {
    tituloMasLargo = tituloSinEspacios;
  }
  console.log(libros[i] + " [" + tituloSinEspacios.length + "]");
}

console.log("<b>" + tituloMasLargo + "</b> [" + tituloMasLargo.replace(/\s/g, '').length + "]");
