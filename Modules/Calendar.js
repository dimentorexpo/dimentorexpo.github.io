var win_Calendar =  // описание формы чтобы не давала чату закрыться
    `<div style="width: 750px;">
        <span style="width: 750px; min-height: 70px; max-height:700px; overflow-y:auto; overflow-x:hidden;">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 750px;" id="stataaf_header">
                                <button title="скрывает меню" id="hidecalendar" style="width:50px; background: #228B22;">hide</button>
								<button id="clearcalendar">🧹</button>
								<button id="refreshcalendar">♻</button>
								<button id="opendatsy">📅</button>
			    </span>
                        </div>

						<div style="display: flex; justify-content: center;">
								<button id="prevDay" style="border-radius: 20px; padding: 5px; padding-top: 6px;">◀</button>
								<input type="date" id="eventDate" onChange="getTimeSlots()" style="width:100px; text-align:center; background: blanchedalmond; font-weight: 700; border-radius: 20px;"></input>
								<button id="nextDay" style="border-radius: 20px; padding: 5px; padding-top: 6px;">▶</button>
								<button id="nowDay" style="margin-left: 5px; padding: 5px;">Сегодня</button>
								<label style="margin-left: 5px; margin-right: 5px; margin-top: 5px; color: bisque;">Доступное время по состоянию на: </label>
								<input type="text" id="datenowtime" style="text-align:center; background: cornsilk; border-radius: 20px;" disabled></input>
						</div>

						<div id="outputcalendarfield" style="color:bisque; display:flex; flex-wrap:wrap; justify-content: center; align-items: center; padding-bottom: 5px; margin-top: 5px">
						</div>

						<div id="slotList" style="display:none;">
							<span id="chosenSlot" style="background: chartreuse; padding: 5px; margin-left: 39%; box-shadow: 0px 3px 1px rgb(0 0 0 / 55%); border-radius: 20px; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); font-weight: 700; color: darkblue; font-family: cursive;"></span>
							<span id="hideSlot" style="font-size: 20px; cursor: pointer; transition:all 0.5s ease;">⤴</span>
							<div id="slotData" style="margin-bottom: 5px; margin-left: 5px;">
							</div>
						</div>
        </span>
</div>`;

if (localStorage.getItem('winTopCalendar') == null) { //начальное положение окна автоответа через время
    localStorage.setItem('winTopCalendar', '120');
    localStorage.setItem('winLeftCalendar', '295');
}

let wintCalendar = document.createElement('div'); // создание окна для заморозки чата
document.body.append(wintCalendar);
wintCalendar.style = 'min-height: 25px; width: 750px; background: #464451; top: ' + localStorage.getItem('winTopCalendar') + 'px; left: ' + localStorage.getItem('winLeftCalendar') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintCalendar.style.display = 'none';
wintCalendar.setAttribute('id', 'AF_Calendar');
wintCalendar.innerHTML = win_Calendar;

var listenerCalendar = function (e, a) { // сохранение позиции окна заморозки
    wintCalendar.style.left = Number(e.clientX - myXCalendar) + "px";
    wintCalendar.style.top = Number(e.clientY - myYCalendar) + "px";
    localStorage.setItem('winTopCalendar', String(Number(e.clientY - myYCalendar)));
    localStorage.setItem('winLeftCalendar', String(Number(e.clientX - myXCalendar)));
};

wintCalendar.onmousedown = function (a) {
    if (checkelementtype(a)) {
        window.myXCalendar = a.layerX;
        window.myYCalendar = a.layerY;
        document.addEventListener('mousemove', listenerCalendar);
    }
}
wintCalendar.onmouseup = function () { document.removeEventListener('mousemove', listenerCalendar); }

function compareTimes(time1, time2) { //функция сравнения времени
    var date1 = new Date("1970-01-01 " + time1);
    var date2 = new Date("1970-01-01 " + time2);
    return date1.getTime() - date2.getTime();
}

