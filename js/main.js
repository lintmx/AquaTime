function updateTime() {
    let now = new Date()
    let timeElm = document.querySelector('.time>span')

    timeElm.innerHTML = timeFormat(now.getHours()) + ':' + timeFormat(now.getMinutes()) + ':' + timeFormat(now.getSeconds())

}

function timeFormat(num) {
    return num < 10 ? '0' + num : num
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeMsg() {
    let msgElm = document.querySelector('.rua>span')
    msgElm.innerHTML = msgArr[getRandomIntInclusive(0, msgArr.length - 1)]
}

function initMsg() {
    let defaultMsg = [
        'A.M.T',
        '理解、理解',
        '余裕、余裕',
        '大天使あくあ',
        'こんあくあ',
        'おつあくあ',
        'エモい',
        '！！！！！！！！！！！！！！！！！！！！！！！！'
    ]
    let msg = defaultMsg.join('\n')
    localStorage.setItem('msg', msg)

    return msg
}

let msgArr = ['A.M.T']

window.onload = () => {
    updateTime()
    setInterval(updateTime, 1000)

    let msg = localStorage.getItem('msg')
    if (msg == null) {
        msg = initMsg()
    }
    msgArr = msg.split('\n')

    changeMsg()
    setInterval(changeMsg, 60000)

    document.querySelector('.settings>svg').addEventListener('click', () => {
        window.location.href = '/settings.html'
    })
}