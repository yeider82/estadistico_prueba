const lista = [1,2,3,4,1,2,3,1,2,3,1,41,5,15,1,5,1,2,42,2,1,1,2,3,4,2,1,1,1];

const lista_cuenta = {};

lista.map(
    function(elemento){
        if (lista_cuenta[elemento]){
            lista_cuenta[elemento] = lista_cuenta[elemento] + 1;
            //lsita_cuenta[elemento] += 1;
        }
        else {
            lista_cuenta[elemento] = 1;
        }
    }
);

const lista_array = Object.entries(lista_cuenta).sort(
    function (valoracumulado, nuevovalor){
        valoracumulado[1] - nuevovalor[1]
    }
);

// Object.entries(lista_cuenta).sort(
//     function(elementoA, elementoB){
//         if(elementoA > elementoB) return 1;
//         if(elementoA == elementoB) return 0;
//         if(elementoA < elementoB) return -1;
//     }
// )

const moda = lista_array[lista_array.length - 1];