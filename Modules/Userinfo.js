var win_serviceinfo =  // описание элементов окна информации об услугах и пользователе
  `<div style="display: flex; width: 320px;">
        <span style="width: 320px">
                <span style="cursor: -webkit-grab;">
                        <div style="width: 320px;  border-bottom:1px solid #556B2F;" id="servicehead">
                                <button title="скрывает меню" id="hideMeservice" style="width:50px; background: #228B22; margin:5px;">hide</button>
                                <button title="открывает СРМ пользователя при введенном айди в поле" id="GotoCRM" style="width:50px;">CRM</button>
                                <button title="Начинает чат с пользователем" id="startnewchat" style="width: 25.23px;">💬</button>
								<button title="Делаем видимым номер телефона и почты" id='dounhidemailandphone'>👁‍🗨</button>
                                <button title="Левый клик обновить статус. Легенда: 💥 - задача на исход уже создана или есть также задача на тп1л , 📵 - нет задачи на исход и на тп, 🛠 - нет задачи на исход, но есть задача на тп" id="CrmStatus" style="width:30px; display:none;"></button>
								<span style="padding:7px; margin-left: 5px;height:28px; color:#ffff;  font-weight:700; border: 1px solid bisque;width: 82px; background-color:#1E90FF;display:none;" id="getcurrentstatus"></span>
                        </div>
						<div style="width: 320px; margin:5px; display:flex; justify-content:left;" id="input_field">
						<input id="idstudent" placeholder="ID У/П" title="Введите ID ученика для получения информации по услугам" oninput="onlyNumber(this)" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
				       	<button title="запускает поиск по услугам" id="getidstudent" class="usinfoops">🚀</button>
						<button title="Открывает список со всеми задачами пользователя" id="crmactivetasks" class="usinfoops">📋</button>
						<button title="TRM 2.0 для информации по П" id="newtrm" style="margin-left: 5px; display: none; width: 25.23px;">🗿</button>
						<button title="Личная страница П, как видят ученики" id="personalteacherpage" style="margin-left: 5px; display: none; width: 25.23px;">🎭</button>
						<button title="Изменяет Язык обслуживания для профиля на Русский" id="changelocalelng" class="usinfoops">🌍</button>
						<button title="Открывает начислятор для проверки реального баланса ученика" id="checkbalance" class="usinfoops">💰</button>
						<button title="Просмотр прошедших и предстоящих уроков" id="getpastandfuturelessons" class="usinfoops">📆</button>
				       	<button title="очищает все поля" id="clearservinfo" class="usinfoops">🧹</button>
				       	</div>
						<div style="width: 320px; margin:5px; display:flex; justify-content:left;" id="input_field2">
						<input readonly id="onetimepassout"  placeholder="One time pass" title="Вывод разового пароля после выполнения команды" autocomplete="off" type="text" style="float:left; text-align: center; width: 100px; color: black;" class="">
						<button title="Генерирует одноразовый код для входа в мобильное приложение и выводит его в спец поле" id="getonetimepass" class="usinfoops">📱</button>
						<button title="Открывает админку редактирования пользователя/просмотра ролей" id="editadmbtn" class="usinfoops">✏</button>
						<button title="Открывает кота для просмотра истории чатов" id="catchathistory" class="usinfoops">🗄</button>
						<button title="Открывает меню для просмотра рассрочки" id="partialpaymentinfo" class="usinfoops">💸</button>
						</div>
					   </span>
                        <div style="width: 320px;" id="servicebody">
						<img id="useravatar" style="position: absolute; left: 1px; top: 120px; width: 55px; height: 60px; border-radius: 30px; display:none;">
                                <p id="servicetable" style="max-height:400px; overflow:auto; color:bisque; text-align:center"></p>
                        </div>
        </span>
</div>`;

var win_Timetable = // описание элементов окна предстоящих и прошедших занятиях
  `<div style="display: flex; width: 450px;">
<span style="width: 450px">
        <span style="cursor: -webkit-grab;">
                <div style="margin: 5px; width: 450;" id="HeadTimetable">
                        <button id="hideMeTT" style="width:50px; background: #228B22;">hide</button>
                </div>
                <div style="display:flex; justify-content:space-evenly; margin-top:5px;">
                     <button title="Выводит инфо о прошедших уроках" id="getlessonpast">Прошедшие уроки</button>
                     <button title="Выводит инфо о предстоящих уроках" id="getlessonfuture">Предстоящие уроки</button>
                 </div>
                 </span>
                <div id="timetableinfo">
                     <p id="timetabledata" style="width:450px;color:bisque; max-height:400px; margin-left:5px; margin-top:5px; overflow:auto;text-align:center;"></p>
                </div>
</span>
</div>`;


if (localStorage.getItem('winTopService') == null) { // началоное положение окна информации об  услугах
  localStorage.setItem('winTopService', '120');
  localStorage.setItem('winLeftService', '295');
}

if (localStorage.getItem('winTopTimetable') == null) { // начальное положение окна проверки прошедшего расписания и предстоящих уроков
  localStorage.setItem('winTopTimetable', '120');
  localStorage.setItem('winLeftTimetable', '295');
}


let wintServices = document.createElement('div'); // создание окна вензель user info
document.body.append(wintServices);
wintServices.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopService') + 'px; left: ' + localStorage.getItem('winLeftService') + 'px; font-size: 14px; z-index: 21; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintServices.style.display = 'none';
wintServices.setAttribute('id', 'AF_Service');
wintServices.innerHTML = win_serviceinfo;

var listenerServices = function (e, a) { // сохранение позиции окна вензель user info
  wintServices.style.left = Number(e.clientX - myX7) + "px";
  wintServices.style.top = Number(e.clientY - myY7) + "px";
  localStorage.setItem('winTopService', String(Number(e.clientY - myY7)));
  localStorage.setItem('winLeftService', String(Number(e.clientX - myX7)));
};

wintServices.onmousedown = function (a) {
  if (checkelementtype(a)) {
    window.myX7 = a.layerX;
    window.myY7 = a.layerY;
    document.addEventListener('mousemove', listenerServices); // изменение позиции вензель user info
  }
}
wintServices.onmouseup = function () { document.removeEventListener('mousemove', listenerServices); } // прекращение изменения позиции вензель user info


let wintTimetable = document.createElement('div'); // создание окна предстоящих и прошедших занятиях
document.body.append(wintTimetable);
wintTimetable.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopTimetable') + 'px; left: ' + localStorage.getItem('winLeftTimetable') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintTimetable.style.display = 'none';
wintTimetable.setAttribute('id', 'AF_Timetable');
wintTimetable.innerHTML = win_Timetable;

