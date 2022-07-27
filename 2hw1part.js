alert('You will need to answer for ten questions, use only yes or no for answer');
let first_question = prompt('"singer" sings songs?');
let a;
if ( first_question == 'yes'){
   a = 1;
}else if(first_question == 'no'){
    a = 0;
} 
else if ( first_question == ''){
    alert('Please, next time make your answer');

}else{
    prompt('Please answer only yes or no');
}
let b;
let second_question = prompt('"chef"  takes care of teeth');
if ( second_question == 'yes'){
    b = 0;
 }else if( second_question == 'no'){
     b = 1;
 }else if ( second_question == ''){
    alert('Please, next time make your answer');
} else{
     prompt('Please, answer only yes or no');
 }
 let c;
 let third_question = prompt('"postal worker"  fights fires and drives a fire engine');
 if ( third_question == 'yes'){
    c = 0;
 }else if( third_question == 'no'){
     c = 1;
 }else if ( third_question == ''){
    alert('Please, next time make your answer');
} else{
     prompt('Please answer only yes or no');
 }
 let d;
 let fourth_question = prompt('"dentist" takes care of teeth');
 if ( fourth_question == 'yes'){
    d = 1;
 }else if( fourth_question == 'no'){
     d = 0;
 } else if ( fourth_question == ''){
    alert('Please, next time make your answer');
}else{
     prompt('Please answer only yes or no');
 }
 let e;
 let fifth_question = prompt('"teacher" cooks food in a restaurant');
 if ( fifth_question == 'yes'){
    e = 0;
 }else if( fifth_question == 'no'){
     e = 1;
 } else if ( fifth_question == ''){
    alert('Please, next time make your answer');
}else{
     prompt('Please answer only yes or no');
 }
 let f;
 let sixth_question = prompt('"firefighter" fights fires and drives a fire engine ');
 if ( sixth_question == 'yes'){
    f = 1;
 }else if( sixth_question == 'no'){
     f = 0;
 } else if ( sixth_question == ''){
    alert('Please, next time make your answer');
}else{
     prompt('Please answer only yes or no');
 }
 let g;
 let seventh_question = prompt('"bus driver" drives a bus');
 if ( seventh_question == 'yes'){
    g = 1;
 }else if( seventh_question == 'no'){
     g = 0;
 } else if ( seventh_question == ''){
    alert('Please, next time make your answer');
}else{
     prompt('Please answer only yes or no');
 }
 let h;
 let eighth_question = prompt('"doctor" works in a post office and brings letters');
 if ( eighth_question == 'yes'){
    h = 0;
 }else if( eighth_question == 'no'){
     h = 1;
 } else if ( eighth_question == ''){
    alert('Please, next time make your answer');
}else{
     prompt('Please answer only yes or no');
 }
 let i;
 let ninth_question = prompt('"Police officer" works at the police station and fights crime');
 if ( ninth_question == 'yes'){
    i = 1;
 }else if( ninth_question == 'no'){
     i = 0;
 } else if ( ninth_question == ''){
    alert('Please, next time make your answer');
}else{
     prompt('Please answer only yes or no');
 }
 let j;
 let tenth_question = prompt('"waiter" studies at school');
 if ( tenth_question == 'yes'){
    j = 1;
 }else if( tenth_question == 'no'){
     j = 0;
 } else if ( tenth_question == ''){
    alert('Please, next time make your answer');
}else{
     prompt('Please answer only yes or no');
 }
 let s;
 s = a + b + c + d + e + f + g + h + i + j; 
 alert('Number of correct answers ' + s);