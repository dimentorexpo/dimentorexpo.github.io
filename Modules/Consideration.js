let infoconsideration  = document.createElement('p');
infoconsideration.innerHTML = '<a style="color: black; width:40px; cursor: pointer;"> Info </a>';
infoconsideration.style.display = 'none';

if (document.URL == 'https://billing-marketing.skyeng.ru/accrual-operations/create') {
    document.getElementById('selectedOperation').addEventListener("change", checkforaddinform)

}

function checkforaddinform() {
    let TPcomp = document.getElementsByClassName('card-header')
    for (y = 0; y < TPcomp.length; y++) {
        if (TPcomp[y].innerText == 'Компенсация за технические проблемы') { addinformationform()}
    }
}

function addinformationform(){
    console.log('Вижу')
}