var listenerTimetable = function (e, a) { // сохранение позиции окна предстоящих и прошедших занятиях
  wintTimetable.style.left = Number(e.clientX - myX10) + "px";
  wintTimetable.style.top = Number(e.clientY - myY10) + "px";
  localStorage.setItem('winTopTimetable', String(Number(e.clientY - myY10)));
  localStorage.setItem('winLeftTimetable', String(Number(e.clientX - myX10)));
};

wintTimetable.onmousedown = function (a) { // изменение позиции окна предстоящих и прошедших занятиях
  if (checkelementtype(a)) {
    window.myX10 = a.layerX;
    window.myY10 = a.layerY;
    document.addEventListener('mousemove', listenerTimetable);
  }
}
wintTimetable.onmouseup = function () { document.removeEventListener('mousemove', listenerTimetable); } // прекращение изменения позиции окна предстоящих и прошедших занятиях

document.getElementById('servicehead').ondblclick = function (a) { // скрытие окна вензель user info по двойному клику
  if (checkelementtype(a)) { document.getElementById('AF_Service').style.display = 'none'; }
}

document.getElementById('hideMeservice').onclick = function () { // скрытие окна вензель user info
  if (document.getElementById('AF_Service').style.display == '')
    document.getElementById('AF_Service').style.display = 'none'
}

async function startnewchat(polzid) { //открывает чат с пользователем
  if (operatorId == "") {
    await whoAmI()
  }

  if (polzid) {
    console.log(polzid);
    await fetch(`https://skyeng.autofaq.ai/api/conversation/start?channelId=eca64021-d5e9-4c25-b6e9-03c24s638d4d&userId=${polzid}&operatorId=${operatorId}&groupId=c7bbb211-a217-4ed3-8112-98728dc382d8`, {
      headers: {
      },
      referrer: "https://skyeng.autofaq.ai/tickets/assigned/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "POST",
      mode: "cors",
      credentials: "include"
    })
      .then(response => response.json())
      .then(data => {
        chatId = data.conversationId
        if (data.conversationId != undefined) {
          console.log(data, chatId)
          alert(`Чат начат c пользователем ${polzid}`);
        } else alert('Чат не был открыт по причине: ' + data.message + ' ' + data.textCode + ' ' + 'code: ' + data.code)
      })

  } else alert('Не введен id пользователя');
}

document.getElementById('startnewchat').onclick = async function () { // нажатие на начать новый чат
  let polzid = document.getElementById('idstudent').value.trim();
  startnewchat(polzid)
}

document.getElementById('dounhidemailandphone').onclick = function () {
  getunhideemail();
  getunhidephone();
}

document.getElementById('checkbalance').onclick = function () {
  window.open("https://billing-api.skyeng.ru/operations/user/" + document.getElementById('idstudent').value + "/info")
}

document.getElementById('GotoCRM').onclick = function () {
  window.open("https://crm2.skyeng.ru/persons/" + document.getElementById('idstudent').value)    // открываем ссылку в новой вкладке на  Пользовательская админка
}

document.getElementById('partialpaymentinfo').onclick = function () {
  window.open("https://accounting.skyeng.ru/credit/list?studentId=" + document.getElementById('idstudent').value)
}

document.getElementById('editadmbtn').onclick = function () {
  let stuid = document.getElementById('idstudent').value;
  stuid = stuid.trim();
  window.open("https://id.skyeng.ru/admin/users/" + stuid + "/update-contacts")
}

document.getElementById('getonetimepass').onclick = function () { //функция генерации разового пароля для МП
  if (document.getElementById('idstudent').value == "")
    console.log('Введите id в поле')
  else {
    document.getElementById('getonetimepass').innerHTML = "✅";
    setTimeout(function () { document.getElementById('getonetimepass').innerHTML = "📱" }, 2000);

    document.getElementById('responseTextarea1').value = `{
			"headers": {
				"content-type": "application/x-www-form-urlencoded",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
			},
			"body": "user_id_or_identity_for_one_time_password_form%5BuserIdOrIdentity%5D= + ${document.getElementById('idstudent').value} + &user_id_or_identity_for_one_time_password_form%5Bgenerate%5D=&user_id_or_identity_for_one_time_password_form%5B_token%5D=null",
				"method": "POST",
				"mode": "cors",
				"credentials": "include"
			}`
    document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/one-time-password"
    document.getElementById('responseTextarea3').value = 'getmobpwdnew'
    document.getElementById('sendResponse').click()

    function getPassInfo1() {
      var resprez11 = document.getElementById('responseTextarea1').getAttribute('getmobpwdnew')
      document.getElementById('responseTextarea1').removeAttribute('getmobpwdnew');
      var convertres11 = resprez11.match(/div class="alert alert-success" role="alert".*?([0-9]{5}).*/);
      onetimepassout.value = convertres11[1];
    }
    setTimeout(getPassInfo1, 1000);
  };
  setTimeout(function () { document.getElementById('onetimepassout').value = "" }, 15000);
}

document.getElementById('AF_Timetable').ondblclick = function (a) { // скрытие окна предстоящих и прошедших занятиях по двойному клику
  if (checkelementtype(a)) {
    document.getElementById('AF_Timetable').style.display = 'none';
    document.getElementById('timetabledata').innerHTML = "";
  }
}

document.getElementById('hideMeTT').onclick = function () { // скрытие окна предстоящих и прошедших занятиях
  if (document.getElementById('AF_Timetable').style.display == '')
    document.getElementById('AF_Timetable').style.display = 'none'

  document.getElementById('timetabledata').innerHTML = "";
}

let commonidentity;
let responseinfo;
let emailidentity, phoneidentity;

function checkemailandphoneidentity() { // проверяет подключены почта и номер телефона как айдентити
  document.getElementById('responseTextarea1').value = `{}`;
  document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/users/" + document.getElementById('idstudent').value + "/update-contacts";
  document.getElementById('responseTextarea3').value = 'responseupdate';
  document.getElementById('sendResponse').click();

  document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
    const responseinfo = document.getElementById('responseTextarea1').getAttribute('responseupdate');

    if (responseinfo != null) {
      if (flagusertype === "teacher") {
        console.log('It is a teacher!');
      } else if (flagusertype === "student") {
        if (responseinfo.includes('"identityEmail" disabled data-value=""') && responseinfo.includes('"identityPhone" disabled data-value=""')) {
          emailidentity = "📧✖";
          phoneidentity = "☎✖";
        } else if (responseinfo.includes('"identityEmail" disabled data-value=""') && !responseinfo.includes('"identityPhone" disabled data-value=""')) {
          emailidentity = "📧✖";
          phoneidentity = "☎✔";
        } else if (!responseinfo.includes('"identityEmail" disabled data-value=""') && responseinfo.includes('"identityPhone" disabled data-value=""')) {
          emailidentity = "📧✔";
          phoneidentity = "☎✖";
        } else {
          emailidentity = "📧✔";
          phoneidentity = "☎✔";
        }
      }
    }
  });
}

