var win_WFMOpercnt = `<div">
						<span style="cursor: -webkit-grab;">
							<div>
								<button class="btn-main" style="width:50px;background: #228B22;font-size: 15px;margin: 5px;padding: 5px;" id="hideWFMHOperCnt">hide</button>
								<button class="btn-main" id="clearallfieldswfmopercnt">🧹</button>
							</div>
						</span>	
						
						<div id="main_wfmopercnt">
						   <div style="margin: 5px; width: 550px" id="date_box_opercnt">
								 <span style="color:bisque; float:center; margin-top:5px; margin-left:10px;">Нач. дата <input type="date" style="color:black; margin-left:20px;  width:125px;" id="ishodDate"></span>
								 <button class="btn-main" id="minusoneday">◀</button>
								 <button class="btn-main" id="plusoneday">▶</button>
								 <span style="color:bisque; margin-top:2px; float:right; margin-right:10px; height:28px;">Конеч. дата <input type="date" style="color:black; float:right; margin-left:20px; margin-right:10px; width:125px;" id="konezDate"</span>
							</div>
							
							<button class="btn-main" style="margin-left: 40%; padding: 5px; border-radius: 20px;" id="letsfindit">Search and calc</button>
							
							<div id="analyzedoutput" style="color:bisque; margin-left: 10px;">
							</div>
							
							<table id="hoursandopers" style="color:bisque; position:absolute; top:100px; left:380px;">
							  <thead>
								<tr>
								  <th>Время</th>
								  <th>Количество операторов</th>
								</tr>
							  </thead>
							  <tbody id="dataoutputcount">
							  </tbody>
							</table>

						</div>
				   </div>`;

if (localStorage.getItem('winTopWFMOperCnt') == null) { //additional menu
    localStorage.setItem('winTopWFMOperCnt', '120');
    localStorage.setItem('winLeftWFOperCnt', '295');
}

let wintWFMOperCnt = document.createElement('div');
document.body.append(wintWFMOperCnt);
wintWFMOperCnt.className = 'wintInitializeWFMOperCnt'
wintWFMOperCnt.style = 'display:none;  top: ' + localStorage.getItem('winTopWFMOperCnt') + 'px; left: ' + localStorage.getItem('winLeftWFOperCnt') + 'px;';
wintWFMOperCnt.setAttribute('id', 'Curators_WFMOperCnt');
wintWFMOperCnt.innerHTML = win_WFMOpercnt;

var listenerWFMOperCnt = function (e, a) {
    wintWFMOperCnt.style.left = Number(e.clientX - myXWFMOperCnt) + "px";
    wintWFMOperCnt.style.top = Number(e.clientY - myYWFMOperCnt) + "px";
    localStorage.setItem('winTopWFMOperCnt', String(Number(e.clientY - myYWFMOperCnt)));
    localStorage.setItem('winLeftWFOperCnt', String(Number(e.clientX - myXWFMOperCnt)));
};
wintWFMOperCnt.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myXWFMOperCnt = a.layerX;
        window.myYWFMOperCnt = a.layerY;
        document.addEventListener('mousemove', listenerWFMOperCnt);
    }
}
wintWFMOperCnt.onmouseup = function () { document.removeEventListener('mousemove', listenerWFMOperCnt); }

