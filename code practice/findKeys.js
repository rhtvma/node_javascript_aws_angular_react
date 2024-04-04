const data = {
    employees: {
        employee1: {
            id: "1",
            firstName: "Tom",
            lastName: "Cruise",
            address: {
                street: ''
            }
        }
    }
}
let keys = []
const findKeys = (input) => {
    for (const key in input) {
        keys.push(key)
        if (typeof input[key] === 'object') {
            findKeys(input[keys])
        }
    }
}

findKeys(data)

console.log(keys)