const recognition = new webkitSpeechRecognition();
recognition.lang = 'ru-RU';

// Listen for the result event to get the user's voice input
recognition.addEventListener('result', (event) => {
  const command = event.results[0][0].transcript;
  console.log(command);

  // Check the command and execute the appropriate action
  switch (true) {
    case command.includes('CRM'):
      openUrl('CRM', "https://crm2.skyeng.ru/persons/");
      break;
    case command.includes('ТТ'):
      window.open("https://timetable.skyeng.ru/");
      break;
    case command.includes('админка'):
      openUrl('админка', "https://id.skyeng.ru/admin/users/");
      break;
    case command.includes('платёж'):
      window.open("https://accounting.skyeng.ru/userpayment/search/transaction");
      break;
    case command.includes('трамва') || command.includes('трм'):
      openUrl('TRM', "https://trm.skyeng.ru/teacher/");
      break;
	case command.includes('улоги') || command.includes('логиу') || command.includes('локиу') || command.includes('логи у'):
      openUrl('УТШ', "https://video-trouble-shooter.skyeng.ru/?userId=");
      break;
	case command.includes('плоги') || command.includes('логи препод') || command.includes('препод логии') || command.includes('логи п') || command.includes('logipe') || command.includes('п логи'):
      openUrl('ПТШ', "https://video-trouble-shooter.skyeng.ru/?userId=");
      break;
    default:
      console.log("No matching command found");
  }
});

document.getElementById('pushToTalk').addEventListener('click', () => {
  recognition.start();
  document.getElementById('pushToTalk').classList.add('active');
  setTimeout(() => {
    document.getElementById('pushToTalk').classList.remove('active');
    recognition.stop();
  }, 5000);
});

function openUrl(flagName, link) {
  let arg;
  const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
  if (!userDetailsList) return window.open(link);

  for (let i = 0; userDetailsList.childNodes[i]; i++) {
    if (userDetailsList.childNodes[i].firstChild.textContent === "id") {
      arg = userDetailsList.childNodes[i].childNodes[1].textContent.split(' ')[0];
      switch (flagName) {
        case 'админка':
          window.open(`${link}${arg}/update-contacts`);
          break;
        case 'CRM':
          window.open(`${link}${arg}`);
          break;
        case 'TRM':
          for (i = 0; userDetailsList.childNodes[i]; i++) {
            if (userDetailsList.childNodes[i].childNodes[1].textContent === "teacher") {
              window.open(`${link}${arg}`);
              break;
            }
          }
          break;
		case 'УТШ':
		   for (i = 0; userDetailsList.childNodes[i]; i++) {
            if (userDetailsList.childNodes[i].childNodes[1].textContent === "student") {
              window.open(`${link}${arg}&order=desc`);
              break;
            }
          }
		case 'ПТШ':
		   for (i = 0; userDetailsList.childNodes[i]; i++) {
            if (userDetailsList.childNodes[i].childNodes[1].textContent === "teacher") {
              window.open(`${link}${arg}&order=desc`);
              break;
            }
          }
      }
      break;
    }
  }
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 16) { // keyCode for LeftShift is 16
    try {
      recognition.start();
    } catch (error) {
      console.log(error.message);
    }
    document.getElementById('pushToTalk').classList.add('active');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 16) {
    document.getElementById('pushToTalk').classList.remove('active');
    recognition.stop();
  }
});

