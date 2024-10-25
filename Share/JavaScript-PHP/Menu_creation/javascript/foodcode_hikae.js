    // ↓ユーザーフォームにプルダウンを付ける
    var option = "<option>";
    for(i=0; i<food.length; i++){
        if(i==0){
            option += food[i]["name"];
            option += "</option>";
        }else{
            option += "<option>";
            option += food[i]["name"];
            option += "</option>";
        }
    }
    document.getElementById("out1-1").innerHTML += option;

    '<input type="text" name="name'+ name_number +'">'


    function set (food){
        for(var i=0; i<food.length; i++){
            var url = "https://cookpad.com/search/"+food[i]["name"];
            console.log("img_"+i+"："+url)
            document.getElementById("atari_"+i).addEventListener("click", function(){window.open(url, '_blank')});
        }
    }

    var food_01 = [];
    var food_02 = [];
    var food_03 = [];
    var food_04 = [];
    var food_05 = [];
    var food_06 = [];
    var food_07 = [];
    var food_week = [food_01,food_02,food_03,food_04,food_05,food_06,food_07];



var gohan = {name:"ご飯(普通盛り)",type:"syusyoku",kcal:269,one_group:0,two_group:0,three_group:0,four_group:3.4,
url:"aaa/101088.jpg"};
var chaahan = {name:"チャーハン",type:"syusyoku",kcal:396,one_group:0.9,two_group:0.2,three_group:0.2,four_group:3.7};
// var tamagoyaki = {name:"玉子焼き",type:"hukusai",kcal:207,one_group:1.4,two_group:0.1,three_group:0.3,four_group:0.8};
// var shiriaruyoogurutokake = {name:"シリアルヨーグルト掛け",type:"syusyoku",kcal:281,one_group:0.8,two_group:0,three_group:1.4,four_group:1.3};
// var kokoa = {name:"ココア",type:"sirumono",kcal:157,one_group:1,two_group:0,three_group:0,four_group:1};
// var yasaijuusu = {name:"野菜ジュース",type:"sirumono",kcal:56,one_group:0,two_group:0,three_group:0.4,four_group:0.3};
// var kudamono = {name:"果物",type:"hukusai",kcal:81,one_group:0,two_group:0,three_group:1,four_group:0};

// var random = Math.floor(Math.random()*49)+0;

// ↓最初期の精度の悪い最適化のコード
// for(i=0; i<array.length; i++){
//     console.log("foodリストの中身："+food[0]["name"])
//     if(food[0]["name"]!=array[i]["name"]){
//         if(Kcal+array[i]["kcal"]<1750 && One_group+array[i]["one_group"]<3.2 && Two_group+array[i]["two_group"]<3.2 && Three_group+array[i]["three_group"]<3.2 && Four_group+array[i]["four_group"]<11.2){
//             food.push(array[i]);
//             Kcal = Kcal+array[i]["kcal"];
//             One_group = One_group+array[i]["one_group"];
//             Two_group = Two_group+array[i]["two_group"];
//             Three_group = Three_group+array[i]["three_group"];
//             Four_group = Four_group+array[i]["four_group"];
//         }
//     }
// }

$name_set = array($name1=NULL,$name2=NULL,$name3=NULL,$name4=NULL,$name5=NULL,$name6=NULL,$name7=NULL,$name8=NULL,$name9=NULL,$name10=NULL,$name11=NULL,$name12=NULL,$name13=NULL,$name14=NULL);
$value_set = array($value1=NULL,$value2=NULL,$value3=NULL,$value4=NULL,$value5=NULL,$value6=NULL,$value7=NULL,$value8=NULL,$value9=NULL,$value10=NULL,$value11=NULL,$value12=NULL,$value13=NULL,$value14=NULL);

$name_set = array($name1="",$name2="",$name3="",$name4="",$name5="",$name6="",$name7="",$name8="",$name9="",$name10="",$name11="",$name12="",$name13="",$name14="");
$value_set = array($value1="",$value2="",$value3="",$value4="",$value5="",$value6="",$value7="",$value8="",$value9="",$value10="",$value11="",$value12="",$value13="",$value14="");

