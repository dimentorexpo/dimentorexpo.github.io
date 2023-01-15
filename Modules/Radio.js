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