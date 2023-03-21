

  // function crearVector(n, m) {
  //     let vector = [];
    
  //   for (let i = 0; i < n; i++) {
  //      vector.push(Math.floor(Math.random() * (m + 1)));
  //    }
    
  //   return vector;
  //  }
  
  // let vector = crearVector(5, 10);
  //  console.log(vector); 
  

////////////////////////////////////////////

//  function sumaVector(v1, v2) {
//     if (v1.length !== v2.length) {
//       return;
//     }
   
//     let suma = [];
   
//     for (let i = 0; i < v1.length; i++) {
//       suma.push(v1[i] + v2[i]);
//     }
   
//     return suma;
//   }
 



//  let v1 = [1, 2, 3];
//  let v2 = [4, 5, 6];

// let suma = sumaVector(v1, v2);
//  console.log(suma); 

//////////////////////////////////////////////////////



// function productoNumeroVector(n, v) {
//    let resultado = [];
//    for (let i = 0; i < v.length; i++) {
//      resultado.push(n * v[i]);
//    }
//    return resultado;
//  }
 

//  let vector = [1, 2, 3, 4];
//  let resultado = productoNumeroVector(2, vector);
//  console.log(resultado); 
 

///////////////////////////////////////////



//  function restaVector(v1, v2) {
//    if (v1.length !== v2.length) {
     
//      return ;
//    }
//    let resultado = [];
//    for (let i = 0; i < v1.length; i++) {
//      resultado.push(v1[i] - v2[i]);
//    }
//    return resultado;
//  }
 

//  let v1 = [1, 2, 3];
//  let v2 = [4, 5, 6];
//  let resultado = restaVector(v1, v2);
//  console.log(resultado);
 

////////////////////////////////////

//  function productoVector(v1, v2) {
//     if (v1.length !== v2.length) {
     
//      return ;
//     }
//     let resultado = [];
//     for (let i = 0; i < v1.length; i++) {
//       resultado.push(v1[i] * v2[i]);
//    }
//     return resultado;
//   }
 
 
//   let v1 = [1, 2, 3];
//   let v2 = [4, 5, 6];
//   let resultado = productoVector(v1, v2);
//   console.log(resultado);
 

////////////////////////////////////////////////

//reto 4



// function sumaVector(v1, v2) {
//    let resultado = [];
//    v1.forEach(function(valor, indice) {
//      resultado.push(valor + v2[indice]);
//    });
//    return resultado;
//  }
 
 
//  let v1 = [1, 2, 3];
//  let v2 = [4, 5, 6];
//  let resultado = sumaVector(v1, v2);
//  console.log(resultado);
 


 ////////////////////////////////




//  function sumaVector(v1, v2) {
//    let resultado = v1.map(function(valor, indice) {
//      return valor + v2[indice];
//    });
//    return resultado;
//  }
 
 
//  let v1 = [1, 2, 3];
//  let v2 = [4, 5, 6];
//  let resultado = sumaVector(v1, v2);
//  console.log(resultado);
 



///////////////////////////////////////////


// function filtrarPares(v) {
//    let resultado = v.filter(function(valor) {
//      return valor % 2 === 0;
//    });
//    return resultado;
//  }
 

//  let v = [1, 2, 3, 4, 5, 6];
//  let resultado = filtrarPares(v);
//  console.log(resultado);
 


//////////////////////////////////////////////////



// function sumatorio(v) {
//    let resultado = v.reduce(function(acumulador, valor) {
//      return acumulador + valor;
//    }, 0);
//    return resultado;
//  }
 
 
//  let v = [1, 2, 3, 4, 5, 6];
//  let resultado = sumatorio(v);
//  console.log(resultado);
 