// var pookusotee = {name:"ポークソテー",kcal:306,one_group:0,two_group:3.3,three_group:0.2,four_group:0.3};
// var buridaikon = {name:"ぶり大根",kcal:225,one_group:0,two_group:1.5,three_group:0.5,four_group:0.8};
// var sakananotomatoni = {name:"魚のトマト煮",kcal:417,one_group:0,two_group:3.7,three_group:0.4,four_group:1.1};
// var gyouza = {name:"餃子",kcal:288,one_group:0,two_group:1.1,three_group:0.2,four_group:2.3};
// var kareeraisu = {name:"カレーライス",kcal:869,one_group:0,two_group:1.6,three_group:1.2,four_group:7.9};
// var yasaichaahan = {name:"野菜チャーハン",kcal:396,one_group:0.9,two_group:0.2,three_group:0.2,four_group:3.7};
// var kabochanonyokki = {name:"かぼちゃのニョッキ",kcal:411,one_group:1.2,two_group:0.5,three_group:1.8,four_group:1.6};
// var omuraisu = {name:"オムライス",kcal:622,one_group:1.4,two_group:0.6,three_group:0.2,four_group:5.6};
// var guratan = {name:"グラタン",kcal:351,one_group:2.3,two_group:0.1,three_group:1.5,four_group:0.5};
// var tamagoyaki = {name:"玉子焼き",kcal:207,one_group:1.4,two_group:0.1,three_group:0.3,four_group:0.8};
// var shichuu = {name:"シチュー",kcal:272,one_group:0,two_group:2,three_group:0.6,four_group:0.8};
// var sanmanotsumireshiru = {name:"サンマのつみれ汁",kcal:384,one_group:0,two_group:3.9,three_group:0.5,four_group:0.4};
// var peperonchiino = {name:"ペペロンチーノ",kcal:428,one_group:0,two_group:0.5,three_group:0.3,four_group:4.6};
// var hijikinonimono = {name:"ひじきの煮物",kcal:103,one_group:0,two_group:0.4,three_group:0.2,four_group:0.7};
// var gohan = {name:"ご飯",kcal:103,one_group:0,two_group:0.4,three_group:0.2,four_group:0.7};
// var sukuranburueggu = {name:"スクランブルエッグ",kcal:180,one_group:1.8,two_group:0,three_group:0.1,four_group:0.4};
// var tamagosando = {name:"玉子サンド",kcal:181,one_group:0.5,two_group:0,three_group:0,four_group:1.6};
// var guriinsarada = {name:"グリーンサラダ",kcal:32,one_group:0,two_group:0,three_group:0.4,four_group:0};
// var shiriaruyoogurutokake = {name:"シリアルヨーグルト掛け",kcal:281,one_group:0.8,two_group:0,three_group:1.4,four_group:1.3};
// var jamutoosuto = {name:"ジャムトースト",kcal:213,one_group:0,two_group:0,three_group:0,four_group:2.1};
// var kokoa = {name:"ココア",kcal:157,one_group:1,two_group:0,three_group:0,four_group:1};
// var yasaijuusu = {name:"野菜ジュース",kcal:56,one_group:0,two_group:0,three_group:0.4,four_group:0.3};
// var kudamono = {name:"果物",kcal:81,one_group:0,two_group:0,three_group:1,four_group:0};
// var sushi = {name:"寿司",kcal:588,one_group:0.3,two_group:2.8,three_group:0,four_group:4.5};
// var karaage = {name:"唐揚げ",kcal:303,one_group:0,two_group:2,three_group:0,four_group:1.7};
// var miitosoosusupagetei = {name:"ミートソーススパゲティ",kcal:614,one_group:0,two_group:1.1,three_group:0.3,four_group:6.2};
// var karubonaara = {name:"カルボナーラ",kcal:779,one_group:3.1,two_group:1,three_group:0,four_group:5.6};
// var naporitan = {name:"ナポリタン",kcal:590,one_group:0.3,two_group:1,three_group:0.2,four_group:5.8};
// var chaahan = {name:"チャーハン",kcal:708,one_group:1.1,two_group:0.5,three_group:0.2,four_group:7.1};
// var maaboudoufu = {name:"麻婆豆腐",kcal:341,one_group:0,two_group:2.6,three_group:0.1,four_group:1.5};
// var raamen = {name:"ラーメン",kcal:470,one_group:0.3,two_group:0.3,three_group:0.2,four_group:4.8};
// var misoraamen = {name:"味噌ラーメン",kcal:580,one_group:0,two_group:0.3,three_group:0.1,four_group:6.9};
// var shiizaasarada = {name:"シーザーサラダ",kcal:234,one_group:1.3,two_group:0,three_group:0.2,four_group:1.4};
// var potetosarada = {name:"ポテトサラダ",kcal:113,one_group:0.2,two_group:0,three_group:0.5,four_group:0.6};
// var piza = {name:"ピザ",kcal:872,one_group:3,two_group:1.7,three_group:0.7,four_group:5.3};
// var matsutakegomeshi = {name:"松茸ご飯",kcal:232,one_group:0,two_group:0,three_group:0.1,four_group:2.8};
// var nattou = {name:"納豆",kcal:108,one_group:0,two_group:1.3,three_group:0,four_group:0};
// var onionsarada = {name:"オニオンサラダ",kcal:17,one_group:0,two_group:0,three_group:0.2,four_group:0};
// var kituneudon = {name:"きつめうどん",kcal:453,one_group:0,two_group:1.6,three_group:0,four_group:4};
// var tanukisoba = {name:"たぬきそば",kcal:427,one_group:0,two_group:0,three_group:0,four_group:5.1};
// var kaisendonburi = {name:"海鮮丼",kcal:790,one_group:0.3,two_group:3.8,three_group:0,four_group:5.6};
// var kuriimushichuu = {name:"クリームシチュー",kcal:269,one_group:1.1,two_group:0.9,three_group:0.4,four_group:0.8};
// var shijiminomisoshiru = {name:"しじみの味噌汁",kcal:35,one_group:0,two_group:0.1,three_group:0,four_group:0.4};
// var toufutowakamenomisoshiru = {name:"豆腐とわかめの味噌汁",kcal:56,one_group:0,two_group:0.2,three_group:0.1,four_group:0.4};
// var wakamenomisoshiru = {name:"わかめの味噌汁",kcal:34,one_group:0,two_group:0,three_group:0.1,four_group:0.4};
// var asarinomisoshiru = {name:"あさりの味噌汁",kcal:43,one_group:0,two_group:0.1,three_group:0,four_group:0.4};
// var daikonnomisoshiru = {name:"大根の味噌汁",kcal:38,one_group:0,two_group:0,three_group:0.1,four_group:0.4};
// var namekonomisoshiru = {name:"なめこの味噌汁",kcal:34,one_group:0,two_group:0,three_group:0,four_group:0.4};
// var tenpurasoba = {name:"天ぷらそば",kcal:495,one_group:0,two_group:0.4,three_group:0,four_group:5.5};
// var tsukimisoba = {name:"月見そば",kcal:471,one_group:1.1,two_group:0,three_group:0,four_group:4.6};
// var tukimiudon = {name:"月見うどん",kcal:413,one_group:1.1,two_group:0,three_group:0,four_group:3.9};
// var yakionigiri = {name:"焼きおにぎり",kcal:145,one_group:0,two_group:0,three_group:0,four_group:1};
// var katsukaree = {name:"カツカレー",kcal:1103,one_group:0,two_group:2.6,three_group:1.2,four_group:9.7};
// var unajuu = {name:"うな重",kcal:922,one_group:0,two_group:5.5,three_group:0,four_group:6};
// var katsudonburi = {name:"かつ丼",kcal:795,one_group:1.4,two_group:2.6,three_group:0,four_group:7.4};
// var gyuudon = {name:"牛丼",kcal:771,one_group:0,two_group:3.2,three_group:0.1,four_group:6.2};
// あんかけ焼きそば	ankakeyakisoba	745	0	1.7	0.2	7.4
// ちゃんぽん	chanpon	721	0	2.4	0.2	6.3
// ワンタンメン	wantanmen	687	0	1.1	0.1	7.3
// 親子丼	oyakodon	684	1.1	0.9	1.2	6.2
// 天丼	tendon	642	0.1	0.8	0.1	7.1
// ドリア	doria	591	2.7	0.8	0.1	3.6
// ドライカレー	doraikaree	587	0	0.7	0.7	6.5
// 冷やし中華	hiyashichuuka	577	0.5	0.3	0.1	5.3
// お好み焼き	okonomiyaki	545	0.4	1	0.4	4.5
// チャーシュー麺	chaashuumen	564	0	1.5	0	5.4
// チキンライス	chikinraisu	563	0.9	0.4	0.4	5.2
// タンメン	tanmen	556	0	1.4	0.2	5.2
// 釜めし	kamameshi	525	0.4	0.2	0	5.9
// エビピラフ	ebipirafu	520	0.4	0.6	0.1	5.2
// マカロニグラタン	makaroniguratan	488	1.9	0.8	0.1	2.2
// チーズバーガー	chiizubaagaa	474	0.8	1.9	0.2	2.9
// 焼きそば	yakisoba	469	0	0.9	0.2	4.6
// とろろそば	tororosoba	448	0	0	0.9	4.6
// ホットドッグ	hottodoggu	414	0	2.2	0	2.9
// とろろうどん	tororoudon	391	0	0	0.9	3.9
// たこ焼き	takoyaki	317	0.3	0.3	0.1	3.1
// サンドイッチ	sandoitchi	314	0.5	0.7	0.1	2.6
// ピザトースト	pizatoosuto	264	0.7	0.4	0.1	2.4
// ハヤシライス	hayashiraisu	1077	0	4.7	1	8.3
// ビビンバ	bibinba	593	0.5	1.4	1.4	4.1
// 塩焼きそば	shioyakikisoba	557	0	1.4	0.5	4.9
// もんじゃ焼き	monjayaki	510	0	2.5	0.4	3.3
// 塩ラーメン	shioraamen	471	0	0.3	0.1	5.4
// 天津飯	tenshinhan	471	1.4	0.2	0	4.1
// 照り焼きチキンバーガー	teriyakichikinbaagaa	468	0	3.1	0	2.7
// ハンバーグ	hanbaagu	422	0.1	1.9	0.2	2.9
// カツサンド	katsusando	421	0	2.8	0	2.4
// 卵かけご飯	tamagokakegomeshi	374	1.1	0	0	3.5
// カレーパン	kareepan	358	0.3	0.3	0.1	3.8
// コロッケパン	korokkepan	339	0	1.2	0	2.9
// フレンチトースト	furenchitoosuto	298	1	0	0	2.7
// ラザニア	razania	290	0.6	0.5	0.2	2.2
// 牛乳入りシリアル	gyuunyuuirishiriaru	286	1.6	0	0	1.9
// メロンパン	meronpan	276	0.2	0	0	3.2
// 焼きそばパン	yakisobapan	233	0	0.3	0.1	3.1
// 野菜炒め	yasaiitame	120	0	0	0.6	0.8
// ジャムパン	jamupan	230	0.1	0	0	2.7
// あんぱん	anpan	218	0.1	0.5	0	2.1
// クリームパン	kuriimupan	216	1.2	0	0	1.4
// ちらし寿司	chirashisushi	718	1.1	2.5	0	5.2
// 明太子クリームパスタ	mentaikokuriimupasuta	638	0.9	0.6	0	6.1
// ネギトロ丼	negitorodonburi	660	0.8	1.5	0.2	5.2
// マルゲリータ	marugeriita	564	2	0	0.3	4.7
// 和風明太子パスタ	wafuumentaikopasuta	517	0	0.6	0	5.7
// かき揚げそば	kakiagesoba	466	0	0.1	0.1	5.4
// 納豆巻き	nattoumakiki	217	0	0.6	0	2
// 鉄火巻き	tetsuhimaki	206	0	0.4	0.1	2
// かっぱ巻き	kappamaki	171	0	0	0.1	2
// 生姜焼き	shougayaki	374	0	3.2	0	1.4
// キャベツの千切り	kyabetsunochigiri	24	0	0	0.1	0
// フィッシュバーガー	fisshubaagaa	387	0.2	0.7	0.1	3.8
// 手巻き寿司	temakikisushi	789	0.4	1.7	0.4	7
// いくら丼	ikuradonburi	701	0	3.3	0.1	5.2
// ウニ丼	unidonburi	536	0	1	0.1	5.5


//var gyuudon = {name:"牛丼",kcal:771,one_group:0,two_group:3.2,three_group:0.1,four_group:6.2};
//var unajuu = {name:"うな重",kcal:922,one_group:0,two_group:5.5,three_group:0,four_group:6};
//var biifushichuu = {name:"ビーフシチュー",kcal:594,one_group:0.8,two_group:4.2,three_group:1.6,four_group:1.8};
//var kaisendonburi = {name:"海鮮丼",kcal:790,one_group:0.3,two_group:3.8,three_group:0,four_group:5.6};
//var karubonaara = {name:"カルボナーラ",kcal:779,one_group:3.1,two_group:1,three_group:0,four_group:5.6};
//var sanmanotsumireshiru = {name:"サンマのつみれ汁",kcal:384,one_group:0,two_group:3.9,three_group:0.5,four_group:0.4};
//var sakananotomatoni = {name:"魚のトマト煮",kcal:417,one_group:0,two_group:3.7,three_group:0.4,four_group:1.1};
//var pookusotee = {name:"ポークソテー",kcal:306,one_group:0,two_group:3.3,three_group:0.2,four_group:0.3};

