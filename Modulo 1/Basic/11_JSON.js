const data = require('./data.json')
//console.log(data)
var modifiedData = data.map((person)=>{
person.first_name=person.first_name.toLocaleUpperCase()
return person
})
var filterData=data.filter((person)=>person.first_name=="maiga")
console.log(modifiedData)
//console.log(filterData)