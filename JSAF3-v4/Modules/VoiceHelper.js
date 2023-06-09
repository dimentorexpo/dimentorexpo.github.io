const recognition = new webkitSpeechRecognition();
recognition.lang = 'ru-RU';
const test_stud_spech = localStorage.getItem('test_stud');
const test_teach_spech = localStorage.getItem('test_teach');

// Listen for the result event to get the user's voice input
recognition.addEventListener('result', (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  console.log(command);

  // Check the command and execute the appropriate action
  switch (true) {
    case command.includes('crm'):
      openUrl('CRM', "https://crm2.skyeng.ru/persons/");
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('тт'):
      window.open("https://timetable.skyeng.ru/");
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('админка'):
      openUrl('админка', "https://id.skyeng.ru/admin/users/");
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('платёж'):
      window.open("https://accounting.skyeng.ru/userpayment/search/transaction");
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('трамва') || command.includes('трм'):
      openUrl('TRM', "https://trm.skyeng.ru/teacher/");
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('улоги') || command.includes('логиу') || command.includes('локиу') || command.includes('логи у') || command.includes('тшу'):
      openUrl('УТШ', "https://video-trouble-shooter.skyeng.ru/?userId=");
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('плоги') || command.includes('логи препод') || command.includes('препод логи') || command.includes('логи п') || command.includes('logipe') || command.includes('п логи') || command.includes('тшп'):
      openUrl('ПТШ', "https://video-trouble-shooter.skyeng.ru/?userId=");
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('ТУ') || command.includes('тест') || command.includes('ту'):
      openUrl('ТУ', "https://api-english.skyeng.ru/admin/tech-support-room/create");
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('id у') || command.includes('idу') || command.includes('айдиу') || command.includes('айди у'):
      copyToClipboard(test_stud_spech);
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('id п') || command.includes('idп') || command.includes('айдип') || command.includes('айди п') || command.includes('idp'):
      copyToClipboard(test_teach_spech)
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('логинер п') || command.includes('логинерп') || command.includes('логинп') || command.includes('логин п'):
      logginerfortests(test_teach_spech);
      document.getElementById('voicetext').textContent = command + ' ✔';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    case command.includes('логинер у') || command.includes('логинеру') || command.includes('логину') || command.includes('логин у'):
      document.getElementById('voicetext').textContent = command + ' ✔';
      logginerfortests(test_stud_spech);
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
      break;
    default:
      console.log("No matching command found");
      document.getElementById('voicetext').textContent = command + '❌';
      setTimeout(function () {
        document.getElementById('voicetext').textContent = ''
      }, 5000)
  }
});

let isRecording = false;


document.getElementById('pushToTalk').addEventListener('mousedown', () => {
  isRecording = true;
  recognition.start();
  document.getElementById('pushToTalk').classList.add('active');
});

document.getElementById('pushToTalk').addEventListener('mouseup', () => {
  if (isRecording) {
    isRecording = false;
    document.getElementById('pushToTalk').classList.remove('active');
    recognition.stop();
  }
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
        case 'ТУ':
          window.open(`${link}`);
          break;
      }
      break;
    }
  }
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === parseInt(localStorage.getItem('pushToTalkKeyCode'))) { // default keyCode for LeftShift is 16
    try {
      recognition.start();
    } catch (error) {
      console.log(error.message);
    }
    document.getElementById('pushToTalk').classList.add('active');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === parseInt(localStorage.getItem('pushToTalkKeyCode'))) {
    document.getElementById('pushToTalk').classList.remove('active');
    recognition.stop();
  }
});