// ↓一号
var array = [gyouza, kareeraisu,buridaikon,yasaichaahan,kabochanonyokki,omuraisu,guratan,tamagoyaki,shichuu,peperonchiino,hijikinonimono,gohan,sukuranburueggu,tamagosando,guriinsarada,shiriaruyoogurutokake,jamutoosuto,kokoa,yasaijuusu,kudamono,sushi,karaage,miitosoosusupagetei,naporitan, chaahan, maaboudoufu, shouyuraamen, misoraamen, shiizaasarada, potetosarada, piza, matsutakegomeshi, nattou, onionsarada, kituneudon, tanukisoba, kaisendonburi, kuriimushichuu, shijiminomisoshiru, toufutowakamenomisoshiru, wakamenomisoshiru, asarinomisoshiru, daikonnomisoshiru, namekonomisoshiru, tenpurasoba, tsukimisoba, tukimiudon, yakionigiri, katsukaree, katsudonburi, gyuudon, ankakeyakisoba, chanpon, wantanmen, oyakodon, tendon,doria,doraikaree,hiyashichuuka,okonomiyaki,chaashuumen,chikinraisu,tanmen,kamameshi,ebipirafu,makaroniguratan,chiizubaagaa,tororosoba,yakisoba,hottodoggu,takoyaki,sandoitchi,pizatoosuto,hayashiraisu,bibinba,monjayaki,shioraamen,tenshinhan,teriyakichikinbaagaa,hanbaagu,katsusando,tamagokakegomeshi,kareepan,korokkepan,furenchitoosuto,razania,gyuunyuuirishiriaru,meronpan,yakisobapan,yasaiitame,jamupan,anpan,kuriimupan,chirashisushi,mentaikokuriimupasuta,negitorodonburi,marugeriita,wafuumentaikopasuta,kakiagesoba,nattoumaki,tekkamaki,syougayaki,kyabetsunosengiri,temakisushi,ikuradonburi,unidonburi];
// ↓初代
var array = [gohan,tamagosando,gyouza,tamagoyaki,buridaikon,yasaichaahan,kabochanonyokki,omuraisu,guratan,shichuu,peperonchiino,hijikinonimono,sukuranburueggu,guriinsarada,shiriaruyoogurutokake,jamutoosuto,kokoa,yasaijuusu,kudamono,sushi,karaage,miitosoosusupagetei,naporitan,chaahan,maaboudoufu,shouyuraamen,misoraamen,shiizaasarada,potetosarada,piza,matsutakegomeshi,nattou,onionsarada,kituneudon,tanukisoba,kuriimushichuu,shijiminomisoshiru,toufutowakamenomisoshiru,wakamenomisoshiru,asarinomisoshiru,daikonnomisoshiru,namekonomisoshiru,tenpurasoba,tsukimisoba,tukimiudon,yakionigiri,katsukaree,katsudonburi,kareeraisu,ankakeyakisoba,chanpon,wantanmen,oyakodon,tendon,doria,doraikaree,hiyashichuuka,okonomiyaki,chaashuumen,chikinraisu,tanmen,kamameshi,ebipirafu,makaroniguratan,chiizubaagaa];


    // ↓表示画像の準備のコード
    var last = "<div class='hoge'><img id='atari_0' src= " + food[0]["url"] + ">";
    last += "<br>";
    last += food[0]["name"];
    last += "</div>";
    for(i=1; i<food.length; i++){
        if(i%2==0){
            last += "<div class='hoge'><img id='atari_"+ i +"' src= " + food[i]["url"] + ">";
            last += "<br>";
            last += food[i]["name"];
            last += "</div>";
        }else{
            last += "<div><img id='atari_"+ i +"' src= " + food[i]["url"] + ">";
            last += "<br>";
            last += food[i]["name"];
            last += "</div><br>";
        }
    }
    document.getElementById("name").innerHTML = last;
    localStorage.setItem('food_set', JSON.stringify(food));
    document.getElementById("result").innerHTML = "<br><div id='border'>総カロリー："+Kcal+"Kcal　"+"総１郡点数："+Math.round(One_group*10)/10+"点　"+"総２郡点数："+Math.round(Two_group*10)/10+"点　"+"総３郡点数："+Math.round(Three_group*10)/10+"点　"+"総４郡点数："+Math.round(Four_group*10)/10+"点</div>";

    // ↓ユーザーフォームにプルダウンを付ける
    var option = "<select name='name'>";
    for(i=0; i<food.length; i++){
        option += "<option>";
        option += food[i]["name"];
        option += "</option>";
    }
    option += "</select>";
    document.getElementById("out1-2").innerHTML += option;

    // ↓画像に当たり判定を付けるために関数を動かす
    set(food);


// ↓当たり判定用の関数
function set (food){
    for(var i=0; i<food.length; i++){
        // for文でaddeventlistenerをやると落とし穴にはまるから関数を挟む
        (function(i) {
            if(food[i]["name"]=="ご飯(普通盛り)"){
                var url = "https://cookpad.com/search/ご飯";
            }else if(food[i]["name"]=="スクランブルエッグ（玉子二個分）"){
                var url = "https://cookpad.com/search/スクランブルエッグ";
            }else if(food[i]["name"]=="野菜ジュース（伊藤園 1日分の野菜）"){
                var url = "https://cookpad.com/search/野菜ジュース";
            }else if(food[i]["name"]=="りんご（市販されている物を一つ）"){
                var url = "https://cookpad.com/search/りんご";
            }else if(food[i]["name"]=="ヨーグルト（個食タイプを一つ）"){
                var url = "https://cookpad.com/search/ヨーグルト";
            }else if(food[i]["name"]=="玉子焼き（卵一個の一人前）"){
                var url = "https://cookpad.com/search/玉子焼き";
            }else if(food[i]["name"]=="ひじきの煮物（小鉢一杯）"){
                var url = "https://cookpad.com/search/ひじきの煮物";
            }else if(food[i]["name"]=="ジャムトースト（イチゴジャム）"){
                var url = "https://cookpad.com/search/ジャムトースト";
            }else{
                var url = "https://cookpad.com/search/"+food[i]["name"];
            }
            document.getElementById("atari_"+i).addEventListener("click", function(){window.open(url, '_blank')},false);
        }(i))
    }
}

// ↓ユーザーが評価するためのフォームを作る関数
function append(){
    var name_number = localStorage.getItem('append_count');
    var food = JSON.parse(localStorage.getItem('food_set'));
    if(name_number<14){
        name_number++;
        var form = '<label for="name">料理名</label><select name="name'+ name_number +'">';
        for(var i=0; i<food.length; i++){
            form += "<option>";
            form += food[i]["name"];
            form += "</option>";
        }
        form += "</select>";
        var form_array = ['<select name="value'+ name_number +'">','<option>良い</option>','<option>普通</option>','<option>ダメ</option>','</select><br>'];
        for(i=0; i<form_array.length; i++){
            form += form_array[i];
        }
        document.getElementById("form_append").innerHTML += form;
        localStorage.setItem('append_count', name_number);
    }else{
        console.log("フォームを出すのは15個までなのでこれ以上は出さない");
    }
}

// ↓ホーム画面に戻るための関数
function Return(){
    localStorage.removeItem('append_count');
    localStorage.removeItem('food_set');
    window.location = "http://localhost/Menu_creation/Central.html";
}

