const fs = require('fs')
const exec = require('child_process').execSync

function main() {
    const files = fs.readdirSync("./")

    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file.startsWith("jd_") && file.endsWith(".js")) {

            try {
                exec(`node ${file} >> ./success.txt`);

            } catch (e) {
                console.log(`执行出错 ${file}` + e);
            }
        }

    }

}

main()