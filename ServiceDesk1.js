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

	$('.telepbtn').click(function () {
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

	$('.vimbugsbtn').click(function () {  //поправить
		remres(this)
	});

	$('.vimvidsbtn').click(function () {  //поправить
		remres(this)
	});

	$('.studcabbtn').click(function () {  //поправить
		remres(this)
	});

	$('.chatqabtn').click(function () {  //поправить
		remres(this)
	});

	$('.tripwbtn').click(function () {  //поправить
		remres(this)
	});

	$('.analystbtn').click(function () {  //поправить
		remres(this)
	});

	$('.corpbtn').click(function () {  //поправить
		remres(this)
	});

	$('.marketingbtn').click(function () {  //поправить
		remres(this)
	});

	$('.mobbugsbtn').click(function () {  //поправить
		remres(this)
	});

	$('.academymobbugsbtn').click(function () {  //поправить
		remres(this)
	});

	$('.stcabmbsbtn').click(function () {  //поправить
		remres(this)
	});

	$('.marketprojbugsbtn').click(function () {  //поправить
		remres(this)
	});

	$('.infrabtn').click(function () {  //поправить
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
		$('.telepbtn').not(a).removeClass('activebtn');
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
		$('.marketingbtn').not(a).removeClass('activebtn');
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
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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
			document.getElementById('marketingptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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

	document.getElementById('optionTelephony').onclick = function () { //Telephony
		if (document.getElementById('telephonysrvdskoptions').style.display != '') {
			document.getElementById('telephonysrvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
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

			document.getElementById('telnoaccess').onclick = function () {
				if (document.getElementById('telephonyform').style.display == '') {
					document.getElementById('customfield_37').style.display = "";
					document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
					document.getElementById('customfield_38').style.display = "";
					document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы";
					document.getElementById('customfield_39').style.display = "none";
				}
			}

			document.getElementById('teloutgoing').onclick = function () {
				if (document.getElementById('telephonyform').style.display == '') {
					document.getElementById('customfield_37').style.display = "";
					document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
					document.getElementById('customfield_38').style.display = "";
					document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
					document.getElementById('customfield_39').style.display = "none";
				}
			}

			document.getElementById('telincoming').onclick = function () {
				if (document.getElementById('telephonyform').style.display == '') {
					document.getElementById('customfield_37').style.display = "";
					document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
					document.getElementById('customfield_38').style.display = "";
					document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
					document.getElementById('customfield_39').style.display = "none";
				}
			}

			document.getElementById('telspeaking').onclick = function () {
				if (document.getElementById('telephonyform').style.display == '') {
					document.getElementById('customfield_37').style.display = "";
					document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
					document.getElementById('customfield_38').style.display = "";
					document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
					document.getElementById('customfield_39').style.display = "none";
				}
			}

			document.getElementById('telrtstat').onclick = function () {
				if (document.getElementById('telephonyform').style.display == '') {
					document.getElementById('customfield_37').style.display = "";
					document.getElementById('customfield_37').placeholder = "Краткое и структурированное описание проблемы";
					document.getElementById('customfield_38').style.display = "";
					document.getElementById('customfield_38').placeholder = "Ожидаемое поведение";
					document.getElementById('customfield_39').style.display = "";
				}
			}

			document.getElementById('telcallinfo').onclick = function () {
				if (document.getElementById('telephonyform').style.display == '') {
					document.getElementById('customfield_37').style.display = "";
					document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
					document.getElementById('customfield_38').style.display = "";
					document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
					document.getElementById('customfield_39').style.display = "none";
				}
			}

			document.getElementById('telredicall').onclick = function () {
				if (document.getElementById('telephonyform').style.display == '') {
					document.getElementById('customfield_37').style.display = "";
					document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
					document.getElementById('customfield_38').style.display = "";
					document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
					document.getElementById('customfield_39').style.display = "none";
				}
			}

			document.getElementById('telunderground').onclick = function () {
				if (document.getElementById('telephonyform').style.display == '') {
					document.getElementById('customfield_37').style.display = "none";
					document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
					document.getElementById('customfield_39').style.display = "none";
				}
			}

			document.getElementById('create_7').onclick = function () {
				let ids = encodeURIComponent(document.getElementById('customfield_37').value);
				let erx = encodeURIComponent(document.getElementById('customfield_38').value);
				let ary = encodeURIComponent(document.getElementById('customfield_39').value);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else
					console.log("Not found");
			}

		} else {
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionAuth').onclick = function () { //Auth
		if (document.getElementById('authsrvdskoptions').style.display != '') {
			document.getElementById('authsrvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			
			document.getElementById('billingsrvdskoptions').style.display = 'none';

			document.getElementById('create_8').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_26').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_27').value);
				let str = encodeURIComponent(document.getElementById('customfield_28').value);
				let erx = encodeURIComponent(document.getElementById('customfield_29').value);
				let ary = encodeURIComponent(document.getElementById('customfield_30').value);

				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authdevq').textContent) {
					console.log("Вопросы к разработке: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/575",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/575";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('auth2google').textContent) {
					console.log("Проблемы с 2FA : проблема с google authenticator: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/576",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/576";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('auth2faemail').textContent) {
					console.log("Проблемы с 2FA: не приходит письмо о восстановлении пароля: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/573",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/573";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('auth2fasms').textContent) {
					console.log("Проблемы с 2FA: не приходит смс: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/572",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/572";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authdeladdrolesteach').textContent) {
					console.log("Удаление / добавление ролей Преподавателям: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/560",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/560";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authdeladdrolesstud').textContent) {
					console.log("Удаление / добавление ролей Ученикам: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/559",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/559";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authlogcheck').textContent) {
					console.log("Проверка логов в ID: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/558",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/558";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authunderground').textContent) {
					console.log("Подземный стук: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/561",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/561";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else
					console.log("Not found");
			}
		} else {
			document.getElementById('authsrvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionCRM2').onclick = function () { //CRM2
		if (document.getElementById('crm2srvdskoptions').style.display != '') {
			document.getElementById('crm2srvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			
			document.getElementById('billingsrvdskoptions').style.display = 'none';

			document.getElementById('create_9').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_40').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_41').value);
				let str = encodeURIComponent(document.getElementById('customfield_42').value);
				let erx = encodeURIComponent(document.getElementById('customfield_43').value);
				let ary = encodeURIComponent(document.getElementById('customfield_44').value);

				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskssoprovod').textContent) {
					console.log("Вопросы по задачам Сопровождения: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/677",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/677";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskssales').textContent) {
					console.log("Вопросы по задачам Продаж: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/676",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/676";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2lessonhistory').textContent) {
					console.log("Вопросы по Истории уроков: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/675",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/675";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2paymenthistory').textContent) {
					console.log("Вопросы по Истории платежей: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/674",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/674";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2convertsrc').textContent) {
					console.log("Вопросы по Визардам конвертации услуги: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/673",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/673";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2actionshistory').textContent) {
					console.log("Вопросы по Истории действий: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/672",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/672";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2familycard').textContent) {
					console.log("Вопросы о карточке Семья: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/671",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/671";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2profile').textContent) {
					console.log("Вопросы о Профиле заявки: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/670",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/670";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2communications').textContent) {
					console.log("Вопросы по разделу Коммуникации: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/678",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/678";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskpoolsoporovd').textContent) {
					console.log("Проблемы с функционалом пула задач список задач сопровождение: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/669",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/669";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskpoolsales').textContent) {
					console.log("Проблемы с функционалом пула задач список задач продажи: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/668",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/668";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2migrationcrm').textContent) {
					console.log("Миграция компании из CRM1 в CRM2: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/555",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/555";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2changestk').textContent) {
					console.log("Смена STK услуги: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/554",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/554";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				}
				else console.log("Not found");
			}
		} else {
			document.getElementById('crm2srvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionBilling').onclick = function () { //billing
		if (document.getElementById('billingsrvdskoptions').style.display != '') {
			document.getElementById('billingsrvdskoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			

			document.getElementById('create_6').onclick = function () {
				let idstd = encodeURIComponent(document.getElementById('customfield_32').value);
				let str = encodeURIComponent(document.getElementById('customfield_34').value);
				let erx = encodeURIComponent(document.getElementById('customfield_35').value);
				let ary = encodeURIComponent(document.getElementById('customfield_36').value);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpaymentbot').textContent) {
					console.log("Billing payment bot: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/664",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/664";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billschemes').textContent) {
					console.log("Схемы вознаграждения: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/663",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/663";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billselfemployee').textContent) {
					console.log("Самозанятые: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/662",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/662";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billrequisites').textContent) {
					console.log("Реквизиты: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/661",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/661";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpayments').textContent) {
					console.log("Выплаты: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/660",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/660";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billspisanie').textContent) {
					console.log("Списание средств: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/659",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/659";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billreturns').textContent) {
					console.log("Возвраты: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/658",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18976=${idstd}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/658";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpaymentmesystems').textContent) {
					console.log("Платежные системы: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/657",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/657";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billwidgetpayment').textContent) {
					console.log("Виджет оплаты: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/656",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/656";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpay').textContent) {
					console.log("Оплата: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/655",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/655";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billcredit').textContent) {
					console.log("Рассрочка: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/654",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/654";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billsubscribtions').textContent) {
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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billroles').textContent) {
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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

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

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				}
				else console.log("Not found");
			}
		} else {
			document.getElementById('billingsrvdskoptions').style.display = 'none';
		}
	}

	document.getElementById('optionVimbugs').onclick = function () { //vimbugs
		if (document.getElementById('vimbugsoptions').style.display != '') {
			document.getElementById('vimbugsoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			

			document.getElementById('create_11').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_50').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_52').value);
				let str = encodeURIComponent(document.getElementById('customfield_53').value);
				let erx = encodeURIComponent(document.getElementById('customfield_54').value);
				let ary = encodeURIComponent(document.getElementById('customfield_55').value);

				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('lessonbutwidg').textContent) {
					console.log("Виджет входа у взрослых У и П: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/935",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/935";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('smartroomonetoone').textContent) {
					console.log("Smartroom: Уроки 1:1 " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1063",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1063";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('smartroomgroupl').textContent) {
					console.log("Smartroom: групповые и параллельные уроки" + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1062",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1062";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('smartroomhwtests').textContent) {
					console.log("Smartroom: страница ДЗ и тестов" + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1061",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1061";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('automark').textContent) {
					console.log("Автоотметка по урокам взрослых У: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/934",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/934";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('cmscontentadult').textContent) {
					console.log("Взрослый англиский: CMS и контент на взрослой платформе: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/933",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/933";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('adulthwlestest').textContent) {
					console.log("Взрослый английский: Домашки, уроки, тесты: " + "  Id student and teacher: " + idstdserv + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/932",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/932";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('showcaseadult').textContent) {
					console.log("Шоукейс взрослого П/взрослого У: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/931",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/931";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('vimboxpages').textContent) {
					console.log("Любые страницы содержащие vimbox, но при этом не содержащие kids в URL: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/936",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/936";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('adultselfstudy').textContent) {
					console.log("Adults self-study: " + "  Id student and teacher: " + idstdserv + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/942",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/942";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('premiumflip').textContent) {
					console.log("Premium и Flip: " + "  Id student and teacher: " + idstdserv + "Descript " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/941",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/941";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else console.log("Not found");
			}

		}

		else {
			document.getElementById('vimbugsoptions').style.display = 'none';
		}
	}

	document.getElementById('optionStudcab').onclick = function () { //student-cabinet-bugs
		if (document.getElementById('studcaboptions').style.display != '') {
			document.getElementById('studcaboptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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

				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studadultcab').textContent) {
					console.log("Взрослый ЛКУ Главная страница: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/975",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/975";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studkidcab').textContent) {
					console.log("Детский ЛКУ Главная страница: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/974",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/974";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studstories').textContent) {
					console.log("Stories: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/977",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/977";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabrefpage').textContent) {
					console.log("Реферальная страница: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/973",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/973";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabtransfpayhist').textContent) {
					console.log("Страница оплаты, трансфера и истории баланса: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/972",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/972";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabttmovelesson').textContent) {
					console.log("Страница расписания и переноса урока: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/971",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/971";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabteacherpage').textContent) {
					console.log("Страница преподавателя: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/970",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/970";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabprofilesettings').textContent) {
					console.log("Страница профиля У + настройки: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/969",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/969";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabfamandcourse').textContent) {
					console.log("Страница семьи и курсов: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/968",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/968";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabshowcase').textContent) {
					console.log("Страница шоукейса (подключение услуг): " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/967",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/967";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabmenunav').textContent) {
					console.log("Меню навигации (лейаут): " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/966",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/966";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabunderground').textContent) {
					console.log("Подземный стук: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/946",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/946";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else console.log("Not found");
			}
		} else {
			document.getElementById('studcaboptions').style.display = 'none';
		}
	}

	document.getElementById('optionChat').onclick = function () { //chat-qa-support
		if (document.getElementById('chatqaoptions').style.display != '') {
			document.getElementById('chatqaoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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

				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('chatqa').textContent) {
					console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/948",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/948";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else console.log("Not found");
			}
		} else {
			document.getElementById('chatqaoptions').style.display = 'none';
		}
	}

	document.getElementById('optionTripwire').onclick = function () { //exp-tripwire-bugs
		if (document.getElementById('tripwireoptions').style.display != '') {
			document.getElementById('tripwireoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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

				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('tripwqa').textContent) {
					console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/949",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/949";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('vimboxtranslate').textContent) {
					console.log("Vimbox Translate: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);
										
					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/987",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/987";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);
				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('tripwlife').textContent) {
					console.log("Life: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);
										
															document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/986",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/986";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);
				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('tripwtalks').textContent) {
					console.log("Talks: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);
										
															document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/985",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/985";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);
				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('tripwsimavokado').textContent) {
					console.log("Simulator + Avokado: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);
										
															document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/988",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/988";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);
				} else console.log("Not found");
			}
		} else {
			document.getElementById('tripwireoptions').style.display = 'none';
		}
	}

	document.getElementById('optionAnalyst').onclick = function () { //analyst-gm-tl
		if (document.getElementById('analystoptions').style.display != '') {
			document.getElementById('analystoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
			document.getElementById('corpoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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
				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('analystsqa').textContent) {
					console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/947",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/947";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else console.log("Not found");
			}
		} else {
			document.getElementById('analystoptions').style.display = 'none';
		}
	}

	document.getElementById('optionCorp').onclick = function () { //corp-support
		if (document.getElementById('corpoptions').style.display != '') {
			document.getElementById('corpoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
			document.getElementById('analystoptions').style.display = 'none';
			document.getElementById('tripwireoptions').style.display = 'none';
			document.getElementById('chatqaoptions').style.display = 'none';
			document.getElementById('studcaboptions').style.display = 'none';
			document.getElementById('vimvidoptions').style.display = 'none';
			document.getElementById('vimbugsoptions').style.display = 'none';
			document.getElementById('teacherssrvdskoptions').style.display = 'none';
			document.getElementById('c1srvdskoptions').style.display = 'none';
			document.getElementById('schedulesrvdskoptions').style.display = 'none';
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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

				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('corpqa').textContent) {
					console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/950",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/950";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else console.log("Not found");
			}
		} else {
			document.getElementById('corpoptions').style.display = 'none';
		}
	}

	document.getElementById('optionMarketing').onclick = function () { //marketing-qa (landing pages)
		if (document.getElementById('marketingptions').style.display != '') {
			document.getElementById('marketingptions').style.display = '';		

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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
			document.getElementById('authsrvdskoptions').style.display = 'none';
			document.getElementById('crm2srvdskoptions').style.display = 'none';
			
			document.getElementById('billingsrvdskoptions').style.display = 'none';
			document.getElementById('billingqasrvdskoptions').style.display = 'none';


			//Начало окрашивания кнопок и добавление закрашивания при переключении

			document.getElementById('create_18').onclick = function () {
				let idstdserv = encodeURIComponent(document.getElementById('customfield_86').value);
				let dscr = encodeURIComponent(document.getElementById('customfield_87').value);
				let str = encodeURIComponent(document.getElementById('customfield_88').value);
				let erx = encodeURIComponent(document.getElementById('customfield_89').value);
				let ary = encodeURIComponent(document.getElementById('customfield_90').value);

				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('marketingqa').textContent) {
					console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/945",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/945";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else console.log("Not found");
			}
		} else {
			document.getElementById('marketingptions').style.display = 'none';
		}
	}

	document.getElementById('optionMrktprojbugs').onclick = function () { //marketing-projects-bugs(landing pages)
		if (document.getElementById('marketprojbugsptions').style.display != '') {
			document.getElementById('marketprojbugsptions').style.display = '';
			

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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

				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('marketingqa').textContent) {
					console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/952",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/952";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else console.log("Not found");
			}
		} else {
			document.getElementById('marketprojbugsptions').style.display = 'none';
		}
	}

	document.getElementById('optionMobbugs').onclick = function () { //mobile-bugs
		if (document.getElementById('mobbugsoptions').style.display != '') {
			document.getElementById('mobbugsoptions').style.display = '';

			document.getElementById('academymobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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
				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobauthorize').textContent) {
					console.log("Skyeng МП: авторизация: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1031",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1031";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobregister').textContent) {
					console.log("Skyeng МП: регистрация: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1030",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1030";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobregsocnetw').textContent) {
					console.log("Skyeng МП: регистрация через соц. сети: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1029",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1029";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobpayment').textContent) {
					console.log("Skyeng МП: оплата: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1023",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1023";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobauthsocnetw').textContent) {
					console.log("Skyeng МП: аторизация через соц. сети: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1028",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1028";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobchats').textContent) {
					console.log("Skyeng МП: чаты: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1027",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1027";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobpush').textContent) {
					console.log("Skyeng МП: пуши: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1026",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1026";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobforcupd').textContent) {
					console.log("Skyeng МП: Force update: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1025",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1025";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobasettings').textContent) {
					console.log("Skyeng МП: настройки: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1024",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1024";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymoblanguage').textContent) {
					console.log("Skyeng МП: локализация(язык приложения, контента): " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1022",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1022";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymovideocall').textContent) {
					console.log("Skyeng МП: видеосвязь(необразовательная часть): " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1021",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1021";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skyteachmob').textContent) {
					console.log("Teachers МП: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1020",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1020";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else console.log("Not found");
			}
		} else {
			document.getElementById('mobbugsoptions').style.display = 'none';
		}
	}

	document.getElementById('optionAcademymobbugs').onclick = function () { //academy-mobile-bugs
		if (document.getElementById('academymobbugsoptions').style.display != '') {
			document.getElementById('academymobbugsoptions').style.display = '';
			
			document.getElementById('mobbugsoptions').style.display = 'none';
			document.getElementById('infraoptions').style.display = 'none';
			document.getElementById('marketprojbugsptions').style.display = 'none';
			document.getElementById('studcabmobbugskoptions').style.display = 'none';
			document.getElementById('edumodeloptions').style.display = 'none';
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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

				let priorvalue = document.getElementById('academyprioritymbugs').value;
				if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobaudiobookslifetalks').textContent) {
					console.log("МП Skyeng: Аудиокниги и Life + Talks: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1019",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1019";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobsituations').textContent) {
					console.log("МП Skyeng: Ситуации: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1018",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1018";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobvideopractice').textContent) {
					console.log("МП Skyeng: Видеопрактика: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1017",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1017";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobselfstudy').textContent) {
					console.log("МП Skyeng: Self Study: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1016",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1016";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobvocabulartrainer').textContent) {
					console.log("МП Skyeng: тренажер слов: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1015",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1015";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobvocabular').textContent) {
					console.log("МП Skyeng: Словарь: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1014",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1014";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmoblessons').textContent) {
					console.log("МП Skyeng: уроки - образовательная часть: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1013",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1013";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobhomeworks').textContent) {
					console.log("МП Skyeng: Домашки: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

					document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1012",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1012";
					document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()

					setTimeout(getprsup, 5000);
					setTimeout(getslacklnk, 8000);

				} else console.log("Not found");
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
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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

				for(let i=0; i<document.getElementsByClassName('stcabmbsbtn ').length;i++) {
					if (document.getElementsByClassName('stcabmbsbtn ')[i].classList.contains('activebtn')) {
						sendRequestMobNoPriority(issuename, device, dscr, str, erx, ary, idstdserv, document.getElementsByClassName('stcabmbsbtn ')[i].value)
						console.log("Выбранная тематика: " + document.getElementsByClassName('stcabmbsbtn ')[i].innerText)
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
			document.getElementById('marketingptions').style.display = 'none';
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
			document.getElementById('telephonysrvdskoptions').style.display = 'none';
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