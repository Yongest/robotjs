var robot = require('robotjs')
var {
    exec,

} = require('child_process')

const iconv = require('iconv-lite')



function sendMsg(to, msg) {

    robot.keyTap('f', 'control')
    copyPase(to, () => {
        robot.keyTap('v', 'control')

        copyPase(msg, () => {
            // 异步搜索群名字、微信好友名字
            setTimeout(() => {
                robot.keyTap('enter', 'control')

                robot.keyTap('v', 'control')
                robot.keyTap('enter')

                // robot.keyTap('d', 'command')
            }, 300);
        })
    })
}

function copyPase(txt, fn) {
    exec('clip').stdin.end(iconv.encode(txt, 'gbk'), function () {
        setTimeout(fn, 100)
    })
}



function start() {
    let index = 0
    
    let timerId = setInterval(() => {
    
        sendMsg(nameList[index], msg)
        index++
        if (index >= nameList.length) {
            clearInterval(timerId)
        }

    }, 5000);
}

let nameList = ['读书分享群','Alien读书扯淡窝','媛创读书群','小uni','2011级化工群','数据结构与算法', '中国合伙人','羽毛球中南林广州','广州前端技术交流群','中南林安徽校友群','加速的朋友','坚持读书少数部落']

let msg = `机器人小智：

樊登问作家周国平说：“人生到底有意义吗？”
周国平用非常肯定的语气说道：“没有！一个人就是一团欲望，不满足就痛苦，满足了以后就无聊。人生就像钟摆一样，在痛苦和无聊当中摆动。人生本来是没有意义的。

如果说人生没有意义，那么要生命有何用？如果活着只是为了吃喝，当个酒囊饭袋，那人生也太无趣了。如果人活着一辈子，只为了传宗接代、延续血脉，那和动物又有什么区别呢？
那么，到底人生的真义在哪里呢？

https://mp.weixin.qq.com/s/r_zcwp6voZG1knh48MEE_g
    
2022年4月5日
`


// 打开微信
robot.keyTap('o', 'control')
start()