let parsedData;
function checkAuth() { //функция проверки авторизации на datsy.ru
	document.getElementById('responseTextarea1').value = '{}';
    document.getElementById('responseTextarea2').value = `https://api.datsy.ru/api/auth/check.php`;
    document.getElementById('responseTextarea3').value = 'getAuthData';

    // Click the 'sendResponse' element to trigger the DOMSubtreeModified event
    document.getElementById('sendResponse').click();

    // Add an event listener for the DOMSubtreeModified event
    document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
        // Get the 'getslotsinfo' attribute from the 'responseTextarea1' element
        const responsevar = document.getElementById('responseTextarea1').getAttribute('getAuthData');
		if (responsevar) {
			parsedData = JSON.parse(responsevar)
			if (parsedData['value-status'] == "Не авторизован") {
				alert("Вы не авторизованы на datsy.ru Проверьте, пожалуйста, авторизацию и повторите попытку после переоткрытия виджета в расширении или кнопкой обновить ♻, иначе слоты могут не добавляться!")
				window.open("https://datsy.ru/")
			} else {
				console.log("Вы авторизованы, смело продолжайте работу с календарем")
				getTimeSlots()
			} 
		}

		document.getElementById('responseTextarea1').removeAttribute('getAuthData')
	})
}


let responseslotsdata;
	var arrayOfEvents = [];
