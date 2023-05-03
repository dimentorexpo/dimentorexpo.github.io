async function docheckopers() {
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


await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
    "credentials": "include"
}).then(r => r.json()).then(result => {
    opstats.push(...result.onOperator.filter(operator => 
        operator.operator?.status !== "Offline" && 
        flagtpkc === 'ТП' && 
        operator.operator?.fullName.match(/ТП\D/)
    ));
    chattpquecountleft = result.unAssigned.find(unAssigned => 
        unAssigned.kb === '120181'
    )?.count ?? chattpquecountleft;
});

    let myString;
if (opstats.length > 0) {
     myString =`Статус операторов по состоянию на ${currdate} ${currtime}\\\\n| Чатов | Оператор | Статус |\\\\n|:---------:|:----------------------:|:----------:|\\\\n` + opstats.map(obj => `|${obj.aCnt} | ${obj.operator.fullName} | **[${obj.operator.status}]**|`).join('\\\\n') + `\\\\n\`\`\`Очередь ТП:\`\`\` ${chattpquecountleft}`;
} else {
     myString =`На линии никого нет!\\\\n\`\`\`Очередь ТП:\`\`\` ${chattpquecountleft}`;
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
    "body": "{\\"message\\":\\"${myString}\\",\\"channel_id\\":\\"9gmj89efo38o3doxzu19g3gk6r\\",\\"user_id\\":\\"ag19qsokp7y45xogyqr1sco3pr\\"}",
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
let cyear = CheckComponentOfDate(cdate.getFullYear());
let cmonth = CheckComponentOfDate(cdate.getMonth() + 1);
let cday = CheckComponentOfDate(cdate.getDate());
let today = `${cday}.${cmonth}.${cyear}`;

return today;
}
