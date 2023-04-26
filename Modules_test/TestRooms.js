var win_testrooms =  // описание элементов окна создания тестовых комнат
  `<div style="display: flex; width: 320px;">
      <span style="width: 320px">
          <span style="cursor: -webkit-grab;">
              <div style="width: 320px;  border-bottom:1px solid #556B2F;" id="testroomshead">
                  <button title="скрывает меню" id="hideMetestrooms" style="width:50px; background: #228B22; margin:5px;">hide</button>
                  <button title="По нажатию очищает поля и сбрасывает в дефолтное состояние формы" id="cleartestrooms" style="width:24px; float: right; margin: 5px">🧹</button>
              </div>

					    <div style="width: 320px; margin:5px; display:flex; justify-content:left;">
                  <select id="subjecttypeselect" style="text-align: center; width: 300px; height: 26px; color: black; margin-left: 7px; margin-top: 5px;">
                      <option disabled="" selected="" value="subjnotselect" style="background-color: orange; color: white;">Выбери предмет</option>
                      <option value="api-english">Английский</option>
                      <option value="api-preschool">Дошкольная математика</option>
                      <option value="api-computer-science">Компьютерные курсы</option>
                      <option value="api-math">Математика</option>
                      <option value="api-social-science">Обществознание</option>
                      <option value="api-russian">Русский язык</option>
                      <option value="api-physics">Физика</option>
                      <option value="api-chess">Шахматы</option>
                  </select>
              </div>

              <div style="width: 320px; margin:5px; display:flex; justify-content:left;">
                  <input id="teachforroom" placeholder="Введи ID П" oninput="onlyNumbers(this)" autocomplete="off" type="text" style="text-align: center; width: 148px; color: black; margin-left: 5px; margin-top: 5px;">
                  <input id="studforroom" placeholder="Введи ID У" oninput="onlyNumbers(this)" autocomplete="off" type="text" style="text-align: center; width: 148px; color: black; margin-left: 5px; margin-top: 5px;">
    					</div>

              <div style="width: 320px; margin:5px; display:flex; justify-content:left;">
                  <button id="insertteachid" class="teststudteach">Тестовый 👽</button>
                  <button id="insertstudid" class="teststudteach">Тестовый 👨‍🎓</button>
                  <button id="userfromchatid" class="teststudteach">ID из чата</button>
              </div>
          </span>
      </span>
  </div>`;


if (localStorage.getItem('winToptestrooms') == null) { // началоное положение окна информации об  услугах
  localStorage.setItem('winToptestrooms', '120');
  localStorage.setItem('winLefttestrooms', '295');
}

let winttestrooms = document.createElement('div'); // создание окна вензель user info
document.body.append(winttestrooms);
winttestrooms.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winToptestrooms') + 'px; left: ' + localStorage.getItem('winLefttestrooms') + 'px; font-size: 14px; z-index: 21; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
winttestrooms.style.display = 'none';
winttestrooms.setAttribute('id', 'AF_testrooms');
winttestrooms.innerHTML = win_testrooms;

var listenertestrooms = function (e, a) { // сохранение позиции окна вензель user info
  winttestrooms.style.left = Number(e.clientX - myX7) + "px";
  winttestrooms.style.top = Number(e.clientY - myY7) + "px";
  localStorage.setItem('winToptestrooms', String(Number(e.clientY - myY7)));
  localStorage.setItem('winLefttestrooms', String(Number(e.clientX - myX7)));
};

winttestrooms.onmousedown = function (a) {
  if (checkelementtype(a)) {
    window.myX7 = a.layerX;
    window.myY7 = a.layerY;
    document.addEventListener('mousemove', listenertestrooms); // изменение позиции вензель user info
  }
}
winttestrooms.onmouseup = function () { document.removeEventListener('mousemove', listenertestrooms); } // прекращение изменения позиции вензель user info

document.getElementById('testroomshead').ondblclick = function (a) { // скрытие окна вензель user info по двойному клику
  if (checkelementtype(a)) { document.getElementById('AF_testrooms').style.display = 'none'; }
}

document.getElementById('hideMetestrooms').onclick = function () { // скрытие окна вензель user info
  if (document.getElementById('AF_testrooms').style.display == '')
    document.getElementById('AF_testrooms').style.display = 'none'
}

let TestRoomsBtn = document.createElement('button')
TestRoomsBtn.textContent = '🎲'
TestRoomsBtn.id = "TestRooms"
TestRoomsBtn.classList = 'teststudteach'
TestRoomsBtn.title = "Открыть окно создания тестовых комнат"
TestRoomsinsert = document.getElementById('testUsers').childNodes[0].childNodes[1]
TestRoomsinsert.insertBefore(TestRoomsBtn, TestRoomsinsert.children[2])

document.getElementById('TestRooms').onclick = function () { //открывает окно создания тестовых комнат
    setDisplayStyle(document.getElementById('AF_testrooms'), document.getElementById('AF_testrooms').style.display === '' ? 'none' : '');
}

