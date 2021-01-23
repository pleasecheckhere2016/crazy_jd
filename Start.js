const fs = require('fs')
const exec = require('child_process').execSync

function main() {
    const files = fs.readdirSync("./")

    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file.startsWith("jd_") && file.endsWith(".js")) {
            // exec(`node ${file} >> 1.txt`);
            console.log(file);

        }

    }
    console.log("####################################")
    console.log(process.env);

}

main()