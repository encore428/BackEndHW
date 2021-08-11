const { mainModule } = require("process")

const sayHi = (name) => {
    console.log(`Hi ${name}!`)
}


const sayHello = (name) => {
    console.log(`Hello ${name}!`)
}


module.exports = {sayHi, sayHello}
console.log(module)
