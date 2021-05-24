function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value})

}
const employee = {}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value
   return employee

}


 function deleteFromEmployeeByKey(employee, key){
     //const newEmployee = Object.assign({}, employee)
     //delete newEmployee[key]
     //return newEmployee
return Object.assign({}, delete deleteFromEmployeeByKey.key)

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}