function getTimeSlots() { //функция получения информации по временным слотам
	if (document.getElementById('slotList').style.display == "") {
		document.getElementById('slotList').style.display = "none"
	}
	let eventDate = document.getElementById('eventDate').value
    var dateCalend = new Date();
    var offsetCalend = 3; // Moscow Timezone Offset in hours
    var utcHoursCalendar = dateCalend.getUTCHours();
    var hoursCalendar = (utcHoursCalendar + offsetCalend) % 24;
    hoursCalendar = hoursCalendar < 10 ? '0' + hoursCalendar : hoursCalendar;
    var minutesCalendar = dateCalend.getMinutes();
    minutesCalendar = minutesCalendar < 10 ? '0' + minutesCalendar : minutesCalendar;
    var currentTimeCalendar = hoursCalendar + ':' + minutesCalendar;
	let curentDate = dateCalend.getFullYear() + '-' + ((+dateCalend.getMonth()+1) < 10 ? ("0" + (+dateCalend.getMonth()+1)) : dateCalend.getMonth()) + '-' + (dateCalend.getDate() < 10 ? "0" + dateCalend.getDate() : dateCalend.getDate() )

    responseslotsdata = '';
    if (document.getElementsByName('slotRow').length > 0) {
        let elements = document.getElementsByName('slotRow');
        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].remove();
        }
    }

    let textvar = 0;
    let searchDate = document.getElementById('eventDate').value;
    document.getElementById('responseTextarea1').value = '{}';
    document.getElementById('responseTextarea2').value = `https://api.datsy.ru/api/main-events/?date=${searchDate}`;
    document.getElementById('responseTextarea3').value = 'getslotsinfo';

    // Click the 'sendResponse' element to trigger the DOMSubtreeModified event
    document.getElementById('sendResponse').click();

    // Add an event listener for the DOMSubtreeModified event
    document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
        // Get the 'getslotsinfo' attribute from the 'responseTextarea1' element
        const responsevar = document.getElementById('responseTextarea1').getAttribute('getslotsinfo');

        // Check if the 'getslotsinfo' attribute is not null
        if (responsevar) {
			arrayOfEvents = [];
            document.getElementById('outputcalendarfield').innerHTML = ''
            responseslotsdata = JSON.parse(responsevar);
            // console.log(responseslotsdata)
            document.getElementById('datenowtime').value = responseslotsdata.nowDateTime;

            let availableslotsentries = Object.entries(responseslotsdata.DataTimeSlot)
            for (let i = 0; i < availableslotsentries.length; i++) {
                if (availableslotsentries[i][0] != "00:00" && availableslotsentries[i][0] != "00:20" && availableslotsentries[i][0] != "00:40" && availableslotsentries[i][0] != "23:00" && availableslotsentries[i][0] != "23:20" && availableslotsentries[i][0] != "23:40" && availableslotsentries[i][0] != "01:00" && availableslotsentries[i][0] != "01:20" && availableslotsentries[i][0] != "01:40" && availableslotsentries[i][0] != "02:00" && availableslotsentries[i][0] != "02:20" && availableslotsentries[i][0] != "02:40" && availableslotsentries[i][0] != "03:00" && availableslotsentries[i][0] != "03:20" && availableslotsentries[i][0] != "03:40" && availableslotsentries[i][0] != "04:00" && availableslotsentries[i][0] != "04:20" && availableslotsentries[i][0] != "04:40" && availableslotsentries[i][0] != "05:00" && availableslotsentries[i][0] != "05:20" && availableslotsentries[i][0] != "05:40" && availableslotsentries[i][0] != "06:00" && availableslotsentries[i][0] != "06:20" && availableslotsentries[i][0] != "06:40" && availableslotsentries[i][0] != "07:00" && availableslotsentries[i][0] != "07:20" && availableslotsentries[i][0] != "07:40") {
                    console.log(availableslotsentries[i])


					if (availableslotsentries[i][1].EventList.length != 0) {
					  for(let k=0; k < Object.keys(availableslotsentries[i][1].EventList).length; k++) {
						arrayOfEvents.push({'eventId': Object.values(availableslotsentries[i][1].EventList)[k].id,
											'eventText': Object.values(availableslotsentries[i][1].EventList)[k].text,
											'slotTime' : Object.values(availableslotsentries[i][1].EventList)[k].slot,
											'slotDate' : Object.values(availableslotsentries[i][1].EventList)[k].new_date_slot});
						}
					} else { 					  
						for(let k=0; k < Object.keys(availableslotsentries[i][1].EventList).length; k++) {
						arrayOfEvents.push({'eventId': null,
											'eventText': null,
											'slotTime' : null,
											'slotDate' : null});
					  }
					}


                    textvar = '<span style = "background: #2058cb; border-radius:10px; padding-left: 5px; padding-right: 5px;">' + availableslotsentries[i][0] + '</span>' + ' ' + document.getElementById('eventDate').value
                    let tempor = document.createElement('p');
                    document.getElementById('outputcalendarfield').append(tempor);

                    if (availableslotsentries[i][1].CountEvent / availableslotsentries[i][1].CountSlot == 1) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: #ececec; font-weight:700; background:rgb(171 65 62); border:1px solid black; font-size:14px; height:25px; margin-bottom:6px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px;padding-top:2px; font-family: cursive; margin-right:5px;');
                    } else if (availableslotsentries[i][1].CountEvent / availableslotsentries[i][1].CountSlot == 0) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: #ececec; font-weight:700; background:rgb(62 158 83); border:1px solid black; font-size:14px; height:25px; margin-bottom:6px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px;padding-top:2px; font-family: cursive; margin-right:5px;');
                    } else if (availableslotsentries[i][1].CountEvent / availableslotsentries[i][1].CountSlot > 0 && availableslotsentries[i][1].CountEvent / availableslotsentries[i][1].CountSlot < 1) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: #ececec; font-weight:700; background:rgb(62 158 83); border:1px solid black; font-size:14px; height:25px; margin-bottom:6px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px;padding-top:2px; font-family: cursive; margin-right:5px;');
                        tempor.setAttribute('title', '⚠ Есть как занятые так и свободные слоты')
                    } else if (availableslotsentries[i][1].CountEvent == 0 && availableslotsentries[i][1].CountSlot == 0) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: #ececec; font-weight:700; background:rgb(171 65 62); border:1px solid black; font-size:14px; height:25px; margin-bottom:6px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px;padding-top:2px; font-family: cursive; margin-right:5px;');
                        tempor.setAttribute('title', '🚫 Свободных слотов изначально и не было')
                    } else if (availableslotsentries[i][1].AssignSlot == 0 && availableslotsentries[i][1].CountEvent == 0 && availableslotsentries[i][1].CountSlot == availableslotsentries[i][1].FreeSlot) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: #ececec; font-weight:700; background:rgb(171 65 62); border:1px solid black; font-size:14px; height:25px; margin-bottom:6px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px; padding-top:2px; font-family: cursive; margin-right:5px;');
                    } else if (availableslotsentries[i][1].FreeSlot < 0) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: #ececec; font-weight:700; background:rgb(171 65 62); border:1px solid black; font-size:14px; height:25px; margin-bottom:6px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px; padding-top:2px; font-family: cursive; margin-right:5px;');
                    }

                    if (compareTimes(availableslotsentries[i][0], currentTimeCalendar) <= 0 && eventDate == curentDate ) {
                        // document.getElementsByName('slotRow')[i].style.background = "rgb(171 65 62)";
						 tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: #cbcbcb; font-weight:700; background:rgb(126 113 113); border:1px solid black; font-size:14px; height:25px; margin-bottom:6px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px; padding-top:2px; font-family: cursive; margin-right:5px;');
                    }

                    tempor.setAttribute('name', 'slotRow');
					tempor.setAttribute('dlina',`${availableslotsentries[i][1].CountSlot}`)
                    tempor.innerHTML = textvar;

                }
            }
 
	let allRows = document.getElementsByName('slotRow')
		for (let i = 0; i < allRows.length; i++) {
			allRows[i].onclick = function() {
				
				  for (let j = 0; j < allRows.length; j++) {
					allRows[j].classList.remove('glowing-border-animation');
				  }
				
				allRows[i].classList.toggle('glowing-border-animation')
				let tempVarMatches  = [];
				if (document.getElementById('slotList').style.display == "none") {
					document.getElementById('slotList').style.display = ""
				}

				document.getElementById('hideSlot').onclick = function() {
					document.getElementById('slotList').style.display = "none"
				}

				document.getElementById('chosenSlot').textContent = allRows[i].textContent

				document.getElementById('slotData').innerHTML = ''
				for (let j=0; j<parseInt(allRows[i].getAttribute('dlina')); j++) {
					let testd = document.createElement('div')
					testd.style = "margin-top: 5px;"
					testd.innerHTML = '<input name="slotInfo" style="width: 505px;">' + ' ' + '<button name="saveToCalend">💾</button>' + ' ' + '<button name="deleteFromCalend">❌</button>'
					document.getElementById('slotData').appendChild(testd)
				}

				for (let z = 0; z < arrayOfEvents.length; z++) {
					if (arrayOfEvents[z].slotTime + ' ' + arrayOfEvents[z].slotDate == document.getElementById('chosenSlot').textContent) {
						tempVarMatches.push(arrayOfEvents[z])
						console.log(arrayOfEvents[z])
					} 
				}
				
				let spisok = document.getElementsByName('slotInfo');
				if (tempVarMatches.length !=0) {
					for (n=0; n < tempVarMatches.length; n++) {
						spisok[n].value = tempVarMatches[n].eventText
						spisok[n].title = tempVarMatches[n].eventId
					}
				}
				
				let saveBtns = document.getElementsByName('saveToCalend')
				let deleteBtns = document.getElementsByName('deleteFromCalend')
				let curSlotTime = document.getElementById('chosenSlot').textContent.split(' ')[0]
				let curSlotDate = document.getElementById('chosenSlot').textContent.split(' ')[1]
				for (let v=0; v<saveBtns.length; v++) {
					saveBtns[v].onclick  = function() {
						
						if (spisok[v].title =='') { // функция добавления нового слота
							document.getElementById('responseTextarea1').value = `{ 
								"headers": {
									"content-type": "application/x-www-form-urlencoded",
									"sec-fetch-mode": "cors",
									"sec-fetch-site": "same-site"
								  },
								  "referrer": "https://datsy.ru/",
								  "referrerPolicy": "strict-origin-when-cross-origin",
								  "body": "addinput=${spisok[v].value}&slotname=${curSlotTime}&date=${curSlotDate}",
								  "method": "POST",
								  "mode": "cors",
								  "credentials": "include"
							}`;
							document.getElementById('responseTextarea2').value = `https://api.datsy.ru/api/slot-event/add.php`;
							document.getElementById('responseTextarea3').value = '';
							document.getElementById('sendResponse').click();

							getTimeSlots()
							
						} else if (spisok[v].title !='') { //функция модификации информации в слоте
							document.getElementById('responseTextarea1').value = `{
								 "headers": {
									"content-type": "application/x-www-form-urlencoded",
									"sec-fetch-mode": "cors",
									"sec-fetch-site": "same-site"
								  },
								  "referrer": "https://datsy.ru/",
								  "referrerPolicy": "strict-origin-when-cross-origin",
								  "body": "event-text=${spisok[v].value}&save-slot=${spisok[v].title}",
								  "method": "POST",
								  "mode": "cors",
								  "credentials": "include"
							}`;
							document.getElementById('responseTextarea2').value = `https://api.datsy.ru/api/slot-event/save.php`;
							document.getElementById('responseTextarea3').value = '';
							document.getElementById('sendResponse').click();
							
							getTimeSlots()
						}
					}
				}
				
				for (let f=0; f<deleteBtns.length; f++) {
					deleteBtns[f].onclick  = function() { // функция удаления слота из календаря
						if (spisok[f].title !='') {
							document.getElementById('responseTextarea1').value = `{
							  "headers": {
								"content-type": "application/x-www-form-urlencoded",
								"sec-fetch-dest": "empty",
								"sec-fetch-mode": "cors",
								"sec-fetch-site": "same-site"
							  },
							  "referrer": "https://datsy.ru/",
							  "referrerPolicy": "strict-origin-when-cross-origin",
							  "body": "&deleteslot=${spisok[f].title}",
							  "method": "POST",
							  "mode": "cors",
							  "credentials": "include"
							}`;
							document.getElementById('responseTextarea2').value = `https://api.datsy.ru/api/slot-event/delete.php`;
							document.getElementById('responseTextarea3').value = '';
							document.getElementById('sendResponse').click();
							
							spisok[f].title = ''
							spisok[f].value = ''
							
							getTimeSlots()
						}
					}
				}

				
			}
		}

        }
    })
    document.getElementById('responseTextarea1').removeAttribute('getslotsinfo');
}

