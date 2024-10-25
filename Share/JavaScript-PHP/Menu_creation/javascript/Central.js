'use strict';

// ↓献立作成関数
function Seven (){
    document.getElementById("out1-1").textContent = "　";
    var incriment = 0;
    var day_count = localStorage.getItem('day_count');
    var hata = 0;
    Open();
    var check = Number(localStorage.getItem('open'));
    if(check>1){
        var food_week = JSON.parse(localStorage.getItem('kondate'));
        var week_day = JSON.parse(localStorage.getItem('week_day'));
        var week_month = JSON.parse(localStorage.getItem('week_month'));
        var flag = Number(localStorage.getItem('flag'));
    }else{
        var food_week = [];
        var week_day = [];
        var week_month = [];
        var flag = 0;
    }
    var random2 = Math.floor(Math.random()*6)+1; // start関数の中で扱う乱数
    console.log(random2)
    for(var i=0; i<7; i++){
        var result = week_month.indexOf(today.getMonth()+7);
        if(result>0){
            week_day.splice(result,week_day.length);
            break;
        }
        incriment++;
        start(food_week,incriment,random2); // 献立作成の関数を動かす
        if(check!=1){ // 献立作成が一回目ではないのなら分岐
            for(var j=0;j<week_day.length; j++){
                var len = week_day[j];
            }
            if((len+1)>day_count){ // このコードは表示している月の日付より上の数字を配列に追加しなくなる
                week_day.push(1);
                flag++;
                localStorage.setItem('flag',flag);
            }else{
                week_day.push(len+1);
            }
        }else{ // 献立作成が一回目ならこの分岐
            if((today.getDate()+i)>day_count){ // ここに二回分岐してしまう
                week_day.push(1+hata);
                flag++;
                hata++;
                if(hata>1){
                    flag--;
                }
                localStorage.setItem('flag',flag);
            }else{
                week_day.push(today.getDate()+i);
            }
        }
        // ↓月の配列
        week_month.push(today.getMonth()+1+flag);
    }
    // ↓作成した献立をセット
    localStorage.setItem('kondate',JSON.stringify(food_week));
    localStorage.setItem('week_day',JSON.stringify(week_day));
    localStorage.setItem('week_month',JSON.stringify(week_month));
    window.location.reload();
}

function Open (){
    // ↓サイトを開いた回数を記録しセット
    var count = Number(localStorage.getItem('open'));
    count++;
    localStorage.setItem('open',count);
}

// ↓献立を作成する関数
function start (food_week,incriment,random2){
    // console.log("=============================================");
    // ↓使う変数の指定
    var food = [];
    var count = 0;
// ===================================================================
    // ↓食べたいものの指定があった場合の処理
    if(incriment==7){ // 指定した献立があったら七日目に反映させるためのif文
        var text = document.getElementById("out1-1").value;
        var form = document.getElementById("out1-1");
        var array = [];
        var index = 0;
        if(text!=""){
            // console.log("指定された食べ物："+text);
            for(var i=0; i<kondate_hairetu.length; i++){
                for(var j=0; j<kondate_hairetu[i].length; j++){
                    if(kondate_hairetu[i][j]["name"] == text){
                        array.push(kondate_hairetu[i]);
                        index++;
                        break;
                    }
                }
            }
            var random4 = Math.floor(Math.random()*index);
            food = array[random4];
            count++;
        }else{
            // console.log("指定された食べ物はありません");
        }
        form.value = ""; // フォームを空にする
    }
// ===================================================================
    // ↓ここで好みを反映させることができる、データベースから値を受け取ったらここで反映させる
    var random3 = Math.floor(Math.random()*DB_Five);
    var array2 = [];
    var index2 = 0;
    if(param.length>0){
        if(incriment == random2){
            for(var i=0; i<kondate_hairetu.length; i++){
                for(var j=0; j<kondate_hairetu[i].length; j++){
                    if(kondate_hairetu[i][j]["name"] == param[random3]){
                        array2.push(kondate_hairetu[i]);
                        index2++;
                        break;
                    }
                }
            }
            var random5 = Math.floor(Math.random()*index2);
            food = array2[random5];
            count++;
        }
    }
    // console.log("=============================================");
// ==================================================================

    // ↓完成された献立を代入する処理
    if(count==0){
        var random = Math.floor(Math.random()*208);
        food = kondate_hairetu[random];
    }

    // 作成した献立の追加
    food_week.push(food);
}

