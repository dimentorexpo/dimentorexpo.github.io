var win_Themes =  // описание элементов окна Тематик
    `<div style="display: flex; width: 350px; padding-bottom:15px;">
        <span style="width: 350px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 350;" id="themes_header">
                                <button title="скрывает меню" id="hideMeThemes" style="width:50px; background: #228B22;">hide</button>
								<button id="ClearSmartroomData" title="Очищает выбранные тэги">🧹</button>
								<button id="backtomenu" style="width: 28px; height: 28px; font-size: 14px; display:none">🔙</button>
								<button id="themesinstr" style="float:right;" title="Инструкция по этой форме">❓</button>
                        </div>

						<div>
							<input id="linktojiracoment" placeholder="Ссылка на Jira" title="Введите сюда ссылку на Jira, чтобы по нажатию на ракету добавить ее и в заметки в чат и в поле АФ ссылка на Jira" style="margin-left: 20px; width: 78%; text-align: center; margin-bottom:5px;">
							<button id="linktojirasend" title="Отправить введеную ссылку в комментарий чата и в поле Ссылка на Jira в АФ">🚀</button>
						</div>

						<div id="themes_body" style="margin-left:20px;display:flex; flex-wrap:wrap;">
							<label style="color:bisque; width:300px;text-align: center;border: 1px solid #3e4f55;background: chocolate;border-radius: 10px;font-weight: 700; font-size: 17px; box-shadow: 0px 3px 1px rgb(0 0 0 / 35%); text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); letter-spacing: .5rem;">Темы</label>
							<br>
							<button id="vimcall" style="margin-left:2px; width:150px; height: 44px;">🔇Связь</button>
							<button id="enterlesson" style="margin-left:2px; width:150px; height: 44px;">🔌Вход и подкл к уроку</button>
							<button id="lessonfunc" style="margin-left:2px; width:150px; height: 44px;">🧯Функционал на уроке</button>
							<button id="perscab" style="margin-left:2px; width:150px; height: 44px;">🏡ЛК</button>
							<button id="userhomework" style="margin-left:2px; width:150px; height: 44px;">💼ДЗ (вимбокс)</button>
							<button id="payments" style="margin-left:2px; width:150px; height: 44px;">💳Оплата</button>
							<button id="skyengapp" style="margin-left:2px; width:150px; height: 44px;">📱Skyeng👨‍🎓</button>
							<button id="teachersapp" style="margin-left:2px; width:150px; height: 44px;">📱Teachers👽</button>
							<button id="parentsapp" style="margin-left:2px; width:150px; height: 44px;">📱Skysmart Parents👪</button>
							<button id="feedbacksuggest" style="margin-left:2px; width:150px; height: 44px;">💭Отзывы и пожелания</button>
							<button id="dblook" style="margin-left:2px; width:150px; height: 44px;">🔎Поиск по БД</button>
							<button id="innerissue" style="margin-left:2px; width:150px; height: 44px;">💨Внутренние запросы, прочее</button>
						</div>

						<div id="tags_body" style="margin-left:20px;display:flex; flex-wrap:wrap;">
							<label style="color: #87ff5e; width:300px;text-align: center;border: 1px solid black;border-radius: 10px;margin-top: 5px;background: darkgray;font-weight: 700; font-size: 17px; box-shadow: 0px 3px 1px rgb(0 0 0 / 35%); text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); letter-spacing: .5rem;">Теги</label>
							<br>
							<button name="tagssbtn" value="oo" style="margin-left:2px; width:125px; height: 25px;">ОшибкаКЦ</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="queue" style="margin-left:2px; width:125px; height: 25px;">Очередь</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="recommendations_given " style="margin-left:2px; width:125px; height: 25px; font-size:12px;">Даны рекомендации</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="request_solved" style="margin-left:2px; width:125px; height: 25px;">Запрос решен</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="missed_call" style="margin-left:2px; width:125px; height: 25px;">Недозвон</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="no_action_required" style="margin-left:2px; width:125px; height: 25px; font-size:10px;">Действий не требуется</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="refusal_of_help" style="margin-left:2px; width:125px; height: 25px;">Отказ от помощи</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="request_forwarded_to_content" style="margin-left:2px; width:125px; height: 25px;">Контент</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="double" style="margin-left:2px; width:125px; height: 25px;">Дубль</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="request_forwarded_to_2l_tp" style="margin-left:2px; width:125px; height: 25px;">2ЛТП</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="request_forwarded_to_outgoing_tp_crm2" style="margin-left:2px; width:125px; height: 25px;">Исход</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="request_forwarded_to_channel_qa" style="margin-left:2px; width:125px; height: 25px;">QA</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="request_forwarded_to_tc" style="margin-left:2px; width:125px; height: 25px;">TC</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="request_forwarded_to_sc" style="margin-left:2px; width:125px; height: 25px;">SC</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="server_issues" style="margin-left:2px; width:125px; height: 25px;">Серверные</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="request_forwarded_to_development" style="margin-left:2px; width:125px; height: 25px;">Разработка</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="smartroom" style="margin-left:2px; width:125px; height: 25px;">Smartroom</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button name="tagssbtn" value="untargeted" style="margin-left:2px; width:125px; height: 25px;">Нецелевой</button>
							<input type="checkbox" name="tagcheck" style="margin: 2px; width: 20px;">
							<button id="multitag" style="width: 300px; margin-top:5px;">Мультитег</button>
						</div>

						<div id="svyazissues" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
								<button name="themesbtn" value="1580" title="Связь на платформе блокировалась каким-то программным обеспечением на стороне пользователя" style="margin-left:2px; width:150px; height: 44px;">🚨Связь блокировалась ПО</button>
								<button name="themesbtn" value="1581" title="Проблемы со связью возникли из-за того, что версия операционной системы или браузера ниже минимальных для работы на платформе" style="margin-left:2px; width:150px; height: 44px;">ПО(ОС/браузер)🔽 мин</button>
								<button name="themesbtn" value="1582" title="Проблемы со связью возникли из-за корпоративного устройства или корпоративной сети пользователя" style="margin-left:2px; width:150px; height: 44px;">🛡Корп сеть/ус-во</button>
								<button name="themesbtn" value="1583" title="Проблемы со связью возникли из-за неполадок с браузером и/или операционной системы пользователя" style="margin-left:2px; width:150px; height: 44px;">🥏ОС/Браузер</button>
								<button name="themesbtn" value="1584" title="Проблемы со связью возникли из-за неполадок с гарнитурой (устройствами ввода и вывода звука), конкретно из-за индивидуальных настроек конкретной модели или физического дефекта/поломки. В эту же категорию попадают кейсы в которых пользователь случайно отключил микрофон или уменьшил громкость через кнопку на наушниках/микрофоне" style="margin-left:2px; width:150px; height: 44px;">🎧Гарнитура</button>
								<button name="themesbtn" value="1585" title="Проблемы со связью возникли из-за неполадок с камерой (физические неисправности, не было разрешений в браузере/устройстве, блокировка антивирусом, индивидуальные настройки конкретной модели устройства)" style="margin-left:2px; width:150px; height: 44px;">📸Камера</button>
								<button name="themesbtn" value="1586" title="Проблемы со связью возникли из-за несоответствия минимальным требованиям, перегруженность ЦП, ОЗУ. Неактуальные версии ОС." style="margin-left:2px; width:150px; height: 44px;">💻ПК</button>
								<button name="themesbtn" value="1587" title="Проблемы со связью возникли из-за скорости интернета ниже 5 Мбит/сек в оба направления (скачать/загрузить)" style="margin-left:2px; width:150px; height: 44px;">Хар-ки инета 🔽мин</button>
								<button name="themesbtn" value="1588" title="Проблемы со связью возникли из-за несоответствия показателей устройства минимальным критериям" style="margin-left:2px; width:150px; height: 44px;">Хар-ки 💻устр 🔽мин</button>
								<button name="themesbtn" value="1589" title="Пользователю потребовалось разъяснение по работе связи в уроке, как заходить в урок, что нажимать, как установить связь с преподавателем/учеником." style="margin-left:2px; width:150px; height: 44px;">Консульт раб связи</button>
								<button name="themesbtn" value="1590" title="Причину блокирования или прерывания связи не удалось обнаружить и при проверке связи на тестовом уроке всё работало хорошо" style="margin-left:2px; width:150px; height: 44px;">🔥Сбой на плат - блок/прерыв</button>
								<button name="themesbtn" value="1591" title="Причину аудио: задержки или искажения связи не удалось обнаружить и при проверке связи на тестовом уроке всё работало хорошо" style="margin-left:2px; width:150px; height: 44px;">🔥Сбой на плат - 🔊:задерж/искаж</button>
								<button name="themesbtn" value="1592" title="Причину видео: задержки или плохой картинке связи не удалось обнаружить и при проверке связи на тестовом уроке всё работало хорошо" style="margin-left:2px; width:150px; height: 44px;">🔥Сбой на плат - 📷: задерж/плох карт</button>
								<button name="themesbtn" value="1593" title="Причину проблемы со связью не удалось обнаружить и при проверке связи на тестовом уроке всё работало хорошо
								P.S. Эта категория используется в случае если сбой не подходит ни под какую подтему в этой теме" style="margin-left:2px; width:150px; height: 44px;">🔥Сбой на плат</button>
								<button name="themesbtn" value="1594" title="Проблемы со связью возникли по причине использования браузера, несоответствующему минимальным требованиям." style="margin-left:2px; width:150px; height: 44px;">❌Не поддерж брауз/ОС</button>
								<button name="themesbtn" value="1595" title="Проблемы со связью возникли по причине использования устройства (камера/гарнитура/ПК), которые не соответствуют минимальным требованиям, не поддерживаются платформой (гарнитура от телефона и т.п.)" style="margin-left:2px; width:150px; height: 44px; font-size:10px;">❌Не поддерж ус (📸камера, 🎧гарнитура,💻комп)</button>
						</div>

						<div id="vhodurok" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="1632" title="У/П не могут войти в свой ЛК, т.к. нет привязанных данных для входа. Выставление нужных данный." style="margin-left:2px; width:150px; height: 44px; font-size:11px;">🔐Авториз - Не привязана 📧/📱 как логин</button>
							<button name="themesbtn" value="1629" title="Виджет входа на урок - Отсутствует кнопка" style="margin-left:2px; width:150px; height: 44px;">🧭Виджет вх урок - Отсутстств кноп⁉</button>
							<button name="themesbtn" value="1635" title="У/П указывают неверные данные для входа, нет ролей, которые дают право на вход." style="margin-left:2px; width:150px; height: 44px;">🔐Авториз - Даные для входа</button>
							<button name="themesbtn" value="1630" title="Нет возможности перейти по кнопке входа в урок." style="margin-left:2px; width:150px; height: 44px;">🧭Виджет вх урок - Кнопка не активна🔘</button>
							<button name="themesbtn" value="1634" title="У/П забыли пароль от своего ЛК, не могут войти. Решение — сброс пароля." style="margin-left:2px; width:150px; height: 44px;">🔐Авториз - Сброс пароля</button>
							<button name="themesbtn" value="1626" title="Виджет входа на урок не отображается в ЛКУ по причине того, что У или П в отпуске." style="margin-left:2px; width:150px; height: 44px;">🧭Виджет вх урок - У в отпуске🏝</button>
							<button name="themesbtn" value="1633" title="Не удается войти в ЛКУ/ЛКП, отображается ошибка доступа при входе." style="margin-left:2px; width:150px; height: 44px;">🔐Сбой с авторизацией</button>
							<button name="themesbtn" value="1627" title="Консультация У о том, как входить в урок при помощи виджета." style="margin-left:2px; width:150px; height: 44px; font-size:11px;">🧭Виджет вх урок - Консульт по вх на урок</button>
							<button name="themesbtn" value="1631" title="Оказание консультации У/П о том, как можно войти в свой личный кабинет." style="margin-left:2px; width:150px; height: 44px;">🔐Консультация по авторизации</button>
							<button name="themesbtn" value="1628" title="Виджет входа на урок не отображается в ЛКУ по причине того, что У не состоит в группу ГУ или был добавлен слишком поздно." style="margin-left:2px; width:150px; height: 44px;">🧭Виджет вх урок - У не сост в гр (ГУ)</button>
							<button name="themesbtn" value="1624" title="Не отображается виджет входа на урок в ЛК по причине истекшей подписки У" style="margin-left:2px; width:150px; height: 44px; font-size:11px;">🧭Виджет вх урок - Истекла подписка У⏳</button>
							<button name="themesbtn" value="1625" title="Виджет входа на урок не отображается в ЛКУ по причине того, что занятие запланировано в другое время." style="margin-left:2px; width:150px; height: 44px;">🧭Виджет вх урок - Урок в др ⌚</button>
						</div>

						<div id="funcurok" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="1772" title="Возникают проблемы с корректным отображением показателя STT." style="margin-left:2px; width:150px; height: 44px;">👨‍🎓STT</button>
							<button name="themesbtn" value="1773" title="Возникают проблемы с корректным отображением показателя TTT." style="margin-left:2px; width:150px; height: 44px;">👽TTT</button>
							<button name="themesbtn" value="1767" title="Возникают проблемы с отображением, синхронизацией вложений во время урока." style="margin-left:2px; width:150px; height: 44px;">🔗Вложения</button>
							<button name="themesbtn" value="1771" title="Возникают проблемы с запуском демонстрации экрана (понимание как включить и управлять демонстрацией, технические требования для запуска демонстрации)." style="margin-left:2px; width:150px; height: 44px;">🖥Демонстрация экрана</button>
							<button name="themesbtn" value="1768" title="Возникают проблемы с отображением, синхронизацией доски во время урока." style="margin-left:2px; width:150px; height: 44px;">⌨Доска</button>
							<button name="themesbtn" value="2037" title="Возникают проблемы с отображением, синхронизацией заметок во время урока." style="margin-left:2px; width:150px; height: 44px;">📝Заметки</button>
							<button name="themesbtn" value="1775" title="Возникают проблемы с отправкой ДЗ во время урока ( понимание, поломка на платформе)." style="margin-left:2px; width:150px; height: 44px;">💨Отправка ДЗ на уроке</button>
							<button name="themesbtn" value="1770" title="Возникают проблемы с отображением, синхронизацией материалов." style="margin-left:2px; width:150px; height: 44px;">🔀Переключение материалов</button>
							<button name="themesbtn" value="1776" title="Возникают проблемы с отображением, работой и синхронизацией аудио/ видеороликов во время уроков. Поломка может быть вызвана технической стороной У/П, так и проблемой на стороне платформы." style="margin-left:2px; width:150px; height: 44px; font-size:11px;">🎵/📽Проблема с плеером (аудио/видеоролики)</button>
							<button name="themesbtn" value="1769" title="Возникают проблемы с отображением, синхронизацией словаря во время урока. Не добавляются слова в словарь во время урока." style="margin-left:2px; width:150px; height: 44px;">📙Словарь на уроке</button>
							<button name="themesbtn" value="1774" title="Возникают проблемы с выполнением, синхронизацией, проверкой упражнений в уроке." style="margin-left:2px; width:150px; height: 44px;">🎯Упражнения на уроке</button>
						</div>

						<div id="cabusr" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="1714" title="Не отображается, не загружается чат, проблемы с отображением чата, добавление чата с У или отделом школы." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Чат в лк</button>
							<button name="themesbtn" value="1708" title="Возникает ошибка с работой чата в ЛК (нет чата, некорректная работа)." style="margin-left:2px; width:150px; height: 44px;">👨‍🎓ЛКУ - Чат в лк</button>
							<button name="themesbtn" value="1713" title="Возникает ошибка с отображением расписания, выставлением статуса, времени занятий, свободных/занятых часов." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Расписание</button>
							<button name="themesbtn" value="1707" title="Возникает ошибка отображения, работы в разделе ЛКУ - История занятий/портфолио. Нет пройденных уроков, их аудиозаписей." style="margin-left:2px; width:150px; height: 44px;">👨‍🎓ЛКУ - История занятий/портфолио</button>
							<button name="themesbtn" value="1715" title="Возникают проблемы с отображением, выставлением информации в разделе." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Профиль</button>
							<button name="themesbtn" value="1710" title="Возникает ошибка в редактировании, правке профиля." style="margin-left:2px; width:150px; height: 44px;">👨‍🎓ЛКУ - Профиль</button>
							<button name="themesbtn" value="1716" title="Возникают проблемы с выставлением настроек ЛКП." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Настройки</button>
							<button name="themesbtn" value="1711" title="Возникает ошибка в установке настроек пользователем (время, часовой пояс, данные для входа и т.д.)" style="margin-left:2px; width:150px; height: 44px;">👨‍🎓ЛКУ - Настройки</button>
							<button name="themesbtn" value="1719" title="Ошибка в отображении информации, отсутствие информации по финансам." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Финансы</button>
							<button name="themesbtn" value="1709" title="Нужно совершить действия в уже существующей семье (прикрепить/открепить пользователя), создать семью." style="margin-left:2px; width:150px; height: 44px;">👨‍🎓ЛКУ - Семья</button>
							<button name="themesbtn" value="1712" title="Возникает ошибка в отображении достижений П, своевременности их появления." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Карта роста</button>
							<button name="themesbtn" value="1706" title="Неверное отображение данных в ЛКУ в виджете прогресса." style="margin-left:2px; width:150px; height: 44px;">👨‍🎓ЛКУ - Виджет прогресса</button>
							<button name="themesbtn" value="1718" title="Отображается ошибка при выставлении перерыва, неверное отображение." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Перерыв</button>
							<button name="themesbtn" value="1704" title="Возникает ошибка отображения, работы в разделе ЛКУ - Грамматика." style="margin-left:2px; width:150px; height: 44px;">👨‍🎓ЛКУ - Грамматика</button>
							<button name="themesbtn" value="1717" title="Возникают проблемы с отображением работ на проверку (не отображаются, отображаются не нужные, нужно открепить работу на проверку)." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Упражнения</button>
							<button name="themesbtn" value="1705" title="Возникает ошибка отображения, работы в разделе ЛКУ - Навыки." style="margin-left:2px; width:150px; height: 44px;">👨‍🎓ЛКУ - Навыки</button>
							<button name="themesbtn" value="1720" title="Возникают проблемы с отображением работ на проверку (не отображаются, отображаются не нужные, нужно открепить работу на проверку)." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Работы на проверку</button>
							<button name="themesbtn" value="1721" title="Возникают ошибки в отображении групп У, их формировании, численности и возможности создания урока с ними." style="margin-left:2px; width:150px; height: 44px;">👽ЛКП - Группы</button>

						</div>

						<div id="HWvim" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="1744" title="Возникают ошибки в отображении материалов, их несоответствие заданиям, плохое качество материалов, все виды ошибок грамматического/орфографического характера." style="margin-left:2px; width:150px; height: 44px;">📝Контент</button>
							<button name="themesbtn" value="1745" title="Возникают ошибки в выставлении оценки на слайдах, в уроке в целом." style="margin-left:2px; width:150px; height: 44px;">🔟Оценка</button>
							<button name="themesbtn" value="1746" title="Возникают ошибки в работе со словарем, не отображается перевод, не добавляются слова." style="margin-left:2px; width:150px; height: 44px;">📚Словарь</button>
							<button name="themesbtn" value="1747" title="Возникают ошибки в механике выполнения заданий, не работает механика выполнения, неправильно верифицируется ответ в заданиях." style="margin-left:2px; width:150px; height: 44px;">🎯Упражнения</button>
						</div>

						<div id="paymn" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="1077" title="По вине школы не проходит оплата, допущена ошибка обработки менеджером." style="margin-left:2px; width:150px; height: 44px;">🏰Вина школы</button>
							<button name="themesbtn" value="1658" title="Предоставление консультации по оплате, возможных способах оплаты и в целом как совершать оплату." style="margin-left:2px; width:150px; height: 44px;">🤑Консультация по оплате</button>
							<button name="themesbtn" value="1659" title="Возникает ошибка оплаты по причине отсутствия нужного У пакета/услуги." style="margin-left:2px; width:150px; height: 44px;">⭕Нет нужного пакета/услуги</button>
							<button name="themesbtn" value="1660" title="Возникает проблема совершения оплаты подписки, не продлевается подписка, подписка списана ранее, списано неверное количество уроков." style="margin-left:2px; width:150px; height: 44px;">💸Подписки</button>
							<button name="themesbtn" value="1661" title="Возникает ошибка оплаты по причине проблем с картой У: лимиты, 3d-secure, ограничения банка." style="margin-left:2px; width:150px; height: 44px;">💳Проблема с картой У</button>
							<button name="themesbtn" value="1662" title="Возникает ошибка оплаты по причине возникновения ошибки на платформе." style="margin-left:2px; width:150px; height: 44px;">⛔Сбой при оплате</button>
						</div>

						<div id="skyengpril" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="1804" title="Возникают проблемы с входом в ЛКУ" style="margin-left:2px; width:150px; height: 44px;">🔐Авторизация</button>
							<button name="themesbtn" value="1805" title="Возникают проблемы с пониманием механики выполнения заданий, ошибкой приложения во время выполнения заданий." style="margin-left:2px; width:150px; height: 44px;">💼Домашка</button>
							<button name="themesbtn" value="1806" title="Возникают проблемы с оплатой через приложение вызванные непониманием пользователя или ошибкой платформы." style="margin-left:2px; width:150px; height: 44px;">💲Оплата</button>
							<button name="themesbtn" value="1807" title="Возникают проблемы с выставлением настроек профиля." style="margin-left:2px; width:150px; height: 44px;">👨‍🎓Профиль</button>
							<button name="themesbtn" value="1808" title="Возникают проблемы с пониманием, выполнение упражнений в тренажере слов." style="margin-left:2px; width:150px; height: 44px;">📚Тренажер слов</button>
							<button name="themesbtn" value="1809" title="Возникают проблемы со связью во время уроков, синхронизация материалов, заметок, словаря, выполнение упражнений." style="margin-left:2px; width:150px; height: 44px;">👨‍🏫Уроки</button>
							<button name="themesbtn" value="1810" title="Чат не отображается вовсе, нет определенных чатов (с П или с ПМ, не прогружается чат, чат не синхронизируется)." style="margin-left:2px; width:150px; height: 44px;">💬Чат</button>
						</div>

						<div id="teacherpril" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="1833" title="Возникают проблемы с входом в ЛКП" style="margin-left:2px; width:150px; height: 44px;">🔐Авторизация</button>
							<button name="themesbtn" value="1836" title="Возникает ошибка с отображением расписания, синхронизации данных." style="margin-left:2px; width:150px; height: 44px;">📅Виджет расписания</button>
							<button name="themesbtn" value="1835" title="Отображается некорректная информация в разделе." style="margin-left:2px; width:150px; height: 44px;">💱Виджет финансов</button>
							<button name="themesbtn" value="1838" title="Возникает ошибка с отображением данных в профиле." style="margin-left:2px; width:150px; height: 44px;">👽Профиль</button>
							<button name="themesbtn" value="1840" title="Возникает ошибка при загрузке/ отображении сторис." style="margin-left:2px; width:150px; height: 44px;">📢Сторис</button>
							<button name="themesbtn" value="1837" title="Возникает ошибка с отображением расписания, выставлением статуса, времени занятий, свободных/занятых часов." style="margin-left:2px; width:150px; height: 44px;">📆Страница расписания</button>
							<button name="themesbtn" value="1834" title="Отображается некорректная информация в разделе." style="margin-left:2px; width:150px; height: 44px;">💰Страница финансов</button>
							<button name="themesbtn" value="1839" title="Чат не отображается вовсе, нет определенных чатов (с У или с другим отделом школы, не прогружается чат, чат не синхронизируется)." style="margin-left:2px; width:150px; height: 44px;">💬Чат</button>
						</div>

						<div id="skysmartrodpril" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="1884" title="Консультация, организационные вопросы." style="margin-left:2px; width:150px; height: 44px;">💫Другое</button>
							<button name="themesbtn" value="1883" title="Возникает ошибка в отображении материалов, отображаются не все материалы." style="margin-left:2px; width:150px; height: 44px;">📖Материалы</button>
							<button name="themesbtn" value="1880" title="Не отображается информации по подключенным предметам ( или отображается только о некоторых), неактуальнвя информация, ошибка при запросе проверки баланса, нет синхронизации." style="margin-left:2px; width:150px; height: 44px;">💰Предметы и баланс</button>
							<button name="themesbtn" value="1881" title="Возникает ошибка в редактировании, формировании, отображении информации профиля." style="margin-left:2px; width:150px; height: 44px;">👪Профиль родителя</button>
							<button name="themesbtn" value="1879" title="Возникает ошибка в отображении информации, синхронизации данных." style="margin-left:2px; width:150px; height: 44px;">📆Расписание</button>
							<button name="themesbtn" value="1882" title="Не работает чат, не отображается, не синхронизируется. Необходимо добавить/удалить чат." style="margin-left:2px; width:150px; height: 44px;">💬Чат</button>
						</div>

						<div id="feedbackpog" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="1970" title="Пользователь оставил пожелания о качестве контента, необходимости добавить/убрать материалы." style="margin-left:2px; width:150px; height: 44px;">Вимбокс - Контент</button>
							<button name="themesbtn" value="1971" title="Пользователь оставил пожелания о процессе выставления/начисления/отображения/синхронизации оценки." style="margin-left:2px; width:150px; height: 44px;">Вимбокс - Оценка</button>
							<button name="themesbtn" value="1972" title="Пользователь оставил пожелания о функционале, синхронизации, отображении словаря." style="margin-left:2px; width:150px; height: 44px;">Вимбокс - Словарь</button>
							<button name="themesbtn" value="1973" title="Пользователь оставил пожелания о способах выполнения, синхроницации упражнений." style="margin-left:2px; width:150px; height: 44px;">Вимбокс - Упражнения</button>
							<button name="themesbtn" value="1966" title="Пользователь оставил пожелания о функционале, условиях отключения и подключения ОС." style="margin-left:2px; width:150px; height: 44px;">ЛК - ОС с родителями</button>
							<button name="themesbtn" value="1965" title="Пользователь оставил пожелания о функционале, условиях переноса/отмены уроков." style="margin-left:2px; width:150px; height: 44px;">ЛК - Перенос/отмена урока</button>
							<button name="themesbtn" value="1967" title="Пользователь оставил пожелания о способах заполнения, сохранения и редактировании данных в указанном разделе." style="margin-left:2px; width:150px; height: 44px;">ЛК - Профиль</button>
							<button name="themesbtn" value="1968" title="Пользователь оставил пожелания об отображении и функционале на странице "Семья"." style="margin-left:2px; width:150px; height: 44px;">ЛК - Семья</button>
							<button name="themesbtn" value="1969" title="Пользователь оставил пожелания о функционале и отображении чата, правилам удаления/добавления/отображения чата." style="margin-left:2px; width:150px; height: 44px;">ЛК - Чат в лк</button>
							<button name="themesbtn" value="1974" title="Пользователь оставил пожелания о функционале приложения." style="margin-left:2px; width:150px; height: 44px;">Приложение - Skyeng</button>
							<button name="themesbtn" value="1975" title="Пользователь оставил пожелания о функционале приложения." style="margin-left:2px; width:150px; height: 44px;">Приложение - Skyeng Teachers</button>
							<button name="themesbtn" value="1979" title="Пользователь оставил пожелания о функционале приложения." style="margin-left:2px; width:150px; height: 44px;">Приложение - Skypro</button>
							<button name="themesbtn" value="1976" title="Пользователь оставил пожелания о функционале приложения." style="margin-left:2px; width:150px; height: 44px;">Приложение - Skysmart Класс</button>
							<button name="themesbtn" value="1977" title="Пользователь оставил пожелания о функционале приложения." style="margin-left:2px; width:150px; height: 44px;">Приложение - Skysmart Решения</button>
							<button name="themesbtn" value="1978" title="Пользователь оставил пожелания о функционале приложения." style="margin-left:2px; width:150px; height: 44px;">Приложение - Skysmart Родителям</button>
							<button name="themesbtn" value="1980" title="Пожелания, которые невозможно отнести к вышеперечисленным категориям." style="margin-left:2px; width:150px; height: 44px;">Прочее</button>
						</div>

						<div id="poiskbd" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="2018" title="Запрос на информацию о причине удаления урока и инициаторе." style="margin-left:2px; width:150px; height: 44px;">🧾Кто удалил урок - Оператор🧐</button>
							<button name="themesbtn" value="2017" title="Запрос на информацию о причине удаления урока и инициаторе." style="margin-left:2px; width:150px; height: 44px;">🧾Кто удалил урок - Система🤖</button>
							<button name="themesbtn" value="2020" title="Запрос на информацию об ошибках, которые возникли на стороне У для дальнейшей более детальной проверки." style="margin-left:2px; width:150px; height: 44px;">🧾Логи урока - Проблемы у П👽</button>
							<button name="themesbtn" value="2019" title="Запрос на информацию об ошибках, которые возникли на стороне П для дальнейшей более детальной проверки." style="margin-left:2px; width:150px; height: 44px;">🧾Логи урока - Проблемы у У👨‍🎓</button>
						</div>

						<div id="vnutrzapr" style="margin-left:20px;display:flex; flex-wrap:wrap;display:none">
							<button name="themesbtn" value="2030" title="Возникает ошибка с авторизацией, входом в слак, недостаточность ролей или понимание системы входа." style="margin-left:2px; width:150px; height: 44px;">❓Slack - Проблемы со входом</button>
							<button name="themesbtn" value="2034" title="Вопросы, не связанные с вышеперечисленными." style="margin-left:2px; width:150px; height: 44px;">💫Прочее</button>
						</div>

                </span>
        </span>
</div>`;