document.getElementById('datsyCalendar').onclick = function () {
    if (document.getElementById('AF_Calendar').style.display == "none") {
        document.getElementById('AF_Calendar').style.display = ""
		checkAuth()
		
        let getcurdate = new Date();
        let year = getcurdate.getFullYear();
        let month = String(getcurdate.getMonth() + 1).padStart(2, "0");
        let day = String(getcurdate.getDate()).padStart(2, "0");
        document.getElementById("eventDate").value = `${year}-${month}-${day}`;

    } else {
        document.getElementById('AF_Calendar').style.display = "none"
    }

}

document.getElementById('nextDay').onclick = function() { // обработчик нажатия на кнопку следующего дня
    let dateInput = document.getElementById('eventDate').value;
    let date = new Date(dateInput);
    date.setDate(date.getDate() + 1);
    let newDate = date.toISOString().split('T')[0];
    document.getElementById('eventDate').value = newDate;
	getTimeSlots()
}

document.getElementById('prevDay').onclick = function() { // обработчик нажатия на кнопку предыдущего дня
    let dateInput = document.getElementById('eventDate').value;
    let date = new Date(dateInput);
    date.setDate(date.getDate() - 1);
    let newDate = date.toISOString().split('T')[0];
    document.getElementById('eventDate').value = newDate;
	getTimeSlots()
}

document.getElementById('nowDay').onclick = function() { // обработчик нажатия на кнопку "сегодня"
    let now = new Date();
    let newDate = now.toISOString().split('T')[0];
    document.getElementById('eventDate').value = newDate;
	getTimeSlots()
}

document.getElementById('hidecalendar').onclick = function () {
    document.getElementById('AF_Calendar').style.display = "none"
}

document.getElementById('clearcalendar').onclick = function () {
	document.getElementById('slotList').style.display = "none"
    document.getElementById('outputcalendarfield').innerHTML = ''
    if (document.getElementsByName('slotRow').length > 0) {
        let elements = document.getElementsByName('slotRow');
        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].remove();
        }
    }
    console.log("Clear")
}

document.getElementById('refreshcalendar').onclick = function () {
		checkAuth()
		document.getElementById('slotList').style.display = "none"
    console.log("Refresh")
}

document.getElementById('opendatsy').onclick = function () {
    window.open("https://datsy.ru/")
}

