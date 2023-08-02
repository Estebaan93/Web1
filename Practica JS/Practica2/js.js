function solucionarRompecabezas(n){
    let a = 1;
    let b = 1;
    let c = 1;
    let d = 1;
    let resultado;
    //para i en el rango de 1 a N 
    for(let i=0; i<n ; i++){
    resultado = (3 * d + 1 * c + 4 * b + 1 * a) % 10000000000; // últimos 10 dígitos de var_D
    a = b
    b = c
    c = d
    d = resultado
    }
    return d 
    }
    
    document.write(solucionarRompecabezas(10));
    document.write("<br>");
    document.write(solucionarRompecabezas(100));
    document.write("<br>");
    //document.write(solucionarRompecabezas(Math.pow(2023, 100))); // 2023 elevado a la 100
    //document.write(solucionarRompecabezas(2023 ** 100));
    /*Salida
    902441
    8042318513
    ?           */
    