const lista = [1,2,3,4];

function paroimp (array){
    let logica = array.length % 2;
    
    if (logica === 0){
        console.log("es par XD");
        const  mitad_inferior = parseInt(array.length / 2) - 1;
        const mitad_superior = parseInt(array.length / 2);
        const mitad = (array[mitad_inferior] + array[mitad_superior])/2;
        console.log(mitad);
        console.log("minf = ", array[mitad_inferior], " msup = ", array[mitad_superior]);

    }
    else {
        console.log("es impar :D");
        const mitad = parseInt(array.length/2);
        console.log(array[mitad]);

    };
    

};