let resultdata;
let converteddata;
let worktimesarray = [];

	function parseTime(timeString) {
		    const now = new Date();
		if (!timeString) {
			console.error('Invalid timeString provided:', timeString);
			return;
		}

		const [hours, minutes] = timeString.split(':').map(Number);
		return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
	}

  function formatTime(date) {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

function hourEnd(hour) {
    const hourStart = parseTime(hour);
    const hourEnd = new Date(hourStart.getTime() + 30 * 60 * 1000); // 30 minutes for half-hourly interval
    
    // Handle the edge case for 23:30
    if (hourEnd.getHours() === 0) {
        hourEnd.setHours(24);
    }

    return formatTime(hourEnd);
}

function countOperatorsByHour(arr, start, end) {
    const startDate = parseTime(start);
    const endDate = parseTime(end);
    const counts = {};

    for (const operator of arr) {
        const scheduleStartDate = parseTime(operator.start);
        let scheduleEndDate = parseTime(operator.end);
        if (scheduleStartDate > scheduleEndDate) {
            scheduleEndDate.setDate(scheduleEndDate.getDate() + 1);
        }

        let currentDate = new Date(scheduleStartDate);
        while (currentDate < scheduleEndDate) {
            const halfHourStart = new Date(currentDate);
            const halfHourEnd = new Date(currentDate.getTime() + 30 * 60 * 1000);
            
            if (halfHourStart < startDate) {
                halfHourStart.setTime(startDate.getTime());
            }
            if (halfHourEnd > endDate) {
                halfHourEnd.setTime(endDate.getTime());
            }
            
            if (halfHourStart < halfHourEnd) {
                let count = 1;

                for (const breakEvent of operator.breaks) {
                    if (parseTime(breakEvent.start) < halfHourEnd && parseTime(breakEvent.end) > halfHourStart) {
                        count = 0;
                        break;
                    }
                }

                for (const vigruzkaEvent of operator.vigruzkas) {
                    if (parseTime(vigruzkaEvent.start) < halfHourEnd && parseTime(vigruzkaEvent.end) > halfHourStart) {
                        count = 0;
                        break;
                    }
                }
				
				for (const other_workEvent of operator.other_works) {
                    if (parseTime(other_workEvent.start) < halfHourEnd && parseTime(other_workEvent.end) > halfHourStart) {
                        count = 0;
                        break;
                    }
                }

				for (const FMEvent of operator.FMs) {
                    if (parseTime(FMEvent.start) < halfHourEnd && parseTime(FMEvent.end) > halfHourStart) {
                        count = 0;
                        break;
                    }
                }	

				for (const soglotEvent of operator.soglots) {
                    if (parseTime(soglotEvent.start) < halfHourEnd && parseTime(soglotEvent.end) > halfHourStart) {
                        count = 0;
                        break;
                    }
                }	

				for (const meetingEvent of operator.meetings) {
                    if (parseTime(meetingEvent.start) < halfHourEnd && parseTime(meetingEvent.end) > halfHourStart) {
                        count = 0;
                        break;
                    }
                }	

				for (const trainingEvent of operator.trainings) {
                    if (parseTime(trainingEvent.start) < halfHourEnd && parseTime(trainingEvent.end) > halfHourStart) {
                        count = 0;
                        break;
                    }
                }

				for (const vacationEvent of operator.vacations) {
                    if (parseTime(vacationEvent.start) < halfHourEnd && parseTime(vacationEvent.end) > halfHourStart) {
                        count = 0;
                        break;
                    }
                }

                // Повторите аналогичный процесс для других интервалов, таких как meetings, trainings и т. д.

                if (parseTime(operator.other_work_start) < halfHourEnd && parseTime(operator.other_work_end) > halfHourStart) {
                    count = 0;
                }

                const halfHour = formatTime(halfHourStart);
                counts[halfHour] = (counts[halfHour] || 0) + count;
            }

            currentDate.setTime(currentDate.getTime() + 30 * 60 * 1000);
        }
    }

    const tbody = document.querySelector('#dataoutputcount');
    for (const halfHour in counts) {
        const row = document.createElement('tr');
        const hourCell = document.createElement('td');
        hourCell.textContent = `${halfHour} - ${hourEnd(halfHour)}`;
        hourCell.style = "user-select:none";
        const countCell = document.createElement('td');
        countCell.textContent = counts[halfHour];
        countCell.style = "text-align: center; color:DeepSkyBlue";
        row.appendChild(hourCell);
        row.appendChild(countCell);
        tbody.appendChild(row);
    }
}


function searchitnow() {
    const options = { timeZone: "Europe/Moscow", hour12: false, hour: "2-digit", minute: "2-digit" };
    const dataOutputCount = document.querySelector('#dataoutputcount');
    const ishodDateElem = document.getElementById('ishodDate');
    const konezDateElem = document.getElementById('konezDate');
    const outputVar = document.getElementById('analyzedoutput');
    const responseTextarea1 = document.getElementById('responseTextarea1');
    
    dataOutputCount.innerHTML = '';
    worktimesarray = [];
    activeoperscounter = 0;

    const beginDate = ishodDateElem.value;
    const endDate = konezDateElem.value;

	outputVar.innerHTML = '';
	responseTextarea1.value = `{}`;
	document.getElementById('responseTextarea2').value = `https://wfm.skyeng.ru/api/user/operators/manager/groups?groups=0d3ffb44-c343-4156-a34e-d8e117c106fb&startDate=${beginDate}T21%3A00%3A00.000Z&endDate=${endDate}T20%3A59%3A59.999Z`;
	document.getElementById('responseTextarea3').value = 'operslist';
	document.getElementById('sendResponse').click();


    responseTextarea1.addEventListener("DOMSubtreeModified", function() {
        const resultdata = responseTextarea1.getAttribute('operslist');
        
        if (!resultdata) return;

        const converteddata = JSON.parse(resultdata);
        responseTextarea1.removeAttribute('operslist');

		converteddata.groups[0].operators.forEach(element => {
				let newObjOptions = {
					operator: `${element.name} ${element.surname}`,
					start: '',
					end: '',
					breaks: [],
					vigruzkas: [],
					other_works: [],
					FMs: [],
					soglots: [],
					meetings: [],
					trainings: [],
					vacations: []
				};

				 if (element.schedules.length > 0) {
							newObjOptions.start = new Date(element.schedules[0].start).toLocaleString("ru-RU", options);
							newObjOptions.end = new Date(element.schedules[0].end).toLocaleString("ru-RU", options);

							element.events.forEach(event => {
								const startTime = new Date(event.start).toLocaleString("ru-RU", options);
								const endTime = new Date(event.end).toLocaleString("ru-RU", options);

								switch (event.title) {
									case "Перерыв/Обед":
										newObjOptions.breaks.push({ start: startTime, end: endTime });
										break;
									case "Работа с выгрузкой":
										newObjOptions.vigruzkas.push({ start: startTime, end: endTime });
										break;
									case "Работа в другом отделе":	
										newObjOptions.other_works.push({ start: startTime, end: endTime });
										break;
									case "Форс-мажор":	
										newObjOptions.FMs.push({ start: startTime, end: endTime });
										break;
									case "Согласованное отсутствие":
										newObjOptions.soglots.push({ start: startTime, end: endTime });
									break;
									case "Встреча":
										newObjOptions.meetings.push({ start: startTime, end: endTime });
									break;
									case "Тренинг":
										newObjOptions.trainings.push({ start: startTime, end: endTime });
									break;
									case "Отпуск":
										newObjOptions.vacations.push({ start: startTime, end: endTime });
									break;
                    }
                });

                if (element.events.length === 0) {
                    outputVar.innerHTML += `<span style="color:DeepSkyBlue">[СУ/Нет перерыва] ${element.name} ${element.surname}</span><br>`;
                } else if (element.events[0].title === "Отпуск") {
                    outputVar.innerHTML += `<span style="color:coral">[Отпуск] ${element.name} ${element.surname}</span><br>`;
                } else if (element.events[0].title === "Перерыв по болезни") {
                    outputVar.innerHTML += `<span style="color:coral">[Заболел] ${element.name} ${element.surname}</span><br>`;
                } else {
                    outputVar.innerHTML += `<span style="color:MediumSpringGreen">${element.name} ${element.surname}</span><br>`;
                }
                
				worktimesarray.push(newObjOptions);
                activeoperscounter++;
            }
        });

        outputVar.innerHTML += `Всего активных операторов: ${activeoperscounter}`;
        worktimesarray.sort((a, b) => a.start.localeCompare(b.start));
        countOperatorsByHour(worktimesarray, "07:00", "24:00");
    });
}




document.getElementById('wfmopercounter').onclick = function() {
    document.getElementById('Curators_WFMOperCnt').style.display =''
	document.getElementById('Curators_MainMenu').style.display = 'none'

	
		let getcurdate = new Date();
		let year = getcurdate.getFullYear();
		let month = String(getcurdate.getMonth() + 1).padStart(2, "0");
		let day = String(getcurdate.getDate()).padStart(2, "0");

		let lastDayOfPrevMonth = new Date(year, getcurdate.getMonth(), 0).getDate();
		let fromDate = new Date(year, getcurdate.getMonth(), day - 1);
		let toDate = new Date(year, getcurdate.getMonth(), day);

		if (day === "01") {
		  // set date range to previous month
		  fromDate = new Date(year, getcurdate.getMonth() - 1, lastDayOfPrevMonth);
		  toDate = new Date(year, getcurdate.getMonth(), 1);
		}

		document.getElementById("ishodDate").value = `${fromDate.getFullYear()}-${String(fromDate.getMonth() + 1).padStart(2, "0")}-${String(fromDate.getDate()).padStart(2, "0")}`;
		document.getElementById("konezDate").value = `${toDate.getFullYear()}-${String(toDate.getMonth() + 1).padStart(2, "0")}-${String(toDate.getDate()).padStart(2, "0")}`;
		
		document.getElementById('letsfindit').onclick = searchitnow;
				
		document.getElementById('hideWFMHOperCnt').onclick = function() {
			document.getElementById('Curators_WFMOperCnt').style.display = "none"
		}
		
		document.getElementById('plusoneday').onclick = function() { // обработчик нажатия на кнопку следующего дня
			let dateInputIshod = document.getElementById('ishodDate').value;
			let dateInputKonez = document.getElementById('konezDate').value;
			let datestart = new Date(dateInputIshod);
			let dateend = new Date(dateInputKonez);
			datestart.setDate(datestart.getDate() + 1);
			dateend.setDate(dateend.getDate() + 1);
			let newDateStart = datestart.toISOString().split('T')[0];
			let newDateEnd = dateend.toISOString().split('T')[0];
			document.getElementById('ishodDate').value = newDateStart;
			document.getElementById('konezDate').value = newDateEnd;
			searchitnow()
		}

		document.getElementById('minusoneday').onclick = function() { // обработчик нажатия на кнопку предыдущего дня
			let dateInputIshod = document.getElementById('ishodDate').value;
			let dateInputKonez = document.getElementById('konezDate').value;
			let datestart = new Date(dateInputIshod);
			let dateend = new Date(dateInputKonez);
			datestart.setDate(datestart.getDate() - 1);
			dateend.setDate(dateend.getDate() - 1);
			let newDateStart = datestart.toISOString().split('T')[0];
			let newDateEnd = dateend.toISOString().split('T')[0];
			document.getElementById('ishodDate').value = newDateStart;
			document.getElementById('konezDate').value = newDateEnd;
			searchitnow()
		}
}