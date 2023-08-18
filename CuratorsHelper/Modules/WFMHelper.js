var win_WFMHelper = `<div">
						<span style="cursor: -webkit-grab;">
							<div>
								<button class="btn-main" style="width:50px;background: #228B22;font-size: 15px;margin: 5px;padding: 5px;" id="hideWFMHelper">hide</button>
								<button class="btn-main" id="clearallfields">🧹</button>
							</div>
						</span>	
						
						<div id="addOperToList">
						
							    <ul id="humansList">
									<li><label name="selectAllWorkersByChanges" style="background-color:Crimson; color:white; padding:2px; border: 1px solid black; padding-left:5px; padding-right:5px;">2/2 | Верхняя смена</label></li>
										<li><label title="⏰ 07:00-19:00 🍔 12:15-13:30"><input type="checkbox" name="upper" value="Тарасова Наталья">Тарасова Наталья</label></li>								
										<li><label title="⏰ 08:00-20:00 🍔 13:45-15:00"><input type="checkbox" name="upper" value="Зубарев Дмитрий">Зубарев Дмитрий</label></li>
										<li><label title="⏰ 08:00-20:00 🍔 14:45-16:00"><input type="checkbox" name="upper" value="Радченко Александр">Радченко Александр</label></li>	
										<li><label title="⏰ 10:00-22:00 🍔 15:30-16:45"><input type="checkbox" name="lower" value="Лукач Дарья">Лукач Дарья</label></li>
										<li><label title="⏰ 10:00-22:00 🍔 15:45-17:00"><input type="checkbox" name="lower" value="Приблуда Константин">Приблуда Константин</label></li>										
										<li><label title="⏰ 12:00-00:00 🍔 16:45-18:00"><input type="checkbox" name="upper" value="Артемьев Сергей">Артемьев Сергей</label></li>
									<li><label name="selectAllWorkersByChanges" style="background-color:DeepSkyBlue; text-align:center; font-weight:700; color:black; padding:2px; padding-left:10px; padding-right:10px; border: 1px solid black;">2/2 | Нижняя смена</label></li>
										<li><label title="⏰ 07:00-19:00 🍔 12:45-14:00"><input type="checkbox" name="lower" value="Шеремет Александр">Шеремет Александр</label></li>									
										<li><label title="⏰ 08:00-20:00 🍔 13:45-15:00"><input type="checkbox" name="upper" value="Изотеев Даниил">Изотеев Даниил</label></li>
										<li><label title="⏰ 08:00-20:00 🍔 13:45-15:00"><input type="checkbox" name="lower" value="Медяник Олег">Медяник Олег</label></li>
										<li><label title="⏰ 08:00-20:00 🍔 14:45-16:00 "><input type="checkbox" name="lower" value="Ромашов Даниил">Ромашов Даниил</label></li>
										<li><label title="⏰ 11:00-23:00 🍔 15:45-17:00"><input type="checkbox" name="lower" value="Зурнин Павел">Зурнин Павел</label></li>
										<li><label title="⏰ 12:00-00:00 🍔 16:45-18:00"><input type="checkbox" name="lower" value="Бахтын Ростислав">Бахтын Ростислав</label></li>
									<li><label style="background-color:MediumSeaGreen; text-align:center; font-weight:700; color:black; padding:2px; padding-left:45px; padding-right:45px; border: 1px solid black;">5/2 смена</label></li>
										<li><label title="ПН-ПТ ⏰ 07:00-16:00"><input type="checkbox" name="5days" value="Колесников Валерий">Колесников Валерий</label></li>
										<li><label title="ПН-ПТ ⏰ 15:00-24:00"><input type="checkbox" name="5days" value="Цой Анатолий">Цой Анатолий</label></li>
										<li><label title="ПН-ПТ ⏰ 13:00-22:00"><input type="checkbox" name="5days" value="Сачковский Кирилл">Сачковский Кирилл</label></li>
										<li><label title="ПН-СР, СБ-ВС ⏰ 07:00-16:00"><input type="checkbox" name="5days" value="Аймахани Бек">Аймахани Бек</label></li>
										<li><label title="ПН-ПТ ⏰ 14:00-23:00"><input type="checkbox" name="5days" value="Наливайко Полина">Наливайко Полина</label></li>
										<li><label title=""><input type="checkbox" name="5days" value="---">---</label></li>

								</ul>
							
							<span style="color:bisque; float:center; margin-top:5px; margin-left:10px;">1 раб день в месяце <input type="date" style="color:black; margin-left:20px;  width:125px;" name="StartData" id="dateFirst"></span>
														
							<button id="addToOperatorsArrayDay">Add 1 day</button>
							<button id="addToOperatorsArrayMonth">Add all month</button>
							
							<div style="color:bisque">
							  <label><input type="checkbox" name="days[]" value="ПН"> ПН</label>
							  <label><input type="checkbox" name="days[]" value="ВТ"> ВТ</label>
							  <label><input type="checkbox" name="days[]" value="СР"> СР</label>
							  <label><input type="checkbox" name="days[]" value="ЧТ"> ЧТ</label>
							  <label><input type="checkbox" name="days[]" value="ПТ"> ПТ</label>
							  <label><input type="checkbox" name="days[]" value="СБ"> СБ</label>
							  <label><input type="checkbox" name="days[]" value="ВС"> ВС</label>
							 <button id="addToOperatorsArrayMonth5DaysWork">Add regulary</button>
							</div>
							  
							
						</div>
					

						<div>
							<table id="calendarTable"></table>
						</div>

				   </div>`;

