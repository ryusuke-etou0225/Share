'use strict';

function background(){
    var ID = JSON.parse(localStorage.getItem('week_day'));
    console.log(ID);
    var ID_month = JSON.parse(localStorage.getItem('week_month'));
    console.log(ID_month);
    var month = Number(localStorage.getItem('month'));
    console.log("month："+month);
    console.log(today.getDate())

    // カレンダーに背景を付けるコード
    var result = ID_month.indexOf(month);
    console.log("result："+result);
    // 現在の月の時に当日から終日までを背景付けるif文
    if(month == (today.getMonth()+1)){
        console.log("現在の月を表示");
        for(var i=0; i<ID.length; i++){
            if(ID_month[i]!=month){
                console.log("削除処理開始");
                ID.splice(i,ID.length);
                break;
            }
        }
    }else{ // 現在の月ではないときに背景を付けるif文
        console.log("現在の月以外の月を表示");
        if(result>0){
            ID.splice(0,result);
        }else{
            ID.splice(0,ID.length);
        }
    }
    console.log("ID："+ID);

    if(ID!=null){
        // ↓ここからjqで一個ずつホバーを登録
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#today').hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#D65E72');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[0]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[1]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[2]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[3]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[4]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[5]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[6]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[7]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[8]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[9]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[10]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[11]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[12]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[13]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[14]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[15]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[16]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[17]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[18]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[19]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[20]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[21]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[22]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[23]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[24]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[25]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[26]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[27]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[28]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[29]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[30]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
        // ↓ここからホバー処理
        $(function() {
            //マウスを乗せたら発動
            $('#td_'+ID[31]).hover(function() {
                //マウスを乗せたら色が変わる
                $(this).css('background', '#33FF66');
            //ここにはマウスを離したときの動作を記述
            }, function() {
                //色指定を空欄にすれば元の色に戻る
                $(this).css('background', '#FFFF33');
            });
        });
    }else{
        console.log("失敗")
    }
};