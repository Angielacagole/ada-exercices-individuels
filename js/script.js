let askName = () => {
let nom = prompt("Quel est ton nom ?")
let string = "Bonjour " + nom
document.body.innerHTML += `<h2> ${string} </h2>`
}

let askBirthYear = () => {
let birth = prompt(`Quel est ton année de naissance?`)
let yearOld = 2023 - birth;
document.body.innerHTML += `<h3> Vous avez ${yearOld} ans</h3>`
}

askName()
askBirthYear()