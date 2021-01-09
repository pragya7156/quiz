// const { json } = require("body-parser");

fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
.then((response)=> response.json())
.then((value)=> {
    var ans = [1,2,1,3,4,2,3,4,1,1];
    console.log(value.results[0]);
    var que = document.getElementsByClassName('head');
    var opt = document.getElementsByClassName('option');
    console.log(opt.length);
for(let i=0;i<que.length;i++) {
    let k=0;
    que[i].innerHTML = value.results[i].question;
    for(let j=i*4;j<(i*4)+4;j++) {
        if(j-(i*4)+1!==ans[i]) {
            opt[j].innerHTML = value.results[i].incorrect_answers[k];
            k++;
        }
        else {
            // console.log(value.results[i].correct_answer);
            opt[j].innerHTML = value.results[i].correct_answer;
        }
    }
    // console.log(k);
}                                    
});

// var xhr = new XMLHttpRequest();
// xhr.open('GET','https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple',true);
// xhr.onload = ()=>{
//     if(xhr.status===200) {
//         var obj = JSON.parse(xhr.responseText);
//         console.log(obj);
//     }                                                                     
//     else
//     console.log('file not found');
// }
// xhr.send();