// ===================================================================
// ↓扱う料理を定義している、変数の中に辞書型の料理情報を入れている
var buridaikon = {name:"ぶり大根",type:"hukusai",kcal:115,one_group:0,two_group:1,three_group:0.1,four_group:0.4,url:"../photo/1.jpg"};
var gyouza = {name:"餃子",type:"syusai",kcal:236,one_group:0,two_group:0.7,three_group:0.3,four_group:1.2,url:"../photo/2.jpg"};
var kareeraisu = {name:"カレーライス",type:"syusyoku",kcal:859,one_group:0,two_group:1.6,three_group:1,four_group:7.9,url:"../photo/3.jpg"};
var kabochanonyokki = {name:"かぼちゃのニョッキ",type:"hukusai",kcal:283,one_group:1.7,two_group:0,three_group:0.7,four_group:1.2,url:"../photo/5.jpg"};
var omuraisu = {name:"オムライス",type:"syusyoku",kcal:850,one_group:2.2,two_group:0.4,three_group:0.2,four_group:7.8, url: "../photo/6.jpg"};
var guratan = {name:"マカロニグラタン",type:"syusai",kcal:488,one_group:2,two_group:0.8,three_group:0.2,four_group:3.1, url: "../photo/7.jpg"};
var tamagoyaki = {name:"玉子焼き（卵一個の一人前）",type:"hukusai",kcal:145,one_group:1.1,two_group:0,three_group:0,four_group:0.7, url: "../photo/8.jpg"};
var shichuu = {name:"クリームシチュー",type:"sirumono",kcal:269,one_group:0.3,two_group:1,three_group:0.5,four_group:1.8, url: "../photo/9.jpg"};
var peperonchiino = {name:"ペペロンチーノ",type:"syusyoku",kcal:505,one_group:0,two_group:0,three_group:0.3,four_group:6, url: "../photo/10.jpg"};
var hijikinonimono = {name:"ひじきの煮物（小鉢一杯）",type:"hukusai",kcal:135,one_group:0,two_group:0,three_group:0.2,four_group:1.3, url: "../photo/11.jpg"};
var gohan = {name:"ご飯(普通盛り)",type:"syusyoku",kcal:269,one_group:0,two_group:0,three_group:0,four_group:3.4,
url:"../photo/12.jpg"};
var sukuranburueggu = {name:"スクランブルエッグ（玉子二個分）",type:"hukusai",kcal:292,one_group:2.5,two_group:0,three_group:0,four_group:1.1, url: "../photo/13.jpg"};
var tamagosando = {name:"玉子サンド",type:"syusyoku",kcal:181,one_group:0.6,two_group:0,three_group:0,four_group:1.7, url: "../photo/14.jpg"};
var guriinsarada = {name:"野菜サラダ",type:"hukusai",kcal:10,one_group:0,two_group:0,three_group:0.2,four_group:0, url: "../photo/15.jpg"};
var jamutoosuto = {name:"ジャムトースト（イチゴジャム）",type:"syusyoku",kcal:287,one_group:0,two_group:0,three_group:0,four_group:3.6, url: "../photo/17.jpg"};
// var kokoa = {name:"ココア",type:"sirumono",kcal:157,one_group:1,two_group:0,three_group:0,four_group:1};
var yasaijuusu = {name:"野菜ジュース（伊藤園 1日分の野菜）",type:"sirumono",kcal:74,one_group:0,two_group:0,three_group:0.9,four_group:0, url: "../photo/19.jpg"};
// var kudamono = {name:"果物",type:"hukusai",kcal:81,one_group:0,two_group:0,three_group:1,four_group:0};
var sushi = {name:"寿司",type:"syusyoku",kcal:588,one_group:0.3,two_group:2.8,three_group:0,four_group:4.5, url: "../photo/20.jpg"};
var karaage = {name:"唐揚げ",type:"syusai",kcal:303,one_group:0,two_group:2,three_group:0,four_group:1.8, url: "../photo/21.jpg"};
var miitosoosusupagetei = {name:"ミートソーススパゲティ",kcal:614,one_group:0,two_group:1.1,three_group:0.3,four_group:6.3, url: "../photo/22.jpg"};
var naporitan = {name:"ナポリタン",type:"syusyoku",kcal:590,one_group:0.4,two_group:1,three_group:0.2,four_group:5.8, url: "../photo/23.jpg"};
var chaahan = {name:"チャーハン",type:"syusyoku",kcal:708,one_group:1.1,two_group:0.5,three_group:0.2,four_group:7.1, url: "../photo/24.jpg"};
var maaboudoufu = {name:"麻婆豆腐",type:"syusai",kcal:341,one_group:0,two_group:2.6,three_group:0.1,four_group:1.6, url: "../photo/25.jpg"};
var shouyuraamen = {name:"醤油ラーメン",type:"syusyoku",kcal:470,one_group:0.3,two_group:0.3,three_group:0.3,four_group:5.5, url: "../photo/26.jpg"};
var misoraamen = {name:"味噌ラーメン",type:"syusyoku",kcal:580,one_group:0,two_group:0.3,three_group:0.2,four_group:6.9, url: "../photo/27.jpg"};
var shiizaasarada = {name:"シーザーサラダ",type:"hukusai",kcal:234,one_group:0.3,two_group:0,three_group:0.3,four_group:2.4, url: "../photo/28.jpg"};
var potetosarada = {name:"ポテトサラダ",type:"hukusai",kcal:113,one_group:0.3,two_group:0,three_group:0.5,four_group:0.6, url: "../photo/29.jpg"};
var piza = {name:"ピザ",type:"syusyoku",kcal:872,one_group:3.1,two_group:1.7,three_group:0.8,four_group:5.4, url: "../photo/30.jpg"};
var matsutakegomeshi = {name:"松茸ご飯",type:"syusyoku",kcal:232,one_group:0,two_group:0,three_group:0.1,four_group:2.8, url: "../photo/31.jpg"};
var nattou = {name:"納豆",type:"hukusai",kcal:108,one_group:0,two_group:1.3,three_group:0,four_group:0, url: "../photo/32.jpg"};
var onionsarada = {name:"オニオンサラダ",type:"hukusai",kcal:27,one_group:0,two_group:0,three_group:0.4,four_group:0, url: "../photo/33.jpg"};
var kituneudon = {name:"きつねうどん",type:"syusyoku",kcal:453,one_group:0,two_group:1.7,three_group:0,four_group:4.1, url: "../photo/34.jpg"};
var tanukisoba = {name:"たぬきそば",type:"syusyoku",kcal:427,one_group:0,two_group:0.1,three_group:0.1,four_group:5.2, url: "../photo/35.jpg"};
var kuriimushichuu = {name:"クリームシチュー",type:"sirumono",kcal:269,one_group:0.3,two_group:1.0,three_group:0.5,four_group:1.7, url: "../photo/36.jpg"};
var shijiminomisoshiru = { name: "しじみの味噌汁", type: "sirumono", kcal: 35, one_group: 0, two_group: 0.1, three_group: 0, four_group: 0.3, url: "../photo/37.jpg"};
var toufutowakamenomisoshiru = { name: "豆腐とわかめの味噌汁", type: "sirumono", kcal: 56, one_group: 0, two_group: 0.3, three_group: 0.1, four_group: 0.3, url: "../photo/38.jpg"};
var wakamenomisoshiru = { name: "わかめの味噌汁", type: "sirumono", kcal: 34, one_group: 0, two_group: 0.1, three_group: 0.1, four_group: 0.3, url: "../photo/39.jpg"};
var asarinomisoshiru = { name: "あさりの味噌汁", type: "sirumono", kcal: 43, one_group: 0, two_group: 0.1, three_group: 0, four_group: 0.3, url: "../photo/40.jpg"};
var daikonnomisoshiru = { name: "大根の味噌汁", kcal: 38, one_group: 0, two_group: 0.1, three_group: 0.1, four_group: 0.3, url: "../photo/41.jpg"};
var namekonomisoshiru = { name: "なめこの味噌汁", type: "sirumono", kcal: 34, one_group: 0, two_group: 0.1, three_group: 0, four_group: 0.3, url: "../photo/42.jpg"};
var tenpurasoba = { name: "天ぷらそば", type: "syusyoku", kcal: 495, one_group: 0.1, two_group: 0.5, three_group: 0, four_group: 5.6, url: "../photo/43.jpg"};
var tsukimisoba = { name: "月見そば", type: "syusyoku", kcal: 471, one_group: 1.1, two_group: 0, three_group: 0, four_group: 4.6, url: "../photo/44.jpg"};
var tukimiudon = { name: "月見うどん", type: "syusyoku", kcal: 416, one_group: 1.1, two_group: 0, three_group: 0, four_group: 4.0, url: "../photo/45.jpg"};
var yakionigiri = { name: "焼きおにぎり", type: "syusyoku", kcal: 145, one_group: 0, two_group: 0, three_group: 0, four_group: 1.8, url: "../photo/46.jpg"};
var katsukaree = { name: "カツカレー", type: "syusyoku", kcal: 1103, one_group: 0, two_group: 2.6, three_group: 1.2, four_group: 9.7, url: "../photo/47.jpg"};
var katsudonburi = { name: "かつ丼", type: "syusyoku", kcal: 922, one_group: 1.4, two_group: 2.6, three_group: 0.1, four_group: 7.4, url: "../photo/48.jpg"};
var ankakeyakisoba = { name: "あんかけ焼きそば", type: "syusyoku", kcal: 745, one_group: 0, two_group: 1.7, three_group: 0.3, four_group: 7.4, url: "../photo/49.jpg"};
var chanpon = { name: "ちゃんぽん", type: "syusyoku", kcal: 721, one_group: 0, two_group: 1.8, three_group: 0.8, four_group: 6.4, url: "../photo/50.jpg"};
var wantanmen = { name: "ワンタンメン", type: "syusyoku", kcal: 687, one_group: 0, two_group: 1.1, three_group: 0.2, four_group: 7.3, url: "../photo/51.jpg"};
var oyakodon = { name: "親子丼", type: "syusyoku", kcal: 684, one_group: 1.1, two_group: 0.9, three_group: 1.2, four_group: 6.2, url: "../photo/52.jpg"};
var tendon = { name: "天丼", type: "591", kcal: 642, one_group: 0.1, two_group: 0.8, three_group: 0.1, four_group: 7.1, url: "../photo/53.jpg"};
var doria = { name: "ドリア", type: "syusyoku", kcal: 591, one_group: 2.7, two_group: 0.8, three_group: 0.1, four_group: 7.1, url: "../photo/54.jpg"};
var doraikaree = { name: "ドライカレー", type: "syusyoku", kcal: 587, one_group: 0, two_group: 0.7, three_group: 0.7, four_group: 6.5, url: "../photo/55.jpg"};
var hiyashichuuka = { name: "冷やし中華", type: "syusyoku", kcal: 577, one_group: 0.5, two_group: 0.3, three_group: 0.1, four_group: 5.3, url: "../photo/56.jpg"};
var okonomiyaki = { name: "お好み焼き", type: "syusyoku", kcal: 545, one_group: 0.4, two_group: 1, three_group: 0.4, four_group: 4.5, url: "../photo/57.jpg"};
var chaashuumen = { name: "チャーシュー麺", type: "syusyoku", kcal: 564, one_group: 0, two_group: 1.5, three_group: 0, four_group: 5.4, url: "../photo/58.jpg"};
var chikinraisu = { name: "チキンライス", type: "syusyoku", kcal: 563, one_group: 0.9, two_group: 0.4, three_group: 0.4, four_group: 5.2, url: "../photo/59.jpg"};
var tanmen = { name: "タンメン", type: "syusyoku", kcal: 556, one_group: 0, two_group: 1.4, three_group: 0.2, four_group: 5.2, url: "../photo/60.jpg"};
var kamameshi = { name: "釜めし", type: "syusyoku", kcal: 525, one_group: 0.4, two_group: 0.2, three_group: 0, four_group: 5.9, url: "../photo/61.jpg"};
var ebipirafu = { name: "エビピラフ", type: "syusyoku", kcal: 520, one_group: 0.4, two_group: 0.6, three_group: 0.1, four_group: 5.2, url: "../photo/62.jpg"};
var makaroniguratan = { name: "マカロニグラタン", type: "syusai", kcal: 488, one_group: 1.9, two_group: 0.8, three_group: 0.1, four_group: 2.2, url: "../photo/63.jpg"};
var chiizubaagaa = { name: "チーズバーガー", type: "syusyoku", kcal: 474, one_group: 0.8, two_group: 2.0, three_group: 0.2, four_group: 2.9, url: "../photo/64.jpg"};
var tororosoba = { name: "とろろそば", type: "syusyoku", kcal: 448, one_group: 0, two_group: 0, three_group: 0.9, four_group: 4.6, url: "../photo/65.jpg"};
var yakisoba = { name: "焼きそば", type: "syusyoku", kcal: 469, one_group: 0, two_group: 1.0, three_group: 0.2, four_group: 4.6, url: "../photo/66.jpg"};
var hottodoggu = { name: "ホットドッグ", type: "syusyoku", kcal: 414, one_group: 0, two_group: 2.3, three_group: 0, four_group: 2.9, url: "../photo/67.jpg"};
var takoyaki = { name: "たこ焼き", type: "syusyoku", kcal: 317, one_group: 0.3, two_group: 0.2, three_group: 0.1, four_group: 3.1, url: "../photo/68.jpg"};
var sandoitchi = { name: "サンドイッチ", type: "syusyoku", kcal: 314, one_group: 0.5, two_group: 0.7, three_group: 0.1, four_group: 2.6, url: "../photo/69.jpg"};
var pizatoosuto = { name: "ピザトースト", type: "syusyoku", kcal: 264, one_group: 0.7, two_group: 0.4, three_group: 0.1, four_group: 2.3, url: "../photo/70.jpg"};
var hayashiraisu = { name: "ハヤシライス", type: "syusyoku", kcal: 1077, one_group: 0, two_group: 4.7, three_group: 1, four_group: 8.3, url: "../photo/71.jpg"};
var bibinba = { name: "ビビンバ", type: "syusyoku", kcal: 593, one_group: 0.4, two_group: 1.4, three_group: 1.4, four_group: 4.0, url: "../photo/72.jpg"};
var monjayaki = { name: "もんじゃ焼き", type: "syusyoku", kcal: 510, one_group: 0, two_group: 2.5, three_group: 0.4, four_group: 3.3, url: "../photo/73.jpg"};
var shioraamen = { name: "塩ラーメン", type: "syusyoku", kcal: 471, one_group: 0, two_group: 0.3, three_group: 0.1, four_group: 5.4, url: "../photo/74.jpg"};
var tenshinhan = { name: "天津飯", type: "syusyoku", kcal: 471, one_group: 1.4, two_group: 0.3, three_group: 0.1, four_group: 5.4, url: "../photo/75.jpg"};
var teriyakichikinbaagaa = { name: "照り焼きチキンバーガー", type: "syusyoku", kcal: 468, one_group: 0, two_group: 3.1, three_group: 0, four_group: 2.7, url: "../photo/76.jpg"};
var hanbaagu = { name: "ハンバーグ", type: "syusai", kcal: 422, one_group: 0.1, two_group: 2.0, three_group: 0.2, four_group: 2.9, url: "../photo/77.jpg"};
var katsusando = { name: "カツサンド", type: "syusyoku", kcal: 421, one_group: 0, two_group: 2.8, three_group: 0, four_group: 2.4, url: "../photo/78.jpg"};
var tamagokakegomeshi = { name: "卵かけご飯", type: "syusyoku", kcal: 374, one_group: 1.1, two_group: 0, three_group: 0, four_group: 3.5, url: "../photo/79.jpg"};
var kareepan = { name: "カレーパン", type: "syusyoku", kcal: 358, one_group: 0.3, two_group: 0.3, three_group: 0.1, four_group: 3.8, url: "../photo/80.jpg"};
var korokkepan = { name: "コロッケパン", type: "syusyoku", kcal: 339, one_group: 0, two_group: 1.2, three_group: 0, four_group: 2.8, url: "../photo/81.jpg"};
var furenchitoosuto = { name: "フレンチトースト", type: "syusyoku", kcal: 298, one_group: 1, two_group: 0, three_group: 0, four_group: 2.7, url: "../photo/82.jpg"};
var razania = { name: "ラザニア", type: "syusai", kcal: 290, one_group: 0.6, two_group: 0.5, three_group: 0.2, four_group: 2.2, url: "../photo/83.jpg"};
var gyuunyuuirishiriaru = { name: "牛乳入りシリアル", type: "syusyoku", kcal: 286, one_group: 1.6, two_group: 0, three_group: 0, four_group: 1.9, url: "../photo/84.jpg"};
var meronpan = { name: "メロンパン", type: "syusyoku", kcal: 276, one_group: 0.2, two_group: 0, three_group: 0, four_group: 3.2, url: "../photo/85.jpg"};
var yakisobapan = { name: "焼きそばパン", type: "syusyoku", kcal: 233, one_group: 0, two_group: 0.4, three_group: 0.1, four_group: 3.1, url: "../photo/86.jpg"};
var yasaiitame = { name: "野菜炒め", type: "syusai", kcal: 120, one_group: 0, two_group: 0, three_group: 0.6, four_group: 0.8, url: "../photo/87.jpg"};
var jamupan = { name: "ジャムパン", type: "syusyoku", kcal: 230, one_group: 0.1, two_group: 0, three_group: 0, four_group: 2.7, url: "../photo/88.jpg"};
var anpan = { name: "あんぱん", type: "syusyoku", kcal: 218, one_group: 0.1, two_group: 0.4, three_group: 0, four_group: 2.1, url: "../photo/89.jpg"};
var kuriimupan = { name: "クリームパン", type: "syusyoku", kcal: 216, one_group: 1.2, two_group: 0, three_group: 0, four_group: 1.4, url: "../photo/90.jpg"};
var chirashisushi = { name: "ちらし寿司", type: "syusyoku", kcal: 718, one_group: 1.2, two_group: 2.5, three_group: 0, four_group: 5.2, url: "../photo/91.jpg"};
var mentaikokuriimupasuta = { name: "明太子クリームパスタ", type: "syusyoku", kcal: 638, one_group: 0.9, two_group: 0.6, three_group: 0, four_group: 6.1, url: "../photo/92.jpg"};
var negitorodonburi = { name: "ネギトロ丼", type: "syusyoku", kcal: 660, one_group: 0.8, two_group: 1.5, three_group: 0.3, four_group: 5.2, url: "../photo/93.jpg"};
var marugeriita = { name: "マルゲリータ", type: "syusyoku", kcal: 564, one_group: 2, two_group: 0, three_group: 0.3, four_group: 4.7, url: "../photo/94.jpg"};
var wafuumentaikopasuta = { name: "和風明太子パスタ", type: "syusyoku", kcal: 517, one_group: 0, two_group: 0.6, three_group: 0, four_group: 5.7, url: "../photo/95.jpg"};
var kakiagesoba = { name: "かき揚げそば", type: "syusyoku", kcal: 466, one_group: 0, two_group: 0.1, three_group: 0.1, four_group: 5.4, url: "../photo/96.jpg"};
var nattoumaki = { name: "納豆巻き", type: "syusyoku", kcal: 217, one_group: 0, two_group: 0.6, three_group: 0, four_group: 2, url: "../photo/97.jpg"};
var tekkamaki = { name: "鉄火巻き", type: "syusyoku", kcal: 206, one_group: 0, two_group: 0.4, three_group: 0.1, four_group: 2, url: "../photo/98.jpg"};
var syougayaki = { name: "生姜焼き", type: "syusyoku", kcal: 374, one_group: 0, two_group: 3.1, three_group: 0, four_group: 1.4, url: "../photo/99.jpg"};
var kyabetsunosengiri = { name: "キャベツの千切り", type: "hukusai", kcal: 24, one_group: 0, two_group: 0, three_group: 0.1, four_group: 0, url: "../photo/100.jpg"};
var temakisushi = { name: "手巻き寿司", type: "syusyoku", kcal: 789, one_group: 0.4, two_group: 1.7, three_group: 0.4, four_group: 7, url: "../photo/101.jpg"};
var ikuradonburi = { name: "いくら丼", type: "syusyoku", kcal: 701, one_group: 0, two_group: 3.3, three_group: 0.2, four_group: 5.2, url: "../photo/102.jpg"};
var unidonburi = { name: "うに丼", type: "syusyoku", kcal: 536, one_group: 0, two_group: 1, three_group: 0.1, four_group: 5.5, url: "../photo/103.jpg"};
var yoguruto = {name:"ヨーグルト（個食タイプを一つ）",type:"hukusai",kcal:63,one_group:0.8,two_group:0,three_group:0,four_group:0, url: "../photo/104.jpg"};
var ringo = {name:"りんご（市販されている物を一つ）",type:"hukusai",kcal:138,one_group:0,two_group:0,three_group:1.7,four_group:0, url: "../photo/105.jpg"};

