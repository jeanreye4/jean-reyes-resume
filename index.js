#! /usr/bin/env node

const fs = require('fs')

fs.readFile(jean-reyes-resume + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data
    }
})

"bin": {
  "jean-reyes-resume": "./info.json"
},
