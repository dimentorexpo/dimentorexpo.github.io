
const newStudentId = document.getElementById('studentIdInput');
const newTeacherId = document.getElementById('teacherIdInput');
const generateLesson_forStudent = document.getElementById('generateLesson_forStudentWithTestTeacher'); 
const generateLesson_forTeacher = document.getElementById('generateLesson_forTeacherWithTestStudent');

let randomHash = GenerateHash(14);





function GenerateLesson_forStudent(){
    if(localStorage.getItem('testTeacherID') != null)
    {
        randomHash = GenerateHash(14);
        fetch(`https://api-english.skyeng.ru/admin/tech-support-room/create?uniqid=${randomHash}`, 
        {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://api-english.skyeng.ru/admin/tech-support-room/create",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `${randomHash}%5Btype%5D=test&${randomHash}%5BteacherId%5D=${localStorage.getItem('testTeacherID')}&${randomHash}%5BstudentIds%5D=${newStudentId.value}&btn_create_and_list=`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(
            // Notify employee that he's on go.
            setTimeout(() => {
                alert("Lesson created. \nProceed to the teachers' cabinet.");
            }, 360));;
    }
    else{
        setTimeout(() => {
            alert('One have to define theirs IDs first, or be prohibited.');
        }, 360);
    }
}
function GenerateLesson_forTeacher(){
    if(localStorage.getItem('testStudentID') != null)
    {
        randomHash = GenerateHash(14);
        fetch(`https://api-english.skyeng.ru/admin/tech-support-room/create?uniqid=${randomHash}`, 
        {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://api-english.skyeng.ru/admin/tech-support-room/create",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `${randomHash}%5Btype%5D=test&${randomHash}%5BteacherId%5D=${newTeacherId.value}&${randomHash}%5BstudentIds%5D=${localStorage.getItem('testStudentID')}&btn_create_and_list=`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(
            // Notify employee that he's on go.
            setTimeout(() => {
                alert("Lesson created. \nProceed to the teachers' cabinet.");
            }, 360));
    }
    else{
        setTimeout(() => {
            alert('One have to define theirs IDs first, or be prohibited.');
        }, 360);
    }
}

function GenerateHash(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}



function AddListeners()
{
    generateLesson_forStudent.addEventListener('click', function()
    {
        GenerateLesson_forStudent();
            
            // Animations
        generateLesson_forStudent.style.animation = "";
        setTimeout(() => {
            generateLesson_forStudent.style.animation = "buttonHappyAdaptive 0.333s forwards";
        }, 32);
    });
    generateLesson_forTeacher.addEventListener('click', function()
    {
        GenerateLesson_forTeacher();
            
            // Animations
            generateLesson_forTeacher.style.animation = "";
        setTimeout(() => {
            generateLesson_forTeacher.style.animation = "buttonHappyAdaptive 0.333s forwards";
        }, 32);
    });
}


// Executing
AddListeners();