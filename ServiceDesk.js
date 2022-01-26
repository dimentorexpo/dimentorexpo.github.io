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
						if (jiratoken.match(/name="atlassian-token" content="(.*lin)/) != null)
					    jiratoken = jiratoken.match(/name="atlassian-token" content="(.*lin)/)[1];
						else alert("Авторизуйтесь в системе Jira, чтобы запрос был отправлен в Service Desk");
                        document.getElementById('responseTextarea1').removeAttribute('getjiratoken');
						console.log("TOKEN: " + jiratoken);
					}, 1000)
					
					
					$('.sdbtn').click(function() {  
					$('.sdbtn').not(this).removeClass('activebtnsd');
					$(this).toggleClass('activebtnsd');
					});
					
					$('.teacbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					$('.kidsbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
										
					$('.bilqabtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					$('.c1sbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					$('.schdbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					$('.telepbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					$('.authbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					$('.crm2sbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					$('.mrktbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});
					
					$('.billbtn').click(function() {  
					$('.kidsbtn').not(this).removeClass('activebtn');
					$('.bilqabtn').not(this).removeClass('activebtn');
					$('.teacbtn').not(this).removeClass('activebtn');
					$('.c1sbtn').not(this).removeClass('activebtn');
					$('.schdbtn').not(this).removeClass('activebtn');
					$('.telepbtn').not(this).removeClass('activebtn');
					$('.authbtn').not(this).removeClass('activebtn');
					$('.crm2sbtn').not(this).removeClass('activebtn');
					$('.mrktbtn').not(this).removeClass('activebtn');
					$('.billbtn').not(this).removeClass('activebtn');
					$(this).toggleClass('activebtn');
					});

					document.getElementById('optionTeacher').onclick = function() {
				if (document.getElementById('teacherssrvdskoptions').style.display != ''){
					document.getElementById('teacherssrvdskoptions').style.display = '';
					document.getElementById('teachersform').style.display = '';
					
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('billqaform').style.display = 'none';
					document.getElementById('scheduleform').style.display = 'none';	
					document.getElementById('billingform').style.display = 'none';	
					document.getElementById('mrktform').style.display = 'none';	
					document.getElementById('crm2form').style.display = 'none';
					document.getElementById('authform').style.display = 'none';	
					document.getElementById('telephonyform').style.display = 'none';

					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
						
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
					document.getElementById('teachersform').style.display = 'none';
					

				}
		 }
		 
		 			document.getElementById('optionSkysmart').onclick = function() {
				if (document.getElementById('skysmartsrvdskoptions').style.display != '') {
					document.getElementById('skysmartsrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = '';
					
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('billqaform').style.display = 'none';
					document.getElementById('scheduleform').style.display = 'none';	
					document.getElementById('billingform').style.display = 'none';	
					document.getElementById('mrktform').style.display = 'none';	
					document.getElementById('crm2form').style.display = 'none';
					document.getElementById('authform').style.display = 'none';	
					document.getElementById('telephonyform').style.display = 'none';
					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
										
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
					document.getElementById('billqaform').style.display = '';
					
					document.getElementById('kidsform').style.display = 'none';	
					document.getElementById('teachersform').style.display = 'none';						
					document.getElementById('onboardingform').style.display = 'none';	
					document.getElementById('scheduleform').style.display = 'none';
					document.getElementById('billingform').style.display = 'none';	
					document.getElementById('mrktform').style.display = 'none';	
					document.getElementById('crm2form').style.display = 'none';
					document.getElementById('authform').style.display = 'none';	
					document.getElementById('telephonyform').style.display = 'none';
					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
									
					//Начало окрашивания кнопок и добавление закрашивания при переключении
					
					document.getElementById('billqarassroch').onclick = function() {
						if (document.getElementById('billqaform').style.display == '') {
							document.getElementById('customfield_16').placeholder ="ID ученика";
							document.getElementById('customfield_17').placeholder ="ID услуги";
							document.getElementById('customfield_18').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_19').style.display = 'none';
							document.getElementById('customfield_20').style.display = 'none';
							document.getElementById('customfield_21').style.display = 'none';
							document.getElementById('customfield_22').style.display = 'none';
							document.getElementById('customfield_23').style.display = 'none';
							document.getElementById('customfield_24').style.display = 'none';
							document.getElementById('customfield_25').style.display = 'none';
						}
					}
					
					document.getElementById('billqapaylendings').onclick = function() {
						if (document.getElementById('billqaform').style.display == '') {
							document.getElementById('customfield_16').placeholder ="Название продукта?";
							document.getElementById('customfield_17').placeholder ="Прайссет и позиция?";
							document.getElementById('customfield_18').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_19').style.display = '';
							document.getElementById('customfield_20').style.display = '';
							document.getElementById('customfield_21').style.display = '';
							document.getElementById('customfield_22').style.display = '';
							document.getElementById('customfield_23').style.display = '';
							document.getElementById('customfield_24').style.display = '';
							document.getElementById('customfield_25').style.display = '';
						}
					}
					
					document.getElementById('billqabalancecorrect').onclick = function() {
						if (document.getElementById('billqaform').style.display == '') {
							document.getElementById('customfield_16').placeholder ="ID ученика";
							document.getElementById('customfield_17').placeholder ="ID услуги";
							document.getElementById('customfield_18').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_19').style.display = 'none';
							document.getElementById('customfield_20').style.display = 'none';
							document.getElementById('customfield_21').style.display = 'none';
							document.getElementById('customfield_22').style.display = 'none';
							document.getElementById('customfield_23').style.display = 'none';
							document.getElementById('customfield_24').style.display = 'none';
							document.getElementById('customfield_25').style.display = 'none';
						}
					}
					
					document.getElementById('create_4').onclick = function() {
					let idstd = document.getElementById('customfield_16').value;
					let idserv = document.getElementById('customfield_17').value;
					let dscr = document.getElementById('customfield_18').value;
					let jur = document.getElementById('customfield_19').value ;
					let	soglas = document.getElementById('customfield_20').value ;
					let	pagef = document.getElementById('customfield_21').value ;
					let	pagel = document.getElementById('customfield_22').value ;
					let	pages = document.getElementById('customfield_23').value ;
					let	usrdesc = document.getElementById('customfield_24').value ;
					let	sclackch = document.getElementById('customfield_25').value ;
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billqarassroch').textContent) {
					console.log("Вопросы по рассрочке: " + "ID student " + idstd + "ID service " + idserv + "Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/577",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18808=${dscr}&&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/577";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_16').value = "";
					document.getElementById('customfield_17').value = "";
					document.getElementById('customfield_18').value = "";
					}
					else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billqapaylendings').textContent) {
					console.log("Оплата с лендингов : " + "Название продукта " + idstd + "Прайсет " + idserv + "Description " + dscr + "Jur person " + jur + "Soglasovano s fin dir" + soglas + "Page link where " + pagef + "Page link failed " + pagel + "Page link success " + pages + "User descr" + usrdesc + "Slack chanel " + sclackch);
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/571",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18319=${dscr}&customfield_18320=${jur}&customfield_18321=${soglas}&customfield_18808=${pagef}&customfield_18317=${pagel}&customfield_18221=${pages}&customfield_18316=${usrdesc}&customfield_18315=${sclackch}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/571";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_16').value = "";
					document.getElementById('customfield_17').value = "";
					document.getElementById('customfield_18').value = "";
					document.getElementById('customfield_19').value = "";
					document.getElementById('customfield_20').value = "";
					document.getElementById('customfield_21').value = "";
					document.getElementById('customfield_22').value = "";
					document.getElementById('customfield_23').value = "";
					document.getElementById('customfield_24').value = "";
					document.getElementById('customfield_25').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billqabalancecorrect').textContent) {
					console.log("Проверка баланса у на расхождения : " + "ID student " + idstd + "ID service " + idserv + "Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/570",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&customfield_18975=${idstd}&customfield_18976=${idserv}&&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/570";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_16').value = "";
					document.getElementById('customfield_17').value = "";
					document.getElementById('customfield_18').value = "";
					
					} else console.log("Not found");
					}
					
					
				} else {
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('billqaform').style.display = 'none';	
				}
		 }
		 
		 		 	document.getElementById('optionOnboarding').onclick = function() {
				if (document.getElementById('c1srvdskoptions').style.display != '') {
					document.getElementById('c1srvdskoptions').style.display = '';
					document.getElementById('onboardingform').style.display = '';
					
					document.getElementById('kidsform').style.display = 'none';	
					document.getElementById('teachersform').style.display = 'none';	
					document.getElementById('billqaform').style.display = 'none';	
					document.getElementById('scheduleform').style.display = 'none';
					document.getElementById('billingform').style.display = 'none';	
					document.getElementById('mrktform').style.display = 'none';	
					document.getElementById('crm2form').style.display = 'none';
					document.getElementById('authform').style.display = 'none';	
					document.getElementById('telephonyform').style.display = 'none';	
					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
										
					// по нажатию кнопок окрашивать их и менять тип формы
							document.getElementById('c1verstka').onclick = function() {
						if (document.getElementById('onboardingform').style.display == '') {
							document.getElementById('customfield_14').style.display = 'none';
							document.getElementById('customfield_15').style.display = 'none';
						}
					}
					
					document.getElementById('c1payonboarding').onclick = function() {
						if (document.getElementById('onboardingform').style.display == '') {
							document.getElementById('customfield_14').style.display ="";
							document.getElementById('customfield_15').style.display ="";
						}
					}
					
					document.getElementById('c1redirects').onclick = function() {
						if (document.getElementById('onboardingform').style.display == '') {
							document.getElementById('customfield_14').style.display ="";
							document.getElementById('customfield_15').style.display ="";
						}
					}
					
					document.getElementById('c1underground').onclick = function() {
						if (document.getElementById('onboardingform').style.display == '') {
							document.getElementById('customfield_14').style.display = 'none';
							document.getElementById('customfield_15').style.display = 'none';
						}
					}
					
					document.getElementById('create_3').onclick = function() {
					let idstd = document.getElementById('customfield_11').value;
					let idserv = document.getElementById('customfield_12').value;
					let dscr = document.getElementById('customfield_13').value;
					let erx = document.getElementById('customfield_14').value ;
					let	ary = document.getElementById('customfield_15').value ;
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('c1verstka').textContent){
					console.log("Проблемы с версткой: " + "ID student: " + idstd + " ID service: " + idserv +  " Description: " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/597",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/597";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_11').value = "";
					document.getElementById('customfield_12').value = "";
					document.getElementById('customfield_13').value = "";
					document.getElementById('customfield_14').value = "";
					document.getElementById('customfield_15').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('c1payonboarding').textContent){
					console.log("Не завершился онбординг после оплаты: " + "ID student: " + idstd + " ID service: " + idserv +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/596",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18808=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/596";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_11').value = "";
					document.getElementById('customfield_12').value = "";
					document.getElementById('customfield_13').value = "";
					document.getElementById('customfield_14').value = "";
					document.getElementById('customfield_15').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('c1redirects').textContent){
					console.log("Циклические редиректы: " + "ID student: " + idstd + " ID service: " + idserv +  " Description: " + dscr + " ER: " + erx + " AR: " + ary);
							
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/595",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18808=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/595";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_11').value = "";
					document.getElementById('customfield_12').value = "";
					document.getElementById('customfield_13').value = "";
					document.getElementById('customfield_14').value = "";
					document.getElementById('customfield_15').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('c1underground').textContent){
					console.log("Подземный стук: " + "ID student: " + idstd + " ID service: " + idserv +  " Description: " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/598",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/598";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_11').value = "";
					document.getElementById('customfield_12').value = "";
					document.getElementById('customfield_13').value = "";
					document.getElementById('customfield_14').value = "";
					document.getElementById('customfield_15').value = "";
						
					} else
						console.log("Not found");
					}
						
				} else {
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
				}
		 }
		 
					document.getElementById('optionSchedule').onclick = function() {
				if (document.getElementById('schedulesrvdskoptions').style.display != '') {
					document.getElementById('schedulesrvdskoptions').style.display = '';
					document.getElementById('scheduleform').style.display = '';	
					
					document.getElementById('kidsform').style.display = 'none';	
					document.getElementById('teachersform').style.display = 'none';	
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('billqaform').style.display = 'none';
					document.getElementById('billingform').style.display = 'none';	
					document.getElementById('mrktform').style.display = 'none';	
					document.getElementById('crm2form').style.display = 'none';
					document.getElementById('authform').style.display = 'none';	
					document.getElementById('telephonyform').style.display = 'none';
										
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
									
					//Начало окрашивания кнопок и добавление закрашивания при переключении
					
					document.getElementById('ttenableAP').onclick = function() {
						if (document.getElementById('scheduleform').style.display == '') {
							document.getElementById('customfield_27').style.display = '';
							document.getElementById('customfield_27').placeholder ="ID услуги";
							document.getElementById('customfield_28').style.display = '';
							document.getElementById('customfield_28').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_29').style.display = 'none';
							document.getElementById('customfield_30').style.display = 'none';
							document.getElementById('customfield_31').style.display = 'none';
						}
					}
					
					document.getElementById('ttdisableAP').onclick = function() {
						if (document.getElementById('scheduleform').style.display == '') {
							document.getElementById('customfield_27').style.display = '';
							document.getElementById('customfield_27').placeholder ="ID услуги";
							document.getElementById('customfield_28').style.display = '';
							document.getElementById('customfield_28').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_29').style.display = '';
							document.getElementById('customfield_29').placeholder ="Причина отключения АП? (ОБЯЗАТЕЛЬНО)";
							document.getElementById('customfield_30').style.display = 'none';
							document.getElementById('customfield_31').style.display = 'none';
						}
					}
					
					document.getElementById('ttquestions').onclick = function() {
						if (document.getElementById('scheduleform').style.display == '') {
							document.getElementById('customfield_27').style.display = 'none';
							document.getElementById('customfield_28').style.display = '';
							document.getElementById('customfield_28').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_29').style.display = '';
							document.getElementById('customfield_29').placeholder ="Как воспроизвести ошибку?";
							document.getElementById('customfield_30').style.display = '';
							document.getElementById('customfield_31').style.display = '';
						}
					}
					
					document.getElementById('ttacceptzapros').onclick = function() {
						if (document.getElementById('scheduleform').style.display == '') {
							document.getElementById('customfield_27').style.display = '';
							document.getElementById('customfield_27').placeholder ="ID преподавателя";
							document.getElementById('customfield_28').style.display = '';
							document.getElementById('customfield_28').placeholder ="Краткое и структурированное описание проблемы (optional)";
							document.getElementById('customfield_29').style.display = 'none';
							document.getElementById('customfield_30').style.display = 'none';
							document.getElementById('customfield_31').style.display = 'none';
						}
					}
					
					document.getElementById('ttnottaskpodbor').onclick = function() {
						if (document.getElementById('scheduleform').style.display == '') {
							document.getElementById('customfield_27').style.display = '';
							document.getElementById('customfield_27').placeholder ="ID услуги";
							document.getElementById('customfield_28').style.display = '';
							document.getElementById('customfield_28').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_29').style.display = 'none';
							document.getElementById('customfield_30').style.display = 'none';
							document.getElementById('customfield_31').style.display = 'none';
						}
					}
					
					document.getElementById('ttneurobot').onclick = function() {
						if (document.getElementById('scheduleform').style.display == '') {
							document.getElementById('customfield_27').style.display = '';
							document.getElementById('customfield_27').placeholder ="ID услуги";
							document.getElementById('customfield_28').style.display = 'none';
							document.getElementById('customfield_29').style.display = '';
							document.getElementById('customfield_30').style.display = '';
							document.getElementById('customfield_31').style.display = '';
						}
					}
					
					document.getElementById('ttunderground').onclick = function() {
						if (document.getElementById('scheduleform').style.display == '') {
							document.getElementById('customfield_27').placeholder ="ID преподавателя";
							document.getElementById('customfield_28').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_28').style.display = '';
							document.getElementById('customfield_29').style.display = 'none';
							document.getElementById('customfield_30').style.display = 'none';
							document.getElementById('customfield_31').style.display = 'none';
						}
					}
					
					document.getElementById('create_5').onclick = function() {
					let idstd = document.getElementById('customfield_26').value;
					let idserv = document.getElementById('customfield_27').value;
					let dscr = document.getElementById('customfield_28').value;
					let str = document.getElementById('customfield_29').value ;
					let	erx = document.getElementById('customfield_30').value ;
					let	ary = document.getElementById('customfield_31').value ;
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttenableAP').textContent) {
					console.log("Подключение АП: " + " ID student " + idstd + " ID service " + idserv + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/566",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18808=${dscr}&&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/566";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_26').value = "";
					document.getElementById('customfield_27').value = "";
					document.getElementById('customfield_28').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttdisableAP').textContent) {
					console.log("Отключение АП в ЛКУ: " + " ID student " + idstd + " ID service " + idserv + " Description " + dscr + " Reason " + str);
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/565",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18808=${dscr}&&customfield_18319=${str}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/565";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_26').value = "";
					document.getElementById('customfield_27').value = "";
					document.getElementById('customfield_28').value = "";
					document.getElementById('customfield_29').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttquestions').textContent) {
					console.log("Вопросы по ТТ: " + " ID student " + idstd + " Description " + dscr + " STR " + str + " ER " + erx + " AR " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/564",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/564";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_26').value = "";
					document.getElementById('customfield_28').value = "";
					document.getElementById('customfield_29').value = "";
					document.getElementById('customfield_30').value = "";
					document.getElementById('customfield_31').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttacceptzapros').textContent) {
					console.log("Подтвердить запрос в ЛКП для переподбора ВП: " + " ID student " + idstd + " ID service " + idserv + " Description " + dscr)
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/563",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18808=${dscr}&&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/563";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_26').value = "";
					document.getElementById('customfield_27').value = "";
					document.getElementById('customfield_28').value = "";		
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttnottaskpodbor').textContent) {
					console.log("Почему нет задачи подбора ?: " + " ID student " + idstd + " ID service " + idserv + " Description " + dscr)
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/562",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${idserv}&customfield_18808=${dscr}&&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/562";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_26').value = "";
					document.getElementById('customfield_27').value = "";
					document.getElementById('customfield_28').value = "";				
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttneurobot').textContent) {
					console.log("Нейробот: " + " ID student " + idstd + " ID service " + idserv + " STR " + str + " ER " + erx + " AR " + ary)
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/880",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${idserv}sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/880";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_26').value = "";
					document.getElementById('customfield_27').value = "";
					document.getElementById('customfield_29').value = "";				
					document.getElementById('customfield_30').value = "";				
					document.getElementById('customfield_31').value = "";				
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttunderground').textContent) {
					console.log("Подземный стук: " + " ID student " + idstd + " ID service " + idserv + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/567",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&customfield_18976=${idserv}&customfield_18975=${idstd}&&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/567";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_26').value = "";
					document.getElementById('customfield_27').value = "";
					document.getElementById('customfield_28').value = "";				
			
					
					} else console.log("Not found");
				}
												
				} else {
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('scheduleform').style.display = 'none';	
				}
		 }
		 
		 			document.getElementById('optionTelephony').onclick = function() {
				if (document.getElementById('telephonysrvdskoptions').style.display != '') {
					document.getElementById('telephonysrvdskoptions').style.display = '';
					document.getElementById('telephonyform').style.display = '';	
					
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('billqaform').style.display = 'none';
					document.getElementById('scheduleform').style.display = 'none';
					document.getElementById('billingform').style.display = 'none';	
					document.getElementById('mrktform').style.display = 'none';	
					document.getElementById('crm2form').style.display = 'none';
					document.getElementById('authform').style.display = 'none';	
										
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
										
					document.getElementById('telnoaccess').onclick = function() {
						if (document.getElementById('telephonyform').style.display == '') {
							document.getElementById('customfield_37').style.display ="";
							document.getElementById('customfield_37').placeholder ="Ваш ID оператора";
							document.getElementById('customfield_38').style.display ="";
							document.getElementById('customfield_38').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_39').style.display ="none";
						}
					}
					
					document.getElementById('teloutgoing').onclick = function() {
						if (document.getElementById('telephonyform').style.display == '') {
							document.getElementById('customfield_37').style.display ="";
							document.getElementById('customfield_37').placeholder ="Ваш ID оператора";
							document.getElementById('customfield_38').style.display ="";
							document.getElementById('customfield_38').placeholder ="Краткое и структурированное описание проблемы и номера где проблемы";
							document.getElementById('customfield_39').style.display ="none";
						}
					}	
					
					document.getElementById('telincoming').onclick = function() {
						if (document.getElementById('telephonyform').style.display == '') {
							document.getElementById('customfield_37').style.display ="";
							document.getElementById('customfield_37').placeholder ="Ваш ID оператора";
							document.getElementById('customfield_38').style.display ="";
							document.getElementById('customfield_38').placeholder ="Краткое и структурированное описание проблемы и номера где проблемы";
							document.getElementById('customfield_39').style.display ="none";
						}
					}	

					document.getElementById('telspeaking').onclick = function() {
						if (document.getElementById('telephonyform').style.display == '') {
							document.getElementById('customfield_37').style.display ="";
							document.getElementById('customfield_37').placeholder ="Ваш ID оператора";
							document.getElementById('customfield_38').style.display ="";
							document.getElementById('customfield_38').placeholder ="Краткое и структурированное описание проблемы и номера где проблемы";
							document.getElementById('customfield_39').style.display ="none";
						}
					}
					
					document.getElementById('telrtstat').onclick = function() {
						if (document.getElementById('telephonyform').style.display == '') {
							document.getElementById('customfield_37').style.display ="";
							document.getElementById('customfield_37').placeholder ="Краткое и структурированное описание проблемы";
							document.getElementById('customfield_38').style.display ="";
							document.getElementById('customfield_38').placeholder ="Ожидаемое поведение";
							document.getElementById('customfield_39').style.display ="";
						}
					}	
					
					document.getElementById('telcallinfo').onclick = function() {
						if (document.getElementById('telephonyform').style.display == '') {
							document.getElementById('customfield_37').style.display ="";
							document.getElementById('customfield_37').placeholder ="Ваш ID оператора";
							document.getElementById('customfield_38').style.display ="";
							document.getElementById('customfield_38').placeholder ="Краткое и структурированное описание проблемы и номера где проблемы";
							document.getElementById('customfield_39').style.display ="none";
						}
					}	
					
					document.getElementById('telredicall').onclick = function() {
						if (document.getElementById('telephonyform').style.display == '') {
							document.getElementById('customfield_37').style.display ="";
							document.getElementById('customfield_37').placeholder ="Ваш ID оператора";
							document.getElementById('customfield_38').style.display ="";
							document.getElementById('customfield_38').placeholder ="Краткое и структурированное описание проблемы и номера где проблемы";
							document.getElementById('customfield_39').style.display ="none";
						}
					}			

					document.getElementById('telunderground').onclick = function() {
						if (document.getElementById('telephonyform').style.display == '') {
							document.getElementById('customfield_37').style.display ="none";
							document.getElementById('customfield_38').placeholder ="Краткое и структурированное описание проблемы и номера где проблемы";
							document.getElementById('customfield_39').style.display ="none";
						}
					}	
					
					document.getElementById('create_7').onclick = function() {
					let ids = document.getElementById('customfield_37').value;
					let erx = document.getElementById('customfield_38').value;
					let ary = document.getElementById('customfield_39').value ;
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telnoaccess').textContent) {
					console.log("Отсутствие доступа к странице телефонии: " + " ID operator " + ids + " Description " + erx);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/607",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/607";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_37').value = "";
					document.getElementById('customfield_38').value = "";
					document.getElementById('customfield_39').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teloutgoing').textContent) {
					console.log("Проблема с исходящим вызовом: " + " ID operator " + ids + " Description " + erx); 
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/608",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/608";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_37').value = "";
					document.getElementById('customfield_38').value = "";
					document.getElementById('customfield_39').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telincoming').textContent) {
					console.log("Проблема с входящим вызовом: " + " ID operator " + ids + " Description " + erx); 

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/609",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/609";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_37').value = "";
					document.getElementById('customfield_38').value = "";
					document.getElementById('customfield_39').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telspeaking').textContent) {
					console.log("Проблема во время разговора: " + " ID operator " + ids + " Description " + erx); 

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/610",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/610";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_37').value = "";
					document.getElementById('customfield_38').value = "";
					document.getElementById('customfield_39').value = "";

					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telrtstat').textContent) {
					console.log("Проблема с реал-тайм статистикой: " + " Description " + ids + " ER " + erx + " AR " + ary); 

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/613",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${ids}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/613";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_37').value = "";
					document.getElementById('customfield_38').value = "";
					document.getElementById('customfield_39').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telcallinfo').textContent) {
					console.log("Запрос информации по звонку: " + " ID operator " + ids + " Description " + erx); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/612",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/612";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_37').value = "";
					document.getElementById('customfield_38').value = "";
					document.getElementById('customfield_39').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telredicall').textContent) {
					console.log("Проблема при переводе вызова: " + " ID operator " + ids + " Description " + erx); 
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/611",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/611";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_37').value = "";
					document.getElementById('customfield_38').value = "";
					document.getElementById('customfield_39').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telunderground').textContent) {
					console.log("Подземный стук: " + " Description " + erx); 
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/614",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/614";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_37').value = "";
					document.getElementById('customfield_38').value = "";
					document.getElementById('customfield_39').value = "";
					
					} else
						console.log("Not found");
					}
					
				} else {
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('telephonyform').style.display = 'none';
				}
		 }
		 
		 		 	document.getElementById('optionAuth').onclick = function() {
				if (document.getElementById('authsrvdskoptions').style.display != '') {
					document.getElementById('authsrvdskoptions').style.display = '';
					document.getElementById('authform').style.display = '';	
					
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('billqaform').style.display = 'none';
					document.getElementById('scheduleform').style.display = 'none';	
					document.getElementById('telephonyform').style.display = 'none';	
					document.getElementById('billingform').style.display = 'none';	
					document.getElementById('mrktform').style.display = 'none';	
					document.getElementById('crm2form').style.display = 'none';
										
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
									
					document.getElementById('authdevq').onclick = function() {
						if (document.getElementById('authform').style.display == '') {
							document.getElementById('customfield_40').style.display ="none";
							document.getElementById('customfield_41').style.display ="";
						}
					}
					
					document.getElementById('auth2google').onclick = function() {
						if (document.getElementById('authform').style.display == '') {
							document.getElementById('customfield_40').style.display ="";
							document.getElementById('customfield_40').placeholder ="Ваша рабочая почта";
							document.getElementById('customfield_41').style.display ="";
						}
					}	
					
					document.getElementById('auth2faemail').onclick = function() {
						if (document.getElementById('authform').style.display == '') {
							document.getElementById('customfield_40').style.display ="";
							document.getElementById('customfield_40').placeholder ="Ваша рабочая почта";
							document.getElementById('customfield_41').style.display ="";
						}
					}	

					document.getElementById('auth2fasms').onclick = function() {
						if (document.getElementById('authform').style.display == '') {
							document.getElementById('customfield_40').style.display ="";
							document.getElementById('customfield_40').placeholder ="Ваша рабочая почта";
							document.getElementById('customfield_41').style.display ="";
						}
					}
					
					document.getElementById('authdeladdrolesteach').onclick = function() {
						if (document.getElementById('authform').style.display == '') {
							document.getElementById('customfield_40').style.display ="";
							document.getElementById('customfield_40').placeholder ="ID преподавателя";
							document.getElementById('customfield_41').style.display ="";
						}
					}	
					
					document.getElementById('authdeladdrolesstud').onclick = function() {
						if (document.getElementById('authform').style.display == '') {
							document.getElementById('customfield_40').style.display ="";
							document.getElementById('customfield_40').placeholder ="ID ученика";
							document.getElementById('customfield_41').style.display ="";
						}
					}	
					
					document.getElementById('authlogcheck').onclick = function() {
						if (document.getElementById('authform').style.display == '') {
							document.getElementById('customfield_40').style.display ="";
							document.getElementById('customfield_40').placeholder ="ID физ.лица";
							document.getElementById('customfield_41').style.display ="";
						}
					}			

					document.getElementById('authbusinessq').onclick = function() {
						if (document.getElementById('authform').style.display == '') {
							document.getElementById('customfield_40').style.display ="none";
							document.getElementById('customfield_41').style.display ="";
						}
					}	
					
					document.getElementById('authunderground').onclick = function() {
						if (document.getElementById('authform').style.display == '') {
							document.getElementById('customfield_40').style.display ="none";
							document.getElementById('customfield_41').style.display ="";
						}
					}	
					
					document.getElementById('create_8').onclick = function() {
					let ids = document.getElementById('customfield_40').value;
					let dscr = document.getElementById('customfield_41').value;
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authdevq').textContent) {
					console.log("Вопросы к разработке: " + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/575",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/575";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_40').value = "";
					document.getElementById('customfield_41').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('auth2google').textContent) {
					console.log("Проблемы с 2FA : проблема с google authenticator: " + " Work email " + ids + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/576",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/576";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_40').value = "";
					document.getElementById('customfield_41').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('auth2faemail').textContent) {
					console.log("Проблемы с 2FA: не приходит письмо о восстановлении пароля: " + " Work email " + ids + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/573",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/573";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_40').value = "";
					document.getElementById('customfield_41').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('auth2fasms').textContent) {
					console.log("Проблемы с 2FA: не приходит смс: " + " Work email " + ids + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/572",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/572";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_40').value = "";
					document.getElementById('customfield_41').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authdeladdrolesteach').textContent) {
					console.log("Удаление / добавление ролей Преподавателям: " + " ID teacher " + ids + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/560",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/560";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_40').value = "";
					document.getElementById('customfield_41').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authdeladdrolesstud').textContent) {
					console.log("Удаление / добавление ролей Ученикам: " + " ID student " + ids + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/559",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/559";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_40').value = "";
					document.getElementById('customfield_41').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authlogcheck').textContent) {
					console.log("Проверка логов в ID: " + " ID phy lica " + ids + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/558",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/558";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_40').value = "";
					document.getElementById('customfield_41').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authbusinessq').textContent) {
					console.log("Бизнес вопросы: " + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/574",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/574";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_40').value = "";
					document.getElementById('customfield_41').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authunderground').textContent) {
					console.log("Подземный стук: " + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/561",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/561";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_40').value = "";
					document.getElementById('customfield_41').value = "";
					
					} else
						console.log("Not found");
					}
					
					
				} else {
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('authform').style.display = 'none';	
				}
				
		 }
		 
		 		 	document.getElementById('optionCRM2').onclick = function() {
				if (document.getElementById('crm2srvdskoptions').style.display != '') {
					document.getElementById('crm2srvdskoptions').style.display = '';
					document.getElementById('crm2form').style.display = '';		
					
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('billqaform').style.display = 'none';
					document.getElementById('scheduleform').style.display = 'none';	
					document.getElementById('telephonyform').style.display = 'none';	
					document.getElementById('authform').style.display = 'none';	
					document.getElementById('billingform').style.display = 'none';	
					document.getElementById('mrktform').style.display = 'none';	
									
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
										
					document.getElementById('crm2taskssoprovod').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}
					
					document.getElementById('crm2taskssales').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}	
					
					document.getElementById('crm2lessonhistory').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}	

					document.getElementById('crm2paymenthistory').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}
					
					document.getElementById('crm2convertsrc').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}	
					
					document.getElementById('crm2actionshistory').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}	
					
					document.getElementById('crm2familycard').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}			

					document.getElementById('crm2profile').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}	
					
					document.getElementById('crm2communications').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}	

					document.getElementById('crm2taskpoolsoporovd').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}	
					
					document.getElementById('crm2taskpoolsales').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="Прямая ссылка на услугу У в CRM2";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="";
							document.getElementById('customfield_46').style.display ="";
						}
					}			

					document.getElementById('crm2migrationcrm').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="ID ученика";
							document.getElementById('customfield_43').style.display ="none";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="none";
							document.getElementById('customfield_46').style.display ="none";
						}
					}	
					
					document.getElementById('crm2changestk').onclick = function() {
						if (document.getElementById('crm2form').style.display == '') {
							document.getElementById('customfield_42').style.display ="";
							document.getElementById('customfield_42').placeholder ="ID ученика";
							document.getElementById('customfield_43').style.display ="";
							document.getElementById('customfield_44').style.display ="";
							document.getElementById('customfield_45').style.display ="none";
							document.getElementById('customfield_46').style.display ="none";
						}
					}	
					
					document.getElementById('create_9').onclick = function() {
					let ids = document.getElementById('customfield_42').value;
					let servid = document.getElementById('customfield_43').value;
					let dscr = document.getElementById('customfield_44').value;
					let erx = document.getElementById('customfield_45').value;
					let ary = document.getElementById('customfield_46').value; 
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskssoprovod').textContent) {
					console.log("Вопросы по задачам Сопровождения: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/677",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/677";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
								 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskssales').textContent) {
					console.log("Вопросы по задачам Продаж: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/676",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/676";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2lessonhistory').textContent) {
					console.log("Вопросы по Истории уроков: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/675",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/675";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2paymenthistory').textContent) {
					console.log("Вопросы по Истории платежей: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/674",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/674";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2convertsrc').textContent) {
					console.log("Вопросы по Визардам конвертации услуги: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/673",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/673";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2actionshistory').textContent) {
					console.log("Вопросы по Истории действий: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/672",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/672";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2familycard').textContent) {
					console.log("Вопросы о карточке Семья: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/671",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/671";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2profile').textContent) {
					console.log("Вопросы о Профиле заявки: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/670",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/670";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2communications').textContent) {
					console.log("Вопросы по разделу Коммуникации: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/678",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/678";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskpoolsoporovd').textContent) {
					console.log("Проблемы с функционалом пула задач список задач сопровождение: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/669",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/669";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskpoolsales').textContent) {
					console.log("Проблемы с функционалом пула задач список задач продажи: " + " Link to service " + ids + " Description " + dscr + " ER " + erx +  " AR " + ary); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/668",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${ids}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/668";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2migrationcrm').textContent) {
					console.log("Миграция компании из CRM1 в CRM2: " + " Link to service " + ids + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/555",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/555";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2changestk').textContent) {
					console.log("Смена STK услуги: " + " Link to service " + ids + " Service ID " + servid + " Description " + dscr); 
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/554",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/554";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_42').value = "";
					document.getElementById('customfield_43').value = "";
					document.getElementById('customfield_44').value = "";
					document.getElementById('customfield_45').value = "";
					document.getElementById('customfield_46').value = "";
					
					} 
						else console.log("Not found");
					}
					
					
					
				} else {
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('crm2form').style.display = 'none';	
				}
		 }
		 
					document.getElementById('optionMrkt').onclick = function() {
				if (document.getElementById('mrktsrvdskoptions').style.display != '') {
					document.getElementById('mrktsrvdskoptions').style.display = '';
					document.getElementById('mrktform').style.display = '';	
					
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('billqaform').style.display = 'none';
					document.getElementById('scheduleform').style.display = 'none';
					document.getElementById('telephonyform').style.display = 'none';	
					document.getElementById('authform').style.display = 'none';	
					document.getElementById('crm2form').style.display = 'none';	
					document.getElementById('billingform').style.display = 'none';	
										
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
										
					document.getElementById('mrktsubscribptions').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="";
							document.getElementById('customfield_48').style.display ="";
							document.getElementById('customfield_49').style.display ="";
							document.getElementById('customfield_47').placeholder ="ID ученика";
							document.getElementById('customfield_48').placeholder ="ID услуги";
						}
					}
					
					document.getElementById('mrktcertificates').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="none";
							document.getElementById('customfield_48').style.display ="none";
							document.getElementById('customfield_49').style.display ="";
						}
					}	
					
					document.getElementById('mrktpromocodes').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="none";
							document.getElementById('customfield_48').style.display ="none";
							document.getElementById('customfield_49').style.display ="";
						}
					}	

					document.getElementById('mrktdisablends').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="";
							document.getElementById('customfield_48').style.display ="";
							document.getElementById('customfield_49').style.display ="";
							document.getElementById('customfield_47').placeholder ="ID ученика";
							document.getElementById('customfield_48').placeholder ="ID услуги";
						}
					}
					
					document.getElementById('mrktnachisl').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="";
							document.getElementById('customfield_48').style.display ="";
							document.getElementById('customfield_49').style.display ="";
							document.getElementById('customfield_47').placeholder ="ID ученика";
							document.getElementById('customfield_48').placeholder ="ID услуги";
						}
					}		
					
					document.getElementById('mrktdoublelessons').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="";
							document.getElementById('customfield_48').style.display ="";
							document.getElementById('customfield_49').style.display ="";
							document.getElementById('customfield_47').placeholder ="ID ученика";
							document.getElementById('customfield_48').placeholder ="ID услуги";
						}
					}	
					
					document.getElementById('mrktpriceq').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="";
							document.getElementById('customfield_48').style.display ="none";
							document.getElementById('customfield_49').style.display ="";
							document.getElementById('customfield_47').placeholder ="ID ученика";
						}
					}	
					
					document.getElementById('mrktreferal').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="";
							document.getElementById('customfield_48').style.display ="";
							document.getElementById('customfield_49').style.display ="";
							document.getElementById('customfield_47').placeholder ="ID приглашающего";
							document.getElementById('customfield_48').placeholder ="ID приглашенного";
						}
					}			

					document.getElementById('mrktcertconsult').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="";
							document.getElementById('customfield_48').style.display ="";
							document.getElementById('customfield_49').style.display ="";
							document.getElementById('customfield_47').placeholder ="ID ученика";
							document.getElementById('customfield_48').placeholder ="ID услуги";
						}
					}	
					
					document.getElementById('mrktpromocodesconsult').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="";
							document.getElementById('customfield_48').style.display ="";
							document.getElementById('customfield_49').style.display ="";
							document.getElementById('customfield_47').placeholder ="ID ученика";
							document.getElementById('customfield_48').placeholder ="ID услуги";
						}
					}

					document.getElementById('mrktunderground').onclick = function() {
						if (document.getElementById('mrktform').style.display == '') {
							document.getElementById('customfield_47').style.display ="";
							document.getElementById('customfield_48').style.display ="";
							document.getElementById('customfield_49').style.display ="";
							document.getElementById('customfield_47').placeholder ="ID ученика";
							document.getElementById('customfield_48').placeholder ="ID услуги";
						}
					}


					document.getElementById('create_10').onclick = function() {
					let idstd = document.getElementById('customfield_47').value;
					let servid = document.getElementById('customfield_48').value;
					let dscr = document.getElementById('customfield_49').value ;
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktsubscribptions').textContent) {
					console.log("Подписки: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/889",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/889";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktcertificates').textContent) {
					console.log("Заказ сертификата: " + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/626",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/626";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktpromocodes').textContent) {
					console.log("Заказ промокодов: " + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/625",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/625";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktdisablends').textContent) {
					console.log("Отключение НДС: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/605",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/605";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktnachisl').textContent) {
					console.log("Начисления (срочные, журналисты, PR): " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/604",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/604";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktdoublelessons').textContent) {
					console.log("Удвоение уроков: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/603",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/603";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktpriceq').textContent) {
					console.log("Вопросы по прайсам: " + " ID stud " + idstd + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/602",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/602";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktreferal').textContent) {
					console.log("Реферальная программа: " + " ID прглашающего " + idstd + " Id приглашенного " + servid + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/601",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/601";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktcertconsult').textContent) {
					console.log("Сертификаты консультация / тех. проблема: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/600",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/600";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktpromocodesconsult').textContent) {
					console.log("Сертификаты консультация / тех. проблема: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/599",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/599";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktunderground').textContent) {
					console.log("Сертификаты консультация / тех. проблема: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/606",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/606";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_47').value = "";
					document.getElementById('customfield_48').value = "";
					document.getElementById('customfield_49').value = "";
					
					}
					
					else console.log("Not found");
					
					}					
					
				} else {
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('mrktform').style.display = 'none';	
				}
		 }
		 
		 			document.getElementById('optionBilling').onclick = function() {
				if (document.getElementById('billingsrvdskoptions').style.display != '') {
					document.getElementById('billingsrvdskoptions').style.display = '';
					document.getElementById('billingform').style.display = '';
					
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('onboardingform').style.display = 'none';
					document.getElementById('billqaform').style.display = 'none';
					document.getElementById('scheduleform').style.display = 'none';	
					document.getElementById('telephonyform').style.display = 'none';	
					document.getElementById('authform').style.display = 'none';	
					document.getElementById('crm2form').style.display = 'none';	
					document.getElementById('mrktform').style.display = 'none';	
					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					
					document.getElementById('billcheques').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="none";
							document.getElementById('customfield_32').style.display ="";
						}
					}
					
					document.getElementById('billdataanal').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="none";
							document.getElementById('customfield_32').style.display ="";
						}
					}	
					
					document.getElementById('billtaskfordev').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="none";
							document.getElementById('customfield_32').style.display ="";
						}
					}	

					document.getElementById('billadmreturn').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="none";
							document.getElementById('customfield_32').style.display ="none";
						}
					}
					
					document.getElementById('billtroublcodecard').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="none";
							document.getElementById('customfield_32').style.display ="";
						}
					}	
					
					document.getElementById('billpaymentbot').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}	
					
					document.getElementById('billschemes').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}			

					document.getElementById('billselfemployee').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}	
					
					document.getElementById('billrequisites').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billpayments').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billspisanie').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}	
					
					document.getElementById('billreturns').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billpaymentmesystems').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billwidgetpayment').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billpay').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billcredit').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}
					
					document.getElementById('billoferta').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billlendings').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billterms').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billsubscribtions').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billbundles').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billtehproblemsprod').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billroles').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}
					
					document.getElementById('billbusanalys').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}

					document.getElementById('billtechconv').onclick = function() {
						if (document.getElementById('billingform').style.display == '') {
							document.getElementById('customfield_33').style.display ="";
							document.getElementById('customfield_32').style.display ="";
						}
					}	
					
					document.getElementById('create_6').onclick = function() {
					let idstd = document.getElementById('customfield_32').value ;
					let	servid = document.getElementById('customfield_33').value ;
					let str = document.getElementById('customfield_34').value;
					let erx = document.getElementById('customfield_35').value;
					let ary = document.getElementById('customfield_36').value;
					if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billcheques').textContent) {
					console.log("Чеки/инвойсы: " + "  Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);
					
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/681",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/681";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billdataanal').textContent) {
					console.log("Data analytics: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/680",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/680";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billtaskfordev').textContent) {
					console.log("Задача для разработки: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/679",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/679";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billadmreturn').textContent) {
					console.log("Админка возвратов: " + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/667",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/667";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billtroublcodecard').textContent) {
					console.log("Проблема с кодом для привязки карты: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/666",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/666";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpaymentbot').textContent) {
					console.log("Billing payment bot: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/664",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/664";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billschemes').textContent) {
					console.log("Схемы вознаграждения: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/663",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/663";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billselfemployee').textContent) {
					console.log("Самозанятые: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/662",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/662";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					}  else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billrequisites').textContent) {
					console.log("Реквизиты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/661",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/661";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpayments').textContent) {
					console.log("Выплаты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/660",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/660";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billspisanie').textContent) {
					console.log("Списание средств: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/659",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/659";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billreturns').textContent) {
					console.log("Возвраты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/658",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18976=${idstd}&customfield_18975=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/658";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpaymentmesystems').textContent) {
					console.log("Платежные системы: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/657",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/657";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billwidgetpayment').textContent) {
					console.log("Виджет оплаты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/656",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18976=${servid}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/656";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpay').textContent) {
					console.log("Оплата: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/655",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/655";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billcredit').textContent) {
					console.log("Рассрочка: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/654",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/654";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					}  else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billoferta').textContent) {
					console.log("Оферты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/653",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/653";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billlendings').textContent) {
					console.log("Лендинги: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/652",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/652";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					}  else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billterms').textContent) {
					console.log("Terms: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/651",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/651";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					}    else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billsubscribtions').textContent) {
					console.log("Подписки: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/650",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/650";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billbundles').textContent) {
					console.log("Бандлы: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/649",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/649";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billtehproblemsprod').textContent) {
					console.log("Технические проблемы на production: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/648",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/648";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					}  else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billroles').textContent) {
					console.log("Роли и доступы: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/647",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18976=${idstd}&customfield_18975=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/647";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billbusanalys').textContent) {
					console.log("Бизнес Анализ: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/646",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/646";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					}  else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billtechconv').textContent) {
					console.log("Техническое обсуждение: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);	
						
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/645",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					 document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/645";
					 document.getElementById('responseTextarea3').value = ''
					 document.getElementById('sendResponse').click()
					 
					document.getElementById('customfield_32').value = "";
					document.getElementById('customfield_33').value = "";
					document.getElementById('customfield_34').value = "";
					document.getElementById('customfield_35').value = "";
					document.getElementById('customfield_36').value = "";
						
					}                                       
					
					else console.log("Not found"); 
					
					}
					
					
					
					
				} else {
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('billingform').style.display = 'none';
				}
		 }	 
    }