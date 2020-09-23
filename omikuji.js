var username;
var userresult;

username = prompt("お名前を教えて下さい。");

if (username == "") {
    username = "名無し"
}

document.getElementById("name").innerHTML = username;

var rand = Math.floor( Math.random() * 5 ) ;

if (rand == 0) {
    userresult = "大吉";
    x = "今日は最高の運勢！何かいいことが起きるかも！？"
    // document.getElementById("body").style.backgroundColor = "pink";
    document.body.style.backgroundColor = "pink";
}
if (rand == 1) {
    userresult = "中吉";
    x = "ラッキー！今日は色んなことに挑戦してみよう！" 
    // document.getElementById("body").style.backgroundColor = "orange";
    document.body.style.backgroundColor = "orange";
}
if (rand == 2) {
    userresult = "小吉";
    x = "なかなかいい感じ！"
    // document.getElementById("body").style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "yellow";
}
if (rand == 3) {
    userresult = "吉";
    x = "今日もそこそこうまくいくかな？"
    // document.getElementById("body").style.backgroundColor = "light blue";
    document.body.style.backgroundColor = "blue";
    // document.getElementById("name").style.color = "yellow";
    // document.getElementById("result").style.color = "white";

}
if (rand == 4) {
    userresult = "凶";
    x = "やば...。でもむしろ強運かも？"
    document.body.style.backgroundColor = "gray";
    // document.getElementById("name").style.color = "yellow";
    // document.getElementById("result").style.color = "white";

}

document.getElementById("message").style.fontSize = "15px";
document.getElementById("message").innerHTML = x;
document.getElementById("result").innerHTML = userresult;