function getunhidephone() {  //открывает телефон пользователя
  document.getElementById('responseTextarea1').value = `{}`;
  document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + document.getElementById('idstudent').value + "/personal-data/?pdType=phone&source=persons.profile";
  document.getElementById('responseTextarea3').value = 'phoneishere';
  document.getElementById('sendResponse').click();

  document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
    const unhidephone = document.getElementById('responseTextarea1').getAttribute('phoneishere');
    if (unhidephone != null) {
      document.getElementById('phoneunhidden').textContent = JSON.parse(unhidephone).data.value;
      document.getElementById('responseTextarea1').removeAttribute('phoneishere');
    }
  });
}


function getunhideemail() { //открывает почту пользователя
  document.getElementById("responseTextarea1").value = "{}";
  document.getElementById("responseTextarea2").value = `https://backend.skyeng.ru/api/persons/${document.getElementById("idstudent").value}/personal-data/?pdType=email&source=persons.profile`;
  document.getElementById("responseTextarea3").value = "emailishere";
  document.getElementById("sendResponse").click();

  document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
    const unhiddenEmail = document.getElementById("responseTextarea1").getAttribute("emailishere");
    if (unhiddenEmail) {
      document.getElementById('mailunhidden').textContent = JSON.parse(unhiddenEmail).data.value;
      document.getElementById("responseTextarea1").removeAttribute("emailishere");
    }
  });
}


let servicecontainer;

function getservicearr() {  // получает массив услуг с СРМки
  document.getElementById('responseTextarea1').value = `{}`
  document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/products/configurations/"
  document.getElementById('responseTextarea3').value = 'arrayofservices'
  document.getElementById('sendResponse').click()

  document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
    const servicearray = document.getElementById('responseTextarea1').getAttribute('arrayofservices');
    if (servicearray) {
      servicecontainer = JSON.parse(servicearray);
      console.log(servicecontainer);
      document.getElementById('responseTextarea1').removeAttribute('arrayofservices');
    }
  });
}


document.getElementById('getlessonpast').onclick = function () { // показывает прошедшие уроки
  document.getElementById('timetabledata').innerHTML = "";
  let stid = document.getElementById('idstudent').value;
  stid = stid.trim();
  let pastlessondata = "";
  let pastlessoninfo = "";
  document.getElementById('responseTextarea1').value = `{}`
  document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/lessons-history/?page=0";
  document.getElementById('responseTextarea3').value = 'pastlessoninfodata'
  document.getElementById('sendResponse').click()

  document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
    pastlessoninfo = JSON.parse(document.getElementById('responseTextarea1').getAttribute('pastlessoninfodata'))
    if (pastlessoninfo != null) {
      if (pastlessoninfo.data == "") {
        document.getElementById('timetabledata').innerHTML = "Еще не было уроков";
      } else {
        for (let i = 0; i < pastlessoninfo.data.length; i++) {
          let d = new Date(pastlessoninfo.data[i].startedAt)
          let minutka;
          let denek;
          let mesacok;
          let chasok;
          if (d.getHours() < 10) {
            chasok = "0" + (d.getUTCHours() + 3);
          } else {
            chasok = (d.getUTCHours() + 3);
          }
          if (d.getMinutes() < 10) {
            minutka = "0" + d.getMinutes();
          } else {
            minutka = d.getMinutes();
          }
          if (d.getDate() < 10) {
            denek = "0" + d.getDate();
          } else {
            denek = d.getDate();
          }
          if (d.getMonth() + 1 < 10) {
            mesacok = "0" + (d.getMonth() + 1);
          } else {
            mesacok = d.getMonth() + 1;
          }
          if (pastlessoninfo.data[i].status == "missed_by_student") {
            pastlessoninfo.data[i].status = "Пропущен учеником";
          } else if (pastlessoninfo.data[i].status == "canceled_by_student") {
            pastlessoninfo.data[i].status = "Отменен учеником";
          } else if (pastlessoninfo.data[i].status == "success") {
            pastlessoninfo.data[i].status = "Прошел";
          } else if (pastlessoninfo.data[i].status == "moved_by_student") {
            pastlessoninfo.data[i].status = "Перенесен учеником";
          } else if (pastlessoninfo.data[i].status == "canceled_by_teacher") {
            pastlessoninfo.data[i].status = "Отменен учителем";
          } else if (pastlessoninfo.data[i].status == "student_refused_to_study") {
            pastlessoninfo.data[i].status = "Отказался от обучения"
          } else if (pastlessoninfo.data[i].status == "interrupted") {
            pastlessoninfo.data[i].status = "Прерван"
          } else if (pastlessoninfo.data[i].status == "did_not_get_through_student") {
            pastlessoninfo.data[i].status = "Не смогли связаться с У"
          } else if (pastlessoninfo.data[i].status == "canceled_not_marked") {
            pastlessoninfo.data[i].status = "Не отмечен учителем вовремя"
          }

          if (pastlessoninfo.data[i].lessonType == "regular") {
            pastlessoninfo.data[i].lessonType = "Регулярный";
          } else if (pastlessoninfo.data[i].lessonType == "single") {
            pastlessoninfo.data[i].lessonType = "Одиночный";
          } else if (pastlessoninfo.data[i].lessonType == "trial") {
            pastlessoninfo.data[i].lessonType = "Пробный";
          }

          for (let j = 0; j < servicecontainer.data.length; j++) {
            if (servicecontainer.data[j].serviceTypeKey == pastlessoninfo.data[i].educationService.serviceTypeKey)
              pastlessoninfo.data[i].educationService.serviceTypeKey = servicecontainer.data[j].title;
          }

          if (pastlessoninfo.data[i].educationService.serviceTypeKey == null) {
            pastlessoninfo.data[i].educationService.serviceTypeKey = "Услуга была в CRM1, см позднее обозначение!"
          }

          if (pastlessoninfo.data[i].teacher != null) {
            pastlessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka +
              '<span style="color:#00FF7F; font-weight:900;"> Статус: </span>' + pastlessoninfo.data[i].status + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + pastlessoninfo.data[i].lessonType + '<br>'
              + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + pastlessoninfo.data[i].educationService.id + " " + pastlessoninfo.data[i].educationService.serviceTypeKey + '<br>'
              + '<span style="color:#32CD32; font-weight:900;">Преподаватель: </span>' + " " + pastlessoninfo.data[i].teacher.general.id + " " + pastlessoninfo.data[i].teacher.general.name + " " + pastlessoninfo.data[i].teacher.general.surname + '<br>'
              + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
          } else {
            pastlessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka +
              '<span style="color:#00FF7F; font-weight:900;"> Статус: </span>' + pastlessoninfo.data[i].status + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + pastlessoninfo.data[i].lessonType + '<br>'
              + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + pastlessoninfo.data[i].educationService.id + " " + pastlessoninfo.data[i].educationService.serviceTypeKey + '<br>'
              + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
          }
        }

        document.getElementById('timetabledata').innerHTML = pastlessondata;
        pastlessondata = "";
      }

      document.getElementById('responseTextarea1').removeAttribute('pastlessoninfodata')
    }
  })
}

