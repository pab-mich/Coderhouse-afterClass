let enviar = document.getElementById("enviar")

enviar.addEventListener("click", () =>{
  let nombre = document.querySelector('#nombre').value
  let edad = document.querySelector('#edad').value

  document.getElementById("datos").innerHTML = `hola ${nombre} tu edad es de ${edad} años`
})
