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
								<input type="date" id="eventDate" style="width:100px; text-align:center; background: blanchedalmond; font-weight: 700;"></input>
								<button id="getCalendarData" style="margin-left: 10px; margin-bottom: 5px;">🔎</button>
								<label style="margin-left: 5px; margin-right: 5px; color: bisque;">Доступное время по состоянию на: </label>
								<input type="text" id="datenowtime" style="text-align:center;" disabled></input>
						</div>

						<div id="outputcalendarfield" style="color:bisque; display:flex; flex-wrap:wrap; justify-content: center; align-items: center; padding-bottom: 5px;">
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

function compareTimes(time1, time2) {
    var date1 = new Date("1970-01-01 " + time1);
    var date2 = new Date("1970-01-01 " + time2);
    return date1.getTime() - date2.getTime();
}

document.getElementById('datsyCalendar').onclick = function () {
    if (document.getElementById('AF_Calendar').style.display == "none") {
        document.getElementById('AF_Calendar').style.display = ""

        let getcurdate = new Date();
        let year = getcurdate.getFullYear();
        let month = String(getcurdate.getMonth() + 1).padStart(2, "0");
        let day = String(getcurdate.getDate()).padStart(2, "0");
        document.getElementById("eventDate").value = `${year}-${month}-${day}`;

    } else {
        document.getElementById('AF_Calendar').style.display = "none"
    }

}

let responseslotsdata;
document.getElementById('getCalendarData').onclick = function () {
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
            document.getElementById('outputcalendarfield').innerHTML = ''
            responseslotsdata = JSON.parse(responsevar);
            console.log(responseslotsdata)
            document.getElementById('datenowtime').value = responseslotsdata.nowDateTime;

            let availableslotsentries = Object.entries(responseslotsdata.DataTimeSlot)
            for (let i = 0; i < availableslotsentries.length; i++) {
                if (availableslotsentries[i][0] != "00:00" && availableslotsentries[i][0] != "00:20" && availableslotsentries[i][0] != "00:40" && availableslotsentries[i][0] != "23:00" && availableslotsentries[i][0] != "23:20" && availableslotsentries[i][0] != "23:40" && availableslotsentries[i][0] != "01:00" && availableslotsentries[i][0] != "01:20" && availableslotsentries[i][0] != "01:40" && availableslotsentries[i][0] != "02:00" && availableslotsentries[i][0] != "02:20" && availableslotsentries[i][0] != "02:40" && availableslotsentries[i][0] != "03:00" && availableslotsentries[i][0] != "03:20" && availableslotsentries[i][0] != "03:40" && availableslotsentries[i][0] != "04:00" && availableslotsentries[i][0] != "04:20" && availableslotsentries[i][0] != "04:40" && availableslotsentries[i][0] != "05:00" && availableslotsentries[i][0] != "05:20" && availableslotsentries[i][0] != "05:40" && availableslotsentries[i][0] != "06:00" && availableslotsentries[i][0] != "06:20" && availableslotsentries[i][0] != "06:40" && availableslotsentries[i][0] != "07:00" && availableslotsentries[i][0] != "07:20" && availableslotsentries[i][0] != "07:40") {
                    console.log(availableslotsentries[i])

                    textvar = availableslotsentries[i][0] + ' ' + document.getElementById('eventDate').value
                    let tempor = document.createElement('p');
                    document.getElementById('outputcalendarfield').append(tempor);

                    if (availableslotsentries[i][1].CountEvent / availableslotsentries[i][1].CountSlot == 1) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: white; font-weight:700; background:rgb(171 65 62); border:1px solid; font-size:14px; height:25px; margin-bottom:2px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px;padding-top:2px;');
                    } else if (availableslotsentries[i][1].CountEvent / availableslotsentries[i][1].CountSlot == 0) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: white; font-weight:700; background:rgb(62 158 83); border:1px solid; font-size:14px; height:25px; margin-bottom:2px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px;padding-top:2px;');
                    } else if (availableslotsentries[i][1].CountEvent / availableslotsentries[i][1].CountSlot > 0 && availableslotsentries[i][1].CountEvent / availableslotsentries[i][1].CountSlot < 1) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: white; font-weight:700; background:rgb(62 158 83); border:1px solid; font-size:14px; height:25px; margin-bottom:2px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px;padding-top:2px;');
                        tempor.setAttribute('title', '⚠ Есть как занятые так и свободные слоты')
                    } else if (availableslotsentries[i][1].CountEvent == 0 && availableslotsentries[i][1].CountSlot == 0) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: white; font-weight:700; background:rgb(171 65 62); border:1px solid; font-size:14px; height:25px; margin-bottom:2px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px;padding-top:2px;');
                        tempor.setAttribute('title', '🚫 Свободных слотов изначально и не было')
                    } else if (availableslotsentries[i][1].AssignSlot == 0 && availableslotsentries[i][1].CountEvent == 0 && availableslotsentries[i][1].CountSlot == availableslotsentries[i][1].FreeSlot) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: white; font-weight:700; background:rgb(171 65 62); border:1px solid; font-size:14px; height:25px; margin-bottom:2px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px; padding-top:2px;');
                    } else if (availableslotsentries[i][1].FreeSlot < 0) {
                        tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: white; font-weight:700; background:rgb(171 65 62); border:1px solid; font-size:14px; height:25px; margin-bottom:2px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px; padding-top:2px;');
                    }

                    if (compareTimes(availableslotsentries[i][0], currentTimeCalendar) < 0 && eventDate == curentDate ) {
                        // document.getElementsByName('slotRow')[i].style.background = "rgb(171 65 62)";
						 tempor.setAttribute('style', 'width: 32%; cursor:pointer; color: white; font-weight:700; background:rgb(171 65 62); border:1px solid; font-size:14px; height:25px; margin-bottom:2px; text-align:center; text-shadow:rgb(0 0 0 / 75%) 1px 2px 5px; padding-top:2px;');
                    }
					
                    tempor.setAttribute('name', 'slotRow');
                    tempor.textContent = textvar;

                }
            }
        }
    })
    document.getElementById('responseTextarea1').removeAttribute('getslotsinfo');
}

document.getElementById('hidecalendar').onclick = function () {
    document.getElementById('AF_Calendar').style.display = "none"
}

document.getElementById('clearcalendar').onclick = function () {
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
    console.log("Refresh")
}

document.getElementById('opendatsy').onclick = function () {
    window.open("https://datsy.ru/")
}

