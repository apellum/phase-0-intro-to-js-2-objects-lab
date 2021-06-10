const employee = {name: '', streetAddress: ''}
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return Object.assign({}, employee, {[key]: value})
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee
}

const deleteFromEmployeeByKey = (employee, key, value) => {
    const newEmployee = Object.assign({}, employee)
    delete newEmployee[key]
    return newEmployee
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}







































/*let employee = {
    name: ``,
    streetAddress: ``,
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = Object.assign({}, employee, { [key]: value })
    newObj[key] = value
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {[key]: value})
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee)
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}*/