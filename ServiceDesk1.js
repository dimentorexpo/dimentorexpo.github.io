//Global variables
let jiratoken;
let responsejira;
let psarr = [];
let firstEl;
let slacklnk;
let infoarr;
let lasttsk;
let prevtsk;
let flagpsis = 0;
//func initialize

function getprsuplasttask() { //функция для получения ссылки на последний проект в джира +
		document.getElementById('responseTextarea1').value = `{}`
		document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?portalId=62&page=1";
		document.getElementById('responseTextarea3').value = 'pstickets'
		document.getElementById('sendResponse').click()
		
		document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
			psarr = document.getElementById('responseTextarea1').getAttribute('pstickets');
			if (psarr !=null) {
				let sortarr = psarr.match(/PS-(\d+)/g);
				sortarr = sortarr.sort().reverse();
				firstEl = sortarr[0];

				prevtsk = firstEl;
				document.getElementById('prevtask').innerText = prevtsk;

				document.getElementById('prevtask').onclick = function () {
					if (document.getElementById('prevtask').innerText == "") {
						console.log('Задача не найдена')
					} else {
						window.open("https://jira.skyeng.tech/browse/" + prevtsk);
					};
				}
			}
			document.getElementById('responseTextarea1').removeAttribute('pstickets');
		})
}

function getprsup() { //функция для получения ссылки на последний проект в джира
	document.getElementById('responseTextarea1').value = `{}`
	document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?portalId=62&page=1";
	document.getElementById('responseTextarea3').value = 'pstickets'
	document.getElementById('sendResponse').click()

	setTimeout( () => {
		psarr = document.getElementById('responseTextarea1').getAttribute('pstickets');
		document.getElementById('responseTextarea1').removeAttribute('pstickets');

		let sortarr = psarr.match(/PS-(\d+)/g);
		sortarr = sortarr.sort().reverse();
		firstEl = sortarr[0];

		console.log("Testo massiv " + sortarr);
		console.log("Link tp PJ JIRA " + "https://jira.skyeng.tech/browse/" + firstEl);

		lasttsk = firstEl;
		flagpsis = 1;

		if (lasttsk > prevtsk) {
			document.getElementById('newtask').innerText = lasttsk;
			sendComment("Jira Service Desk link: " + "https://jira.skyeng.tech/browse/" + lasttsk);
			for (let i = 0; i < document.getElementsByClassName('removefield').length; i++) {
				document.getElementsByClassName('removefield')[i].value = ''
			}
		} else if (lasttsk <= prevtsk) {
			alert("Новая задача не была создана из-за введных значений или изменения логики работы  выбранной формы в самом ServiceDesk!")
		}

	}, 2000);

}

function getinfrasup() { //функция для получения ссылки на последний запрос Infra в джира
	document.getElementById('responseTextarea1').value = `{}`
	document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?status=open&reporter=all";
	document.getElementById('responseTextarea3').value = 'istickets'
	document.getElementById('sendResponse').click()

	setTimeout( () => {
		psarr = document.getElementById('responseTextarea1').getAttribute('istickets');

		document.getElementById('responseTextarea1').removeAttribute('istickets');

		let sortisarr = psarr.match(/IS-(\d+)/g);
		sortisarr = sortisarr.sort().reverse();
		firstEl = sortisarr[0];

		console.log("Testo massiv " + sortisarr);
		console.log("Link tp IS JIRA " + "https://jira.skyeng.tech/browse/" + firstEl);

		lasttsk = firstEl;
		flagpsis = 2;
		sendComment("Jira Service Desk link: " + "https://jira.skyeng.tech/browse/" + lasttsk);

	}, 2000);

}