if (localStorage.getItem('winTopThemes') == null) { // начальное положение окна Themes
    localStorage.setItem('winTopThemes', '120');
    localStorage.setItem('winLeftThemes', '295');
}

let wintThemes = document.createElement('div'); // создание окна ServiceDesk
document.body.append(wintThemes);
wintThemes.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopThemes') + 'px; left: ' + localStorage.getItem('winLeftThemes') + 'px; font-size: 14px; z-index: 21; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintThemes.style.display = 'none';
wintThemes.setAttribute('id', 'AF_Themes');
wintThemes.innerHTML = win_Themes;

var listenerThemes = function (e, a) { // сохранение позиции окна Тематик
    wintThemes.style.left = Number(e.clientX - myX18) + "px";
    wintThemes.style.top = Number(e.clientY - myY18) + "px";
    localStorage.setItem('winTopThemes', String(Number(e.clientY - myY18)));
    localStorage.setItem('winLeftThemes', String(Number(e.clientX - myX18)));
};

wintThemes.onmousedown = function (a) { // изменение позиции окна Тематик
    if (checkelementtype(a)) {
        window.myX18 = a.layerX;
        window.myY18 = a.layerY;
        document.addEventListener('mousemove', listenerThemes);
    }
}
wintThemes.onmouseup = function () { document.removeEventListener('mousemove', listenerThemes); } // прекращение изменения позиции окна Тематик


