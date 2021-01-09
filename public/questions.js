var count = 0;
let user_input = [];
function answer() {
    let ele = document.getElementsByTagName('input');
    for(let i = 0;i<ele.length;i++)
    if(ele[i].checked === true)
    user_input.push(ele[i].value);
    let corr = document.querySelectorAll('.correct');
    if(user_input.length !== corr.length)
    alert('Please select any one option from each question!!');
    else {
        for(let i=0;i<corr.length;i++)
        if(user_input[i] === corr[i].value)
        count++;
        alert(`Your total score : ${count}`);
    }   
}

