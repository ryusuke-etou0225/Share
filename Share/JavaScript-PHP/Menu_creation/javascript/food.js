'use strict';

// ↓画面表示用の関数
function Menu_display (food_week){
    // ↓表示画像の準備のコード
    var last = "<div id='farst' class='hoge'><img id='atari_0' src= " + food_week[sei][0]["url"] + ">";
    last += "<br>";
    last += "<label>"+food_week[sei][0]["name"] + '<input class="checkbox" type="checkbox" name="hyouka[]" value="' + food_week[sei][0]["name"] + '"></label>';
    last += "</div>";
    for(var i=1; i<food_week[sei].length; i++){
        if(i%2==0){
            last += "<div class='hoge'><img id='atari_"+ i +"' src= " + food_week[sei][i]["url"] + ">";
            last += "<br>";
            last += "<label>"+food_week[sei][i]["name"] + '<input class="checkbox" type="checkbox" name="hyouka[]" value="' + food_week[sei][i]["name"] + '"></label>';
            last += "</div>";
        }else{
            last += "<div class='hoge'><img id='atari_"+ i +"' src= " + food_week[sei][i]["url"] + ">";
            last += "<br>";
            last += "<label>"+food_week[sei][i]["name"] + '<input class="checkbox" type="checkbox" name="hyouka[]" value="' + food_week[sei][i]["name"] + '"></label>';
            last += "</div>";
        }
    }
    var Kcal = 0;
    var One_group = 0;
    var Two_group = 0;
    var Three_group = 0;
    var Four_group = 0;
    for(i=0; i<food_week[sei].length; i++){
        Kcal += food_week[sei][i]["kcal"];
        One_group += food_week[sei][i]["one_group"];
        Two_group += food_week[sei][i]["two_group"];
        Three_group += food_week[sei][i]["three_group"];
        Four_group += food_week[sei][i]["four_group"];
    }
    document.getElementById("name").innerHTML = last;
    // ↓innerHTMLで表示した画像に当たり判定を付ける処理
    set(food_week);
    document.getElementById("result").innerHTML = "<div id='border'>総カロリー："+Kcal+"Kcal　"+"総１郡点数："+Math.round(One_group*10)/10+"点　"+"総２郡点数："+Math.round(Two_group*10)/10+"点　"+"総３郡点数："+Math.round(Three_group*10)/10+"点　"+"総４郡点数："+Math.round(Four_group*10)/10+"点</div>";
}

// ↓当たり判定用の関数
function set (food_week){
    for(var i=0; i<food_week[sei].length; i++){
        // for文でaddeventlistenerをやると落とし穴にはまるから関数を挟む
        (function(i) {
            if(food_week[sei][i]["name"]=="ご飯(普通盛り)"){
                var url = "https://cookpad.com/search/ご飯";
            }else if(food_week[sei][i]["name"]=="スクランブルエッグ（玉子二個分）"){
                var url = "https://cookpad.com/search/スクランブルエッグ";
            }else if(food_week[sei][i]["name"]=="野菜ジュース（伊藤園 1日分の野菜）"){
                var url = "https://cookpad.com/search/野菜ジュース";
            }else if(food_week[sei][i]["name"]=="りんご（市販されている物を一つ）"){
                var url = "https://cookpad.com/search/りんご";
            }else if(food_week[sei][i]["name"]=="ヨーグルト（個食タイプを一つ）"){
                var url = "https://cookpad.com/search/ヨーグルト";
            }else if(food_week[sei][i]["name"]=="玉子焼き（卵一個の一人前）"){
                var url = "https://cookpad.com/search/玉子焼き";
            }else if(food_week[sei][i]["name"]=="ひじきの煮物（小鉢一杯）"){
                var url = "https://cookpad.com/search/ひじきの煮物";
            }else if(food_week[sei][i]["name"]=="ジャムトースト（イチゴジャム）"){
                var url = "https://cookpad.com/search/ジャムトースト";
            }else if(food_week[sei][i]["name"]=="バナナ（1本）"){
                var url = "https://cookpad.com/search/バナナ";
            }else{
                var url = "https://cookpad.com/search/"+food_week[sei][i]["name"];
            }
            document.getElementById("atari_"+i).addEventListener("click", function(){window.open(url, '_blank')},false);
        }(i))
    }
}