// ===================================================================
// ↓テンプレート
var hoge = {name:"",type:"",kcal:0,one_group:0,two_group:0,three_group:0,four_group:0};
// ===================================================================
// プログラム上で扱うために定義した料理をすべて配列に入れている
var array = [gohan,tamagosando, gyouza, kareeraisu, omuraisu, guratan, shichuu, peperonchiino, hijikinonimono, sukuranburueggu, guriinsarada, jamutoosuto, sushi, karaage, miitosoosusupagetei, naporitan, chaahan, maaboudoufu, shouyuraamen, misoraamen, shiizaasarada, potetosarada, piza, nattou, onionsarada, kituneudon, tanukisoba, kuriimushichuu, shijiminomisoshiru, toufutowakamenomisoshiru, wakamenomisoshiru, asarinomisoshiru, daikonnomisoshiru, namekonomisoshiru, tenpurasoba, tsukimisoba, tukimiudon, yakionigiri, katsukaree, katsudonburi, ankakeyakisoba, chanpon, oyakodon, tendon,doria,doraikaree,hiyashichuuka,okonomiyaki,chaashuumen,chikinraisu,tanmen,kamameshi,ebipirafu,makaroniguratan,chiizubaagaa,tororosoba,yakisoba,hottodoggu,takoyaki,sandoitchi,pizatoosuto,hayashiraisu,bibinba,monjayaki,shioraamen,tenshinhan,teriyakichikinbaagaa,hanbaagu,katsusando,tamagokakegomeshi,kareepan,korokkepan,furenchitoosuto,razania,gyuunyuuirishiriaru,meronpan,yakisobapan,yasaiitame,jamupan,anpan,kuriimupan,chirashisushi,mentaikokuriimupasuta,negitorodonburi,marugeriita,wafuumentaikopasuta,kakiagesoba,nattoumaki,tekkamaki,syougayaki,kyabetsunosengiri,temakisushi,ikuradonburi,unidonburi,yoguruto,kabochanonyokki,buridaikon, matsutakegomeshi,yasaijuusu,tamagoyaki,wantanmen,ringo];

console.log("配列の要素の数："+array.length);

// kudamono
// kokoa
// ===================================================================
// ↓種類ごとに配列に追加して分け、確認するコード
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
// console.log("配列array_syusyokuの中身："+JSON.stringify(array_syusyoku));
// console.log("配列array_syusaiの中身："+JSON.stringify(array_syusai));
// console.log("配列array_hukusaiの中身："+JSON.stringify(array_hukusai));
// console.log("配列array_sirumonoの中身："+JSON.stringify(array_sirumono));
// ===================================================================