document.getElementById('getlessonfuture').onclick = function () { // показывает предстоящие уроки

  document.getElementById('timetabledata').innerHTML = "";
  let stid = document.getElementById('idstudent').value;
  stid = stid.trim();
  let futurelessondata = "";
  let futurelessoninfo = "";
  document.getElementById('responseTextarea1').value = `{}`
  document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/future-lessons/"
  document.getElementById('responseTextarea3').value = 'futurelessoninfodata'
  document.getElementById('sendResponse').click()

  document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
    futurelessoninfo = JSON.parse(document.getElementById('responseTextarea1').getAttribute('futurelessoninfodata'))
    if (futurelessoninfo != null) {
      if (futurelessoninfo.data == "") {
        document.getElementById('timetabledata').innerHTML = "Уроки не запланированы";
      } else {
        for (let i = 0; i < futurelessoninfo.data.length; i++) {
          let d = new Date(futurelessoninfo.data[i].startedAt)
          let minutka;
          let denek;
          let mesacok;
          let chasok;
          if (d.getHours() < 10) {
            chasok = "0" + (d.getUTCHours() + 3);
          } else {
            chasok = (d.getUTCHours() + 3);
          }
          if (d.getMinutes() < 10) {
            minutka = "0" + d.getMinutes();
          } else {
            minutka = d.getMinutes();
          }
          if (d.getDate() < 10) {
            denek = "0" + d.getDate();
          } else {
            denek = d.getDate();
          }
          if (d.getMonth() + 1 < 10) {
            mesacok = "0" + (d.getMonth() + 1);
          } else {
            mesacok = d.getMonth() + 1;
          }

          if (futurelessoninfo.data[i].lessonType == "regular") {
            futurelessoninfo.data[i].lessonType = "Регулярный";
          } else if (futurelessoninfo.data[i].lessonType == "single") {
            futurelessoninfo.data[i].lessonType = "Одиночный";
          } else if (futurelessoninfo.data[i].lessonType == "trial") {
            futurelessoninfo.data[i].lessonType = "Пробный";
          }

          for (let j = 0; j < servicecontainer.data.length; j++) {
            if (servicecontainer.data[j].serviceTypeKey == futurelessoninfo.data[i].educationService.serviceTypeKey)
              futurelessoninfo.data[i].educationService.serviceTypeKey = servicecontainer.data[j].title;
          }

          if (futurelessoninfo.data[i].teacher != null) {
            futurelessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka
              + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + futurelessoninfo.data[i].lessonType + '<br>'
              + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + futurelessoninfo.data[i].educationService.id + " " + futurelessoninfo.data[i].educationService.serviceTypeKey + '<br>'
              + '<span style="color:#32CD32; font-weight:900;">Преподаватель: </span>' + " " + futurelessoninfo.data[i].teacher.general.id + " " + futurelessoninfo.data[i].teacher.general.name + " " + futurelessoninfo.data[i].teacher.general.surname + '<br>'
              + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
          } else {
            futurelessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka
              + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + futurelessoninfo.data[i].lessonType + '<br>'
              + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + futurelessoninfo.data[i].educationService.id + " " + futurelessoninfo.data[i].educationService.serviceTypeKey + '<br>'
              + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
          }

        }
        document.getElementById('timetabledata').innerHTML = futurelessondata;
        futurelessondata = "";
      }
      document.getElementById('responseTextarea1').removeAttribute('futurelessoninfodata')
    }
  })
}

document.getElementById('changelocalelng').onclick = function () { // меняет язык обслуживания выбранного пользователя в вензеле на русский

  document.getElementById('responseTextarea1').value = `{
		   "headers": {
			"content-type": "application/json",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": "{\\"serviceLocale\\":\\"ru\\"}",
		  "method": "PUT",
		  "mode": "cors",
		  "credentials": "include"
	 }`
  document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/general/" + document.getElementById('idstudent').value
  document.getElementById('responseTextarea3').value = ''
  document.getElementById('sendResponse').click()
  document.getElementById('changelocalelng').innerHTML = "✅"
  setTimeout(function () { document.getElementById('changelocalelng').innerHTML = "🌍" }, 2000);
}

document.getElementById('catchathistory').onclick = function () { // открывает в вензеле историю чатов введеного айди пользователя

  if (document.getElementById('AF_ChatHis').style.display == 'none') {
    document.getElementById('butChatHistory').click();
    document.getElementById('chatuserhis').value = document.getElementById('idstudent').value.trim();
    btn_search_history.click()
  } else {
    document.getElementById('chatuserhis').value = document.getElementById('idstudent').value.trim();
    btn_search_history.click()
  }
}

let nameofuser;
let teachername;
let studentname;
let responsedata;
let utczone;
let localtime;
let servlocalestatus;
let avatarofuser;
let countryofuser;
let ageofuser;

