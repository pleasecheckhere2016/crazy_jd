const fs = require('fs')
const exec = require('child_process').execSync
const rp = require('request-promise')


const push_key = process.env.PUSH_KEY

const result_path = "./result.txt"

const error_path = "./error.txt"


const skip_list = "jd_crazy_joy_coin.js,jd_immortal.js,jd_nian.js,jd_nian_ar.js" +
    "jd_nian_wechat.js,jd_superMarket.js,jd_lotteryMachine.js,jd_family.js";


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


function sendNotificationIfNeed(text, desp) {

    if (!push_key) {
        console.log(`执行任务结束，未配置推送密钥，执行结果如下`);
        console.log(desp);
        return;
    }

    if (!desp) {
        console.log(`没有执行结果，任务中断，flag = ${text}`);
        return;
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
    const files = fs.readdirSync("./")

    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file.startsWith("jd_") && file.endsWith(".js") && skip_list.indexOf(file) == -1) {

            try {
                exec(`node ${file} >> ${result_path}`);

            } catch (err) {
                console.log(`执行 ${file} 出错` + err);
                fs.writeFileSync(error_path, err, 'utf8')
            }
        }

    }


    if (fs.existsSync(result_path)) {
        let r1 = fs.readFileSync(result_path, "utf8")
        let strings = r1.split("\n");

        let notify = "### 成功执行的任务列表\r\n";

        for (let i = 0; i < strings.length; i++) {
            if (strings[i].indexOf("结束!") > -1) {
                notify += ("- " + strings[i] + "\r\n");
            }
        }

        notify += "### 含有失败的任务列表\r\n";

        for (let i = 0; i < strings.length; i++) {
            if (strings[i].indexOf("失败") > -1 || strings[i].indexOf("错误") > -1) {
                notify += ("- " + strings[i] + "\r\n");
            }
        }

        sendNotificationIfNeed("京东脚本执行结果通知", notify);
        return;
    }

    if (fs.existsSync(error_path)) {
        let error = fs.readFileSync(error_path, "utf8")
        sendNotificationIfNeed("[错误]京东脚本执行结果通知", error)
        return;
    }


}

main()