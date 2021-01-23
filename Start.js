const fs = require('fs')
const exec = require('child_process').execSync

function main() {
    const files = fs.readdirSync("./")

    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file.startsWith("jd_") && file.endsWith(".js")) {

            try {
                exec(`node ${file}`);
            } catch (e) {
                console.log(e);
            }
        }

    }
    console.log("####################################")
    console.log(process.env);

}

main()