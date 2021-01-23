const fs = require('fs')
const exec = require('child_process').execSync
const rp = require('request-promise')


const push_key = process.env.PUSH_KEY

const result_path = "./result.txt"

const error_path = "./error.txt"

const js_path = "./jd_car.js"


Date.prototype.Format = function (fmt) {
    var o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'H+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'S+': this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
        }
    }
    return fmt;
};

function dateFormat() {
    var timezone = 8;
    var GMT_offset = new Date().getTimezoneOffset();
    var n_Date = new Date().getTime();
    var t_Date = new Date(n_Date + GMT_offset * 60 * 1000 + timezone * 60 * 60 * 1000);
    console.log(t_Date)
    return t_Date.Format('yyyy.MM.dd')
}


function sendNotificationIfNeed(flag, desp) {

    if (!push_key) {
        console.log(`执行任务结束! ${push_key}`);
        return;
    }

    if (!desp) {
        console.log(`没有执行结果，任务中断，flag = ${flag}`);
        return;
    }

    let text = "京东签到_" + dateFormat();

    if (flag) {
        text = text + "_成功日志";
    } else {
        text = text + "_错误日志";

    }

    // 去除末尾的换行
    let SCKEY = push_key.replace(/[\r\n]/g, "")


    const options = {
        uri: `http://sc.ftqq.com/${SCKEY}.send`,
        form: {text, desp},
        json: true,
        method: 'POST'
    }

    rp.post(options).then(res => {
        const code = res['errno'];
        if (code == 0) {
            console.log("通知发送成功，任务结束！")
        } else {
            console.log(res);
            console.log("通知发送失败，任务中断！")
            fs.writeFileSync(error_path, JSON.stringify(res), 'utf8')
        }
    }).catch((err) => {
        console.log("通知发送失败，任务中断！" + err)
        fs.writeFileSync(error_path, err, 'utf8')
    })
}

function main() {
    // const files = fs.readdirSync("./")
    //
    // for (let i = 0; i < files.length; i++) {
    //     const file = files[i]
    //     if (file.startsWith("jd_") && file.endsWith(".js")) {
    //
    //         try {
    //             console.log(`开始执行 ${file}`);
    //             let jsPath = "./" + file;
    //             exec(`node '${jsPath}' >> '${result_path}'`);
    //
    //             console.log(`结束执行 ${file}`);
    //
    //         } catch (err) {
    //             console.log(`执行 ${file} 出错` + err);
    //             fs.writeFileSync(error_path, err, 'utf8')
    //         }
    //     }
    //
    // }


    exec(`node jd_car.js >> ${result_path}`);



    if (fs.existsSync(result_path)) {
        let r1 = fs.readFileSync(result_path, "utf8")
        sendNotificationIfNeed(true, r1);
        return;
    }

    if (fs.existsSync(error_path)) {
        let error = fs.readFileSync(error_path, "utf8")
        sendNotificationIfNeed(false, error)
        return;
    }


}

main()