if (localStorage.getItem('winTopWFMHelper') == null) { //additional menu
    localStorage.setItem('winTopWFMHelper', '120');
    localStorage.setItem('winLeftWFMHelper', '295');
}

let wintWFMHelper = document.createElement('div');
document.body.append(wintWFMHelper);
wintWFMHelper.className = 'wintInitializeWFM'
wintWFMHelper.style = 'display:none;  top: ' + localStorage.getItem('winTopWFMHelper') + 'px; left: ' + localStorage.getItem('winLeftWFMHelper') + 'px;';
wintWFMHelper.setAttribute('id', 'Curators_WFM');
wintWFMHelper.innerHTML = win_WFMHelper;

var listenerWFM = function (e, a) {
    wintWFMHelper.style.left = Number(e.clientX - myXWFM) + "px";
    wintWFMHelper.style.top = Number(e.clientY - myYWFM) + "px";
    localStorage.setItem('winTopWFMHelper', String(Number(e.clientY - myYWFM)));
    localStorage.setItem('winLeftWFMHelper', String(Number(e.clientX - myXWFM)));
};
wintWFMHelper.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myXWFM = a.layerX;
        window.myYWFM = a.layerY;
        document.addEventListener('mousemove', listenerWFM);
    }
}
wintWFMHelper.onmouseup = function () { document.removeEventListener('mousemove', listenerWFM); }

document.getElementById('openWFMHelper').onclick = function() {
	document.getElementById('Curators_MainMenu').style.display = "none"
	let tmpWFM = document.getElementById('Curators_WFM')
	if(tmpWFM.style.display == "none") {
		tmpWFM.style.display = ""
	} else tmpWFM.style.display = "none"
}

document.getElementById('hideWFMHelper').onclick = function() {
	document.getElementById('Curators_WFM').style.display = "none"
}

      let output = [];
	  let output_1day = [];

      function generateOutput() {
        const startDate = new Date(document.getElementById("dateFirst").value);
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
        
        output = [];

        for (let i = startDate.getDate(); i <= endDate.getDate(); i++) {
          if ((i - startDate.getDate()) % 4 === 0 || (i - startDate.getDate()) % 4 === 1) {
            output.push(`${i}.${startDate.getMonth() + 1}.${startDate.getFullYear()}`);
          }
        }
		output.push(output_1day[0])
        showCalendar();
      }

