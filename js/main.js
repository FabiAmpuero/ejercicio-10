function evaluar(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var salida = document.getElementById("salida");
    var salidaDos = document.getElementById("salidaDos");
    
    var suma = parseFloat(num1)+parseFloat(num2);
    
    if (num1 == "" || num2 == ""){
        salidaDos.innerHTML = "Falta llenar";
    }
    else{
        if (num1 == 10 || num2 == 10){
            salida.innerHTML = suma;
            salidaDos.innerHTML = "Ganaste!!!";
        }
        if (suma == 10){
            salida.innerHTML = suma;
            salidaDos.innerHTML = "Ganaste!!!";
        }
        else{
            salida.innerHTML = suma;
            salidaDos.innerHTML = "Sigue intentando";
        }   
    }
}
