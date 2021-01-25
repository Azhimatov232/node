const persons =[
    {name:"Nurbol",age:23},
    {name:"Asan",age:27},
    {name:"Uson",age:19},
    {name:"Aman",age:17},
    {name:"Uson",age:17},
    {name:"Askar",age:22},
]

const filterF = (person) => {
    if (person.name === "Uson" && person.age === 17){
        return true
    } else {
        return false
    }
}

const index = persons.findIndex(filterF)
console.log(index);