// 献立を削除する用の関数
function sakuzyo(){
    // 表示している献立の情報
    var Kcal = 0;
    var One_group = 0;
    var Two_group = 0;
    var Three_group = 0;
    var Four_group = 0;
    for(i=0; i<food_week[sei].length; i++){
        Kcal += food_week[sei][i]["kcal"];
        One_group += food_week[sei][i]["one_group"];
        Two_group += food_week[sei][i]["two_group"];
        Three_group += food_week[sei][i]["three_group"];
        Four_group += food_week[sei][i]["four_group"];
    }
    // 削除処理
    var result = window.confirm('献立から一品減らします\nよろしいですか？');
    if(result){
        var sigun = 0;
        var index = Infinity;
        var nasi = 0;
        for(var i=0; i<food_week[sei].length; i++){
            // 削除する料理の条件でif文
            if((Four_group-food_week[sei][i]["four_group"]>6)&&((One_group-food_week[sei][i]["one_group"])>=2.7)&&((Two_group-food_week[sei][i]["two_group"])>=2.7)&&((Three_group-food_week[sei][i]["three_group"])>=2.7)){
                sigun = food_week[sei][i]["four_group"];
                index = i;
            }
        }
        if(index == Infinity){
            nasi++;
        }
        if(nasi==0){
            console.log("削除する料理："+ food_week[sei][index]["name"]);
            console.log(food_week);
            alert(food_week[sei][index]["name"]+"を減らします");
            food_week[sei].splice(index,1);
            localStorage.setItem('kondate',JSON.stringify(food_week));
            window.location.reload();
        }else{
            alert("これ以上削除すると栄養が不足するため失敗しました");
        }
    }else{
        alert("変更しませんでした");
    }
}

// 仮献立削除確認用関数
function karisakuzyo(){
    // チェックボックスの値を取得する処理
    var array = [];
    var checks = document.getElementsByClassName('checkbox');
    for(var i=0; i<food_week[sei].length; i++){
        if(checks[i].checked === true){
            array.push(checks[i].value);
        }
    }
    console.log(array);
    // 表示している献立の情報
    var Kcal = 0;
    var One_group = 0;
    var Two_group = 0;
    var Three_group = 0;
    var Four_group = 0;
    for(i=0; i<food_week[sei].length; i++){
        Kcal += food_week[sei][i]["kcal"];
        One_group += food_week[sei][i]["one_group"];
        Two_group += food_week[sei][i]["two_group"];
        Three_group += food_week[sei][i]["three_group"];
        Four_group += food_week[sei][i]["four_group"];
    }
    // ここから削除したときの値作成
    for(i=0; i<food_week[sei].length; i++){
        for(var j=0; j<array.length; j++){
            if(food_week[sei][i]["name"] == array[j]){
                Kcal -= food_week[sei][i]["kcal"];
                One_group -= food_week[sei][i]["one_group"];
                Two_group -= food_week[sei][i]["two_group"];
                Three_group -= food_week[sei][i]["three_group"];
                Four_group -= food_week[sei][i]["four_group"];
            }
        }
    }
    console.log("総カロリー："+Kcal);
    console.log("総１郡点数："+One_group);
    console.log("総２郡点数："+Two_group);
    console.log("総３郡点数："+Three_group);
    console.log("総４郡点数："+Four_group);
    // food.phpに表示
    document.getElementById("advice").innerHTML = "";
    document.getElementById("result_2").innerHTML = "<div id='border'>　(仮)　総カロリー："+Kcal+"Kcal　"+"総１郡点数："+Math.round(One_group*10)/10+"点　"+"総２郡点数："+Math.round(Two_group*10)/10+"点　"+"総３郡点数："+Math.round(Three_group*10)/10+"点　"+"総４郡点数："+Math.round(Four_group*10)/10+"点</div>";
    if(One_group<2.5){
        document.getElementById("advice").innerHTML = "<p>1群の点数が低くなります。1郡は卵、牛乳やチーズなどの乳製品で摂取できます。牛乳やヨーグルトなどを追加で食べましょう</p>";
    }
    if(Two_group<2.5){
        document.getElementById("advice").innerHTML += "<p>2群の点数が低くなります。2群は肉、魚、豆などで摂取できます。ソーセージや納豆など食べやすいものを追加で食べましょう</p>";
    }
    if(Three_group<2.5){
        document.getElementById("advice").innerHTML += "<p>3群の点数が低くなります。3群は野菜や果物、イモ類、海藻やきのこ類で摂取できます<br>スーパーで売っている千切りキャベツや、ミカンなどを追加で食べましょう</p>";
    }
    if(Four_group<6){
        document.getElementById("advice").innerHTML += "<p>4群の点数が低くなります。4郡はご飯やパン、麺類など炭水化物、油脂で摂取できます。主食を一品増やしましょう</p>";
    }
}

// ↓ホーム画面に戻るための関数
function Return(){
    localStorage.removeItem('append_count');
    window.location = "http://localhost/Menu_creation/Central.php";
}

// localStorageから値を取得
var food_week = JSON.parse(localStorage.getItem('kondate'));
console.log(food_week);
var week_day = JSON.parse(localStorage.getItem('week_day'));
console.log(week_day);
var count = Number(localStorage.getItem('click_day'));
console.log(count);
var month = Number(localStorage.getItem('month'));
console.log("month："+month);
var ID_month = JSON.parse(localStorage.getItem('week_month'));
console.log("ID_month："+ID_month);

const day = new Date();
// seiはクリックした日付と配列の要素を合わせるための変数
var sei = -1;

window.onload = function (){
    document.getElementById("out1-1").textContent = month+"月"+count+"日の献立";
    for(var i=0; i<week_day.length; i++){
        if(week_day[i]==count&&month==ID_month[i]){
            sei = i;
        }
    }
    Menu_display(food_week);
}