function getusernamecrm() { //получить имя пользователя из СРМ
  let filteredid = document.getElementById('idstudent').value;
  filteredid = filteredid.trim();
  flagusertype = '';
  document.getElementById('responseTextarea1').value = `{}`
  document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + filteredid + "?crm2=true&debugParam=profile-page"
  document.getElementById('responseTextarea3').value = 'getusernameinfo'
  document.getElementById('sendResponse').click()

  document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
    responsedata = document.getElementById('responseTextarea1').getAttribute('getusernameinfo');
    if (responsedata != null) {
      studentname = JSON.parse(responsedata);
      nameofuser = "";
      teachername = "";
      if (studentname.data.name != null && studentname.data.surname != null && studentname.data.type == "student") {
        nameofuser = studentname.data.name + " " + studentname.data.surname;
        flagusertype = 'student'
      } else if (studentname.data.name != null && studentname.data.surname == null && studentname.data.type == "student") {
        nameofuser = studentname.data.name;
        flagusertype = 'student'
      } else if (studentname.data.name != null && studentname.data.surname != null && studentname.data.type == "teacher") {
        flagusertype = 'teacher'
        teachername = studentname.data.name + " " + studentname.data.surname;
      } else if (studentname.data.name != null && studentname.data.surname == null && studentname.data.type == "teacher") {
        teachername = studentname.data.name;
        flagusertype = 'teacher'
      }

      let curdate = new Date();
      let curhours = (curdate.getUTCHours() + 3);
      let curminutes = curdate.getMinutes();
      if (curminutes < 10) {
        curminutes = "0" + curminutes;
      }
      utczone = studentname.data.utcOffset;
      if ((curhours + (utczone - 3)) < 24 && (curhours + (utczone - 3)) >= 10) {
        localtime = (curhours + (utczone - 3)) + ":" + curminutes;
      } else if ((curhours + (utczone - 3)) >= 24) {
        localtime = "0" + ((curhours + (utczone - 3)) - 24) + ":" + curminutes;
      } else if ((curhours + (utczone - 3)) < 10 && (curhours + (utczone - 3)) >= 0) {
        localtime = "0" + (curhours + (utczone - 3)) + ":" + curminutes;
      } else if ((curhours + (utczone - 3)) < 0) {
        localtime = ((curhours + (utczone - 3)) + 24) + ":" + curminutes;
      }

      if (studentname.data.serviceLocale == null) {
        servlocalestatus = "⭕"
      } else {
        servlocalestatus = studentname.data.serviceLocale;
      }

      if (studentname.data.avatarUrl != null) {
        avatarofuser = studentname.data.avatarUrl.match(/(https:\/\/auth-avatars-skyeng.imgix.net.*?\d+.\S+).auto/)[1];
      } else {
        avatarofuser = null;
      }

      if (studentname.data.country != null) {
        countryofuser = studentname.data.country;
      } else {
        countryofuser = null;
      }

      let goddata = new Date()
      goddata = goddata.getFullYear();
      if (studentname.data.birthday != null) {
        studentname = studentname.data.birthday.split('-')
        if (goddata - studentname[0] < 18)
          ageofuser = "🔞"
        else if (goddata - studentname[0] >= 18 && goddata - studentname[0] < 99)
          ageofuser = "🅰";
      } else if (studentname.data.birthday == null)
        ageofuser = "❓";

      document.getElementById('responseTextarea1').removeAttribute('getusernameinfo')
    }
  })
}

let tokenlogginer;
let logginerinfo;
function postuderdatatologin() { // логгинер для У П , переработать нужно!
  logginerinfo = '';
  let useriddata = document.getElementById('idstudent').value;
  useriddata = useriddata.trim();
  document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"content-type": "application/x-www-form-urlencoded",
				"sec-fetch-site": "same-origin",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1"
			  },
			  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": "login_link_form%5Bidentity%5D=&login_link_form%5Bid%5D=${useriddata}&login_link_form%5Btarget%5D=https%3A%2F%2Fskyeng.ru&login_link_form%5Bpromocode%5D=&login_link_form%5Blifetime%5D=3600&login_link_form%5Bcreate%5D=&login_link_form%5B_token%5D=${tokenlogginer}",
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			}`
  document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links";
  document.getElementById('responseTextarea3').value = 'postdata'
  document.getElementById('sendResponse').click()

  document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
    logginerinfo = document.getElementById('responseTextarea1').getAttribute('postdata');
    if (logginerinfo != null) {
      logginerinfo = logginerinfo.match(/("https:\/\/id.skyeng.ru\/auth\/login-link\/\w+.*?")/gm);
      logginerinfo = logginerinfo[logginerinfo.length - 1].split("\"");

      copyToClipboard1(logginerinfo[1])
      if (logginerinfo[1])
        flaggetlogginer = 1;
      else flaggetlogginer = 0;
      document.getElementById('responseTextarea1').removeAttribute('postdata')
    }
  })
}

let getcrmstatusinfo;
let crmresponseinfo;

function crmstatus() {
  const tempvarcrm = document.getElementById('idstudent').value.trim();

  let flagtpout = false;
  let flagtp = false;
  let flagnottp = false;
  let flagstatuswait = false;
  let flagstatusprocessing = false;
  let opername = '';

  document.getElementById('getcurrentstatus').style.display = 'none';
  document.getElementById('CrmStatus').style.display = 'none';

  document.getElementById('responseTextarea1').value = '{}';
  document.getElementById('responseTextarea2').value = `https://customer-support.skyeng.ru/task/user/${tempvarcrm}`;
  document.getElementById('responseTextarea3').value = 'getcrmtaskinfo';
  document.getElementById('sendResponse').click();

  document.getElementById('responseTextarea1').addEventListener('DOMSubtreeModified', function () {
    crmresponseinfo = document.getElementById('responseTextarea1').getAttribute('getcrmtaskinfo');
    if (crmresponseinfo) {
      getcrmstatusinfo = JSON.parse(crmresponseinfo);

      for (const data of getcrmstatusinfo.data) {
        switch (data.operatorGroup.name) {
          case 'technical_support_outgoing':
            flagtpout = true;
            if (data.status === 'waiting') flagstatuswait = true;
            if (data.status === 'processing') {
              flagstatusprocessing = true;
              opername = data.operator.name;
            }
            break;
          case 'technical_support_first_line':
            flagtp = true;
            break;
          default:
            flagnottp = true;
            break;
        }
      }

      if (flagstatuswait) {
        document.getElementById('getcurrentstatus').style.display = '';
        document.getElementById('getcurrentstatus').innerText = 'В ожидании';
        document.getElementById('getcurrentstatus').style.backgroundColor = '#1E90FF';
      } else if (flagstatusprocessing) {
        document.getElementById('getcurrentstatus').style.display = '';
        document.getElementById('getcurrentstatus').innerText = 'Решается';
        document.getElementById('getcurrentstatus').title = opername;
        document.getElementById('getcurrentstatus').style.backgroundColor = '#DC143C';
      }

      if (flagtpout && !flagtp && !flagnottp) {
        document.getElementById('CrmStatus').style.display = '';
        document.getElementById('CrmStatus').innerText = '💥';
        console.log('Есть активные задачи');
      } else if (!flagtpout && flagtp && !flagnottp) {
        document.getElementById('CrmStatus').style.display = '';
        document.getElementById('CrmStatus').innerText = '🛠';
        console.log('Входящий звонок или с др отдела на ТП была создана задача');
      } else if (!flagtpout && !flagtp && flagnottp) {
        document.getElementById('CrmStatus').style.display = '';
        document.getElementById('CrmStatus').innerText = '📵';
        console.log('Нет активных задач по ТП линии');
      } else if (flagtpout && flagtp && !flagnottp) {
        document.getElementById('CrmStatus').style.display = '';
        document.getElementById('CrmStatus').innerText = '💥';
        console.log('Есть активные задачи на исход и на ТП 1 линии')
      } else if (flagtpout && flagtp && flagnottp) {
        document.getElementById('CrmStatus').style.display = '';
        document.getElementById('CrmStatus').innerText = '💥';
        console.log('Есть активные задачи на исход и на ТП 1 линии и на др отделы');
      } else if (flagtp == true && flagnottp == true && flagtpout == false) {
        document.getElementById('CrmStatus').style.display = '';
        document.getElementById('CrmStatus').innerText = '🛠';
        console.log('Входящий звонок или с др отдела на ТП была создана задача. И есть задача на др отдел');
      } else if (flagtp == false && flagnottp == true && flagtpout == true) {
        document.getElementById('CrmStatus').style.display = '';
        document.getElementById('CrmStatus').innerText = '💥';
        console.log('Есть задача на ТП Исход. И есть задача на др отдел');
	  }	else {
        document.getElementById('CrmStatus').style.display = '';
        document.getElementById('CrmStatus').innerText = '📵';
        console.log('No DATA');
      }
	  document.getElementById('responseTextarea1').removeAttribute('getcrmtaskinfo')
    }
  });
}

