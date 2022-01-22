//Global variables
let jiratoken;

//main
	document.getElementById('servDsk').onclick = function () {
        if (document.getElementById('AF_ServDsk').style.display == '')
            document.getElementById('AF_ServDsk').style.display = 'none'
        else
            document.getElementById('AF_ServDsk').style.display = ''
		
					document.getElementById('responseTextarea1').value = '{}'
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/"
					document.getElementById('responseTextarea3').value = 'getjiratoken'
					document.getElementById('sendResponse').click()
					
					setTimeout(function() {
						
					document.getElementById('responseTextarea1').value = '{}'
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/"
					document.getElementById('responseTextarea3').value = 'getjiratoken'
					document.getElementById('sendResponse').click()
						
					    jiratoken = document.getElementById('responseTextarea1').getAttribute('getjiratoken');
					    jiratoken = jiratoken.match(/name="atlassian-token" content="(.*lin)/)[1];
                        document.getElementById('responseTextarea1').removeAttribute('getjiratoken');
						console.log("TOKEN: " + jiratoken);
					}, 1000)
					
					
					$('.sdbtn').click(function() {  
					$('.sdbtn').not(this).removeClass('activebtnsd');
					$(this).toggleClass('activebtnsd');
					});

					document.getElementById('optionTeacher').onclick = function() {
				if (document.getElementById('teacherssrvdskoptions').style.display != ''){
					document.getElementById('teacherssrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('teachersform').style.display = '';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
	
					
					$('.teacbtn').click(function() {  
					$('.teacbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					//Начало окрашивания кнопок и добавление закрашивания при переключении
					
					document.getElementById('teacherstatistic').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherstudy').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherbreak').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {

							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teachermoney').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teachermap').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teachertimetable').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherperenos').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherwidgetbalance').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherwidgetlessonmark').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherwidgetplanfact').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherwidgettimetableweek').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherwidgetKPI').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') { 
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherwidgetmystudents').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика";
							document.getElementById('customfield_7').placeholder ="ID преподавателя";
							document.getElementById('customfield_8').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_9').style.display ="";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherTRMquestions').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_7').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_8').placeholder ="Ожидаемое поведение";
							document.getElementById('customfield_9').style.display ="none";
							document.getElementById('customfield_10').style.display ="";
						}
					}
					
					document.getElementById('teacherunderground').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') {
							document.getElementById('customfield_6').placeholder ="ID ученика(optional)";
							document.getElementById('customfield_7').placeholder ="ID преподавателя(optional)";
							document.getElementById('customfield_8').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_9').style.display ="none";
							document.getElementById('customfield_10').style.display ="none";
						}
					}
					
					document.getElementById('create_2').onclick = function() {
					let idstd = document.getElementById('customfield_6').value;
					let idteach = document.getElementById('customfield_7').value;
					let dscr = document.getElementById('customfield_8').value;
					let erx = document.getElementById('customfield_9').value ;
					let	ary = document.getElementById('customfield_10').value ;
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherstatistic').textContent){
					console.log("Статистика: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/644",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/644";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherstudy').textContent) {
					console.log("Моё обучение: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/643",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18321=${ary}&customfield_18320=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/643";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherbreak').textContent){
					console.log("Перерыв: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/642",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/642";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teachermoney').textContent){
					console.log("Финансы: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/641",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18321=${ary}&customfield_18320=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/641";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teachermap').textContent){
					console.log("Карта роста: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/640",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18321=${ary}&customfield_18320=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/640";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teachertimetable').textContent){
					console.log("Расписание: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/639",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/639";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherperenos').textContent){
					console.log("Запросы на перенос занятия: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/637",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18321=${ary}&customfield_18320=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/637";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetbalance').textContent){
					console.log("Виджет баланса: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/636",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18321=${ary}&customfield_18320=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/636";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetlessonmark').textContent){
					console.log("Виджет отметки уроков: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/635",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/635";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetplanfact').textContent){
					console.log("Виджет плана/факта уроков: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/634",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/634";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgettimetableweek').textContent){
					console.log("Виджет расписания на неделю: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/633",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/633";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";	
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetKPI').textContent){
					console.log("Виджет KPI: " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/632",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18321=${ary}&customfield_18320=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/632";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";	
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetmystudents').textContent){
					console.log("Виджет 'Мои ученики': " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/631",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&customfield_18319=${dscr}&customfield_18321=${ary}&customfield_18320=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/631";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";	
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherTRMquestions').textContent){
					console.log("Вопросы по TRM': " + "Description: " + idstd + " STR: " + idteach + " ER: " + ary + " AR: " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/530",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${idstd}&customfield_18319=${idteach}&id="customfield_18320"=${dscr}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/530";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					document.getElementById('customfield_9').value = "";
					document.getElementById('customfield_10').value = "";	
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherunderground').textContent){
					console.log("Подземный стук': " + "ID student: " + idstd + " ID teacher: " + idteach +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/531",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idteach}&id="customfield_18808"=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/531";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_6').value = "";
					document.getElementById('customfield_7').value = "";
					document.getElementById('customfield_8').value = "";
					} else 
						console.log("Not found");
				}
					
				} else {
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
						}
		 }
		 
		 			document.getElementById('optionSkysmart').onclick = function() {
				if (document.getElementById('skysmartsrvdskoptions').style.display != '') {
					document.getElementById('skysmartsrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = '';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					
					
					$('.kidsbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					document.getElementById('create_1').onclick = function() {
					let dscr = document.getElementById('customfield_1').value;
					let erx = document.getElementById('customfield_2').value;
					let ary = document.getElementById('customfield_3').value;
					let idstd = document.getElementById('customfield_4').value ;
					let	servid = document.getElementById('customfield_5').value ;
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartfamily').textContent) {
					console.log("Операции с семьей: " + "Description: " + dscr + " " + "ER: " + erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/822",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/822";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					}
					else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartfeedback').textContent) {
					console.log("Обратная связь: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/819",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/819";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartcontent').textContent) {
					console.log("Контент: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
										
					 document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/890",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/890";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()

					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmarthomework').textContent) {
					console.log("Страница ДЗ и тестов: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/817",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/817";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartprogress').textContent) {
					console.log("Страница прогресса: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/818",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/818";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartcabinet').textContent) {
					console.log("Детский ЛКУ: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/821",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/821";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartcertificate').textContent) {
					console.log("Сертификаты: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/820",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/820";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartgroup').textContent) {
					console.log("Групповые и параллельные уроки: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/816",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/816";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartpages').textContent) {
					console.log("Страницы skysmart: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
					
					 document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/824",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/824";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartappparents').textContent) {
					console.log("Приложение skysmart parents: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/823",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/823";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartonetoone').textContent) {
					console.log("Уроки 1:1: " + "Description: " + dscr + " " + "ER: " +  erx + " " + "AR: " + ary + " " + "ID student: " + idstd + " " + "ID service: " + servid);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/815",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/815";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else
					console.log("Not found")
					}
					

						
				} else {
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';  // подумать как поправить
					document.getElementById('kidsform').style.display = 'none';
				}
		 }
		 
		 		 	document.getElementById('optionBillingQA').onclick = function() {
				if (document.getElementById('billingqasrvdskoptions').style.display != '') {
					document.getElementById('billingqasrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';	
					document.getElementById('teachersform').style.display = 'none';		
					document.getElementById('onboardingform').style.display = 'none';					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
				} else {
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
				}
		 }
		 
		 		 	document.getElementById('optionOnboarding').onclick = function() {
				if (document.getElementById('c1srvdskoptions').style.display != '') {
					document.getElementById('c1srvdskoptions').style.display = '';
					document.getElementById('onboardingform').style.display = '';
					document.getElementById('kidsform').style.display = 'none';	
					document.getElementById('teachersform').style.display = 'none';					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
				} else {
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
				}
		 }
		 
					document.getElementById('optionSchedule').onclick = function() {
				if (document.getElementById('schedulesrvdskoptions').style.display != '') {
					document.getElementById('schedulesrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';	
					document.getElementById('teachersform').style.display = 'none';	
					document.getElementById('onboardingform').style.display = 'none';					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
				} else {
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
				}
		 }
		 
		 			document.getElementById('optionTelephony').onclick = function() {
				if (document.getElementById('telephonysrvdskoptions').style.display != '') {
					document.getElementById('telephonysrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
				} else {
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
				}
		 }
		 
		 		 	document.getElementById('optionAuth').onclick = function() {
				if (document.getElementById('authsrvdskoptions').style.display != '') {
					document.getElementById('authsrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
				} else {
					document.getElementById('authsrvdskoptions').style.display = 'none';
				}
				
		 }
		 
		 		 	document.getElementById('optionCRM2').onclick = function() {
				if (document.getElementById('crm2srvdskoptions').style.display != '') {
					document.getElementById('crm2srvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
				} else {
					document.getElementById('crm2srvdskoptions').style.display = 'none';
				}
		 }
		 
					document.getElementById('optionMrkt').onclick = function() {
				if (document.getElementById('mrktsrvdskoptions').style.display != '') {
					document.getElementById('mrktsrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
				} else {
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
				}
		 }
		 
		 			document.getElementById('optionBilling').onclick = function() {
				if (document.getElementById('billingsrvdskoptions').style.display != '') {
					document.getElementById('billingsrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
				} else {
					document.getElementById('billingsrvdskoptions').style.display = 'none';
				}
		 }	 
    }