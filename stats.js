const os = require('os')
const { freemem, totalmem} = os

const free = Math.round(freemem()/(1024*1024))
const total = Math.round(totalmem()/(1024*1024))

console.log("Free memory: " + free + " Gb")
console.log("Total memory: " + total + " Gb")
console.log("Used memory: " + Math.round(100 - (free/total)*100) + "%")





