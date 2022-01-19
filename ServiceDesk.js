	document.getElementById('servDsk').onclick = function () {
        if (document.getElementById('AF_ServDsk').style.display == '')
            document.getElementById('AF_ServDsk').style.display = 'none'
        else
            document.getElementById('AF_ServDsk').style.display = ''
			document.getElementById('optionTeacher').onclick = function() {
				if (document.getElementById('teacherssrvdskoptions').style.display != ''){
					document.getElementById('teacherssrvdskoptions').style.display = '';
					document.getElementById('kidsform').style.display = 'none';
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
				} else {
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
						}
		 }
		 
		 			document.getElementById('optionSkysmart').onclick = function() {
				if (document.getElementById('skysmartsrvdskoptions').style.display != '') {
					document.getElementById('skysmartsrvdskoptions').style.display = '';
					document.getElementById('optionSkysmart').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = '';
					
					document.getElementById('create_1').onclick = function() {
					if (document.getElementById('skysmartfamily').style.backgroundColor == "dodgerblue") {
					console.log("Операции с семьей: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					}
					else if (document.getElementById('skysmartfeedback').style.backgroundColor == "dodgerblue") {
					console.log("Обратная связь: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementById('skysmartcontent').style.backgroundColor == "dodgerblue") {
					console.log("Контент: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value);
					
					document.getElementById('responseTextarea1').value = '{}'
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/"
					document.getElementById('responseTextarea3').value = 'getjiratoken'
					document.getElementById('sendResponse').click()
					
					let jiratoken = document.getElementById('responseTextarea1').getAttribute('getjiratoken');
					    jiratoken = jiratoken.match(/name="atlassian-token" content="(.*lin)/)[1];
                        document.getElementById('responseTextarea1').removeAttribute('getjiratoken');
						console.log("TOKEN: " + jiratoken);
					
					
					 // document.getElementById('responseTextarea1').value = `{  "headers": {
							// "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
						    // "sec-fetch-mode": "cors",
							// "sec-fetch-site": "same-origin",
							// "x-requested-with": "XMLHttpRequest",
							// "x-sitemesh-off": "true"
					  // },
					  // "referrer": "https://jira.skyeng.tech/browse/VIM-7288",
					  // "referrerPolicy": "strict-origin-when-cross-origin",
					  // "body": "customfield_15410=1279&issueId=70592&atl_token=undefined&singleFieldEdit=true&fieldsToForcePresent=customfield_15410",
					  // "method": "POST",
					  // "mode": "cors",
					  // "credentials": "include"
					  // }`
					// document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueAction.jspa?decorator=none";
					// document.getElementById('responseTextarea3').value = ''
					// document.getElementById('sendResponse').click()
			
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementById('skysmarthomework').style.backgroundColor == "dodgerblue") {
					console.log("Страница ДЗ и тестов: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementById('skysmartprogress').style.backgroundColor == "dodgerblue") {
					console.log("Страница прогресса: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementById('skysmartcabinet').style.backgroundColor == "dodgerblue") {
					console.log("Детский ЛКУ: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementById('skysmartcertificate').style.backgroundColor == "dodgerblue") {
					console.log("Сертификаты: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementById('skysmartgroup').style.backgroundColor == "dodgerblue") {
					console.log("Групповые и параллельные уроки: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementById('skysmartpages').style.backgroundColor == "dodgerblue") {
					console.log("Страницы skysmart: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementById('skysmartappparents').style.backgroundColor == "dodgerblue") {
					console.log("Приложение skysmart parents: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
					document.getElementById('customfield_1').value = "";
					document.getElementById('customfield_2').value = "";
					document.getElementById('customfield_3').value = "";
					document.getElementById('customfield_4').value = "";
					document.getElementById('customfield_5').value = "";
					} else if (document.getElementById('skysmartonetoone').style.backgroundColor == "dodgerblue") {
					console.log("Уроки 1:1: " + "Description: " + document.getElementById('customfield_1').value + " " + "ER: " +  document.getElementById('customfield_2').value + " " + "AR: " + document.getElementById('customfield_3').value + " " + "ID student: " + document.getElementById('customfield_4').value + " " + "ID service: " + document.getElementById('customfield_5').value)
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
					document.getElementById('optionBillingQA').style.backgroundColor = "Tomato"	
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
					document.getElementById('optionOnboarding').style.backgroundColor = "Tomato"	
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
					document.getElementById('optionSchedule').style.backgroundColor = "Tomato"	
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
					document.getElementById('optionTelephony').style.backgroundColor = "Tomato"
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
					document.getElementById('optionAuth').style.backgroundColor = "Tomato"
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
					document.getElementById('optionCRM2').style.backgroundColor = "Tomato"
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
					document.getElementById('optionMrkt').style.backgroundColor = "Tomato"
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
					document.getElementById('optionBilling').style.backgroundColor = "Tomato"
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