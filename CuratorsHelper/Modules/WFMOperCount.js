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
let tmpDateBreakStart;
let tmpDateBreakEnd;
let tmpOtherWorkStart;
let tmpOtherWorkEnd;
let activeoperscounter;
let tmpVigruzkaStart;
let tmpVigruzkaEnd;
let tmpFMStart;
let tmpFMEnd;

function countOperatorsByHour(arr, start, end) {
  const now = new Date();
  const startDate = parseTime(start);
  const endDate = parseTime(end);

  const counts = {};

  for (const { start, end, break_start, break_end, other_work_start, other_work_end, vigruzka_start, vigruzka_end } of arr) {
    const scheduleStartDate = parseTime(start);
    const scheduleEndDate = parseTime(end);
    if (scheduleStartDate > scheduleEndDate) {
      // the schedule ends on the next day
      scheduleEndDate.setDate(scheduleEndDate.getDate() + 1);
    }

    const breakStartDate = parseTime(break_start);
    const breakEndDate = parseTime(break_end);
    const otherStartDate = parseTime(other_work_start);
    const otherEndDate = parseTime(other_work_end);
    const vigruzkaStartDate = parseTime(vigruzka_start);
    const vigruzkaEndDate = parseTime(vigruzka_end);

    // iterate over each hour in the schedule
    let currentDate = new Date(scheduleStartDate);
    while (currentDate < scheduleEndDate) {
      const hourStart = new Date(currentDate);
      const hourEnd = new Date(currentDate.getTime() + 60 * 60 * 1000);
      if (hourStart < startDate) {
        hourStart.setTime(startDate.getTime());
      }
      if (hourEnd > endDate) {
        hourEnd.setTime(endDate.getTime());
      }
      if (hourStart < hourEnd) {
        let count = 0;
        if ((breakStartDate <= hourStart && breakEndDate >= hourEnd) ||
            (vigruzkaStartDate <= hourStart && vigruzkaEndDate >= hourEnd)) {
          count = 0;
        } else {
          let operatorWorks = true;
          if (otherStartDate <= hourStart && otherEndDate >= hourEnd) {
            operatorWorks = false;
          }
          if (operatorWorks) {
            count = 1;
          }
        }
        const hour = formatTime(hourStart);
        counts[hour] = (counts[hour] || 0) + count;
      }
      currentDate.setTime(currentDate.getTime() + 60 * 60 * 1000);
    }
  }

  const tbody = document.querySelector('#dataoutputcount');
  for (const hour in counts) {
    const row = document.createElement('tr');
    const hourCell = document.createElement('td');
    hourCell.textContent = `${hour} - ${hourEnd(hour)}`;
	hourCell.style ="user-select:none";
    const countCell = document.createElement('td');
    countCell.textContent = counts[hour];
    countCell.style = "text-align: center; color:DeepSkyBlue"
    row.appendChild(hourCell);
    row.appendChild(countCell);
    tbody.appendChild(row);
  }

  function parseTime(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
  }

  function formatTime(date) {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  function hourEnd(hour) {
    const hourStart = parseTime(hour);
    const hourEnd = new Date(hourStart.getTime() + 60 * 60 * 1000);
    return formatTime(hourEnd);
  }
}

function searchitnow() {
			let getdatatoclear = document.querySelector('#dataoutputcount')
			getdatatoclear.innerHTML=''
			worktimesarray = [];
			const options = { timeZone: "Europe/Moscow", hour12: false, hour: "2-digit", minute: "2-digit" };
			activeoperscounter = 0;
			let beginDate = document.getElementById('ishodDate').value
			let endDate = document.getElementById('konezDate').value
			let outputvar = document.getElementById('analyzedoutput');
			outputvar.innerHTML=''
				
			document.getElementById('responseTextarea1').value = `{}`
			document.getElementById('responseTextarea2').value = `https://wfm.skyeng.ru/api/user/operators/manager/groups?groups=0d3ffb44-c343-4156-a34e-d8e117c106fb&startDate=${beginDate}T21%3A00%3A00.000Z&endDate=${endDate}T20%3A59%3A59.999Z`
			document.getElementById('responseTextarea3').value = 'operslist'
			document.getElementById('sendResponse').click()

			document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
				resultdata = document.getElementById('responseTextarea1').getAttribute('operslist');
				if (resultdata != null) {
					converteddata = JSON.parse(resultdata);
					console.log(converteddata)
					document.getElementById('responseTextarea1').removeAttribute('operslist')
					
					converteddata.groups[0].operators.forEach(function(element) {
						if(element.schedules.length>0) {
							if(element.events.length>0 && element.events[0].title !="Отпуск" && element.events[0].title != "Перерыв по болезни") {
								 element.events.forEach(function(element) {
									 if (element.title == "Перерыв/Обед") {
										 tmpDateBreakStart = new Date(element.start).toLocaleString("ru-RU", options)
										 tmpDateBreakEnd = new Date(element.end).toLocaleString("ru-RU", options)
									 } else if (element.title == "Работа с выгрузкой") {
										 tmpVigruzkaStart = new Date(element.start).toLocaleString("ru-RU", options)
										 tmpVigruzkaEnd = new Date(element.end).toLocaleString("ru-RU", options)
									 } else if (element.title == "Работа в другом отделе") {
										 tmpOtherWorkStart = new Date(element.start).toLocaleString("ru-RU", options)
										 tmpOtherWorkEnd = new Date(element.end).toLocaleString("ru-RU", options)
									 } else if (element.title == "Форс-мажор") {
										 tmpFMStart = new Date(element.start).toLocaleString("ru-RU", options)
										 tmpFMEnd = new Date(element.end).toLocaleString("ru-RU", options)
									 }
								 }) 
									 

							let tmpDateBegin = new Date(element.schedules[0].start).toLocaleString("ru-RU", options);
							let tmpDateEnd = new Date(element.schedules[0].end).toLocaleString("ru-RU", options);
							const newObjOptions = {
							  operator: element.name + ' ' + element.surname,
							  start: tmpDateBegin,
							  end: tmpDateEnd,
							  break_start:tmpDateBreakStart,
							  break_end:tmpDateBreakEnd,
							  vigruzka_start:tmpVigruzkaStart,
							  vigruzka_end:tmpVigruzkaEnd,
							  other_work_start:tmpOtherWorkStart == undefined ? "05:00" : tmpOtherWorkStart,
							  other_work_end:tmpOtherWorkEnd == undefined ? "06:00" : tmpOtherWorkEnd,
							  FM_start:tmpFMStart == undefined ? "05:00" :  tmpFMStart,
							  FM_end:tmpFMEnd == undefined ? "06:00"  : tmpFMEnd
							};
							worktimesarray.push(newObjOptions)
							
							activeoperscounter++;
							outputvar.innerHTML += '<span style="color:MediumSpringGreen">' + element.name + ' ' + element.surname + '</span>' + '<br>'
							console.log(element)
							} else if(element.events.length==0)  {
								outputvar.innerHTML += '<span style="color:DeepSkyBlue">[СУ/Нет перерыва]' + element.name + ' ' + element.surname + '</span>' + '<br>'
								activeoperscounter++								
								
							let tmpDateBegin = new Date(element.schedules[0].start).toLocaleString("ru-RU", options);
							let tmpDateEnd = new Date(element.schedules[0].end).toLocaleString("ru-RU", options);
							const newObjOptions = {
							  operator: element.name + ' ' + element.surname,
							  start: tmpDateBegin,
							  end: tmpDateEnd,
							  break_start: "05:00",
							  break_end: "06:00",
							  other_work_start:"05:00",
							  other_work_end:"06:00",
							  vigruzka_start:"05:00",
							  vigruzka_end:"06:00",
							  FM_start:"05:00",
							  FM_end:"06:00"
							};
							worktimesarray.push(newObjOptions)
							} else if (element.events[0].title =="Отпуск") {
								outputvar.innerHTML += '<span style="color:coral">[Отпуск]' + element.name + ' ' + element.surname + '</span>' + '<br>'	
							} else if ( element.events.length>0  && element.events[0].title == "Перерыв по болезни") {
								outputvar.innerHTML += '<span style="color:coral">[Заболел]' + element.name + ' ' + element.surname + '</span>' + '<br>'	
							}
						} 
					})
						outputvar.innerHTML += "Всего активных операторов: " + activeoperscounter
						worktimesarray = worktimesarray.sort((a, b) => a.start.localeCompare(b.start));
						countOperatorsByHour(worktimesarray, "07:00", "24:00")
				}
			})
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