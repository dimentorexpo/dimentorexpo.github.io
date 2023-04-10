let linkstyles = document.createElement('link')
linkstyles.rel = 'stylesheet'
linkstyles.href = "https://grumstv.github.io/CuratorsHelper/CSS/styles.css" // подключаем модуль стилей 
document.querySelector('head').append(linkstyles)

let sidePanel = document.createElement('div')
	sidePanel.id = "rightPanel"
	sidePanel.style = 'position: fixed; top: 75px; right: 22px; z-index: 5; width: 40px; font-size: 22px; cursor: pointer; transition: all 0.5s ease;'
document.body.append(sidePanel)

let openMainMenu = document.createElement('button')
openMainMenu.innerHTML = '🛠'
openMainMenu.style = 'width: 42px; height: 42px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
openMainMenu.id = 'openMainMenu'
openMainMenu.classList.add('btn-main')
document.getElementById('rightPanel').appendChild(openMainMenu)

function include(url) { // функция подключения дополнительных скриптов/модулей
    var script = document.createElement('script');
    script.src = url;
    script.async = false;
    script.defer = true;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function loadmodules(gfgScript){

    let create = (info) => {
        return new Promise(function (resolve, reject) {
            let gfgData = document.createElement("script");
            gfgData.src = info;
            gfgData.async = false;
            gfgData.onload = () => {
                resolve(info);
            };
            gfgData.onerror = () => {
                reject(info);
            };
            document.body.appendChild(gfgData);
        });
    };

    let promiseData = [];
    gfgScript.forEach(function (info) {
        promiseData.push(create(info));
    });
    Promise.all(promiseData).then(function () {
        console.log('%c _  _       _  _ __           \r\n| || | ___ | || \'_ \\ ___  _ _ \r\n| __ |\/ -_)| || .__\/\/ -_)| \'_|\r\n|_||_|\\___||_||_|   \\___||_|', 'color:Limegreen')
    }).catch(function (gfgData) {
        console.log(gfgData + " failed to load!");
    });
}

    let gfgScript = ["https://grumstv.github.io/CuratorsHelper/Modules/MainMenu.js", // подключаем модуль главного меню скрипта
	"https://grumstv.github.io/CuratorsHelper/Modules/WFMOperCount.js", // подключаем модуль для помощи  с WFM при получении количества операторов, которые уже внесены в WFM
	"https://grumstv.github.io/CuratorsHelper/Modules/WFMHelper.js"]; // подключаем модуль для помощи  с WFM при построении графика
    loadmodules(gfgScript)