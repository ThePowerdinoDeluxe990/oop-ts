class animal {
  nombre: string = ""
  age: number = 0
}

function dog() {
  const dog = new animal()
  
  const name: string = dog.nombre = "jimmy"
  const age: number = dog.age = 3
  
  console.log(`
  El nombre del perro es: ${name}
  La edad del perro es: ${age}
  `)
}


function cat() {
  const cat = new animal()
  
  const name: string = cat.nombre = "frank"
  const age:number = cat.age = 5

  console.log(`
  El nombre del gato es: ${name}
  La edad del gato es: ${age}
  `)
}

const result = "PERRO"

switch(result.toLowerCase()){
  case "gato":
    cat()
  break;

  case "perro":
    dog()
  break;

  default:
    console.log("No se ha encontrado el animal")
  break;
}