// ↓ここからカレンダー作成の関数
// 前の月表示
function prev(){
    month_count = localStorage.getItem('showDate');
    month_count--;
    localStorage.setItem('showDate',month_count);
    window.location.reload();
}

// 次の月表示
function next(){
    month_count = localStorage.getItem('showDate');
    month_count++;
    localStorage.setItem('showDate',month_count);
    window.location.reload();
}

// カレンダー表示
function showProcess() {
    var month_count = localStorage.getItem('showDate');
    console.log("--------------------------------");
    console.log("Number(month_count)の値："+Number(month_count));

    showDate.setMonth(showDate.getMonth() + Number(month_count));
    var year = showDate.getFullYear();
    var month = showDate.getMonth();

    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);
    var day_count = 0; // 表示月の日付を取得するための変数

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if(year == today.getFullYear()
                    && month == (today.getMonth())
                    && count == today.getDate()){
                    calendar += "<td class='today' id='today' onclick=test("+ count +")>" + count + "</td>";
                    day_count++;
                } else {
                    calendar += "<td id = td_"+ count +" onclick=test("+ count +")>" + count + "</td>";
                    day_count++;
                }
            }
        }
        calendar += "</tr>";
    }
    console.log("表示している月："+(month+1));
    console.log("表示している日："+day_count)
    localStorage.setItem('month',(month+1));
    localStorage.setItem('day_count',day_count);
    return calendar;
}

// ↓作成した献立を日にちごとに確認するための関数
function test (count){
    // クリックした日付を登録
    localStorage.setItem('click_day',count);
    location.href="http://localhost/Menu_creation/php/food.php"
}

// ↓献立をリセットする関数
function Rset (){
    localStorage.setItem('open',0);
    localStorage.setItem('flag',0);
    localStorage.removeItem('kondate');
    localStorage.removeItem('week_day');
    localStorage.removeItem('week_month');
    localStorage.removeItem('showDate'); /////
    window.location.reload();
}

// ↓ページを再読み込みする関数
// function Relood (){
//     window.location.reload();
// }

const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();

// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

// DBにある評価の値を収納する変数
var DB_Five = 0;

// 初期表示
window.onload = function () {
    for(var i=0; i<Five.length; i++){
        DB_Five += 1;
        // console.log("DB_Fiveの値："+DB_Five);
    }
    showProcess();
    var week_day = JSON.parse(localStorage.getItem('week_day'));
    var month = Number(localStorage.getItem('month'));
    var week_month = JSON.parse(localStorage.getItem('week_month'));
    var result = week_month.indexOf(today.getMonth()+7);
    if(result>0){
        document.getElementById("out1-2").textContent = "五か月後以降の献立生成はできません";
    }
    // ↓ここからバックグランドカラーを付ける処理
    for(var i=0; i<week_day.length; i++){
        try {
            if(month == week_month[i]){
                var td = document.getElementById("td_"+week_day[i]);
                td.style.backgroundColor = "#FFFF33";
            }
        }catch(e){
            // var td = document.getElementById("today");
            // td.style.backgroundColor = "#FFFF33";
        }
    }
    background();
};
var food_week = [];
var week_day = [];
var len = 0;
var month_count = 0;

// 使用ローカルストレージキー
// month
// open
// click_day
// day_count
// kondate
// showDate
// week_day
// week_month
// flag

// ===================================================================

console.log("配列の要素の数："+array.length);
console.log("献立配列の要素の数："+kondate_hairetu.length);

// ===================================================================
// ↓種類ごとに配列に追加して分け、どれくらいの数があるかを確認するコード
// var array_syusyoku = [];
// var array_syusai = [];
// var array_hukusai = [];
// var array_sirumono = [];
// for(var i=0; i<array.length; i++){
//     if(array[i]["type"]=="syusyoku"){
//         array_syusyoku.push(array[i]);
//     }else if(array[i]["type"]=="syusai"){
//         array_syusai.push(array[i]);
//     }else if(array[i]["type"]=="hukusai"){
//         array_hukusai.push(array[i]);
//     }else if(array[i]["type"]=="sirumono"){
//         array_sirumono.push(array[i]);
//     }
// }
// // ↓確認用コード
// console.log("配列array_syusyokuの中身："+array_syusyoku.length);
// console.log("配列array_syusaiの中身："+array_syusai.length);
// console.log("配列array_hukusaiの中身："+array_hukusai.length);
// console.log("配列array_sirumonoの中身："+array_sirumono.length);
// ===================================================================