var win_taskform = //описание формы создания задач в СРМ2
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 410px;" id="create_form_header">
                            <button title="скрывает меню" id="hideMeCreateForm" style="width:50px; background: #228B22;">hide</button>
                            <button title="По нажатию обновляет хеш чата в соответствующем поле, на случай, если при открытии формы вы открыли не тот чат, в котором обратился пользователь" id="refreshhashcreateform" style="width:24px;">♻</button>
							<button title="По нажатию очищает поля и сбрасывает в дефолтное состояние формы" id="clearcreateform" style="width:24px;">🧹</button>
							<span style="color:bisque">Статус урока: </span>
							<span id="statusuroka"></span>
                        </div>

						<div id="addcreateformbtns">
							<button id="critteachertostudent" style="height:25px; width: 197px; margin-left:10px;">Крит 👽П -> У👨‍🎓</button>
							<button id="critstudenttoteacher" style="height:25px; width: 197px;">Крит 👨‍🎓У -> П👽</button>
							<br>
							<button id="highsecondline" style="height:25px; width: 130px; margin-left:10px; margin-top:3px;">🗓Калик У/П</button>
							<button id="highteachersc" style="height:25px; width: 130px;">👽Исход звонки</button>
							<button id="highteachertc" style="height:25px; width: 130px;">👽П Teacher Care</button>
						</div>

                        <div style="margin: 5px; margin-top: 0px; width: 410px" id="create_form_menu">
                            <input disabled="" required id="chathashlnk" placeholder="Хэш чата" title="Хеш чата, из которого будет создано обращение в СРМ" autocomplete="off" type="text" style="text-align: center; width: 410px; color: black; margin-top: 5px; text-align:center;background:#cac1b1; width:100%">
							<br>
							<select required id="priority" style="width: 100%; text-align: center; height: 25px;">
								<option disabled="" selected="">Приоритет</option>
								<option value="low" style="background: white; color:green; font-weight:600">🟢 Низкий</option>
								<option value="high" style="background: white; color:orange; font-weight:600">🟡 Высокий</option>
								<option value="highest" style="background: white; color:red; font-weight:600">🔴 Критический</option>
							</select>

							<select required id="customerservice" style="width: 100%; text-align: center; height: 25px;">
								<option disabled="" selected="">Отдел</option>
								<option value="tech_support_outgoing_crm2" style="background: white">Техподдержка 1Л CRM (исход)</option>
								<option value="teachers_care_crm" style="background: white">Teachers Care</option>
								<option value="content_management_dictionary" style="background: white">Словарь</option>
								<option value="content_management" style="background: white">Контент</option>
								<option value="outgoing_calls_crm2" style="background: white">Исходящие звонки</option>
								<option value="tech_support_second_line_crm2" style="background: white">Техподдержка 2Л CRM</option>
							</select>

							<input id="taskserviceid" placeholder="🆔 ID услуги" style="width: 100%; height: 25px;">
							<br>
							<input required id="taskuserid" placeholder="🆔 ID пользователя" style="width: 100%; height: 25px;">
							<br>

							<textarea required id="taskcomment" placeholder="Комментарий" title="Укажите комментарий к задаче, что было сделано, что требуется сделать" autocomplete="off" type="text" style="text-align: center; width: 100%; color: black; margin-top: 5px" data-gramm="false" wt-ignore-input="true"></textarea>

							<br>
							<button title="Создает задачу на СРМ2 на выранный отдел и приоритет" id="createtask" style="width:105px; position: relative; left: 50%; margin-top: 5px; transform: translate(-50%, 0);">Отправить</button>
						</div>
		</span>
        </span>
