const nameSurname = document.getElementById('nameSurname');
const nameCard = document.getElementById('nameCard');
nameSurname.addEventListener('input', () => {
    nameSurname.value = nameSurname.value.replace(/[^a-zа-я\s]/gi, '');
    nameCard.innerHTML = nameSurname.value;
});

const cardNumber = document.getElementById('cardNumber');
const cardNum = document.getElementById('cardNum');
let flagNum1 = false;
let flagNum2 = false;
let flagNum3 = false;
cardNum.addEventListener('input', () => {
    cardNum.value = cardNum.value.replace(/[^0-9\s]/g, '');
    if(cardNum.value.length == 4 && !flagNum1){
        cardNum.value += ' ';
        flagNum1 = true;
    }else if(cardNum.value.length == 9 && !flagNum2){
        cardNum.value += ' ';
        flagNum2 = true;
    }else if(cardNum.value.length == 14 && !flagNum3){
        cardNum.value += ' ';
        flagNum3 = true;
    }
    else{
        flagNum1 = false;
        flagNum2 = false;
        flagNum3 = false;
    }
    cardNumber.innerHTML = cardNum.value;
});

const data = document.getElementById('data');
const cardData = document.getElementById('cardData');
let flagData = false;
cardData.addEventListener('input', () => {
    cardData.value = cardData.value.replace(/[^0-9/]/g, '');
    if(cardData.value.length == 2 && !flagData){
        cardData.value += '/';
        flagData = true;
    }else{
        flagData = false;
    }
    data.innerHTML = cardData.value;
});


const cardCVV = document.getElementById('cardCVV');
const cVV = document.getElementById('cVV');
cardCVV.addEventListener('input', () => {
    cardCVV.value = cardCVV.value.replace(/[^0-9/]/g, '');
    cVV.innerHTML = cardCVV.value;
});

const myCard = document.getElementById('myCardFront');
const sberCard = document.getElementById('sberCard');

const mycardBack = document.getElementById('mycardBack');
cardCVV.addEventListener('mouseover', () => {
    mycardBack.style.top = '290px';
});
cardCVV.addEventListener('mouseout', () => {
    mycardBack.style.top = '8px';
});





//проверка при нажатии кнопки
const dataBase = document.getElementById('dataBase');
let id = 1;
let checkBtn = document.getElementById('checkBtn');
checkBtn.addEventListener('click', () => {
    let checkCardNum = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
    let checkCvv = /\d{3}/;
    let checkData = /\d{2}\/\d{2}/;
    if(!checkCardNum.test(cardNum.value) || !checkCvv.test(cardCVV.value) || !checkData.test(cardData.value) || nameSurname.value == ''){
        alert('Введите пожалуйста данные правильно')
        cardData.value = '';
        data.innerHTML = cardData.value;
        cardCVV.value = '';
        cVV.innerHTML = cardCVV.value;
        cardNum.value = '';
        cardNumber.innerHTML = cardNum.value;
        nameSurname.value = '';
        nameCard.innerHTML = nameSurname.value;
        
    }else{
        dataBase.style.display = 'block';
        let tr = document.createElement('tr');
        tr.id = id;
        
        let tdName = document.createElement('td');
        tdName.innerHTML = nameSurname.value;

        let tdNum = document.createElement('td');
        tdNum.innerHTML = cardNum.value;

        let tdData = document.createElement('td');
        tdData.innerHTML = cardData.value;
        
        let tdCvv = document.createElement('td');
        tdCvv.innerHTML = cardCVV.value;

        document.getElementById('dataBase').appendChild(tr);
        document.getElementById(id).appendChild(tdName)
        document.getElementById(id).appendChild(tdNum)
        document.getElementById(id).appendChild(tdData)
        document.getElementById(id).appendChild(tdCvv)
        
        nameSurname.value = '';
        cardNum.value = '';
        cardData.value = '';
        cardCVV.value = '';

        nameCard.innerHTML = nameSurname.value;
        cardNumber.innerHTML = cardNum.value;
        data.innerHTML = cardData.value;
        cVV.innerHTML = cardCVV.value;

        id += 1;
    };
})





