var robot = require('robotjs');

const axios = require('axios');

function getDate(sign='-'){
    let dateObj  = new Date()
    let year = dateObj.getFullYear()
    let month = dateObj.getMonth()+1
    month= month<=9?'0'+month:month
    let date = dateObj.getDate()
    date= date<=9?'0'+date:date
    return year+sign+month+sign+date
}

let msg = ''
;(async()=>{
      const response = await axios.get(`https://sentence.iciba.com/index.php?callback=&c=dailysentence&m=getdetail&title=${getDate()}&_=1649242108331`)
    
   msg =  `机器人小智：

    ${response.data.content}
    ${response.data.note}
    ${response.data.picture2}

    ${getDate()}
    `

    // console.log(msg)
})();



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

let nameList = ['读书分享群','小uni','2011级化工群','数据结构与算法', '中国合伙人','羽毛球中南林广州','中南林安徽校友群','加速的朋友']



// 打开微信
robot.keyTap('o', 'control')
start()