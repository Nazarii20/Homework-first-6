let name = prompt('Введіть імя','');
if(name == null){
    alert('Вхід скасовано');
} else if (name == ''){
    alert('Це поле потрібно заповнити');
}else{
let password = prompt('Введіть пароль','');
let p = 'Логос';
if (password == p){
    alert('Ласкаво просимо');
} else if (password == ''){
 alert('Потрібно ввести пароль');
}
else if (password != p){
    alert('Пароль невірний');
}else if (password == null){
    alert('Вхід скасовано');
} else{
    alert('Я вас не знаю');
}
}
