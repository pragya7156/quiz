var count = 0;
var c = 0;
function answer() {
    var ans = [1, 2, 1, 3, 4, 2, 3, 4, 1, 1];
    let ele = document.getElementsByTagName('input');
    let q = document.getElementsByClassName('head');
    for (let i = 0; i < ele.length; i++)
        if (ele[i].checked === true)
            c++;
            console.log(c);
    if (c !== q.length) {
        alert("Please answer all the questions!!");
    }
    else {
        if (ele[0].checked == true)
            console.log('hello');
        for (let i = 0; i < q.length; i++) {
            for (let j = i * 4; j < (i * 4) + 4; j++) {
                if (j - (i * 4) + 1 === ans[i] && ele[j].checked === true) {
                    count++;
                }
            }
        }
        alert(`Your total score : ${count}`);
    }
}

