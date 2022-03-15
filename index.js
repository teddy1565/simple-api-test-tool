const axios = require("axios");
const fs = require("fs");
let testScript = JSON.parse(fs.readFileSync("./index.test.json").toString());
async function task(){
    for (let i in testScript) {
        for (let j in testScript[i]) {
            if (testScript[i][j]["payload"]) {
                let result = await axios[i](testScript[i][j]["path"], testScript[i][j]["payload"]);
                console.log(result.status);
                console.log(result.data);
            } else {
                let result = await axios[i](testScript[i][j]["path"]);
                console.log(result.status);
                console.log(result.data);
            }
            
        }
    }
}

task();