<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/food.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
    <!-- 接続URL↓ -->
    <!-- http://localhost/Menu_creation/php/food.php -->
    <!-- ↓DB関連の処理 -->
    <!-- // 接続状況チェック用コード
        // if (mysqli_connect_errno()) {
        // die("データベースに接続できません:" . mysqli_connect_error() . "\n");
        // }else {
        // echo "データベースの接続に成功しました。\n";
        // } -->
        
<!-- ナビのコード -->
    <header class="site-header">
        <h1 id="title"><a href="http://localhost/Menu_creation/Central.php" class="black">献立作成サイト</a></h1>
        <nav>
            <ul class="gnav__menu">
                <a href="https://www.asadaame.co.jp/recipeclub/cooking/colmun003.html" target="_blank"><li class="gnav__menu__item" id="firstli">四郡点数法</li></a>
                <a href="http://localhost/Menu_creation/HTML/food_list.html"><li class="gnav__menu__item">指定できる料理</li></a>
                <a href="http://localhost/Menu_creation/HTML/Explanation_2.html"><li class="gnav__menu__item" id="lastli">ページの使い方</li></a>
            </ul>
        </nav>
    </header><br>

    <!-- ↓今日の日付 -->
    <h1 id="out1-1" class="center"></h1>

    <?php
        // ↓これでwarningを非表示にする
        error_reporting(0);
        // このphpではフォームから料理名と評価値をdbにインサートする
        $link = mysqli_connect('localhost', 'root', '' , 'evaluation');
        // チェックボックスの値を受け取る
        $array_hyouka = $_POST["hyouka"];
        $value = 1;

        // 配列の要素の数だけfor文を動かして一つずつDBにインサートする
        foreach($array_hyouka as $food_hyouka){
            $query = "INSERT INTO `food`(`food_name`, `Five`) VALUES (N'$food_hyouka',N'$value')";
            // クエリを実行します。
            if (mysqli_query($link, $query)) {
                // echo "INSERT に成功しました。\n";
            }
        }
        // 接続を閉じます
        mysqli_close($link);
    ?>

    <!-- ↓作成した献立を表示するタグ -->
    <form action="food.php" method="post">
        <p id="name"></p> <!-- ここで画像と名前の表示 -->

        <div class="both"></div>

        <div class="clear"> <!-- DBに送るための送信ボタン -->
            <input type="submit" name="add" class="btn-gradient-3d-simple" value="好みの料理を登録">
        </div>
    </form><br>

    <div class="center"> <!-- 献立から料理を削除するボタン -->
        <button type="submit" onclick="sakuzyo()" class="btn-gradient-3d-simple">献立を一品減らす</button>
        <!-- 仮に料理を消したら栄養がどうなるのかの確認用 -->
        <button type="submit" onclick="karisakuzyo()" class="btn-gradient-3d-simple">献立を減らした際の栄養確認<br>(チェックボタンにチェック)</button>
    </div><br>

    <div id="result_2"></div>
    <div id="advice"></div>

    <p id="result"></p><br> <!-- ここで総カロリーとそれぞれの点数を表示 -->

    <!-- ↓HOME画面に戻るボタン -->
    <div class="center">
        <button type="submit" onclick="Return()" class="btn-gradient-3d-simple">ホーム画面に戻る</button>
    </div><br>

    <script src="../javascript/food.js"></script>
    <noscript>JavaScriptが利用できません</noscript>
</body>
</html>