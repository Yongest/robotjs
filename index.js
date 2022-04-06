var robot = require('robotjs')

const axios = require('axios')
(async()=>{
      const response = await  axios.get('https://sentence.iciba.com/index.php?callback=a&c=dailysentence&m=getdetail&title=2022-04-06&_=1649242108331')
      console.log(response.data)
    }
)();


return false
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

let nameList = ['读书分享群','媛创读书群','小uni','2011级化工群','数据结构与算法', '中国合伙人','羽毛球中南林广州','广州前端技术交流群','中南林安徽校友群','加速的朋友']

let msg = `机器人小智：

You can't change the world, but you can change yourself.
你无法改变世界，但你可以改变自己。
    
2022年4月6日
`

// 打开微信
robot.keyTap('o', 'control')
start()