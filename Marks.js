    
var win_Marks =  // описание элементов окна оценок от пользователя
    `<div style="display: flex; width: 300px;">
        <span style="width: 300px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 300px;" id="marks_header">
                                <button title="скрывает меню" id="hideMeMarks" style="width:50px; background: #228B22;">hide</button>
								<button id="marksinstr" style="float: right; margin-right: 10px;" title="Инструкция по этой форме">❓</button>
                        </div>
						<div>
							<input id="useridsearch" placeholder="ID У/П для 🔎статистики оценок" title="Ввведите ID ученика или учителя для получения информации с начала года по выставляемым оценкам" autocomplete="off" type="text" style="text-align: center; width: 230px; color: black;margin-left:5px">
							<button id="findmarksstat">🔎</button>
							<button id="clearmarksstat">🧹</button>
						</div>
			    </span>
                        <div style="margin: 5px; width: 300px" id="marks_box">
                                <p id="markstable" style="max-height:400px; margin-left:5px; font-size:16px; color:bisque; overflow:auto;"></p>
                        </div>
        </span>
</div>`;

if (localStorage.getItem('winTopMarks') == null) { //начальное положение окна оценко
    localStorage.setItem('winTopMarks', '120');
    localStorage.setItem('winLeftMarks', '295');
}
	
let wintMarks = document.createElement('div'); // создание окна поиска оценок от пользователя
document.body.append(wintMarks);
wintMarks.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopMarks') + 'px; left: ' + localStorage.getItem('winLeftMarks') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintMarks.style.display = 'none';
wintMarks.setAttribute('id', 'AF_Marks');
wintMarks.innerHTML = win_Marks;

var listenerMarks = function (e, a) { // сохранение позиции окна поиска оценок от пользователя
    wintMarks.style.left = Number(e.clientX - myX14) + "px";
    wintMarks.style.top = Number(e.clientY - myY14) + "px";
    localStorage.setItem('winTopMarks', String(Number(e.clientY - myY14)));
    localStorage.setItem('winLeftMarks', String(Number(e.clientX - myX14)));
};

wintMarks.onmousedown = function (a) { // изменение позиции окна поиска оценок от пользователя
    if (checkelementtype(a)) {
        window.myX14 = a.layerX;
        window.myY14 = a.layerY;
        document.addEventListener('mousemove', listenerMarks);
    }
}
wintMarks.onmouseup = function () { document.removeEventListener('mousemove', listenerMarks); } // прекращение изменения позиции окна поиска оценок от пользователя

function getDate() {
        var date = new Date()

        day = month = ""
        if (date.getMonth() < 9)
            month = "0" + (date.getMonth() + 1)
        else
            month = (date.getMonth() + 1)
        if (date.getDate() < 10)
            day = "0" + date.getDate()
        else
            day = date.getDate()
        if (date.getHours() < 10)
            hours = '0' + date.getHours()
        else
            hours = date.getHours()
        if (date.getMinutes() < 10)
            minutes = '0' + date.getMinutes()
        else
            minutes = date.getMinutes()
        if (date.getSeconds() < 10)
            seconds = '0' + date.getSeconds()
        else
            seconds = date.getSeconds()
		
		year = date.getFullYear()

	return year;
    return month;
    return day;
    return minuts;
    return seconds;
}
	
	document.getElementById('AF_Marks').ondblclick = function (a) { // скрытие окна оценок от пользователя по двойному клику
		if (checkelementtype(a)) { document.getElementById('AF_Marks').style.display = 'none'; }
	}
	
			document.getElementById('hideMeMarks').onclick = function () { // скрытие окна поиска оценок от пользователя
				if (document.getElementById('AF_Marks').style.display == '')
					document.getElementById('AF_Marks').style.display = 'none'
			}
			
			document.getElementById('marksinstr').onclick = function () {
				window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-Score%F0%9F%93%8A%D0%9E%D1%86%D0%B5%D0%BD%D0%BA%D0%B8')
			}
			
			document.getElementById('clearmarksstat').onclick = function () { // кнопка очистки поля
                document.getElementById('markstable').innerHTML = "";
            }

