
/*
let ID1
do{
 ID1 =prompt ("ingrese el id de su pocima faborita del 1 al 6 o s para finalizar la comrpa" )
  if (ID1 <= 6) {
   
    console.log ("ud. a comprado la posima" )
   

  }else{
  
    console.log ("ingrese un numero id del 1 al 6 o s para salir o c para continuar")
  
}

}while (ID1 != "s")   
console.log ("finalizo la compra")
alert ("ud a finalizado sus compras")  

function ingrese valor de donacion
   
  */

let ID = prompt ("ingrese el id de su pocima faborita del 1 al 6 " )





function resultadodonacion (cantidad, donacion){
  let resultado = cantidad * donacion
  alert  ("gracias por donar $ "  + resultado  )

}

  do{
switch (ID) {
  
    case "1":
       alert ("Ud. eligio la posima de la felicidad")
       cantidad = prompt ("ingrese al cantindad de pocimas de la felicidad deseadas")
       donacion = prompt ("ingrese el monto a donar por pocimas")
       resultadodonacion (cantidad,donacion)
      break

    case "2":
       alert ("Ud. eligio la posima de dinero por siempre")
       cantidad = prompt ("ingrese al cantindad de pocimas de la felicidad deseadas")
       donacion = prompt ("ingrese el monto a donar por pocimas")
       resultadodonacion (cantidad,donacion)
      break

    case "3":
        alert ("Ud. eligio la posima de joven por siempre")
        cantidad = prompt ("ingrese al cantindad de pocimas de la felicidad deseadas")
        donacion = prompt ("ingrese el monto a donar por pocimas")
        resultadodonacion (cantidad,donacion)
        ID = prompt ("ingrese el id de su pocima faborita del 1 al 6 o s para finalizar la compra" )
       break

    case "4":
        alert ("Ud. eligio la posima de belleza por siempre")
        cantidad = prompt ("ingrese al cantindad de pocimas de la felicidad deseadas")
        donacion = prompt ("ingrese el monto a donar por pocimas")
        resultadodonacion (cantidad,donacion)
        break

    case "5":
        alert ("Ud. eligio la posima buena suerte")
        cantidad = prompt ("ingrese al cantindad de pocimas de la felicidad deseadas")
        donacion = prompt ("ingrese el monto a donar por pocimas")
        resultadodonacion (cantidad,donacion)
        break
    case "6":
        alert ("Ud. eligio la posima abre nuevos caminos")
        cantidad = prompt ("ingrese al cantindad de pocimas de la felicidad deseadas")
        donacion = prompt ("ingrese el monto a donar por pocimas")
        resultadodonacion (cantidad,donacion)
        break
    default:
      alert ("Ingrese una opcion valida del 1 al 6 o s para salir de las donaciones")
      break
   


}
ID = prompt ("ingrese el id de su pocima faborita del 1 al 6 o s para finalizar la compra")
}while (ID != "s")
    alert ("ud a finalizado su compra")



  
 


/*
const ID2 =prompt ("ingrese el id de su pocima faborita en caso que no quiera comprar mas ingrese l")
const ID3 =prompt ("ingrese el id de su pocima faborita en caso que no quiera comprar mas ingrese l")
const ID4 =prompt ("ingrese el id de su pocima faborita en caso que no quiera comprar mas ingrese l")
const ID5 =prompt ("ingrese el id de su pocima faborita en caso que no quiera comprar mas ingrese l")
const ID6 =prompt ("ingrese el id de su pocima faborita en caso que no quiera comprar mas ingrese l")
const ID7 =prompt ("ingrese el id de su pocima faborita en caso que no quiera comprar mas ingrese l")
*/












