let MMostOperId = localStorage.getItem('matermost_oid'); // id оператора в ММ
let issending = localStorage.getItem('is_sending_MM'); // записываем отправляем сообщения в ММ или нет, чтобы не слетала отправка при обновлении страницы
let setsendinterval; // сохраняем id интервала
let sendinterval; // интервал отправки сообщений получаемый из документа
let channel_id; // id канала куда отправлять

let settingsfromdoc;
let settingscontainer;

let StatistikToMM = document.createElement('button')
StatistikToMM.innerHTML = '📕'
StatistikToMM.style = 'width: 40px; height: 40px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
StatistikToMM.id = 'StatMM'
document.getElementById('rightPanel').appendChild(StatistikToMM)

if(!issending){ // если не записана переменная в локалсторедж, записываем
    issending = 0;
    localStorage.setItem('is_sending_MM', issending)
}

function getMMostOperId(){ // функция получения id 
    document.getElementById('responseTextarea1').value = `{
        "headers": {
          "accept": "*/*",
          "accept-language": "ru",
          "content-type": "application/json",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest"
        },
        "referrerPolicy": "no-referrer",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
      }`;
    document.getElementById('responseTextarea2').value = "https://mattermost.skyeng.tech/api/v4/users/me";
    document.getElementById('responseTextarea3').value = 'postdata';
    document.getElementById('sendResponse').click(); 

    
    document.getElementById('responseTextarea1').addEventListener('DOMSubtreeModified', () => {
        let responseMMoid = document.getElementById('responseTextarea1').getAttribute('postdata');
        let result
        if (responseMMoid) {
            result = JSON.parse(responseMMoid)
            MMostOperId = result.id;
            console.log(MMostOperId);
          document.getElementById('responseTextarea1').removeAttribute('postdata');
        }
    });

    localStorage.setItem('matermost_oid', MMostOperId)
}
    
if (!MMostOperId) { // проверяем есть ли id оператора ММ
    getMMostOperId()
}

async function getsettingsfromdoc() { // получаем из файла настройки отправки
	settingsfromdoc = 'https://script.google.com/macros/s/AKfycbwgym7WoXavCcMa7mpzlA4GHGncpWixKwyxhSJT1TU8tZg4KmRemyZqyQ3c5G2cKTxDrQ/exec'
	await fetch(settingsfromdoc).then(r => r.json()).then(r => settingsdata = r)
	settingscontainer = settingsdata.result;
    channel_id = settingscontainer[3][1];
    sendinterval = settingscontainer[4][1]*1000;
    console.log("id канала : " + channel_id) // выводим id канала
    console.log("Интервал : " + sendinterval + " ms") // выводим интервал
}

getsettingsfromdoc()

async function docheckopers() { // функция сбора статистики и отправки сообщения
    let opstats = []
    let moderresult = '';
    let flagtpkc;
    let operonlinecnt = 0;
    let busycnt = 0;
    let pausecnt = 0;
    let chatneraspcountleft = 0;
    let chattpquecountleft = 0;
    let operdep = document.getElementsByClassName('user_menu-dropdown-user_name')[0].innerText.split('-')[0]
    if (operdep == 'ТП')
        flagtpkc = 'ТП'
    else if (operdep == 'КЦ')
        flagtpkc = 'КЦ'
    else if (operdep == 'КМ')
        flagtpkc = 'КМ'
    else if (operdep == 'Teachers Care')
        flagtpkc = 'Teachers Care'
    else if (operdep == 'Prem')
        flagtpkc = 'Prem'

    let currdate = getcurrentdate();
    let currtime = getcurrenttime();
    let timetomsg = ` ` + currdate + ` ` + currtime;

await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
    "credentials": "include"
}).then(r => r.json()).then(result => {
    opstats.push(...result.onOperator.filter(operator => 
        operator.operator?.status !== "Offline" && 
        flagtpkc === 'ТП' && 
        operator.operator?.fullName.match(/ТП\D/)
    ));
    chattpquecountleft = result.unAssigned.find(unAssigned => 
        unAssigned.kb === 120181
    )?.count ?? chattpquecountleft;
});

    let myString;
if (opstats.length > 0) {
     myString =`| Чатов | Оператор | Статус |\\\\n|:---------:|:----------------------:|:----------:|\\\\n` + opstats.map(obj => `|${obj.aCnt} | ${obj.operator.fullName} | **[${obj.operator.status}]**|`).join('\\\\n') + `\\\\n\`\`\`Очередь ТП:\`\`\` ${chattpquecountleft}` + `\\\\n\`\`\`Статус операторов по состоянию на\`\`\`${timetomsg}`;
} else {
     myString =`На линии никого нет!\\\\n\`\`\`Очередь ТП:\`\`\` ${chattpquecountleft}` + `\\\\n\`\`\`Статус операторов по состоянию на\`\`\`${timetomsg}`;
}
document.getElementById('responseTextarea1').value = `{
    "headers": {
      "accept": "*/*",
      "accept-language": "ru",
      "content-type": "application/json",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrerPolicy": "no-referrer",
    "body": "{\\"message\\":\\"${myString}\\",\\"channel_id\\":\\"${channel_id}\\",\\"user_id\\":\\"${MMostOperId}\\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }`;
document.getElementById('responseTextarea2').value = "https://mattermost.skyeng.tech/api/v4/posts";
document.getElementById('responseTextarea3').value = '';
document.getElementById('sendResponse').click(); 
}

function CheckComponentOfDate(dateComponent) { // функция добавляет 0 к компоненту даты
    return dateComponent < 10 ? '0' + dateComponent : dateComponent;
  }

function getcurrenttime(){  // получение текущего времени
    let ctime = new Date();
    let chour = CheckComponentOfDate(ctime.getHours());
    let cminute = CheckComponentOfDate(ctime.getMinutes());
    let csecond = CheckComponentOfDate(ctime.getSeconds());
    let time = `${chour} : ${cminute} : ${csecond}`;

    return time;
}

function getcurrentdate(){ //получение текущей даты
    let cdate = new Date();
    let cyear = cdate.getFullYear();
    let cmonth = CheckComponentOfDate(cdate.getMonth() + 1);
    let cday = CheckComponentOfDate(cdate.getDate());
    let today = `${cday}.${cmonth}.${cyear}`;

    return today;
}
