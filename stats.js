const os = require('os')
setInterval( () => {
    const { freemem, totalmem} = os
    const free = Math.round(freemem()/(1024*1024))
    const total = Math.round(totalmem()/(1024*1024))
    const used = Math.round(100 - (free/total)*100)
    const stats = {
        free: `${free} Gb`,
        used: `${used}%`,
        total: `${total} Gb`
    }
    console.clear()
    console.table(stats)
}, 1000)
