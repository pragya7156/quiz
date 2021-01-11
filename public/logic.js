var cat = document.getElementById('category');
var c = cat.options[cat.selectedIndex].value;
var lev = document.getElementById('level');
var l = lev.options[lev.selectedIndex].value;
fetch(`https://opentdb.com/api.php?amount=10&category=${c}&difficulty=${l}&type=multiple`)
    .then((response) => response.json())
    .then((value) => {
        // var ans = [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)];
        var globalVariable = {
            ans = [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)]
        };
        var que = document.getElementsByClassName('head');
        var opt = document.getElementsByClassName('option');

        for (let i = 0; i < que.length; i++) {
            let k = 0;
            que[i].innerHTML = value.results[i].question;
            for (let j = i * 4; j < (i * 4) + 4; j++) {
                if (j - (i * 4) + 1 !== ans[i]) {
                    opt[j].innerHTML = value.results[i].incorrect_answers[k];
                    k++;
                }  
                else {
                    opt[j].innerHTML = value.results[i].correct_answer;
                }
            }
        }
        var s = "";
        for (let i = 0; i < que.length; i++) {
            s += "<li>" + value.results[i].correct_answer + "</li>";
        }
        let a = document.getElementById('ans');
        a.addEventListener('click', function(){
            let prb = document.getElementById('hide_ans');
            let b = document.getElementById('hide_ques');
            b.style.cssText = 'display: block;';
            prb.innerHTML = s;
        })
        
        
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


