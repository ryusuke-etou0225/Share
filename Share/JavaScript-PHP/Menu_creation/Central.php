<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>献立作成TOP</title>
    <link rel="stylesheet" href="css/Central.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
    <!-- 接続URL↓ -->
    <!-- http://localhost/Menu_creation/Central.php -->
    <!-- ↓DB関連の処理 -->
    <!-- // 接続状況チェック用コード
        // if (mysqli_connect_errno()) {
        // die("データベースに接続できません:" . mysqli_connect_error() . "\n");
        // }else {
        // echo "データベースの接続に成功しました。\n";
        // } -->
    <?php
        $param = [];
        $Five = [];
        $link = mysqli_connect('localhost', 'root', '' , 'evaluation');
                                // ↑host ↑USER ↑PW(空白) ↑DB名前
        // phpでdb空値を取るとなぜか文字化けする、それを回避するコード、意味は分からない
        if (!mysqli_set_charset($link, "utf8")) {
            // printf("Error loading character set utf8: %s\n", mysqli_error($link));
            exit();
        } else {
            // printf("Current character set: %s\n", mysqli_character_set_name($link));
        }

        //SELECTを実行する
        $query =  "SELECT * FROM food;";
        if ($result = mysqli_query($link, $query)) {
            foreach ($result as $row) {
                // ↓phpからjsにdbの値をおくる処理
                array_push($param, $row["food_name"]);
                array_push($Five, $row["Five"]);
            }
        }
        // 接続を閉じます
        mysqli_close($link);
        $param_json = json_encode( $param );
        $Five_json = json_encode( $Five );
    ?>

<!-- ナビのコード -->
    <header class="site-header">
        <h1 id="title"><a href="http://localhost/Menu_creation/Central.php" class="black">献立作成サイト</a></h1>
        <nav>
            <ul class="gnav__menu">
                <a href="https://www.asadaame.co.jp/recipeclub/cooking/colmun003.html" target="_blank"><li class="gnav__menu__item" id="firstli">四郡点数法</li></a>
                <a href="http://localhost/Menu_creation/HTML/food_list.html"><li class="gnav__menu__item">指定できる料理</li></a>
                <a href="http://localhost/Menu_creation/HTML/Explanation_1.html"><li class="gnav__menu__item" id="lastli">ページの使い方</li></a>
            </ul>
        </nav>
    </header><br>

    <div class="centre">
        <input type="text" id="out1-1" placeholder=" 指定したい料理を一つ記入">
    </div>
    <p></p>
    <div class="centre">
        <button type="submit" onclick="Seven()" class="btn-gradient-3d-simple">献立作成</button>
        <!-- <button onclick="Relood()">再読み込み</button> -->
    </div>

    <p class="centre" id="out1-2"></p>

    <div class="wrapper">
        <!-- xxxx年xx月を表示 -->
        <h1 id="header"></h1>
    
        <!-- ボタンクリックで月移動 -->
        <div id="next-prev-button">
            <button id="prev" onclick="prev()">‹</button>
            <button id="next" onclick="next()">›</button>
        </div>
    
        <!-- カレンダー -->
        <div id="calendar"></div>
    </div><br>

    <!-- 献立リセットボタン -->
    <div class="centre">
        <button type="submit" onclick="Rset()" class="btn-gradient-3d-simple">献立をリセット</button>
    </div>

    <script>
        var param = <?php echo $param_json;?>;
        var Five = <?php echo $Five_json;?>;
    </script>
    <script src="javascript/recipe.js"></script>
    <script src="javascript/Central.js"></script>
    <script src="javascript/style.js"></script>
    <noscript>JavaScriptが利用できません</noscript>
</body>
</html>