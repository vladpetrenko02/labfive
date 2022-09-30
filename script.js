let true_name, true_group, true_id, true_dob, true_mail;

function validationName(data){
    if(data.value.length < 3){
        data.style.border = "2px solid red";
        document.querySelector(".help-block").innerHTML = '<div class = "help-block">Введіть ім\'я правильно</div>';
        true_name = false;
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block").innerHTML = '';
        true_name = true;
    }
    showbtn();
}

function validationGroup(data){
    let val = /(\D{2})-(\d{2})/;
    true_group = val.test(data.value)
    if(true_group == false || data.value.length != 5){
        data.style.border = "2px solid red";
        document.querySelector(".help-block-2").innerHTML = '<div class = "help-block">Введіть групу правильно</div>';
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block-2").innerHTML = '';
    }
    showbtn();
}

function validationID(data){
    let val = /(\D{2}) #(\d{6})/;
    true_id = val.test(data.value)
    if(true_id == false || data.value.length != 10){
        data.style.border = "2px solid red";
        document.querySelector(".help-block-3").innerHTML = '<div class = "help-block">Введіть номер картки правильно</div>';
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block-3").innerHTML = '';
    }
    showbtn();
}

function validationDob(data){
    let val = /(\d{2})-(\d{2})-(\d{4})/;
    true_dob = val.test(data.value)
    if(true_dob == false || data.value.length != 10){
        data.style.border = "2px solid red";
        document.querySelector(".help-block-4").innerHTML = '<div class = "help-block">Введіть дату народження правильно</div>';
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block-4").innerHTML = '';
    }
    
    showbtn();
}

function validationMail(data){
    let val = /@/;
    true_mail = val.test(data.value)
    if(true_mail == false || data.value.length < 7){
        data.style.border = "2px solid red";
        document.querySelector(".help-block-5").innerHTML = '<div class = "help-block">Введіть електронну пошту правильно</div>';
        true_mail = false;
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block-5").innerHTML = '';
    }
    console.log(true_mail)
    showbtn();
}

function showbtn(){
    if(true_name == true && true_group == true && true_id == true && true_dob == true && true_mail == true){
        document.querySelector(".sbmt-btn").innerHTML = '<button onclick="showinfo()" type="button">Підтвердити форму</button><br>';
    }
    else{
        document.querySelector(".sbmt-btn").innerHTML = ' ';
    }
}

function showinfo(){
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>Ім\'я: </b>' + document.getElementById('name').value;
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>Група: </b>' + document.getElementById('group').value;
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>ID-card: </b>' + document.getElementById('id').value;
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>Дата народження: </b>' + document.getElementById('dob').value;
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>Електронна пошта: </b>' + document.getElementById('mail').value;
}

function chRandomColor(data){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    data.style.backgroundColor = "#" + randomColor;
}

function chDefault(data){
    data.style.backgroundColor = "white"
    document.getElementById('2').style.backgroundColor = 'white'
    document.getElementById('4').style.backgroundColor = 'white'
    document.getElementById('6').style.backgroundColor = 'white'
    document.getElementById('10').style.backgroundColor = 'white'
    document.getElementById('12').style.backgroundColor = 'white'
    document.getElementById('14').style.backgroundColor = 'white'
    document.getElementById('16').style.backgroundColor = 'white'
    document.getElementById('18').style.backgroundColor = 'white'
    document.getElementById('20').style.backgroundColor = 'white'
    document.getElementById('22').style.backgroundColor = 'white'
    document.getElementById('24').style.backgroundColor = 'white'
    document.getElementById('26').style.backgroundColor = 'white'
    document.getElementById('28').style.backgroundColor = 'white'
    document.getElementById('30').style.backgroundColor = 'white'
    document.getElementById('32').style.backgroundColor = 'white'
    document.getElementById('34').style.backgroundColor = 'white'
    document.getElementById('36').style.backgroundColor = 'white'
}

function dbClick(){
    document.getElementById('2').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('4').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('6').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('8').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('10').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('12').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('14').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('16').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('18').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('20').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('22').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('24').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('26').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('28').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('30').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('32').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('34').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('36').style.backgroundColor = document.getElementById('clr').value
}