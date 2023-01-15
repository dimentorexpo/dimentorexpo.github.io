    var win_Radio =  // описание элементов окна радио
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px; width: 550;" id="links_1str">
					<button title="Скрытие меню" id="hideMe" style="width:50px; background: #228B22;">hide</button>
                    <button title="Открывает Базу знаний в Confluence" id="knoweledgebaseKC" class="uplinksbar onlyforkc">📚</button>
                    <button title="Прослушать запись урока" id="lessonrecordKC" class="uplinksbar onlyforkc">👩‍🏫</button>
					<button title="Личный кабинет в Skyeng" id="skyhomeKC" class="uplinksbar onlyforkc">💼</button>
				</div>
                <div style="margin: 5px; width: 550px;" id="links_butKC">
                    <button title="Открывает Timetable" id="timetableKC" style="width:105px">TimeTable</button>
                    <button title="Проведение операций с балансом ученика" id="CalcKC" style="width:105px">Калькулятор</button>
                    <button title="Проведение компенсаций, условия промокодов/сертиикатов" id="nachislyatorKC" style="width:105px">Начислятор</button>
                    <button title="Админка рассрочек" id="rassrochKC" style="width:105px">Рассрочка</button>
                    <button title="Админка подписок" id="pondpisKC" style="width:105px">Подписки</button>
                    <button title="Открывает Omnidesk" id="omniKC" style="width:105px">Omni</button>
                    <button title="Админка разговорных клубов" id="RKKC" style="width:105px">РК</button>
                    <button title="Актуальные шаблоны КЦ" id="shablKC" style="width:105px">Шаблоны</button>
                    <button title="Написать нарушение бизнес-процесса на менеджера" id="narushKC" style="width:105px">Нарушение БП</button>
                    <button title="Учет рабочего времени КЦ" id="grafKC" style="width:105px">График</button>
				</div>
			</span>
	</span>
</div>`;

if (localStorage.getItem('winTopRadio') == null) { // началоное положение окна радио (если не задано ранее)
    localStorage.setItem('winTopRadio', '120');
    localStorage.setItem('winLeftRadio', '295');
}

let wintRadio = document.createElement('div'); // создание окна радио
document.body.append(wintRadio);
wintRadio.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopRadio') + 'px; left: ' + localStorage.getItem('winLeftRadio') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintRadio.style.display = 'none';
wintRadio.setAttribute('id', 'AF_Radio');
wintRadio.innerHTML = win_Radio;

var listenerRadio = function (e, a) { // сохранение позиции окна радио
    wintRadio.style.left = Number(e.clientX - myXRadio) + "px";
    wintRadio.style.top = Number(e.clientY - myYRadio) + "px";
    localStorage.setItem('winTopRadio', String(Number(e.clientY - myYRadio)));
    localStorage.setItem('winLeftRadio', String(Number(e.clientX - myXRadio)));
};

wintRadio.onmousedown = function (a) { // изменение позиции окна радио
    if (checkelementtype(a)) {
        window.myXRadio = a.layerX;
        window.myYRadio = a.layerY;
        document.addEventListener('mousemove', listenerRadio);
    }
}
wintRadio.onmouseup = function () { document.removeEventListener('mousemove', listenerRadio); } // прекращение изменения позиции окна радио   
	   
		let audioUrls = JSON.parse(localStorage.getItem("audioUrls")) || [];
        let audioNames = JSON.parse(localStorage.getItem("audioNames")) || [];

        let audioPlayer = document.getElementById("audioPlayer");
        let audioUrl = document.getElementById("audioUrl");
        let audioName = document.getElementById("audioName");
        let addAudio = document.getElementById("addAudio");
        let playAudio = document.getElementById("playAudio");
        let pauseAudio = document.getElementById("pauseAudio");
        let audioList = document.getElementById("audioList");
        let player = document.getElementById("player");
        let volume = document.getElementById("volume");

        if (localStorage.getItem("volume")) {
            player.volume = localStorage.getItem("volume");
        }

        function createAudioElement(url, name) {
            let newAudio = document.createElement("li");
            newAudio.style = "cursor:pointer";
            newAudio.setAttribute("name", "radiolist")
            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "❌";
            deleteBtn.style = "margin: 5px; background: transparent; border: 1px solid darkslategrey; cursor:pointer; border-radius: 10px;";
            deleteBtn.setAttribute('name', 'deleteline')
            newAudio.appendChild(deleteBtn);
            newAudio.appendChild(document.createTextNode(name));
            newAudio.addEventListener("click", function () {
                player.src = url;
                player.play();
            });
            deleteBtn.addEventListener("click", function () {
                let question = confirm("Вы уверены, что хотите удалить эту позицию из списка?")
                if (question) {
                    const index = audioUrls.indexOf(url);
                    audioUrls.splice(index, 1);
                    audioNames.splice(index, 1);
                    localStorage.setItem("audioUrls", JSON.stringify(audioUrls));
                    localStorage.setItem("audioNames", JSON.stringify(audioNames));
                    audioList.removeChild(newAudio);
                } else {
                    console.log("Процедура удаления отменена")
                }

            });
            return newAudio;
        }

        addAudio.addEventListener("click", function () {
            let url = audioUrl.value;
            let name = audioName.value;
            audioUrls.push(url);
            audioNames.push(name);
            localStorage.setItem("audioUrls", JSON.stringify(audioUrls));
            localStorage.setItem("audioNames", JSON.stringify(audioNames));
            audioList.appendChild(createAudioElement(url, name));
            audioUrl.value = "";
            audioName.value = "";
        });

        if (audioUrls.length > 0) {
            for (let i = 0; i < audioUrls.length; i++) {
                audioList.appendChild(createAudioElement(audioUrls[i], audioNames[i]));
            }
        }

        playAudio.addEventListener("click", function () {
            player.play();
        });

        pauseAudio.addEventListener("click", function () {
            player.pause();
        });

        player.addEventListener("volumechange", function () {
            localStorage.setItem("volume", player.volume);
        });

        let audioListItems = document.querySelectorAll('[name=radiolist]');
        audioListItems.forEach(item => {
            item.addEventListener('click', function () {
                audioListItems.forEach(item => item.classList.remove('active'));
                this.classList.toggle('active');
            });
        });

        function muteorunmute() {
            if (player.muted) {
                player.muted = false;
                muteAudio.innerHTML = "🔇Mute";
                localStorage.setItem("volume", audioPlayer.volume);
            } else {
                player.muted = true;
                muteAudio.innerHTML = "📢Unmute";
            }
        }