'use strict';

console.log(param);
console.log(Five);

function start (){
    console.log("=============================================");
    // ↓使う変数の指定
    var food = [];
    var food_01 = [];
    var food_02 = [];
    var food_03 = [];
    var food_04 = [];
    var food_05 = [];
    var food_06 = [];
    var food_07 = [];
    var food_week = [food_01,food_02,food_03,food_04,food_05,food_06,food_07];
    var Max_kcal = 1680;
    var Kcal = 0;
    var One_group = 0;
    var Two_group = 0;
    var Three_group = 0;
    var Four_group = 0;
    var count = 1;
    var one_misosiru = 0;
    var one_sarada = 0;
    var Jump = 0;
    var cria_count = 0;
    var end2 = 0;
// ===================================================================
    // ↓食べたいものの指定があった場合の処理
    var text = document.getElementById("out1-1").value;
    if(text!=""){
        console.log("指定された食べ物："+text);
        for(var i=0; i<array.length; i++){
            if(array[i]["name"] == text){
                array[i]["look"] = "on";
                food_week[0].push(array[i]);
                console.log("指定された食べ物の、追加の成功メッセージ");
                Kcal = array[i]["kcal"];
                One_group = array[i]["one_group"];
                Two_group = array[i]["two_group"];
                Three_group = array[i]["three_group"];
                Four_group = array[i]["four_group"];
                break;
            }
        }
        if(food_week[0][0]["type"]=="syusai"){
            if(food_week[0][0]["name"]!="ハンバーグ"){
                array[0]["look"] = "on";
                food_week[0].push(array[0]);
                console.log("主菜が追加されたので"+array[0]["name"]+"を追加");
                Kcal += array[0]["kcal"];
                One_group += array[0]["one_group"];
                Two_group += array[0]["two_group"];
                Three_group += array[0]["three_group"];
                Four_group += array[0]["four_group"];
            }
        }
    }else{
        console.log("指定された食べ物はありません");
    }
// ===================================================================
    // ↓ここで好みを反映させることができる、データベースから値を受け取ったらここで最初から反映させる
    for(i=0; i<param.length; i++){
        if(Five[i]==3){
            for(var j=0; j<array.length; j++){
                if(array[j]["name"]==param[i]){
                    array[j]["look"] = "on";
                    food_week[0].push(array[j]);
                    console.log("追加した料理"+array[j]["name"])
                    if(food_week[0].length==1){
                        Kcal = array[j]["kcal"];
                        One_group = array[j]["one_group"];
                        Two_group = array[j]["two_group"];
                        Three_group = array[j]["three_group"];
                        Four_group = array[j]["four_group"];
                    }else{
                        Kcal += array[j]["kcal"];
                        One_group += array[j]["one_group"];
                        Two_group += array[j]["two_group"];
                        Three_group += array[j]["three_group"];
                        Four_group += array[j]["four_group"];
                    }
                }
            }
        }
        if(food_week[0].length==3){
            break;
        }
    }
    // ↓食べたいものの指定がなかった場合の処理
    if(food_week[0].length == 0){
        // ↓ご飯を追加している
        array[0]["look"] = "on";
        food_week[0].push(array[0]);
        console.log("追加された食べ物："+array[0]["name"]);
        Kcal = array[0]["kcal"];
        One_group = array[0]["one_group"];
        Two_group = array[0]["two_group"];
        Three_group = array[0]["three_group"];
        Four_group = array[0]["four_group"];
    }
// ==================================================================
    // ↓種類ごとに配列に追加して分け、確認するコード
    // var array_syusyoku = [];
    // var array_syusai = [];
    // var array_hukusai = [];
    // var array_sirumono = [];
    // for(i=0; i<array.length; i++){
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
    // console.log("配列array_syusyokuの中身："+JSON.stringify(array_syusyoku));
    // console.log("配列array_syusaiの中身："+JSON.stringify(array_syusai));
    // console.log("配列array_hukusaiの中身："+JSON.stringify(array_hukusai));
    // console.log("配列array_sirumonoの中身："+JSON.stringify(array_sirumono));
// ===================================================================
    // ↓最適化問題を解くためにひたすら繰り返しをさせる処理
    while(count<50){
        for(var repetition=0; repetition<array.length; repetition++){
            console.log("=============================================");
            console.log("while文の処理回数："+count);
            console.log("for文の処理回数："+repetition);
            // ===================================================================
            if(count%5==0&&repetition<1){
                // たくさん回してもクリアにならないからいったんfood配列の要素を全削除
                var look_count = 1;
                for(i=1; i<food_week[cria_count].length; i++){
                    if(food_week[cria_count][i]["look"]=="on"){
                        look_count++;
                    }
                }
                var youso = food_week[cria_count].length;
                food_week[cria_count].splice(look_count,youso)
                for(i=0; i<food_week[cria_count].length; i++){
                    if(i==0){
                        Kcal = food_week[cria_count][i]["kcal"];
                        One_group = food_week[cria_count][i]["one_group"];
                        Two_group = food_week[cria_count][i]["two_group"];
                        Three_group = food_week[cria_count][i]["three_group"];
                        Four_group = food_week[cria_count][i]["four_group"];
                    }else{
                        Kcal += food_week[cria_count][i]["kcal"];
                        One_group += food_week[cria_count][i]["one_group"];
                        Two_group += food_week[cria_count][i]["two_group"];
                        Three_group += food_week[cria_count][i]["three_group"];
                        Four_group += food_week[cria_count][i]["four_group"];
                    }
                }
                console.log("food配列の要素をすべて削除："+JSON.stringify(food_week[cria_count]));
                continue;
            }
            // ===================================================================
            // 栄養の突破に行ってしまい、削除のif文には入れない　大幅改善アリ　whileのカウントが一回回るたびに何か入れる
            var Lack_One_group = 0;
            var Lack_Two_group = 0;
            var Lack_Three_group = 0;
            var Lack_Four_group = 0;
            Lack_One_group = 3.3-One_group;
            Lack_Two_group = 3.3-Two_group;
            Lack_Three_group = 3.3-Three_group;
            Lack_Four_group = 11.3-Four_group;
            // ===================================================================
            // ↓適当に追加するのではなく、今足りていない栄養の値を調べてそれを指定し、追加していく
            var Push = 0;
            if(Lack_One_group>array[repetition]["one_group"]&&Lack_Two_group>array[repetition]["two_group"]&&Lack_Three_group>array[repetition]["three_group"]&&Lack_Four_group>array[repetition]["four_group"]){
                // 配列内に同じ食材があったら追加しない処理
                for(var same=0; same<food_week[cria_count].length; same++){
                    if(food_week[cria_count][same]["name"]==array[repetition]["name"]){
                        Push = 1;
                        console.log("同じ食材があるから回避する処理："+array[repetition]["name"]);
                        break;
                    }
                }
                if(Push==0){
                    // ↓二種類上の味噌汁とサラダを指定しない
                    var result1 = array[repetition]["name"].indexOf("味噌汁");
                    var result2 = array[repetition]["name"].indexOf("サラダ");
                    if(result1 !== -1){
                        one_misosiru++
                        if(one_misosiru>1){
                            console.log("二種類以上の味噌汁が指定されるので回避の処理："+array[repetition]["name"]);
                            continue;
                        }
                    }else if(result2 !== -1){
                        one_sarada++
                        if(one_sarada>1){
                            console.log("二種類以上のサラダが指定されるので回避の処理："+array[repetition]["name"]);
                            continue;
                        }
                    }
                    // ↓配列に食材を追加する処理
                    console.log("food配列に食材を追加していく処理："+array[repetition]["name"]);
                    food_week[cria_count].push(array[repetition]);
                    Kcal += array[repetition]["kcal"];
                    One_group += array[repetition]["one_group"];
                    Two_group += array[repetition]["two_group"];
                    Three_group += array[repetition]["three_group"];
                    Four_group += array[repetition]["four_group"];
                }
            }else{
                // ↓追加すると栄養が突破してしまうときの処理==============================
                console.log("栄養の数値を突破するから追加を回避処理："+array[repetition]["name"]);
                Jump++;
                // ===================================================================
            }
            // ↓最適化クリア時の処理================================================
            if(Max_kcal>Kcal&&One_group>=2.8&&Two_group>=2.8&&Three_group>=2.8&&Four_group>=10.8){
                console.log("最適化クリアの処理　1")
                var end = 0;
                end++;
                break;
            }
            // ===================================================================
            // ↓ここから削除をしていく処理
            if(Max_kcal<Kcal||One_group>=3.3||Two_group>=3.3||Three_group>=3.3||Four_group>=11.3){
                console.log("カロリー、各栄養の点数が突破したので削除する処理");
                // food配列からランダムに削除している
                var random = Math.floor(Math.random()*food_week[cria_count].length)+0;
                // ↓指定した食材を消さないためにifで回避する　乱数を作り直している
                if(food_week[cria_count][random]["look"] == "on"){
                    console.log("指定した食材だから削除しない："+food_week[cria_count][random]["name"]);
                }else{
                    console.log("ランダム削除した料理："+food_week[cria_count][random]["name"]);
                    Kcal -= food_week[cria_count][random]["kcal"];
                    One_group -= food_week[cria_count][random]["one_group"];
                    Two_group -= food_week[cria_count][random]["two_group"];
                    Three_group -= food_week[cria_count][random]["three_group"];
                    Four_group -= food_week[cria_count][random]["four_group"];
                    food_week[cria_count].splice(random,1);
                }
            }else if(Jump==50){
                // 回避処理が50回続いたのでfood配列からランダムに削除している
                var random = Math.floor(Math.random()*food_week[cria_count].length)+0;
                // ↓指定した食材を消さないためにifで回避する　乱数を作り直している
                if(food_week[cria_count][random]["look"] == "on"){
                    console.log("指定した食材だから削除しない："+food_week[cria_count][random]["name"]);
                    // ↓乱数を作り直す
                    var random = Math.floor(Math.random()*food_week[cria_count].length)+0;
                    if(food_week[cria_count][random]["look"] == "on"){
                        console.log("指定した食材だから削除しない（二回目）："+food_week[cria_count][random]["name"]);
                    }else{
                        console.log("ランダム削除した料理："+food_week[cria_count][random]["name"]);
                        Kcal -= food_week[cria_count][random]["kcal"];
                        One_group -= food_week[cria_count][random]["one_group"];
                        Two_group -= food_week[cria_count][random]["two_group"];
                        Three_group -= food_week[cria_count][random]["three_group"];
                        Four_group -= food_week[cria_count][random]["four_group"];
                        food_week[cria_count].splice(random,1);
                    }
                }else{
                    console.log("ランダム削除した料理："+food_week[cria_count][random]["name"]);
                    Kcal -= food_week[cria_count][random]["kcal"];
                    One_group -= food_week[cria_count][random]["one_group"];
                    Two_group -= food_week[cria_count][random]["two_group"];
                    Three_group -= food_week[cria_count][random]["three_group"];
                    Four_group -= food_week[cria_count][random]["four_group"];
                    food_week[cria_count].splice(random,1);
                }
                Jump = 0;
            }else if(One_group<=3.3&&Two_group<=3.3&&Three_group<=3.3&&Four_group>=10){
                // ここが原因
                console.log("四郡だけ高いので削除します");
                var max = 0;
                var index = 0;
                for(i=0; i<food_week[cria_count].length; i++){
                    if(max<food_week[cria_count][i]["four_group"]){
                        max = food_week[cria_count][i]["four_group"];
                        index = i;
                    }
                }
                if(food_week[cria_count][index]["look"] == "on"){
                    console.log("指定した食材だから削除しない："+food_week[cria_count][index]["name"]);
                    // 指定した食材が一番四郡の数値が高くなってしまったから、ここからランダムに削除
                    var random = Math.floor(Math.random()*(food_week[cria_count].length-1))+1;
                    console.log("ランダム削除した料理："+food_week[cria_count][random]["name"]);
                    Kcal -= food_week[cria_count][random]["kcal"];
                    One_group -= food_week[cria_count][random]["one_group"];
                    Two_group -= food_week[cria_count][random]["two_group"];
                    Three_group -= food_week[cria_count][random]["three_group"];
                    Four_group -= food_week[cria_count][random]["four_group"];
                    food_week[cria_count].splice(random,1);
                }else{
                    console.log("削除する食材："+food_week[cria_count][index]["name"])
                    Kcal -= food_week[cria_count][index]["kcal"];
                    One_group -= food_week[cria_count][index]["one_group"];
                    Two_group -= food_week[cria_count][index]["two_group"];
                    Three_group -= food_week[cria_count][index]["three_group"];
                    Four_group -= food_week[cria_count][index]["four_group"];
                    food_week[cria_count].splice(index,1);
                }
            } // 削除確認用if文
            // ↓最適化クリア時の処理================================================
            if(Max_kcal>Kcal&&One_group>=2.8&&Two_group>=2.8&&Three_group>=2.8&&Four_group>=10.8){
                console.log("最適化クリアの処理　2")
                var end = 0;
                end++;
                break;
            }
            // ===================================================================
            // for文の終わりに確認するコード
            One_group = Math.round(One_group*10)/10;
            Two_group = Math.round(Two_group*10)/10;
            Three_group = Math.round(Three_group*10)/10;
            Four_group = Math.round(Four_group*10)/10;
            var Syusyoku = 0;
            var Syusai = 0;
            var Hukusai = 0;
            var Sirumono = 0;
            for(i=0; i<food_week[cria_count].length; i++){
                if(food_week[cria_count][i]["type"]=="syusyoku"){
                    Syusyoku++;
                }else if(food_week[cria_count][i]["type"]=="syusai"){
                    Syusai++;
                }else if(food_week[cria_count][i]["type"]=="hukusai"){
                    Hukusai++;
                }else if(food_week[cria_count][i]["type"]=="sirumono"){
                    Sirumono++;
                }
            }
            console.log("最適化問題の回答："+JSON.stringify(food_week[cria_count]));
            console.log("総カロリー："+Kcal);
            console.log("総１郡点数："+One_group);
            console.log("総２郡点数："+Two_group);
            console.log("総３郡点数："+Three_group);
            console.log("総４郡点数："+Four_group);
            console.log("最適化終了時の主食の数："+Syusyoku);
            console.log("最適化終了時の主菜の数："+Syusai);
            console.log("最適化終了時の副菜の数："+Hukusai);
            console.log("最適化終了時の汁物の数："+Sirumono);
            // ===================================================================
        } // for文
        if(end==1){
            console.log("food_weekに一つ献立が完成："+JSON.stringify(food_week[cria_count]));
            console.log("総カロリー："+Kcal);
            console.log("総１郡点数："+One_group);
            console.log("総２郡点数："+Two_group);
            console.log("総３郡点数："+Three_group);
            console.log("総４郡点数："+Four_group);
            cria_count++;
            if(cria_count==7){
                cria_count--;
                break;
            }
            Kcal = 0;
            One_group = 0;
            Two_group = 0;
            Three_group = 0;
            Four_group = 0;
            count = 0;
            continue;
        }
        count++;
    } // while文

    console.log("繰り返しの終了");
    console.log(food_week)
    console.log(cria_count)
    var Syusyoku = 0;
    var Syusai = 0;
    var Hukusai = 0;
    var Sirumono = 0;
    for(i=0; i<food_week[cria_count].length; i++){
        if(food_week[cria_count][i]["type"]=="syusyoku"){
            Syusyoku++
        }else if(food_week[cria_count][i]["type"]=="syusai"){
            Syusai++
        }else if(food_week[cria_count][i]["type"]=="hukusai"){
            Hukusai++
        }else if(food_week[cria_count][i]["type"]=="sirumono"){
            Sirumono++
        }
    }
    console.log("最適化問題の回答："+JSON.stringify(food_week[cria_count-1]));
    console.log("総カロリー："+Kcal);
    console.log("総１郡点数："+Math.round(One_group*10)/10);
    console.log("総２郡点数："+Math.round(Two_group*10)/10);
    console.log("総３郡点数："+Math.round(Three_group*10)/10);
    console.log("総４郡点数："+Math.round(Four_group*10)/10);
    console.log("最適化終了時の主食の数："+Syusyoku);
    console.log("最適化終了時の主菜の数："+Syusai);
    console.log("最適化終了時の副菜の数："+Hukusai);
    console.log("最適化終了時の汁物の数："+Sirumono);
    console.log("=============================================");

    // ↓表示画像の準備のコード
    var last = "<div class='hoge'><img id='atari_0' src= " + food_week[cria_count][0]["url"] + ">";
    last += "<br>";
    last += food_week[cria_count][0]["name"];
    last += "</div>";
    for(i=1; i<food_week[cria_count].length; i++){
        if(i%2==0){
            last += "<div class='hoge'><img id='atari_"+ i +"' src= " + food_week[cria_count][i]["url"] + ">";
            last += "<br>";
            last += food_week[cria_count][i]["name"];
            last += "</div>";
        }else{
            last += "<div><img id='atari_"+ i +"' src= " + food_week[cria_count][i]["url"] + ">";
            last += "<br>";
            last += food_week[cria_count][i]["name"];
            last += "</div><br>";
        }
    }
    document.getElementById("name").innerHTML = last;
    localStorage.setItem('food_set', JSON.stringify(food_week[cria_count]));
    document.getElementById("result").innerHTML = "<br><div id='border'>総カロリー："+Kcal+"Kcal　"+"総１郡点数："+Math.round(One_group*10)/10+"点　"+"総２郡点数："+Math.round(Two_group*10)/10+"点　"+"総３郡点数："+Math.round(Three_group*10)/10+"点　"+"総４郡点数："+Math.round(Four_group*10)/10+"点</div>";

    // ↓ユーザーフォームにプルダウンを付ける
    var option = "<select name='name'>";
    for(i=0; i<food_week[cria_count-1].length; i++){
        option += "<option>";
        option += food_week[cria_count-1][i]["name"];
        option += "</option>";
    }
    option += "</select>";
    document.getElementById("out1-2").innerHTML += option;

    // ↓画像に当たり判定を付けるために関数を動かす
    set(food_week);
}