function showCalendar() {

  const calendarTable = document.getElementById("calendarTable");

  // Clear the table
  calendarTable.innerHTML = "";

  // Create a header row
  const headerRow = calendarTable.insertRow();
  const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  for (let i = 0; i < 7; i++) {
    const headerCell = headerRow.insertCell();
    headerCell.innerText = daysOfWeek[i];
  }

  // Calculate the number of weeks
  const startDate = new Date(document.getElementById("dateFirst").value);
  const firstOfMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const numEmptyCells = (firstOfMonth.getDay() + 6) % 7;
  const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
  const numWeeks = Math.ceil((endDate.getDate() + numEmptyCells) / 7);

  // Create a cell for each day
  let dayCounter = 1 - numEmptyCells;
  for (let i = 0; i < numWeeks; i++) {
    const row = calendarTable.insertRow();
    for (let j = 0; j < 7; j++) {
      const cell = row.insertCell();
      if (dayCounter <= 0 || dayCounter > endDate.getDate()) {
        cell.innerText = "";
      } else {
        cell.innerText = dayCounter;
        const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), dayCounter);
        if (output.includes(`${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`)) {
          cell.classList.add("highlight");
        }
      }
      dayCounter++;
    }
  }
  
const weekdays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const tableRows = document.getElementsByTagName("tr");

for (let i = 0; i < tableRows.length; i++) {
  for (let j = 0; j < tableRows[i].cells.length; j++) {
    const cell = tableRows[i].cells[j];
    const cellText = cell.textContent;

    if (weekdays.includes(cellText)) {
      cell.style.background = "#8799c9";
      cell.style.fontWeight = 800;
    }
  }
}
  
}

function showCalendar2() {
  const calendarTable = document.getElementById("calendarTable");
  // Clear the table
  calendarTable.innerHTML = "";

  // Create a header row
  const headerRow = calendarTable.insertRow();
  const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  for (let i = 0; i < 7; i++) {
    const headerCell = headerRow.insertCell();
    headerCell.innerText = daysOfWeek[i];
  }

  // Calculate the number of weeks
  const startDate = new Date(document.getElementById("dateFirst").value);
  const firstOfMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const numEmptyCells = (firstOfMonth.getDay() + 6) % 7;
  const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
  const numWeeks = Math.ceil((endDate.getDate() + numEmptyCells) / 7);

  // Create a cell for each day
  let dayCounter = 1 - numEmptyCells;
  const selectedDays = document.getElementsByName("days[]");
  const highlightedDates = [];
  for (let i = 0; i < selectedDays.length; i++) {
    if (selectedDays[i].checked) {
      const dayValue = selectedDays[i].value;
      const dayIndex = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"].indexOf(dayValue);
      const firstDayOfMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
      let currentDay = firstDayOfMonth;
      while (currentDay.getDay() !== dayIndex) {
        currentDay.setDate(currentDay.getDate() + 1);
      }
      while (currentDay.getMonth() === startDate.getMonth()) {
        highlightedDates.push(new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate()));
        currentDay.setDate(currentDay.getDate() + 7);
      }
    }
  }

  for (let i = 0; i < numWeeks; i++) {
    const row = calendarTable.insertRow();
    for (let j = 0; j < 7; j++) {
      const cell = row.insertCell();
      if (dayCounter <= 0 || dayCounter > endDate.getDate()) {
        cell.innerText = "";
      } else {
        cell.innerText = dayCounter;
        const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), dayCounter);
        if (highlightedDates.some(date => date.getTime() === currentDate.getTime())) {
          cell.classList.add("highlight");
        }
      }
      dayCounter++;
    }
  }

const weekdays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const tableRows = document.getElementsByTagName("tr");

for (let i = 0; i < tableRows.length; i++) {
  for (let j = 0; j < tableRows[i].cells.length; j++) {
    const cell = tableRows[i].cells[j];
    const cellText = cell.textContent;

    if (weekdays.includes(cellText)) {
      cell.style.background = "#8799c9";
      cell.style.fontWeight = 800;
    }
  }
}

}
      document.getElementById('addToOperatorsArrayDay').onclick = function() {
		output_1day = [];
        const startDate = new Date(document.getElementById("dateFirst").value);
        output_1day .push(`${startDate.getDate()}.${startDate.getMonth() + 1}.${startDate.getFullYear()}`);
      }

      document.getElementById('addToOperatorsArrayMonth').onclick = generateOutput;
	  
	  document.getElementById('clearallfields').onclick  = function() {
		  output = [];
		  output_1day = [];
		  calendarTable.innerText = ''
	  }

document.getElementById('addToOperatorsArrayMonth5DaysWork').onclick = showCalendar2