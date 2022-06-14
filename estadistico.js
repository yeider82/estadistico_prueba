console.log("yeider eres genial te admiro tantoooooo")

// const lsita = [200,300,500,100,100,8];

function calculoPromedio(lista){
    // let sumalista = 0;
    // for (let i=0; i<lista.length; i++){
    //     sumalista = sumalista + lista[i];
    // }

    const sumalista = lista.reduce(
        function(valorAcumulado = 0, elemento_nuevo) {
            return(valorAcumulado + elemento_nuevo);
    }
    );

    let promedio =  sumalista / lista.length
    return promedio
  
};