async function getUserMarks(option) {
	let tempval;
	if (optiom == 'menu') {		
		tempval = document.getElementById('useridsearch').value.trim();
	} else if (option == 'userdetailsbar') {
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                tempval = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
        }
	}
	
	   document.getElementById('markstable').innerText = "Загрузка..."
	
	   getDate()

       secondDate = year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000z"
	   
                await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                        "content-type": "application/json",
                        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin"
                    },
                    "referrer": "https://skyeng.autofaq.ai/tickets/archive",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"" + tempval + "\",\"tsFrom\":\"2022-05-01T00:00:00.000Z\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":100}",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => datamarks = r)

                let count = {};
                let clswoutmark = 0;
                let markscount = 0;
                let flagok = [];
                for (let i = 0; i < datamarks.items.length; i++) {
                    if (datamarks.items[i].stats.rate != undefined && datamarks.items[i].stats.rate.rate == undefined)
                        clswoutmark++;
                    if (datamarks.items[i].stats.rate != undefined && datamarks.items[i].stats.rate.rate != undefined)
                        flagok.push(datamarks.items[i].stats.rate.rate)
                }
                flagok.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
                console.log(count);
                if (count[1] == undefined)
                    count[1] = 0;
                if (count[2] == undefined)
                    count[2] = 0;
                if (count[3] == undefined)
                    count[3] = 0;
                if (count[4] == undefined)
                    count[4] = 0;
                if (count[5] == undefined)
                    count[5] = 0;
                markscount = (count[1] + count[2] + count[3] + count[4] + count[5]);
                document.getElementById('markstable').innerHTML = 'Пользователь 🕵️‍♀️: ' + tempval + '<br>' +
                    'Name: ' + datamarks.items[0].channelUser.fullName + '<br>' +
                    'Оценка 1 🤬: ' + count[1] + ' ................... ' + ((count[1] / markscount) * 100).toFixed(1) + '%' + '<br>' +
                    'Оценка 2 🤢: ' + count[2] + ' ................... ' + ((count[2] / markscount) * 100).toFixed(1) + "%" + '<br>' +
                    'Оценка 3 😐: ' + count[3] + ' ................... ' + ((count[3] / markscount) * 100).toFixed(1) + "%" + '<br>' +
                    'Оценка 4 🥴: ' + count[4] + ' ................... ' + ((count[4] / markscount) * 100).toFixed(1) + "%" + '<br>' +
                    'Оценка 5 😊: ' + count[5] + ' ................... ' + ((count[5] / markscount) * 100).toFixed(1) + '%' + '<br>' +
                    'Всего оценок: ' + markscount + '<br>' + 'Обращений с 01.05.22: ' + datamarks.total + '<br>' +
                    'Оценки/кол-во обращений: ' + ((markscount / datamarks.total) * 100).toFixed(1) + '%' + '<br>' +
                    'Закрыто без оценок: ' + clswoutmark + ' ............. ' + (clswoutmark / datamarks.total * 100).toFixed(1) + '%' + '<br>' +
                    'Автозакрытие: ' + (datamarks.total - clswoutmark - markscount) + ' ....................... ' + ((datamarks.total - clswoutmark - markscount) / datamarks.total * 100).toFixed(1) + '%';
                document.getElementById('useridsearch').value = "";
}
			
			
	
	document.getElementById('butMarks').onclick = function () { //открыть форму для поиска оценок от пользователя
		if (document.getElementById('AF_Marks').style.display == '') {
            document.getElementById('AF_Marks').style.display = 'none'
            document.getElementById('idmymenu').style.display = 'none'
        } else {
            document.getElementById('AF_Marks').style.display = ''
            document.getElementById('idmymenu').style.display = 'none'
				
            document.getElementById('findmarksstat').onclick = async function () {
				getUserMarks('menu')
            }
        }
    }
	
	marksstata.onclick = async function () { //проверка статистики оценок от пользователя

    if (document.getElementById('AF_Marks').style.display == 'none') {
        document.getElementById('AF_Marks').style.display = ''
		
		getUserMarks('userdetailsbar')


    } else {
			getUserMarks('menu')
        }
    }
