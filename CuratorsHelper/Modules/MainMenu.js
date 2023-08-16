var win_mainMenu = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">
						<div>
							<button class="btn-main" id="hidemainmenuha">h i d e </button>
						<div>

						<div id="mainmenu" style="display:block">
							<button id="openWFMHelper" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">📊</span> WFM</button>
							<br>
							<button id="birthdaylist" style="margin: 5px 5px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🎂</span> Birthday</button>
							<br>
							<button id="wfmopercounter" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🧮</span> WFM Count</button>
							<br>
							<button id="none3" style="display:none; margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🚫</span> In Dev</button>
							<br>
							<button id="none4" title = "" style="display:none; margin: 5px 5px 5px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🚫</span> In Dev</button>
						</div>

						<div id="asdasdwqeqwe" style="display:none">
							<button id="lkpskysmart" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🎓</span> Smartroom</button>
							<br>
							<button id="lkpadult" style="margin: 5px 5px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"> <span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🅰</span> Aduls</button>
							<br>
							<button id="backtomainfromstudmenu" style="margin: 5px 0px 5px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🔙</span> Back</button>
						</div>

						<div id="exercqweqweasdisesmenu" style="display:none">
							<button id="exercisekysmart" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🎓</span> Smartroom</button>
							<br>
							<button id="exercisesttc" style="margin: 5px 5px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"> <span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">👽</span> TTC</button>
							<br>
							<button id="backmainmenufromexercises" style="margin: 5px 0px 5px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="btn-main dobigger"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🔙</span> Back</button>
						</div>

					</span>
				   </div>`;

if (localStorage.getItem('winTopMainMenu') == null) { //additional menu
    localStorage.setItem('winTopMainMenu', '120');
    localStorage.setItem('winLeftMainMenu', '295');
}

let wintMainMenu = document.createElement('div');
document.body.append(wintMainMenu);
wintMainMenu.className = 'wintInitializeMain'
wintMainMenu.style = 'display:none;  top: ' + localStorage.getItem('winTopMainMenu') + 'px; left: ' + localStorage.getItem('winLeftMainMenu') + 'px;';
wintMainMenu.setAttribute('id', 'Curators_MainMenu');
wintMainMenu.innerHTML = win_mainMenu;

function checkelementt(a) { // проверка на какой элемент нажали
    let elem = document.elementFromPoint(a.clientX, a.clientY)

    if (elem.nodeName != 'BUTTON' && elem.nodeName != 'INPUT' && elem.nodeName != 'TEXTAREA' && elem.nodeName != 'SELECT' && elem.nodeName != 'TH' && elem.nodeName != 'TD') {
        return true;
    }
    return false;
}

var listenerMainMenu = function (e, a) {
    wintMainMenu.style.left = Number(e.clientX - myXMainMenu) + "px";
    wintMainMenu.style.top = Number(e.clientY - myYMainMenu) + "px";
    localStorage.setItem('winTopMainMenu', String(Number(e.clientY - myYMainMenu)));
    localStorage.setItem('winLeftMainMenu', String(Number(e.clientX - myXMainMenu)));
};
wintMainMenu.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myXMainMenu = a.layerX;
        window.myYMainMenu = a.layerY;
        document.addEventListener('mousemove', listenerMainMenu);
    }
}
wintMainMenu.onmouseup = function () { document.removeEventListener('mousemove', listenerMainMenu); }

document.getElementById('openMainMenu').onclick = function() {
	let tmpMainMenu = document.getElementById('Curators_MainMenu')
	if(tmpMainMenu.style.display == "none") {
		tmpMainMenu.style.display = ""
	} else tmpMainMenu.style.display = "none"
}

document.getElementById('hidemainmenuha').onclick = function() {
	document.getElementById('Curators_MainMenu').style.display = "none"
}