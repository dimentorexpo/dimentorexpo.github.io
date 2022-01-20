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
					
					
			document.getElementById('optionTeacher').onclick = function() {
				if (document.getElementById('teacherssrvdskoptions').style.display != ''){
					document.getElementById('teacherssrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = '';
					document.getElementById('optionTeacher').style.backgroundColor = "Tomato"			
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 	
					
					//Начало окрашивания кнопок и добавление закрашивания при переключении
					
					document.getElementById('teacherstudy').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherstudy').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherbreak').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherbreak').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teachermoney').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teachermoney').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teachermap').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teachermap').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teachertimetable').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teachertimetable').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherperenos').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherperenos').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherwidgetbalance').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherwidgetbalance').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherwidgetlessonmark').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherwidgetlessonmark').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherwidgetplanfact').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherwidgetplanfact').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherwidgettimetableweek').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherwidgettimetableweek').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherwidgetKPI').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherwidgetKPI').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherwidgetmystudents').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherwidgetmystudents').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherTRMquestions').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherTRMquestions').style.backgroundColor = "DodgerBlue";
					}
					
					document.getElementById('teacherunderground').onclick = function() {
						if (document.getElementById('teachersform').style.display == '') 
							document.getElementById('teacherunderground').style.backgroundColor = "DodgerBlue";
					}
					
				} else {
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
						}
		 }
		 
		 			document.getElementById('optionSkysmart').onclick = function() {
				if (document.getElementById('skysmartsrvdskoptions').style.display != '') {
					document.getElementById('skysmartsrvdskoptions').style.display = '';
					document.getElementById('optionSkysmart').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = '';
					document.getElementById('teachersform').style.display = 'none';
					document.getElementById('create_1').onclick = function() {
					let dscr = document.getElementById('customfield_1').value;
					let erx = document.getElementById('customfield_2').value;
					let ary = document.getElementById('customfield_3').value;
					let idstd = document.getElementById('customfield_4').value ;
					let	servid = document.getElementById('customfield_5').value ;
					if (document.getElementById('skysmartfamily').style.backgroundColor == "dodgerblue") {
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
					else if (document.getElementById('skysmartfeedback').style.backgroundColor == "dodgerblue") {
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
					} else if (document.getElementById('skysmartcontent').style.backgroundColor == "dodgerblue") {
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
					} else if (document.getElementById('skysmarthomework').style.backgroundColor == "dodgerblue") {
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
					} else if (document.getElementById('skysmartprogress').style.backgroundColor == "dodgerblue") {
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
					} else if (document.getElementById('skysmartcabinet').style.backgroundColor == "dodgerblue") {
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
					} else if (document.getElementById('skysmartcertificate').style.backgroundColor == "dodgerblue") {
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
					} else if (document.getElementById('skysmartgroup').style.backgroundColor == "dodgerblue") {
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
					} else if (document.getElementById('skysmartpages').style.backgroundColor == "dodgerblue") {
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
					} else if (document.getElementById('skysmartappparents').style.backgroundColor == "dodgerblue") {
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
					} else if (document.getElementById('skysmartonetoone').style.backgroundColor == "dodgerblue") {
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
					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87";
					
						document.getElementById('skysmartcontent').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87"; 
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcontent').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmartfeedback').onclick =function() {
							if (document.getElementById('kidsform').style.display != 'none') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmartfamily').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmarthomework').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmartprogress').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmartcabinet').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmartcertificate').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmartgroup').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmartpages').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmartappparents').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "DodgerBlue";
							} 
						}
						
						document.getElementById('skysmartonetoone').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "DodgerBlue";
							} 
						}
						
				} else {
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";	
				}
		 }
		 
		 		 	document.getElementById('optionBillingQA').onclick = function() {
				if (document.getElementById('billingqasrvdskoptions').style.display != '') {
					document.getElementById('billingqasrvdskoptions').style.display = '';
					document.getElementById('optionBillingQA').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = 'none';					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";	
				}
		 }
		 
		 		 	document.getElementById('optionOnboarding').onclick = function() {
				if (document.getElementById('c1srvdskoptions').style.display != '') {
					document.getElementById('c1srvdskoptions').style.display = '';
					document.getElementById('optionOnboarding').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = 'none';					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";	
				}
		 }
		 
					document.getElementById('optionSchedule').onclick = function() {
				if (document.getElementById('schedulesrvdskoptions').style.display != '') {
					document.getElementById('schedulesrvdskoptions').style.display = '';
					document.getElementById('optionSchedule').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = 'none';					
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";	
				}
		 }
		 
		 			document.getElementById('optionTelephony').onclick = function() {
				if (document.getElementById('telephonysrvdskoptions').style.display != '') {
					document.getElementById('telephonysrvdskoptions').style.display = '';
					document.getElementById('optionTelephony').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";	
				}
		 }
		 
		 		 	document.getElementById('optionAuth').onclick = function() {
				if (document.getElementById('authsrvdskoptions').style.display != '') {
					document.getElementById('authsrvdskoptions').style.display = '';
					document.getElementById('optionAuth').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";	 
				}
				
		 }
		 
		 		 	document.getElementById('optionCRM2').onclick = function() {
				if (document.getElementById('crm2srvdskoptions').style.display != '') {
					document.getElementById('crm2srvdskoptions').style.display = '';
					document.getElementById('optionCRM2').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
				}
		 }
		 
					document.getElementById('optionMrkt').onclick = function() {
				if (document.getElementById('mrktsrvdskoptions').style.display != '') {
					document.getElementById('mrktsrvdskoptions').style.display = '';
					document.getElementById('optionMrkt').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";
				}
		 }
		 
		 			document.getElementById('optionBilling').onclick = function() {
				if (document.getElementById('billingsrvdskoptions').style.display != '') {
					document.getElementById('billingsrvdskoptions').style.display = '';
					document.getElementById('optionBilling').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";	
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				}
		 }	 
    }