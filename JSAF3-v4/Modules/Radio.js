    let audioListItems ;
	var win_Radio =  // описание элементов окна радио
    `<div style="display: flex; width: 625px;">
        <span style="width: 625px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px; width: 625;" id="links_1str">
					<button title="Скрытие меню" id="hideMeRadio" class="buttonHide">hide</button>
				</div>
				<div id="audioPlayer" class="mainplayer">
					<div id="audioControls">
						<input type="text" id="audioUrl" style="text-align: center; border-radius: 10px; color:black;"
							placeholder="Enter Radio URL">
						<input type="text" id="audioName" style="text-align: center; border-radius: 10px; width:120px; color:black;"
							placeholder="Enter Radio name">
						<button id="addAudio">➕</button>
						<button id="playAudio">▶</button>
						<button id="pauseAudio">⏸</button>
						<input id="changeRadioVolume" min="0" max="1" value="1.0" step="0.11" type="range">
						<button id="muteAudio" onclick="muteorunmute()">🔇Mute</button>
					</div>
					<ol id="audioList" style="width:570px;"></ol>
					<audio id="player"></audio>
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
			newAudio.classList  = 'radiolist'
            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "❌";
            deleteBtn.style = "margin: 5px; width:30px; border: 1px solid darkslategrey; cursor:pointer; border-radius: 10px;";
            deleteBtn.classList ='deleteline'
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
		
		document.getElementById('radioPlayer').onclick = function() {
			if(document.getElementById('AF_Radio').style.display == 'none') {
				document.getElementById('AF_Radio').style.display = ''
			} else {
				document.getElementById('AF_Radio').style.display = 'none'
			}
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
			addClickListener();
        });

        if (audioUrls.length > 0) {
            for (let i = 0; i < audioUrls.length; i++) {
                audioList.appendChild(createAudioElement(audioUrls[i], audioNames[i]));
				addClickListener();
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
		
		function addClickListener() {
			audioListItems = document.getElementsByName('radiolist');
			for (let i = 0; i < audioListItems.length; i++) {
				audioListItems[i].addEventListener('click', function () {
					for (let j = 0; j < audioListItems.length; j++) {
						audioListItems[j].classList.remove('active');
					}
					this.classList.toggle('active');
				});
			}
		}

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
		
		document.getElementById('hideMeRadio').onclick = function() {
			document.getElementById('AF_Radio').style.display = 'none'
		}
		
		let volRange = document.getElementById('changeRadioVolume');
        volRange.value = localStorage.getItem('volume');


        volRange.onchange = function () {
            if (localStorage.getItem('volume') != null) {
                player.volume = this.value;
                localStorage.setItem('volume', player.volume);
            } else localStorage.setItem('volume', this.value);
        }