document.getElementById('AF_Themes').ondblclick = function (a) { // скрытие окна Тематик и тегов по двойному клику
    if (checkelementtype(a)) { document.getElementById('hideMeThemes').click(); }
}

    document.getElementById('hideMeThemes').onclick = function () { // скрытие окна поиска по Jira
        if (document.getElementById('AF_Themes').style.display == '')
            document.getElementById('AF_Themes').style.display = 'none'

        if (document.getElementById('backtomenu').style.display == '')
            document.getElementById('backtomenu').click()
    }
	
	    document.getElementById('themesinstr').onclick = function () {
        window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-themes%D0%9A%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0%D0%A2%D0%B5%D0%BC%D1%8B')
    }

    document.getElementById('themes').onclick = function () {
        if (document.getElementById('AF_Themes').style.display == '')
            document.getElementById('AF_Themes').style.display = 'none'
        else
            document.getElementById('AF_Themes').style.display = ''

        for (let i = 0; i < document.getElementsByName('themesbtn').length; i++) {
            document.getElementsByName('themesbtn')[i].onclick = function () {
                newTag(this.value)
            }
        }

        for (let j = 0; j < document.getElementsByName('tagssbtn').length; j++) {
            document.getElementsByName('tagssbtn')[j].onclick = function () {
                if (this.value == 'refusal_of_help') {
                    if (document.getElementById('AF_Refuseformnew').style.display == 'none') {
                        document.getElementById('otkaz').click();
                    }
                } else if (this.value == 'smartroom') {
                    if (document.getElementById('AF_Smartroomform').style.display == 'none') {
                        document.getElementById('smartroomform').click();
                    }
                }
                newTaggg(this.value)
            }
        }

        document.getElementById('ClearSmartroomData').onclick = function () {
            let allcheckboxtags = document.getElementsByName('tagcheck')
            for (let i = 0; i < allcheckboxtags.length; i++) {
                if (allcheckboxtags[i].checked) {
                    allcheckboxtags[i].checked = false;
                }
            }
        }

        document.getElementById('multitag').onclick = function () {
            let allcheckboxtags = document.getElementsByName('tagcheck')
            let alltagsbtns = document.getElementsByName('tagssbtn')
            let tagsvaluesarr = [];
            let chatId = ''
            if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
                chatId = document.location.pathname.split('/')[3]
            else
                chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]

            for (let i = 0; i < allcheckboxtags.length; i++) {
                if (allcheckboxtags[i].checked) {
                    tagsvaluesarr.push('\"' + alltagsbtns[i].value + '\"')
                    if (allcheckboxtags[i].value == 'refusal_of_help' && document.getElementById('AF_Refuseformnew').style.display == 'none') {
                        document.getElementById('otkaz').click()
                    }
                    if (allcheckboxtags[i].value == 'smartroom' && document.getElementById('AF_Smartroomform').style.display == 'none') {
                        document.getElementById('smartroomform').click()
                    }
                }
            }
            if (tagsvaluesarr.length > 0) {
                tagsvaluesarr = tagsvaluesarr.join(',')
                console.log("tagsvaluesarr: " + tagsvaluesarr)

                fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
                    "headers": {
                        "content-type": "application/json",
                    },
                    "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[" + tagsvaluesarr + "]}]}",
                    "method": "POST",
                    "credentials": "include"
                });

                for (let i = 0; i < allcheckboxtags.length; i++) {
                    if (allcheckboxtags[i].checked) {
                        allcheckboxtags[i].checked = false;
                    }
                }
            } else alert("Не выбраны чекбоксы, выберите, пожалуйста, 1 или несколько и повторите попытку")
        }

        document.getElementById('linktojirasend').onclick = function () {
            let getval = document.getElementById('linktojiracoment').value;
            if (getval != '') {
                sendComment(getval);
                fetch("https://skyeng.autofaq.ai/api/conversation/" + document.URL.split('/')[5] + "/payload", {
                    "headers": {
                        "content-type": "application/json",
                    },
                    "body": "{\"conversationId\":\"${splitter[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"" + getval + "\"}]}",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                })
                document.getElementById('linktojiracoment').value = "";
            }
        }

        document.getElementById('vimcall').onclick = function () {
            document.getElementById('svyazissues').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('svyazissues').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('enterlesson').onclick = function () {
            document.getElementById('vhodurok').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('vhodurok').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('lessonfunc').onclick = function () {
            document.getElementById('funcurok').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('funcurok').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('perscab').onclick = function () {
            document.getElementById('cabusr').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('cabusr').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('userhomework').onclick = function () {
            document.getElementById('HWvim').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('HWvim').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('payments').onclick = function () {
            document.getElementById('paymn').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('paymn').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('skyengapp').onclick = function () {
            document.getElementById('skyengpril').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('skyengpril').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('teachersapp').onclick = function () {
            document.getElementById('teacherpril').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('teacherpril').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('parentsapp').onclick = function () {
            document.getElementById('skysmartrodpril').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('skysmartrodpril').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('feedbacksuggest').onclick = function () {
            document.getElementById('feedbackpog').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('feedbackpog').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('dblook').onclick = function () {
            document.getElementById('poiskbd').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('poiskbd').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }

        document.getElementById('innerissue').onclick = function () {
            document.getElementById('vnutrzapr').style.display = 'flex'
            document.getElementById('themes_body').style.display = 'none'
            document.getElementById('tags_body').style.display = 'none'
            document.getElementById('backtomenu').style.display = ''

            document.getElementById('backtomenu').onclick = function () {
                document.getElementById('vnutrzapr').style.display = 'none'
                document.getElementById('themes_body').style.display = 'flex'
                document.getElementById('tags_body').style.display = 'flex'
                document.getElementById('backtomenu').style.display = 'none'
            }
        }
    }