let servicearr = "";
let srvparsed = "";
let stid;

function getuserinfo() {
  // document.getElementById('servicetable').innerHTML = "";
  document.getElementById('servicetable').innerHTML = "Загрузка информации о пользователе";
  document.querySelector('#useravatar').src = "";
  if (document.querySelector('#useravatar').style.display != "none")
    document.querySelector('#useravatar').style.display = "none";

  document.getElementById('getcurrentstatus').title = "";
  stid = document.getElementById('idstudent').value.trim();

  getservicearr();
  setTimeout(getusernamecrm, 640);
  // setTimeout(getunhideemail, 600);
  // setTimeout(getunhidephone, 620);
  setTimeout(checkemailandphoneidentity, 660);
  setTimeout(crmstatus, 680);

  setTimeout(function () {
    document.getElementById('responseTextarea1').value = `{}`
    document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + stid + "/education-services/"
    document.getElementById('responseTextarea3').value = 'getserviceinfo'
    document.getElementById('sendResponse').click()

    document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
      servicearr = JSON.parse(document.getElementById('responseTextarea1').getAttribute('getserviceinfo'))
      srvparsed = servicearr;
      // console.log(srvparsed)
      if (srvparsed != null) {
        // if (srvparsed.data == "") {
        //console.log("User is: " + flagusertype)
        let tinfo = ""; // инфо о постоянном П
        let temtinfo = ""; // инфо о временном П
        let servinfo = ""; //инфо об услуге
        let noservinfo = ""; //нет инфо об услугах, обычно если профиль П или оператора
        let arrservice = []; // пустой массив, куда будет передавать ID отобранных услуг по условию
        if (flagusertype == "teacher") {
          noservinfo = 1;
          arrservice = null;
        } else {
          for (let i = 0; i < srvparsed.data.length; i++) {
            for (let d = 0; d < servicecontainer.data.length; d++) {
              if (servicecontainer.data[d].serviceTypeKey == srvparsed.data[i].serviceTypeKey)
                srvparsed.data[i].serviceTypeKey = servicecontainer.data[d].shortTitle;
            }

            if (srvparsed.data[i].student.general.id == stid && srvparsed.data[i].incorrectnessReason == null && srvparsed.data[i].stage != "lost" && srvparsed.data[i].teacher != null && srvparsed.data[i].temporaryTeacher == null) {
              tinfo += [i + 1] + ") " + srvparsed.data[i].teacher.general.id + "," + " " + srvparsed.data[i].teacher.general.name + " " + srvparsed.data[i].teacher.general.surname + "<br>";
              servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">🆔 Услуги: </span>' + srvparsed.data[i].id + '<span class = "copyserviceid">💾</span>' + '<br> 💰 Баланс: ' + srvparsed.data[i].balance + '<br>' + srvparsed.data[i].serviceTypeKey + '<hr class="underline-service">';
              arrservice += srvparsed.data[i].id + ", "
            } else if (srvparsed.data[i].student.general.id == stid && srvparsed.data[i].teacher == null && srvparsed.data[i].temporaryTeacher != null && srvparsed.data[i].incorrectnessReason == null && srvparsed.data[i].stage != "lost") {
              temtinfo += [i + 1] + ") " + srvparsed.data[i].temporaryTeacher.general.id + "," + " " + srvparsed.data[i].temporaryTeacher.general.name + " " + srvparsed.data[i].temporaryTeacher.general.surname + "<br>";
              servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">🆔 Услуги: </span>' + srvparsed.data[i].id + '<span class = "copyserviceid">💾</span>' + '<br> 💰 Баланс: ' + srvparsed.data[i].balance + '<br>' + srvparsed.data[i].serviceTypeKey + '<hr class="underline-service">';
              arrservice += srvparsed.data[i].id + ", "
            } else if (srvparsed.data[i].student.general.id == stid && srvparsed.data[i].teacher != null && srvparsed.data[i].temporaryTeacher != null && srvparsed.data[i].incorrectnessReason == null && srvparsed.data[i].stage != "lost") {
              tinfo += [i + 1] + ") " + srvparsed.data[i].teacher.general.id + "," + " " + srvparsed.data[i].teacher.general.name + " " + srvparsed.data[i].teacher.general.surname + "<br>";
              temtinfo += [i + 1] + ") " + srvparsed.data[i].temporaryTeacher.general.id + "," + " " + srvparsed.data[i].temporaryTeacher.general.name + " " + srvparsed.data[i].temporaryTeacher.general.surname + "<br>";
              servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">🆔 Услуги: </span>' + srvparsed.data[i].id + '<span class = "copyserviceid">💾</span>' + '<br> 💰 Баланс: ' + srvparsed.data[i].balance + '<br>' + srvparsed.data[i].serviceTypeKey + '<hr class="underline-service">';
              arrservice += srvparsed.data[i].id + ", "
            } else if (srvparsed.data[i].student.general.id == stid && (srvparsed.data[i].stage == "after_trial" || srvparsed.data[i].stage == "before_call") && srvparsed.data[i].incorrectnessReason == null) {
              tinfo += [i + 1] + ") " + '<span style="color:#FF7F50; font-weight:900;">Этап ВУ</span><br>';
              servinfo += [i + 1] + ") " + '<span>🆔 Услуги: </span>' + srvparsed.data[i].id + '<span class = "copyserviceid" >💾</span>' + '<br> 💰 Баланс: ' + srvparsed.data[i].balance + '<br>' + srvparsed.data[i].serviceTypeKey + '<hr class="underline-service">';
              arrservice += srvparsed.data[i].id + ", "
            }
          }
        }

        if (temtinfo == "" && tinfo != "") {
          if (avatarofuser != null) {
            document.querySelector('#useravatar').style.display = "";
            document.querySelector('#useravatar').src = avatarofuser;
          }
          document.getElementById('servicetable').innerHTML = '<span id="getshowcase" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации" class="cursor-userinfobtns"> Имя: </span>' + nameofuser + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + '<span id="mailunhidden">hidden</span>' + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + '<span id="phoneunhidden">hidden</span>' + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " /  MSK(+/-): " + (utczone - 3) + " ⏰Время(местное): " + localtime + "<br>" + '<span style="color:#32CD32; font-weight:900;">Основные преподаватели</span><br>' + tinfo + "<br>" + '<span style="color:#00BFFF; font-weight:900;">Информация об услугах:</span><br>' + servinfo;
          if (servlocalestatus == "ru") {
            document.getElementById('changelocalelng').style.display = "none"
          } else if (servlocalestatus != "ru" || servlocalestatus == "⭕") {
            document.getElementById('changelocalelng').style.display = ""
          }
          document.getElementById('checkbalance').style.display = "";
          document.getElementById('partialpaymentinfo').style.display = "";
          document.getElementById('getpastandfuturelessons').style.display = "";
          document.getElementById('newtrm').style.display = "none";
          document.getElementById('personalteacherpage').style.display = "none";

        } else if (temtinfo != "" && tinfo != "") {
          if (avatarofuser != null) {
            document.querySelector('#useravatar').style.display = "";
            document.querySelector('#useravatar').src = avatarofuser;
          }
          document.getElementById('servicetable').innerHTML = '<span id="getshowcase" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns"> Имя: </span>' + nameofuser + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + '<span id="mailunhidden">hidden</span>' + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + '<span id="phoneunhidden">hidden</span>' + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " / MSK(+/-): " + (utczone - 3) + " ⏰Время(местное): " + localtime + "<br>" + '<span style="color:#32CD32; font-weight:900;">Основные преподаватели</span><br>' + tinfo + "<br>" + '<span style="color:#FF8C00; font-weight:900;">Временные преподаватели</span><br>' + temtinfo + "<br>" + '<span style="color:#00BFFF; font-weight:900;">Информация об услугах:</span><br>' + servinfo;
          if (servlocalestatus == "ru") {
            document.getElementById('changelocalelng').style.display = "none"
          } else if (servlocalestatus != "ru" || servlocalestatus == "⭕") {
            document.getElementById('changelocalelng').style.display = ""
          }
          document.getElementById('checkbalance').style.display = "";
          document.getElementById('partialpaymentinfo').style.display = "";
          document.getElementById('getpastandfuturelessons').style.display = "";
          document.getElementById('newtrm').style.display = "none";
          document.getElementById('personalteacherpage').style.display = "none";

        } else if (temtinfo != "" && tinfo == "") {
          if (avatarofuser != null) {
            document.querySelector('#useravatar').style.display = "";
            document.querySelector('#useravatar').src = avatarofuser;
          }
          document.getElementById('servicetable').innerHTML = '<span id="getshowcase" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns"> Имя: </span>' + nameofuser + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + '<span id="mailunhidden">hidden</span>' + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + '<span id="phoneunhidden">hidden</span>' + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " / MSK(+/-): " + (utczone - 3) + " ⏰Время(местное): " + localtime + "<br>" + '<span style="color:#FF8C00; font-weight:900;">Временные преподаватели</span><br>' + temtinfo + "<br>" + '<span style="color:#00BFFF; font-weight:900;">Информация об услугах:</span><br>' + servinfo;
          if (servlocalestatus == "ru") {
            document.getElementById('changelocalelng').style.display = "none"
          } else if (servlocalestatus != "ru" || servlocalestatus == "⭕") {
            document.getElementById('changelocalelng').style.display = ""
          }
          document.getElementById('checkbalance').style.display = "";
          document.getElementById('partialpaymentinfo').style.display = "";
          document.getElementById('getpastandfuturelessons').style.display = "";
          document.getElementById('newtrm').style.display = "none";
          document.getElementById('personalteacherpage').style.display = "none";

        } else if (noservinfo == 1 && teachername != "") {
          if (avatarofuser != null) {
            document.querySelector('#useravatar').style.display = "";
            document.querySelector('#useravatar').src = avatarofuser;
          }
          document.getElementById('servicetable').innerHTML = '<span style="color:#00BFFF; font-weight:900;">Преподаватель </span>' + "<br>" + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns">Имя: </span>' + teachername + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + '<span id="mailunhidden">hidden</span>' + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + '<span id="phoneunhidden">hidden</span>' + "<br>" + "🌍: " + countryofuser + "<br>";
          document.getElementById('changelocalelng').style.display = "none";
          document.getElementById('checkbalance').style.display = "none";
          document.getElementById('partialpaymentinfo').style.display = "none";
          document.getElementById('getpastandfuturelessons').style.display = "none";
          document.getElementById('newtrm').style.display = "";
          document.getElementById('personalteacherpage').style.display = "";

        } else if (noservinfo == 1 && nameofuser != "" && teachername == "") {
          document.getElementById('servicetable').innerHTML = '<span style="color:#FF69B4; font-weight:900;">Оператор </span>' + "<br>" + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns">Имя: </span>' + nameofuser + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail1">Email: </span>' + '<span id="mailunhidden">hidden</span>' + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone1">Phone: </span>' + '<span id="phoneunhidden">hidden</span>' + "<br>";
          document.getElementById('checkbalance').style.display = "none";
          document.getElementById('partialpaymentinfo').style.display = "none";
          document.getElementById('newtrm').style.display = "none";
          document.getElementById('personalteacherpage').style.display = "none";

        } else {
          if (avatarofuser != null) {
            document.querySelector('#useravatar').style.display = "";
            document.querySelector('#useravatar').src = avatarofuser;
          }

          document.getElementById('servicetable').innerHTML = '<span id="getshowcase1" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer1" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns"> Имя: </span>' + nameofuser + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail1">Email: </span>' + '<span id="mailunhidden">hidden</span>' + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone1">Phone: </span>' + '<span id="phoneunhidden">hidden</span>' + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " / MSK(+/-): " + (utczone - 3) + " ⏰Время(местное): " + localtime + "<br>" + "Нет активных услуг (П отсутствует). Услуги потеряны или некорректны";

          if (document.getElementById('getusremail1') != null) {
            document.getElementById('getusremail1').onclick = function () {
              copyToClipboard1(document.getElementById('mailunhidden').textContent);
            };
          }

          if (document.getElementById('getusrphone1') != null) {
            document.getElementById('getusrphone1').onclick = function () {
              copyToClipboard1(document.getElementById('phoneunhidden').textContent);
            };
          }

          if (document.getElementById('getshowcase1') != null) {
            document.getElementById('getshowcase1').onclick = function () {
              copyToClipboard1("https://profile.skyeng.ru/profile/" + stid + "/showcase");
            };
          }

          if (document.getElementById('getloginer1') != null) {
            document.getElementById('getloginer1').onclick = async function () {
              document.getElementById('getloginer1').style.color = "orange"
              await postuderdatatologin();

              setTimeout(function () {
                if (flaggetlogginer == 1)
                  document.getElementById('getloginer1').style.color = "green"
                else document.getElementById('getloginer1').style.color = "red"

                setTimeout(() => {
                  document.getElementById('getloginer1').style.color = "bisque"
                }, 5000)
              }, 2000)
            }
          }

        }

        if (arrservice != null && arrservice.length > 0 && arrservice != undefined) {
          arrservice = arrservice.split(', ')
        }

        let tmparr = document.querySelectorAll('.copyserviceid');
        for (let j = 0; j < tmparr.length; j++) {
          tmparr[j].onclick = function () {
            copyToClipboard1(arrservice[j])
          }
        }

        if (document.getElementById('getusremail') != null) {
          document.getElementById('getusremail').onclick = function () {
            copyToClipboard1(document.getElementById('mailunhidden').textContent);
          };
        }

        if (document.getElementById('getusrphone') != null) {
          document.getElementById('getusrphone').onclick = function () {
            copyToClipboard1(document.getElementById('phoneunhidden').textContent);
          };
        }

        if (document.getElementById('getloginer') != null) {
          document.getElementById('getloginer').onclick = async function () {
            document.getElementById('getloginer').style.color = "orange"
            await postuderdatatologin();

            setTimeout(function () {
              if (flaggetlogginer == 1)
                document.getElementById('getloginer').style.color = "green"
              else document.getElementById('getloginer').style.color = "red"

              setTimeout(() => {
                document.getElementById('getloginer').style.color = "bisque"
              }, 5000)
            }, 2000)
          }
        }

        if (document.getElementById('getshowcase') != null) {
          document.getElementById('getshowcase').onclick = function () {
            copyToClipboard1("https://profile.skyeng.ru/profile/" + stid + "/showcase");
          };
        }

        if (document.getElementsByClassName('expert-user_details-list')[1] != undefined) {
          let testids = document.querySelector('#servicetable').textContent.match(/(\d+,)/gm);
          if (testids != null) {
            let infoiduslugi = document.getElementsByClassName('iduslugitxt');
            for (let j = 1; document.getElementsByClassName('expert-user_details-list')[1].childNodes[j] != undefined; j++) {
              if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[j].childNodes[1].innerText == "teacher") {
                for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                  if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                    let getidusr = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
                    if (infoiduslugi != undefined || infoiduslugi != null || infoiduslugi != "") {
                      // for (let d = 0; d < infoiduslugi.length; d++) {
                      for (let v = 0; v < testids.length; v++) {
                        if (testids[v] == getidusr + ",")
                          infoiduslugi[v].innerText = "ID Услуги 🔥";
                        else
                          console.log("Not found") //если услуги не совпали с П обратившимся
                      } // for v
                      //    } // for d
                    } //проверка на наличие услуг, чтобы не были андейфайнед, нулл или пустыми
                  } else
                    console.log("No such field"); // если обратился У в консоли получим сообщение или обратился П, который указал У который не является его учеником
                } // for let i
              } // if type == teacher
            }
          }
        } // for let j
        document.getElementById('responseTextarea1').removeAttribute('getserviceinfo')
      }
    })

  }, 720)
}

