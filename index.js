// Write your solution in this file!
let employee = {
    streetAddress:'',
    name:''


}

function updateEmployeeWithKeyAndValue(employee,key,value){
    console.log(employee,key,value);
    const newObject =Object.assign({}, employee,{[`streetAddress`]:`11 Broadway`})
        return newObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee,key){
    const newObject = Object.assign({},employee)
     delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    const newObject = Object.assign(employee)
    delete newObject[key]
   return newObject
}
