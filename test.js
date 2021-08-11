console.log(__dirname);

console.log(__filename);

const names = require("./1-module")
const sayHi = require("./3-secondModule")

sayHi.sayHi("John")
sayHi.sayHello(names.mum)

/*
const express = require('express')
const http = express()

console.log(http)
*/