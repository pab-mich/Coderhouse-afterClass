let cursos = [
  { id: 1, name: "desarrollo web" },
  { id: 2, name: "javascript" },
  { id: 3, name: "react js" },
  { id: 4, name: "back-end" },
  { id: 5, name: "java" }
];

const searchCourses = document.querySelector(".search-courses")
const suggestionsPanel = document.querySelector(".suggestions")

searchCourses.addEventListener("keyup", () =>{
  const input = searchCourses.value

  const suggestions = cursos.filter((curso) =>{
    return curso.name.startsWith(input)
  })
  console.log(suggestions)

  //que el suggestion panel este vacio
  //solo muestra lo que se esta filtrando en mi input
  suggestionsPanel.innerHTML = "";


  suggestions.forEach((suggested)=>{
    const div = document.createElement("div")
    div.innerHTML = suggested.name
    suggestionsPanel.append(div);
  })
})