// ↓当たり判定用の関数
function set (food){
    console.log("当たり判定開始で渡した変数："+JSON.stringify(food));
    for(var i=0; i<food[6].length; i++){
        // for文でaddeventlistenerをやると落とし穴にはまるから関数を挟む
        (function(i) {
            if(food[6][i]["name"]=="ご飯(普通盛り)"){
                var url = "https://cookpad.com/search/ご飯";
            }else if(food[6][i]["name"]=="スクランブルエッグ（玉子二個分）"){
                var url = "https://cookpad.com/search/スクランブルエッグ";
            }else if(food[6][i]["name"]=="野菜ジュース（伊藤園 1日分の野菜）"){
                var url = "https://cookpad.com/search/野菜ジュース";
            }else if(food[6][i]["name"]=="りんご（市販されている物を一つ）"){
                var url = "https://cookpad.com/search/りんご";
            }else if(food[6][i]["name"]=="ヨーグルト（個食タイプを一つ）"){
                var url = "https://cookpad.com/search/ヨーグルト";
            }else if(food[6][i]["name"]=="玉子焼き（卵一個の一人前）"){
                var url = "https://cookpad.com/search/玉子焼き";
            }else if(food[6][i]["name"]=="ひじきの煮物（小鉢一杯）"){
                var url = "https://cookpad.com/search/ひじきの煮物";
            }else if(food[6][i]["name"]=="ジャムトースト（イチゴジャム）"){
                var url = "https://cookpad.com/search/ジャムトースト";
            }else{
                var url = "https://cookpad.com/search/"+food[6][i]["name"];
            }
            document.getElementById("atari_"+i).addEventListener("click", function(){window.open(url, '_blank')},false);
        }(i))
    }
}

