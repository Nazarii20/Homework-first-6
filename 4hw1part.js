let correct = 'Welcome';
let password;
let i = 5;
while (i > 0 && password != correct) {
    password = prompt('Enter a password');
    i--;
    switch(password==correct){
        case true: alert('Welcome!'); 
        break;
        case false: alert('Wrong password');
    }
    if (i == 0){
        alert('You have no more attempts')
    }
}