document.getElementById('getidstudent').onclick = function () { // нажатие на ракету
  getuserinfo()
  setTimeout(function () {
    if (document.getElementById('servicetable').innerHTML == "Загрузка информации о пользователе") {
      getuserinfo()
    }
  }, 5000)
}

document.getElementById('CrmStatus').onclick = crmstatus;

document.getElementById('crmactivetasks').onclick = function () { //открыват СРМ с активными задачами
  window.open("https://crm2.skyeng.ru/persons/" + document.getElementById('idstudent').value + "/customer-support/list")
}

document.getElementById('newtrm').onclick = function () { //открывает новый TRM 2.0 п
  window.open("https://trm.skyeng.ru/teacher/" + document.getElementById('idstudent').value)
}

document.getElementById('personalteacherpage').onclick = function () { //открывает личную страницу П
  window.open("https://skyeng.ru/teachers/id/" + document.getElementById('idstudent').value)
}

document.getElementById('clearservinfo').onclick = function () { //очищает все в вензеле
  document.getElementById('idstudent').value = "";
  document.getElementById('servicetable').innerHTML = "";
  document.getElementById('CrmStatus').style.display = "none";
  document.getElementById('getcurrentstatus').style.display = "none";
  document.getElementById('changelocalelng').style.display = "";
  document.getElementById('getpastandfuturelessons').style.display = "";
  document.querySelector('#useravatar').src = "";
  document.querySelector('#useravatar').style.display = "none";
  document.getElementById('AF_Timetable').style.display = "none";
  document.getElementById('timetabledata').innerText = "";
}

document.getElementById('useravatar').onmouseover = function () { // взаимодействие с аватаром пользователя увеличивает
  document.getElementById('useravatar').style.width = "200px";
  document.getElementById('useravatar').style.height = "230px";
}

document.getElementById('useravatar').onmouseout = function () { // взаимодействие с аватаром пользователя уменьшает
  document.getElementById('useravatar').style.width = "55px";
  document.getElementById('useravatar').style.height = "60px";
}

document.getElementById('getpastandfuturelessons').onclick = function () { //открывает меню прошедших и предстоящих уроков
  if (document.getElementById('AF_Timetable').style.display == '')
    document.getElementById('AF_Timetable').style.display = 'none'
  else
    document.getElementById('AF_Timetable').style.display = ''
  getlessonfuture.click();
}