// ↓ユーザーが評価するためのフォームを作る関数
function append(){
    var name_number = localStorage.getItem('append_count');
    var food = JSON.parse(localStorage.getItem('food_set'));
    if(name_number<14){
        name_number++;
        var form = '<label for="name">料理名</label><select name="name'+ name_number +'">';
        for(var i=0; i<food[0].length; i++){
            form += "<option>";
            form += food[0][i]["name"];
            form += "</option>";
        }
        form += "</select>";
        var form_array = ['<select name="value'+ name_number +'">','<option>良い</option>','<option>普通</option>','<option>ダメ</option>','</select><br>'];
        for(i=0; i<form_array.length; i++){
            form += form_array[i];
        }
        document.getElementById("form_append").innerHTML += form;
        localStorage.setItem('append_count', name_number);
    }else{
        console.log("フォームを出すのは15個までなのでこれ以上は出さない");
    }
}

// ↓ホーム画面に戻るための関数
function Return(){
    localStorage.removeItem('append_count');
    localStorage.removeItem('food_set');
    window.location = "http://localhost/Menu_creation/Central.html";
}
// kudamono
// kokoa
// ===================================================================
// ↓種類ごとに配列に追加して分け、確認するコード
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
// console.log("配列array_syusyokuの中身："+JSON.stringify(array_syusyoku));
// console.log("配列array_syusaiの中身："+JSON.stringify(array_syusai));
// console.log("配列array_hukusaiの中身："+JSON.stringify(array_hukusai));
// console.log("配列array_sirumonoの中身："+JSON.stringify(array_sirumono));
// ===================================================================

food, Kcal, One_group, Two_group, Three_group, Four_group

if(isset($_POST['add'])){
    $name = $_POST['name'];
    $value = $_POST['value'];
    if($value=="良い"){
        $value = 3;
    }else if($value=="普通"){
        $value = 2;
    }else if($value=="ダメ"){
        $value = 1;
    }
    $query = "INSERT INTO `food`(`food_name`, `Five`) VALUES (N'$name',N'$value')";
    // クエリを実行します。
    if (mysqli_query($link, $query)) {
        // echo "INSERT に成功しました。\n";
    }

    $name_set = array($name1="",$name2="",$name3="",$name4="",$name5="",$name6="",$name7="",$name8="",$name9="",$name10="",$name11="",$name12="",$name13="",$name14="");
    $value_set = array($value1="",$value2="",$value3="",$value4="",$value5="",$value6="",$value7="",$value8="",$value9="",$value10="",$value11="",$value12="",$value13="",$value14="");

    for($i=0; $i<count($name_set); $i++){
        $name_set[$i] = $_POST['name'($i+1)];
        $value_set[$i] = $_POST['value'($i+1)];
        if($value_set[$i]=="良い"){
            $value_set[$i] = 3;
        }else if($value_set[$i]=="普通"){
            $value_set[$i] = 2;
        }else if($value_set[$i]=="ダメ"){
            $value_set[$i] = 1;
        }
        if(isset($name_set[$i])){
            $query = "INSERT INTO `food`(`food_name`, `Five`) VALUES (N'$name_set[$i]',N'$value_set[$i]')";
            // クエリを実行します。
            if (mysqli_query($link, $query)) {
                // echo "INSERT に成功しました。\n";
            }
        }
    }
}



if(month_count == 0){
    var month = date.getMonth();
}else{
    var month = date.getMonth()+Number(month_count);
}

Number(month_count)


console.log("showDate："+month_count);
if(today.getMonth()==showDate.getMonth()){
    console.log("todayとshowDateが同じ");
    var year = date.getFullYear();
    var month = date.getMonth();
}else{
    console.log("todayとshowDateが違う");
    console.log("showaDateの中身："+showDate)
    // showDate.setMonth(showDate.getMonth() + Number(month_count));
    console.log("showaDateの中身："+showDate)
    console.log(month_count+"を足す")
    console.log(showDate.getMonth()+"表示月");
    var year = showDate.getFullYear();
    var month = showDate.getMonth();
}



if(bunki == 0){
    if(today.getMonth()==Number(month_count)){
        console.log("現在の月が表示");
        var year = date.getFullYear();
        var month = date.getMonth();
    }else{
        console.log("todayとshowDateが違う");
        console.log("showaDateの中身："+showDate)
        showDate.setMonth(showDate.getMonth() + Number(month_count));
        console.log(month_count+"を足す")
        console.log(showDate.getMonth()+"表示月");
        var year = showDate.getFullYear();
        var month = showDate.getMonth();
    }
}else{
    showDate.setMonth(showDate.getMonth() + Number(kazu));
    localStorage.setItem('kazu',0);
}


// 前の月表示
function prev(){
    var date = localStorage.getItem("Month");
    console.log("ローカルストレージのdateの値"+date);
    showDate.setMonth(showDate.getMonth() - 1); // showDateがしょきのあたいのままだから
    month_hu = localStorage.getItem('showDate');
    month_hu--;
    month_count--;
    kazu--;
    localStorage.setItem('showDate',month_count);
    localStorage.setItem('showDate_hu',month_hu);
    localStorage.setItem('kazu',kazu);
    showProcess(showDate, -1);

}

// 次の月表示
function next(){
    var date = localStorage.getItem("Month");
    console.log("ローカルストレージのdateの値"+date);
    // ここにif文を置く　open2の関数を動かして
    showDate.setMonth(showDate.getMonth() + 1 + Number(date)); // showDateがしょきのあたいのままだから
    month_sei = localStorage.getItem('showDate');
    month_sei++;
    month_count++;
    kazu++;
    localStorage.setItem('showDate',month_count);
    localStorage.setItem('showDate_sei',month_sei);
    localStorage.setItem('kazu',kazu);
    showProcess(showDate, 1);
    window.location.reload();
}

// カレンダー表示
function showProcess(date, hantei) {
    console.log(hantei)
    var month_count = localStorage.getItem('showDate');
    var kazu = localStorage.getItem('kazu');
    console.log("--------------------------------");
    console.log("today.getMonht()の値："+today.getMonth());
    console.log("Number(month_count)の値："+Number(month_count));
    console.log("dateの値："+date);
    if(today.getMonth()==Number(month_count)){
        console.log("todayとmonth_countが同じ");
        var year = date.getFullYear();
        var month = date.getMonth();
        localStorage.setItem('Month',date.getMonth()); // 表示している月をDateにもとずきローカルストレージ
    }else if(today.getMonth()!=Number(month_count)){
        if(hantei == 1){
            var month_sei = localStorage.getItem('showDate_sei');
            Day.setMonth(Day.getMonth() + Number(month_sei));
            console.log("todayとmonth_countが違う");
            var year = Day.getFullYear();
            var month = Day.getMonth();
            localStorage.setItem('Month',Day.getMonth()); // 表示している月をDateにもとずきローカルストレージ
        }else{
            var month_hu = localStorage.getItem('showDate_hu');
            Day.setMonth(Day.getMonth() + Number(month_hu));
            console.log("todayとmonth_countが違う");
            var year = Day.getFullYear();
            var month = Day.getMonth();
            localStorage.setItem('Month',Day.getMonth()); // 表示している月をDateにもとずきローカルストレージ
        }
    }
    if(kazu>0){
        console.log("画面表示月を固定で表示");
        var year = date.getFullYear();
        var month = date.getMonth();
        localStorage.setItem('kazu',0);
    }
    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}


if((len+i+1)>day_count){ // このコードは表示している月の日付より上の数字を配列に追加しなくなるが、一日が表示月に適応されてしまう
    if(index==0){
        week_day.push(1);
        index++;
        continue;
    }else{
        week_day.push(i+1);
    }
}else{
    week_day.push(len+i+1);
}


    // ↓食べたいものの指定があった場合の処理
    if(incriment==7){ // 指定した献立があったら七日目に反映させるためのif文
        var text = document.getElementById("out1-1").value;
        var form = document.getElementById("out1-1");
        if(text!=""){
            console.log("指定された食べ物："+text);
            for(var i=0; i<array.length; i++){
                if(array[i]["name"] == text){
                    array[i]["look"] = "on";
                    food.push(array[i]);
                    console.log("指定された食べ物の、追加の成功メッセージ");
                    Kcal = array[i]["kcal"];
                    One_group = array[i]["one_group"];
                    Two_group = array[i]["two_group"];
                    Three_group = array[i]["three_group"];
                    Four_group = array[i]["four_group"];
                    break;
                }
            }
            if(food[0]["type"]=="syusai"){
                if(food[0]["name"]!="ハンバーグ"){
                    array[0]["look"] = "on";
                    food.push(array[0]);
                    console.log("主菜が追加されたので"+array[0]["name"]+"を追加");
                    Kcal += array[0]["kcal"];
                    One_group += array[0]["one_group"];
                    Two_group += array[0]["two_group"];
                    Three_group += array[0]["three_group"];
                    Four_group += array[0]["four_group"];
                }
            }
        }else{
            console.log("指定された食べ物はありません");
        }
        form.value = ""; // フォームを空にする
    }