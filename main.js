const promptValue = prompt ("ingrese 1 si quiere realizar compras , si desea tener mas informacion ingrese 2   si es admin ingrese 3")
const descripcionFelices= ("esta pocima le brindara felicidad por siempre por un año")




 if (promptValue == "1") {
    let continuar = true
while (continuar){
ID = prompt ("ingrese el id de su pócima favorita del 1 al 6  " )

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
          
        }while(isNaN(cantidad && donacion))
       resultadodonacion (cantidad,donacion, ID)
      break

    case "2":
       alert ("Ud. eligió la pócima dinero por siempre")
       do{
       cantidad = parseInt(prompt ("Ingrese la cantidad de pócimas dinero por siempre "))
       donacion = prompt ("Ingrese el monto a donar por pócimas")
      }while(isNaN(cantidad && donacion))
       resultadodonacion (cantidad,donacion, ID)
      break

    case "3":
       alert ("Ud. eligió la pócima joven por siempre")
       do{
        cantidad = parseInt (prompt ("ingrese al cantindad de pócimas joven por siempre"))
        donacion = prompt ("ingrese el monto a donar por pócimas")
        }while(isNaN(cantidad && donacion))
        resultadodonacion (cantidad,donacion, ID)
        break

    case "4":
        alert ("Ud. eligió la pócima de belleza por siempre")
        do{
        cantidad = parseInt (prompt ("ingrese al cantindad de pocimas de belleza por siempre"))
        donacion = prompt ("ingrese el monto a donar por pocimas")
        }while(isNaN(cantidad && donacion))
        resultadodonacion (cantidad,donacion, ID)
        break

    case "5":
        alert ("Ud. eligio la pócima buena suerte")
        do{
        cantidad = parseInt (prompt ("ingrese al cantindad de pocimas buena suerte"))
        donacion = prompt ("ingrese el monto a donar por pócimas")
        }while(isNaN(cantidad &&  donacion))
        resultadodonacion (cantidad,donacion, ID)
        break

    case "6":
        alert ("Ud. eligio la pócima abre nuevos caminos")
        do{
        cantidad = parseInt (prompt ("ingrese al cantindad de pocimas abre caminos"))
        donacion = prompt ("ingrese el monto a donar por pócimas")
       }while(isNaN(cantidad && donacion))
        resultadodonacion (cantidad,donacion, ID)
        break

    default:
      alert ("Ingrese una opcion valida del 1 al 6 o cancele para salir")
      break
   
}
continuar=confirm("Presione aceptar para continuar comprando o cancelar para finalizar ")
}


//busqueda


} else if (promptValue =="2"){
  alert ("ud. a eligido buscar info, por favor ingrese el id de su pocima favorita ")
  prompt ("ingrese el id posima a consultar")
  let id
  let datos = [
    { 
      id: "1",
      descripcion: "esta pocima le brindara felicidad por siempre por un año",
      cantidad: 5,
      efectosColaterales: "esta posimas puede hacer que se ria todo el tiempo"
},

]
  const pocimaBuscada = datos.find((dat) =>{
          return dat.id == "1"
  })
console.log(pocimaBuscada)


  //admin

  } else if (promptValue == "3") {
   alert ("Bienvenido administrador")
   
   const pocimas = []

  
   let tarea = prompt ("ingrese la tarea desada 1 ingresar pocimas 2 veremos " )

   switch (tarea) {
  
    case "1":
       alert ("Ud. eligió ingresar pocima ")
       do{
      const nombre = prompt ("Ingrese el nombre de la pocima")
      const precio  = prompt ("Ingrese el precio de la pocima")
      const stock = prompt ("ingrese la cantindad de pocimas")

      pocimas.push(
        {
            nombre:nombre,
            precio:precio,
            stock:stock,
        }
      )
      console.log (pocimas)
      continuar = confirm ("quiere seguir ingresando nombres de pocimas")
     }while(continuar)

     pocimas.forEach((precio)=>{
      alert ( "ud. a ingresado " + precio )
})


    








    default:
            alert ("Ingrese una opcion valida del 1 al 6 o cancele para salir")
            break
    }      
  
  
  

  } else {
    alert ("ud. no eligio ninguna opcion valida")
  }








/*const palabras = [ "hola" , "genio" , "loco" , "sabiduria"]
const numeros = [ 12, 25, 96, 87, 98]
let resultado = numeros [0] + numeros [1]
alert (resultado)
/*


for (let i = 0; i<palabras.length; i++){
    console.log (palabras [i])
}
palabras.push ("agragamos")
for (let i = 0; i<palabras.length; i++){
    console.log (palabras [i])
}

const listaNombre = []
let cantidad = 5

do{
    let entrada = prompt ("ingresar nombre")

}
 */ 
 














