var count = 0;
var c = 0;
function answer() {
    let ele = document.getElementsByTagName('input');
    var ans = globalVariable.ans;
    let q = document.getElementsByClassName('head');
    for (let i = 0; i < ele.length; i++)
        if (ele[i].checked === true)
            c++;
    if (c !== q.length) {
        alert("Please answer all the questions!!");
    }
    else {
        for (let i = 0; i < q.length; i++) {
            for (let j = i * 4; j < (i * 4) + 4; j++) {
                if (j - (i * 4) + 1 === ans[i] && ele[j].checked === true) {
                    count++;
                }
            }
        }
        let s = 0;
        let btn = document.getElementById('Result');
        btn.style.cssText = 'display: block;';
        let d = document.getElementById('res');
        let k = "";
        k += "<li>" + "Your total score : " + count + "</li>";
        k += "<li>" + "Your Accuracy : " + count * 10 + "%</li>";
        d.addEventListener('click', function () {
            let res = document.getElementById('hide_res');
            if (s === 0) {
                res.style.cssText = 'display: block;';
                res.innerHTML = k;
            }
        });

    }

}

