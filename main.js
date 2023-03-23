
let continuar = true
while (continuar){
let ID = prompt ("ingrese el id de su pócima favorita del 1 al 6 " )

function resultadodonacion (cantidad, donacion, ID){
  let resultado  =  (cantidad * donacion) 
    alert  ("gracias por donar $ "  + resultado + " Ud. va a recibir la pocima N°" + ID )
}

switch (ID) {
  
    case "1":
       alert ("Ud. eligió la pócima de la felicidad ")
       do{
       cantidad = parseInt(prompt ("Ingrese la cantidad de pócimas de la felicidad deseadas"))
       donacion = prompt ("ingrese el monto a donar por pocimas")
      }while(isNaN(cantidad, donacion))
       resultadodonacion (cantidad,donacion, ID)
      break

    case "2":
       alert ("Ud. eligió la pócima dinero por siempre")
       do{
       cantidad = parseInt(prompt ("Ingrese la cantidad de pócimas dinero por siempre "))
       donacion = prompt ("Ingrese el monto a donar por pócimas")
      }while(isNaN(cantidad, donacion))
       resultadodonacion (cantidad,donacion, ID)
      break

    case "3":
       alert ("Ud. eligió la pócima joven por siempre")
       do{
        cantidad = parseInt (prompt ("ingrese al cantindad de pócimas joven por siempre"))
        donacion = prompt ("ingrese el monto a donar por pócimas")
        }while(isNaN(cantidad, donacion))
        resultadodonacion (cantidad,donacion, ID)
        break

    case "4":
        alert ("Ud. eligió la pócima de belleza por siempre")
        do{
        cantidad = parseInt (prompt ("ingrese al cantindad de pocimas de belleza por siempre"))
        donacion = prompt ("ingrese el monto a donar por pocimas")
        }while(isNaN(cantidad, donacion))
        resultadodonacion (cantidad,donacion, ID)
        break

    case "5":
        alert ("Ud. eligio la pócima buena suerte")
        do{
        cantidad = parseInt (prompt ("ingrese al cantindad de pocimas buena suerte"))
        donacion = prompt ("ingrese el monto a donar por pócimas")
        }while(isNaN(cantidad, donacion))
        resultadodonacion (cantidad,donacion, ID)
        break
    case "6":
        alert ("Ud. eligio la pócima abre nuevos caminos")
        do{
        cantidad = parseInt (prompt ("ingrese al cantindad de pocimas abre caminos"))
        donacion = prompt ("ingrese el monto a donar por pócimas")
       }while(isNaN(cantidad, donacion))
        resultadodonacion (cantidad,donacion, ID)
        break
    default:
      alert ("Ingrese una opcion valida del 1 al 6 o cancele para salir")
      break
   
}
continuar=confirm("Presione aceptar para continuar comprando o cancelar para finalizar ")
}



    



  
 