function getslacklnk() { // получаем ссылку на обращение в слака с помощью парсинга номера задачи в джире и вытягивание ссылки с нее
	if (flagpsis == 1) {
		if (lasttsk > prevtsk) {
			document.getElementById('responseTextarea1').value = `{}`
			document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + lasttsk;
			document.getElementById('responseTextarea3').value = 'slacklnkhere'
			document.getElementById('sendResponse').click()

			setTimeout(async () => {
				infoarr = await document.getElementById('responseTextarea1').getAttribute('slacklnkhere');
				document.getElementById('responseTextarea1').removeAttribute('slacklnkhere');

				slacklnk = infoarr.match(/">(https:\/\/skyeng.slack.com.*?)<\/a>/)[1];

				console.log("Slack link " + slacklnk);
				sendComment("Slack Service Desk link: " + slacklnk);


			}, 2000);

		} else console.log("Задача не была создана, поэтому в заметки нечего размещать")

	} else if (flagpsis == 2) {

		document.getElementById('responseTextarea1').value = `{}`
		document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + lasttsk;
		document.getElementById('responseTextarea3').value = 'slacklnkhere'
		document.getElementById('sendResponse').click()

		setTimeout(async () => {
			infoarr = await document.getElementById('responseTextarea1').getAttribute('slacklnkhere');
			document.getElementById('responseTextarea1').removeAttribute('slacklnkhere');

			slacklnk = infoarr.match(/">(https:\/\/skyeng.slack.com.*?)<\/a>/)[1];

			console.log("Slack link " + slacklnk);
			sendComment("Slack Service Desk link: " + slacklnk);

		}, 2000);

	} else console.log("Задача не была создана, поэтому в заметки нечего размещать")

}

function checkjiraauth() { // функция проверки авторизации в Jira 
		document.getElementById('responseTextarea1').value = '{}'
		document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/"
		document.getElementById('responseTextarea3').value = 'getjiratoken'
		document.getElementById('sendResponse').click()

        document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
            responsejira = document.getElementById('responseTextarea1').getAttribute('getjiratoken');
			jiratoken = responsejira;
			if (jiratoken !=null) {
				if (jiratoken.match(/name="atlassian-token" content="(.*lin)/) != null) {
					jiratoken = jiratoken.match(/name="atlassian-token" content="(.*lin)/)[1];
					document.getElementById('jiratknstatus').innerText = "🟢"
					console.log("TOKEN: " + jiratoken);
					getprsuplasttask()
				} else {
					console.log("Авторизуйтесь в системе Jira, чтобы при заполнении формы запрос был отправлен в Service Desk");
					document.getElementById('jiratknstatus').innerText = "🔴"
				}
					}
			document.getElementById('responseTextarea1').removeAttribute('getjiratoken');
		});
		
}

function sendRequest(idstdserv, dscr, str, erx, ary, code) {
	document.getElementById('responseTextarea1').value = `{  "headers": {
	 "content-type": "application/x-www-form-urlencoded",
	 "sec-fetch-mode": "cors",
	 "sec-fetch-site": "same-origin",
	 "x-requested-with": "XMLHttpRequest",
	 "x-sitemesh-off": "true"
	  },
	  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/${code}",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
	 "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	  }`
	document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/"+code;
	document.getElementById('responseTextarea3').value = ''
	document.getElementById('sendResponse').click()
	
	//console.log(idstdserv + " " + dscr + " " + str + " " + erx  + " " + ary + " " + code)
	setTimeout(getprsup, 5000);
	setTimeout(getslacklnk, 8000);
}

function sendRequestBilling(str, erx, ary, idstd, code) {
	document.getElementById('responseTextarea1').value = `{  "headers": {
	 "content-type": "application/x-www-form-urlencoded",
	 "sec-fetch-mode": "cors",
	 "sec-fetch-site": "same-origin",
	 "x-requested-with": "XMLHttpRequest",
	 "x-sitemesh-off": "true"
	  },
	  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/${code}",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
	 "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	  }`
	document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/"+code;
	document.getElementById('responseTextarea3').value = ''
	document.getElementById('sendResponse').click()
	
	//console.log(idstdserv + " " + dscr + " " + str + " " + erx  + " " + ary + " " + code)
	setTimeout(getprsup, 5000);
	setTimeout(getslacklnk, 8000);
}

function sendRequestMobNoPriority(issuename, device, dscr, str, erx, ary, idstdserv, code) {
	
	document.getElementById('responseTextarea1').value = `{  "headers": {
	 "content-type": "application/x-www-form-urlencoded",
	 "sec-fetch-mode": "cors",
	 "sec-fetch-site": "same-origin",
	 "x-requested-with": "XMLHttpRequest",
	 "x-sitemesh-off": "true"
	  },
	  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/${code}",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
	 "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	  }`
	document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/"+code;
	document.getElementById('responseTextarea3').value = ''
	document.getElementById('sendResponse').click()
	
	setTimeout(getprsup, 5000);
	setTimeout(getslacklnk, 8000);
}

function sendRequestMobWithPriority(priorvalue, issuename, device, dscr, str, erx, ary, idstdserv, code) {
	
	 document.getElementById('responseTextarea1').value = `{  "headers": {
		 "content-type": "application/x-www-form-urlencoded",
		 "sec-fetch-mode": "cors",
		 "sec-fetch-site": "same-origin",
		 "x-requested-with": "XMLHttpRequest",
		 "x-sitemesh-off": "true"
		  },
		  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/${code}",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
		 "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		  }`
	document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/"+code;
	document.getElementById('responseTextarea3').value = ''
	document.getElementById('sendResponse').click()
	
	setTimeout(getprsup, 5000);
	setTimeout(getslacklnk, 8000);
}

//main
document.getElementById('servDsk').onclick = function () { // функция открытия главного окна SD +
	if (document.getElementById('AF_ServDsk').style.display == '')
		document.getElementById('AF_ServDsk').style.display = 'none'
	else
		document.getElementById('AF_ServDsk').style.display = ''
	document.getElementById('idmymenu').style.display = 'none'

	checkjiraauth()

	// setTimeout(getprsuplasttask, 2000)
	
	$('.sdbtn').click(function () {
		$('.sdbtn').not(this).removeClass('activebtnsd');
		$(this).toggleClass('activebtnsd');
	});
	
		$('.teacbtn').click(function () {
		remres(this)
	});

	$('.edumodbtn').click(function () {
		remres(this)
	});

	$('.bilqabtn').click(function () {
		remres(this)
	});

	$('.c1sbtn').click(function () {
		remres(this)
	});

	$('.schdbtn').click(function () {
		remres(this)
	});

	$('.authbtn').click(function () {
		remres(this)
	});

	$('.crm2sbtn').click(function () {
		remres(this)
	});

	$('.billbtn').click(function () {
		remres(this)
	});

	$('.vimbugsbtn').click(function () {  
		remres(this)
	});

	$('.vimvidsbtn').click(function () {  
		remres(this)
	});

	$('.studcabbtn').click(function () {  
		remres(this)
	});

	$('.chatqabtn').click(function () {  
		remres(this)
	});

	$('.tripwbtn').click(function () {  
		remres(this)
	});

	$('.analystbtn').click(function () {  
		remres(this)
	});

	$('.corpbtn').click(function () {  
		remres(this)
	});

	$('.mobbugsbtn').click(function () {  
		remres(this)
	});

	$('.academymobbugsbtn').click(function () {  
		remres(this)
	});

	$('.stcabmbsbtn').click(function () {  
		remres(this)
	});

	$('.marketprojbugsbtn').click(function () {  
		remres(this)
	});

	$('.infrabtn').click(function () {  
		remres(this)
	});

} // tested
	
	document.getElementById('refreshjiraauth').onclick = checkjiraauth; //функция обновления статуса авторизации

	function remres(a) { // функция переключения класса по нажатию на кнопку
		$('.edumodbtn').not(a).removeClass('activebtn');
		$('.bilqabtn').not(a).removeClass('activebtn');
		$('.teacbtn').not(a).removeClass('activebtn');
		$('.c1sbtn').not(a).removeClass('activebtn');
		$('.schdbtn').not(a).removeClass('activebtn');
		$('.authbtn').not(a).removeClass('activebtn');
		$('.crm2sbtn').not(a).removeClass('activebtn');
		$('.billbtn').not(a).removeClass('activebtn');
		$('.vimbugsbtn').not(a).removeClass('activebtn');
		$('.vimvidsbtn').not(a).removeClass('activebtn');
		$('.studcabbtn').not(a).removeClass('activebtn');
		$('.chatqabtn').not(a).removeClass('activebtn');
		$('.tripwbtn').not(a).removeClass('activebtn');
		$('.analystbtn').not(a).removeClass('activebtn');
		$('.corpbtn').not(a).removeClass('activebtn');
		$('.mobbugsbtn').not(a).removeClass('activebtn');
		$('.academymobbugsbtn').not(a).removeClass('activebtn');
		$('.stcabmbsbtn').not(a).removeClass('activebtn');
		$('.marketprojbugsbtn').not(a).removeClass('activebtn');
		$('.infrabtn').not(a).removeClass('activebtn');
		$(a).toggleClass('activebtn');
	}

	document.getElementById('optionTeacher').onclick = function () { // Teachers +
		if (document.getElementById('teacherssrvdskoptions').style.display != '') {
			document.getElementById('teacherssrvdskoptions').style.display = '';

			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_2').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_6').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_7').value);
				let str = encodeURIComponent(document.getElementById('customfield_8').value);
				let erx = encodeURIComponent(document.getElementById('customfield_9').value);
				let ary = encodeURIComponent(document.getElementById('customfield_10').value);		
				
				for(let i=0; i<document.getElementsByClassName('teacbtn').length;i++) {
					if (document.getElementsByClassName('teacbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('teacbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('teacbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionEdModel').onclick = function () { // Skysmart KIDS + 
		if (document.getElementById('edumodeloptions').style.display != '') {
			document.getElementById('edumodeloptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';

			document.getElementById('create_20').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_97').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_98').value);
				let str = encodeURIComponent(document.getElementById('customfield_99').value);
				let erx = encodeURIComponent(document.getElementById('customfield_100').value);
				let ary = encodeURIComponent(document.getElementById('customfield_101').value);
				
				for(let i=0; i<document.getElementsByClassName('edumodbtn').length;i++) {
					if (document.getElementsByClassName('edumodbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('edumodbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('edumodbtn')[i].innerText)
						setTimeout(getprsup, 5000);
						setTimeout(getslacklnk, 8000);
					}
				}
			}
		} else {
			document.getElementById('edumodeloptions').style.display = 'none';  
		}
	}

	document.getElementById('optionBillingQA').onclick = function () { //BillingQA +
		if (document.getElementById('billingqasrvdskoptions').style.display != '') {
			document.getElementById('billingqasrvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_4').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_16').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_17').value);
				let str = encodeURIComponent(document.getElementById('customfield_18').value);
				let erx = encodeURIComponent(document.getElementById('customfield_19').value);
				let ary = encodeURIComponent(document.getElementById('customfield_20').value);

				for(let i=0; i<document.getElementsByClassName('bilqabtn').length;i++) {
					if (document.getElementsByClassName('bilqabtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('bilqabtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('bilqabtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionVimvideocall').onclick = function () { //Vim-video-call +
		if (document.getElementById('vimvidoptions').style.display != '') {
			document.getElementById('vimvidoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_12').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_56').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_57').value);
				let str = encodeURIComponent(document.getElementById('customfield_58').value);
				let erx = encodeURIComponent(document.getElementById('customfield_59').value);
				let ary = encodeURIComponent(document.getElementById('customfield_60').value);
				
				for(let i=0; i<document.getElementsByClassName('vimvidsbtn').length;i++) {
					if (document.getElementsByClassName('vimvidsbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('vimvidsbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('vimvidsbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('vimvidoptions').style.display = 'none';
		}
	}

	document.getElementById('optionOnboarding').onclick = function () { //C1 Onboarding +
		if (document.getElementById('c1srvdskoptions').style.display != '') {
			document.getElementById('c1srvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';

			document.getElementById('create_3').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_11').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_12').value);
				let str = encodeURIComponent(document.getElementById('customfield_13').value);
				let erx = encodeURIComponent(document.getElementById('customfield_14').value);
				let ary = encodeURIComponent(document.getElementById('customfield_15').value);

				for(let i=0; i<document.getElementsByClassName('c1sbtn').length;i++) {
					if (document.getElementsByClassName('c1sbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('c1sbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('c1sbtn')[i].innerText)
					}
				}
			}

		} else {
			document.getElementById('c1srvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionSchedule').onclick = function () { // Schedule +
		if (document.getElementById('schedulesrvdskoptions').style.display != '') {
			document.getElementById('schedulesrvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_5').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_21').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_22').value);
				let str = encodeURIComponent(document.getElementById('customfield_23').value);
				let erx = encodeURIComponent(document.getElementById('customfield_24').value);
				let ary = encodeURIComponent(document.getElementById('customfield_25').value);

				for(let i=0; i<document.getElementsByClassName('schdbtn').length;i++) {
					if (document.getElementsByClassName('schdbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('schdbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('schdbtn')[i].innerText)
					}
				}
			}

		} else {
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionAuth').onclick = function () { //Auth +
		if (document.getElementById('authsrvdskoptions').style.display != '') {
			document.getElementById('authsrvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';

			document.getElementById('create_8').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_26').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_27').value);
				let str = encodeURIComponent(document.getElementById('customfield_28').value);
				let erx = encodeURIComponent(document.getElementById('customfield_29').value);
				let ary = encodeURIComponent(document.getElementById('customfield_30').value);

				for(let i=0; i<document.getElementsByClassName('authbtn').length;i++) {
					if (document.getElementsByClassName('authbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('authbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('authbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('authsrvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionCRM2').onclick = function () { //CRM2 + 
		if (document.getElementById('crm2srvdskoptions').style.display != '') {
			document.getElementById('crm2srvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			
			document.getElementById('authsrvdskoptions').style.display = 'none';
			
			document.getElementById('billingsrvdskoptions').style.display = 'none';

			document.getElementById('create_9').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_40').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_41').value);
				let str = encodeURIComponent(document.getElementById('customfield_42').value);
				let erx = encodeURIComponent(document.getElementById('customfield_43').value);
				let ary = encodeURIComponent(document.getElementById('customfield_44').value);

				for(let i=0; i<document.getElementsByClassName('crm2sbtn').length;i++) {
					if (document.getElementsByClassName('crm2sbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('crm2sbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('crm2sbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('crm2srvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionBilling').onclick = function () { //billing +
		if (document.getElementById('billingsrvdskoptions').style.display != '') {
			document.getElementById('billingsrvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			
			document.getElementById('create_6').onclick = function () {
				let idstd = encodeURIComponent(document.getElementById('customfield_32').value);
				let str = encodeURIComponent(document.getElementById('customfield_34').value);
				let erx = encodeURIComponent(document.getElementById('customfield_35').value);
				let ary = encodeURIComponent(document.getElementById('customfield_36').value);
				
				for(let i=0; i<document.getElementsByClassName('billbtn').length;i++) {
					if (document.getElementsByClassName('billbtn')[i].classList.contains('activebtn')) {
						sendRequestBilling(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('billbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('billbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('billingsrvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionVimbugs').onclick = function () { //vimbugs +
		if (document.getElementById('vimbugsoptions').style.display != '') {
			document.getElementById('vimbugsoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			
			document.getElementById('create_11').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_50').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_52').value);
				let str = encodeURIComponent(document.getElementById('customfield_53').value);
				let erx = encodeURIComponent(document.getElementById('customfield_54').value);
				let ary = encodeURIComponent(document.getElementById('customfield_55').value);
				
				for(let i=0; i<document.getElementsByClassName('vimbugsbtn').length;i++) {
					if (document.getElementsByClassName('vimbugsbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('vimbugsbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('vimbugsbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('vimbugsoptions').style.display = 'none';
		}
	}

	document.getElementById('optionStudcab').onclick = function () { //student-cabinet-bugs +
		if (document.getElementById('studcaboptions').style.display != '') {
			document.getElementById('studcaboptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_13').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_61').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_62').value);
				let str = encodeURIComponent(document.getElementById('customfield_63').value);
				let erx = encodeURIComponent(document.getElementById('customfield_64').value);
				let ary = encodeURIComponent(document.getElementById('customfield_65').value);

				for(let i=0; i<document.getElementsByClassName('studcabbtn').length;i++) {
					if (document.getElementsByClassName('studcabbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('studcabbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('studcabbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('studcaboptions').style.display = 'none';
		}
	}

	document.getElementById('optionChat').onclick = function () { //chat-qa-support +
		if (document.getElementById('chatqaoptions').style.display != '') {
			document.getElementById('chatqaoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_14').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_66').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_67').value);
				let str = encodeURIComponent(document.getElementById('customfield_68').value);
				let erx = encodeURIComponent(document.getElementById('customfield_69').value);
				let ary = encodeURIComponent(document.getElementById('customfield_70').value);
				
				for(let i=0; i<document.getElementsByClassName('chatqabtn').length;i++) {
					if (document.getElementsByClassName('chatqabtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('chatqabtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('chatqabtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('chatqaoptions').style.display = 'none';
		}
	}

	document.getElementById('optionTripwire').onclick = function () { //exp-tripwire-bugs +
		if (document.getElementById('tripwireoptions').style.display != '') {
			document.getElementById('tripwireoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			
			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_15').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_71').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_72').value);
				let str = encodeURIComponent(document.getElementById('customfield_73').value);
				let erx = encodeURIComponent(document.getElementById('customfield_74').value);
				let ary = encodeURIComponent(document.getElementById('customfield_75').value);

				for(let i=0; i<document.getElementsByClassName('tripwbtn').length;i++) {
					if (document.getElementsByClassName('tripwbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('tripwbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('tripwbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('tripwireoptions').style.display = 'none';
		}
	}

	document.getElementById('optionAnalyst').onclick = function () { //analyst-gm-tl +
		if (document.getElementById('analystoptions').style.display != '') {
			document.getElementById('analystoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';
			
			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_16').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_76').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_77').value);
				let str = encodeURIComponent(document.getElementById('customfield_78').value);
				let erx = encodeURIComponent(document.getElementById('customfield_79').value);
				let ary = encodeURIComponent(document.getElementById('customfield_80').value);
				
				for(let i=0; i<document.getElementsByClassName('analystbtn').length;i++) {
					if (document.getElementsByClassName('analystbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('analystbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('analystbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('analystoptions').style.display = 'none';
		}
	}

	document.getElementById('optionCorp').onclick = function () { //corp-support +
		if (document.getElementById('corpoptions').style.display != '') {
			document.getElementById('corpoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_17').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_81').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_82').value);
				let str = encodeURIComponent(document.getElementById('customfield_83').value);
				let erx = encodeURIComponent(document.getElementById('customfield_84').value);
				let ary = encodeURIComponent(document.getElementById('customfield_85').value);

				for(let i=0; i<document.getElementsByClassName('corpbtn').length;i++) {
					if (document.getElementsByClassName('corpbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('corpbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('corpbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('corpoptions').style.display = 'none';
		}
	}

	document.getElementById('optionMrktprojbugs').onclick = function () { //marketing-projects-bugs(landing pages) + 
		if (document.getElementById('marketprojbugsptions').style.display != '') {
			document.getElementById('marketprojbugsptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_22').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_109').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_110').value);
				let str = encodeURIComponent(document.getElementById('customfield_111').value);
				let erx = encodeURIComponent(document.getElementById('customfield_112').value);
				let ary = encodeURIComponent(document.getElementById('customfield_113').value);
				
				for(let i=0; i<document.getElementsByClassName('marketprojbugsbtn').length;i++) {
					if (document.getElementsByClassName('marketprojbugsbtn')[i].classList.contains('activebtn')) {
						sendRequest(idstdserv, dscr, str, erx, ary,document.getElementsByClassName('marketprojbugsbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('marketprojbugsbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('marketprojbugsptions').style.display = 'none';
		}
	}

	document.getElementById('optionMobbugs').onclick = function () { //mobile-bugs +
		if (document.getElementById('mobbugsoptions').style.display != '') {
			document.getElementById('mobbugsoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_19').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_91').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_92').value);
				let issuename = encodeURIComponent(document.getElementById('customfield_911').value);
				let device = encodeURIComponent(document.getElementById('customfield_912').value);
				let str = encodeURIComponent(document.getElementById('customfield_94').value);
				let erx = encodeURIComponent(document.getElementById('customfield_95').value);
				let ary = encodeURIComponent(document.getElementById('customfield_96').value);
				let priorvalue = document.getElementById('prioritymbugs').value;
				
				for(let i=0; i<document.getElementsByClassName('mobbugsbtn').length;i++) {
					if (document.getElementsByClassName('mobbugsbtn')[i].classList.contains('activebtn')) {
						sendRequestMobWithPriority(priorvalue, issuename, device, dscr, str, erx, ary, idstdserv, document.getElementsByClassName('mobbugsbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('mobbugsbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('mobbugsoptions').style.display = 'none';
		}
	}

	document.getElementById('optionAcademymobbugs').onclick = function () { //academy-mobile-bugs + 
		if (document.getElementById('academymobbugsoptions').style.display != '') {
			document.getElementById('academymobbugsoptions').style.display = '';
			
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_24').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_118').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_121').value);
				let issuename = encodeURIComponent(document.getElementById('customfield_119').value);
				let device = encodeURIComponent(document.getElementById('customfield_120').value);
				let str = encodeURIComponent(document.getElementById('customfield_122').value);
				let erx = encodeURIComponent(document.getElementById('customfield_123').value);
				let ary = encodeURIComponent(document.getElementById('customfield_124').value);
				
				for(let i=0; i<document.getElementsByClassName('academymobbugsbtn').length;i++) {
					if (document.getElementsByClassName('academymobbugsbtn')[i].classList.contains('activebtn')) {
						sendRequestMobWithPriority(priorvalue, issuename, device, dscr, str, erx, ary, idstdserv, document.getElementsByClassName('academymobbugsbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('academymobbugsbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('academymobbugsoptions').style.display = 'none';
		}
	}

	document.getElementById('optionStudcabmobbugs').onclick = function () { //student-cabint-mobile-bugs +
		if (document.getElementById('studcabmobbugskoptions').style.display != '') {
			document.getElementById('studcabmobbugskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';

			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_21').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_102').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_105').value);
				let issuename = encodeURIComponent(document.getElementById('customfield_103').value);
				let device = encodeURIComponent(document.getElementById('customfield_104').value);
				let str = encodeURIComponent(document.getElementById('customfield_106').value);
				let erx = encodeURIComponent(document.getElementById('customfield_107').value);
				let ary = encodeURIComponent(document.getElementById('customfield_108').value);

				for(let i=0; i<document.getElementsByClassName('stcabmbsbtn').length;i++) {
					if (document.getElementsByClassName('stcabmbsbtn')[i].classList.contains('activebtn')) {
						sendRequestMobNoPriority(issuename, device, dscr, str, erx, ary, idstdserv, document.getElementsByClassName('stcabmbsbtn')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('stcabmbsbtn')[i].innerText)
					}
				}
			}
		} else {
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionInfra').onclick = function () { //Infra support for delete account
		if (document.getElementById('infraoptions').style.display != '') {
			document.getElementById('infraoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';


			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_23').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_114').value);
				let lnk = encodeURIComponent(document.getElementById('customfield_115').value);
				let commentos = encodeURIComponent(document.getElementById('customfield_117').value);
				let radiosel = document.getElementsByName('customfield_116');
				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('askfordelacc').textContent) {
					console.log("Запрос на удаление перс.данных: " + "  Id student and teacher: " + idstdserv + " Link: " + lnk + " Комментарий " + commentos);

					for (let i = 0; i < radiosel.length; i++) {
						if (radiosel[i].checked == true) {
							document.getElementById('responseTextarea1').value = `{  "headers": {
							 "content-type": "application/x-www-form-urlencoded",
							 "sec-fetch-mode": "cors",
							 "sec-fetch-site": "same-origin",
							 "x-requested-with": "XMLHttpRequest",
							 "x-sitemesh-off": "true"
							  },
							  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/4/create/957",
							  "referrerPolicy": "strict-origin-when-cross-origin",
							  "body": "atl_token=${jiratoken}projectId=13437&customfield_18225=${lnk}&customfield_18975=${idstdserv}&customfield_20613=${radiosel[i].value}&customfield_17713=${commentos}&sd-kb-article-viewed=false"",
							 "method": "POST",
							  "mode": "cors",
							  "credentials": "include"
							  }`
							document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/4/create/957";
							document.getElementById('responseTextarea3').value = ''
							document.getElementById('sendResponse').click()

							document.getElementById('customfield_114').value = "";
							document.getElementById('customfield_115').value = "";
							document.getElementById('customfield_117').value = "";

							setTimeout(getinfrasup, 5000);
							setTimeout(getslacklnk, 8000);
						}
					}
				} else console.log("Not found");
			}

		} else {
			document.getElementById('infraoptions').style.display = 'none';
		}
	}

	//End of script
// }