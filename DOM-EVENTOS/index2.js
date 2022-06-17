let enviar = document.getElementById("enviar")
let datos = document.getElementById("datos")
let borrar = document.getElementById("borrar")

datos.hidden = "none"
datos.style.backgroundColor = "blue"

enviar.addEventListener("click", () =>{
  datos.hidden = ""
  let nombre = document.querySelector("#nombre").value
  let edad = document.querySelector("#edad").value

  const content = document.createElement("div");

  content.innerHTML = `
    <img src="https://imgs.search.brave.com/PhOieyBk7Yn5kIgWwRCpgHHeuaEoG_Y_-7MXtpURRwA/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/bmNRa0VUT09fZ2Vr/Z29wQ0ZiZDBBSGFE/dCZwaWQ9QXBp">
    <h4 class="red">nombre : ${nombre}</h4>
     <h4>edad : ${edad}</h4>
  `;
  datos.append(content)
})

//evento borrar

borrar.addEventListener("click", () => {
  datos.innerHTML = "";
})