</div>`;

if (localStorage.getItem('winTopTaskCreate') == null) { //начальное положение окна Создания задач на СРМ
    localStorage.setItem('winTopTaskCreate', '295');
    localStorage.setItem('winLeftTaskCreate', '295');
}

let wintCreateTask = document.createElement('div'); // создание окна создания задачи через интеграцию в АФ
document.body.append(wintCreateTask);
wintCreateTask.style = 'min-height: 25px; width: 420px; background: #464451; top: ' + localStorage.getItem('winTopTaskCreate') + 'px; left: ' + localStorage.getItem('winLeftTaskCreate') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintCreateTask.style.display = 'none';
wintCreateTask.setAttribute('id', 'AF_Createtask');
wintCreateTask.innerHTML = win_taskform;

var listenerTaskCreate = function (e, a) { // сохранение позиции окна доступов
    wintCreateTask.style.left = Number(e.clientX - myX17) + "px";
    wintCreateTask.style.top = Number(e.clientY - myY17) + "px";
    localStorage.setItem('winTopTaskCreate', String(Number(e.clientY - myY17)));
    localStorage.setItem('winLeftTaskCreate', String(Number(e.clientX - myX17)));
};

wintCreateTask.onmousedown = function (a) {
    if (checkelementtype(a)) {
        window.myX17 = a.layerX;
        window.myY17 = a.layerY;
        document.addEventListener('mousemove', listenerTaskCreate);
    }
}
wintCreateTask.onmouseup = function () { document.removeEventListener('mousemove', listenerTaskCreate); }

document.getElementById('AF_Createtask').ondblclick = function (a) { // скрытие окна создания задачи в CRM2 по двойному клику
    if (checkelementtype(a)) { document.getElementById('hideMeCreateForm').click(); }
}

taskBut.onclick = function () { // функция открытия окна для работы с созданием задач на СРМ
    let conversid;
    if (document.getElementById('AF_Createtask').style.display == 'none') {
        document.getElementById('AF_Createtask').style.display = ''

        if (document.getElementsByClassName('expert-user_details-list').length > 0) {
            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-statusHTML") {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт вводный урок") {
                        document.getElementById('statusuroka').innerHTML = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerHTML
                        document.getElementById('statusuroka').style = "background:rgb(70, 68, 81); padding:0px;"
                    } else {
                        document.getElementById('statusuroka').innerHTML = "Урок не идет"
                        document.getElementById('statusuroka').style = "background:#69a4c7; padding:5px; color:#fff;  font-weight:600; border:1px solid black;"
                    }
                }
            }
        }

        if (location.pathname.length > 17) {
            document.getElementById('chathashlnk').value = location.pathname.split('/')[3]
            conversid = document.getElementById('chathashlnk').value;

            fetch("https://skyeng.autofaq.ai/api/reason8/operator/customButtons/click", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": `{\"buttonId\":\"b49609f3-9ff7-4ba5-a8a8-f2cef770bf19\",\"conversationId\":\"${conversid}\"}`,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });

        }

        document.getElementById('refreshhashcreateform').onclick = function () {
            if (location.pathname.length > 17) {
                document.getElementById('chathashlnk').value = location.pathname.split('/')[3]
            }

            if (document.getElementsByClassName('expert-user_details-list').length > 0) {
                for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-statusHTML") {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт вводный урок") {
                            document.getElementById('statusuroka').innerHTML = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerHTML
                            document.getElementById('statusuroka').style = "background:rgb(70, 68, 81); padding:0px;"
                        } else {
                            document.getElementById('statusuroka').innerHTML = "Урок не идет"
                            document.getElementById('statusuroka').style = "background:#69a4c7; padding:5px; color:#fff;  font-weight:600; border:1px solid black;"
                        }
                    }
                }
            }
        }

        document.getElementById('hideMeCreateForm').onclick = function () {
            document.getElementById('AF_Createtask').style.display = 'none'

            fetch("https://skyeng.autofaq.ai/api/reason8/operator/customButtons/form", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": `{\"conversationId\":\"${conversid}\"}`,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });
        }

        function changeprioritycolor() {
            if (document.getElementById('priority').children[1].selected == true)
                document.getElementById('priority').style = "color:green;font-weight:600; width: 100%; height: 25px; text-align: center;"
            else if (document.getElementById('priority').children[2].selected == true)
                document.getElementById('priority').style = "color:orange;font-weight:600; width: 100%; height: 25px; text-align: center;"
            else if (document.getElementById('priority').children[3].selected == true)
                document.getElementById('priority').style = "color:red;font-weight:600;width: 100%;  height: 25px; text-align: center;"
            else document.getElementById('priority').style = "color:#000;font-weight:400;width: 100%; height: 25px; text-align: center;"
        }

        document.getElementById('priority').onchange = changeprioritycolor;

        document.getElementById('clearcreateform').onclick = function () {
            document.getElementById('chathashlnk').style.background = '#cac1b1';
            document.getElementById('taskcomment').value = '';
            document.getElementById('taskcomment').style.background = '';
            document.getElementById('taskserviceid').value = '';
            document.getElementById('taskserviceid').style.background = '';
            document.getElementById('taskserviceid').style = 'color:#000; font-weight:400;width:100%'
            document.getElementById('taskuserid').value = '';
            document.getElementById('taskuserid').style.background = '';
            document.getElementById('priority').children[0].selected = true
            document.getElementById('priority').style = "color:#000;font-weight:400;width: 100%; height: 25px; text-align: center;"
            document.getElementById('customerservice').children[0].selected = true
            document.getElementById('customerservice').style.background = '';
        }

        document.getElementById('critteachertostudent').onclick = function () {
            document.getElementById('priority').children[3].selected = true;
            document.getElementById('priority').style = "color:red;font-weight:600;width: 100%;  height: 25px; text-align: center;"
            document.getElementById('customerservice').children[1].selected = true;

            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
                    document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
                } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-educationServiceId") {
                    document.getElementById('taskserviceid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
                }
            }

            document.getElementById('taskcomment').value = document.getElementById('taskcomment').value + "\nПроверил связь с П, все ок, свяжитесь с У!"
        }

        document.getElementById('critstudenttoteacher').onclick = function () {
            document.getElementById('priority').children[3].selected = true;
            document.getElementById('priority').style = "color:red;font-weight:600;width: 100%;  height: 25px; text-align: center;"
            document.getElementById('customerservice').children[1].selected = true;

            let services;

            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                    document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
            }

            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "services") {
                    services = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.match(/service-\d+/gm)
                }
            }

            if (services.length == 1) {
                document.getElementById('taskserviceid').value = services[0].replace('service-', '')
            } else {
                for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-educationServiceId") {
                        document.getElementById('taskserviceid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
                    }
                }
            }

            document.getElementById('taskcomment').value = document.getElementById('taskcomment').value + "\nПроверил связь с У, все ок, свяжитесь с П!"
        }

        document.getElementById('highsecondline').onclick = function () {
            document.getElementById('priority').children[2].selected = true;
            document.getElementById('priority').style = "color:orange;font-weight:600; width: 100%; height: 25px; text-align: center;"
            document.getElementById('customerservice').children[6].selected = true;

            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                    document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
            }

            document.getElementById('taskserviceid').value = '';
        }


        document.getElementById('highteachersc').onclick = function () {
            document.getElementById('priority').children[2].selected = true;
            document.getElementById('customerservice').children[5].selected = true;

            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                    document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
            }
        }

        document.getElementById('highteachertc').onclick = function () {
            document.getElementById('priority').children[2].selected = true;
            document.getElementById('priority').style = "color:orange;font-weight:600; width: 100%; height: 25px; text-align: center;"
            document.getElementById('customerservice').children[2].selected = true;

            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                    document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
            }
        }

        document.getElementById('createtask').onclick = function () {
            let prioritystate;
            let csstate;
            let usluga;

            let taskflagempty = 0;
            let idflagempty = 0;

            if (document.getElementById('chathashlnk').value.length < 3) {
                document.getElementById('chathashlnk').style.background = 'Coral';
                taskflagempty = 1;
            } else { document.getElementById('chathashlnk').style.background = '#cac1b1'; }

            if (document.getElementById('priority').value != 'Приоритет') {
                document.getElementById('priority').style.background = '';
                for (let i = 0; i < document.getElementById('priority').children.length; i++) {
                    if (document.getElementById('priority').children[i].selected == true)
                        prioritystate = document.getElementById('priority').children[i].value
                }
            } else {
                document.getElementById('priority').style.background = 'Coral';
                taskflagempty = 1;
            }

            if (document.getElementById('customerservice').value != 'Отдел') {
                document.getElementById('customerservice').style.background = '';
                for (let i = 0; i < document.getElementById('customerservice').children.length; i++) {
                    if (document.getElementById('customerservice').children[i].selected == true)
                        csstate = document.getElementById('customerservice').children[i].value
                }
            } else {
                document.getElementById('customerservice').style.background = 'Coral';
                taskflagempty = 1;
            }

            if (document.getElementById('taskserviceid').value.length < 3) {
                if (document.getElementById('priority').value == 'highest') {
                    document.getElementById('taskserviceid').style.background = 'Coral';
                    taskflagempty = 1;
                } else {
                    document.getElementById('taskserviceid').style.background = '';
                }
            } else {
                document.getElementById('taskserviceid').style.background = '';
            }

            if (document.getElementById('taskuserid').value.length < 3) {
                document.getElementById('taskuserid').style.background = 'Coral';
                taskflagempty = 1;
            } else { document.getElementById('taskuserid').style.background = ''; }

            if (document.getElementById('taskcomment').value.length < 3) {
                document.getElementById('taskcomment').style.background = 'Coral';
                taskflagempty = 1;
            } else { document.getElementById('taskcomment').style.background = ''; }

            if (taskflagempty == 0) {
                if (document.getElementById('taskserviceid').value == '')
                    usluga = document.getElementById('taskserviceid').value = null;
                else usluga = document.getElementById('taskserviceid').value

                for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                        idflagempty = 1;
                    }
                }

                if (idflagempty == 1){
                    fetch("https://skyeng.autofaq.ai/api/reason8/operator/customButtons/form", {
                        "headers": {
                            "content-type": "application/json",
                        },
                        "body": `{\"conversationId\":\"${conversid}",\"elements\":[{\"name\":\"priority\",\"value\":\"${prioritystate}\"},{\"name\":\"category\",\"value\":\"${csstate}\"},{\"name\":\"educationServiceIdInput\",\"value\":${usluga}},{\"name\":\"userId\",\"value\":${document.getElementById('taskuserid').value.trim()}},{\"name\":\"comment\",\"value\":\"${document.getElementById('taskcomment').value.replaceAll("\n", "\\n")}\"}]}`,
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });
                } else {
                    fetch("https://skyeng.autofaq.ai/api/reason8/operator/customButtons/form", {
                        "headers": {
                            "content-type": "application/json",
                        },
                        "body": `{\"conversationId\":\"${conversid}",\"elements\":[{\"name\":\"priority\",\"value\":\"${prioritystate}\"},{\"name\":\"category\",\"value\":\"${csstate}\"},{\"name\":\"educationServiceIdInput\",\"value\":${usluga}},{\"name\":\"userId\",\"value\":${document.getElementById('taskuserid').value.trim()}},{\"name\":\"initiatorId\",\"value\":${document.getElementById('taskuserid').value.trim()}},{\"name\":\"comment\",\"value\":\"${document.getElementById('taskcomment').value.replaceAll("\n", "\\n")}\"}]}`,
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });
                }

                document.getElementById('taskcomment').value = '';
                document.getElementById('taskserviceid').value = '';
                document.getElementById('taskuserid').value = '';
                document.getElementById('priority').children[0].selected = true
                document.getElementById('customerservice').children[0].selected = true
                document.getElementById('AF_Createtask').style.display = 'none'

            } else alert("Задача не была создана, проверьте, пожалуйста, заполнение полей")
        }


    } else {
        document.getElementById('AF_Createtask').style.display = 'none'
        conversid = document.getElementById('chathashlnk').value;
        fetch("https://skyeng.autofaq.ai/api/reason8/operator/customButtons/form", {
            "headers": {
                "content-type": "application/json",
            },
            "body": `{\"conversationId\":\"${conversid}\"}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
    }

}