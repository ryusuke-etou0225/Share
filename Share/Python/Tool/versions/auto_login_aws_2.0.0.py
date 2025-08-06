# =============================================
# ファイル名  : auto_typing.py
# 用途       : 座標クリックおよびテキスト自動入力にてAWS IAMユーザーログインツール
# 概要       : PyAutoGUI を使用して、特定座標にクリックし、テキストを入力する。
# 使用環境   : Windows 11 HOME, Python 3.12.10, pip install pyautogui, pyinstaller
# 作成者     : my
# 作成日     : 2025-07-21
# 最終更新日 : 2025-08-03
# バージョン : 2.0.0
# 備考       : PyInstaller にてWindows環境での.exeファイルを作成して使用する
#             「pyinstaller auto_login_aws.py --noconfirm --hidden-import=cv2」
# =============================================
import sys
import os

# 実行ファイル or スクリプトのある場所を取得（EXE対応）
def get_app_path():
    if getattr(sys, 'frozen', False):  # EXE化されている場合
        return os.path.dirname(sys.executable)
    else:
        return os.path.dirname(os.path.abspath(__file__))

log_path = os.path.join(get_app_path(), 'log.txt')

# 標準出力をファイルへリダイレクト
sys.stdout = open(log_path, 'w', encoding='utf-8')
sys.stderr = sys.stdout

print("ログ出力開始")

import pyautogui
import pyperclip
import webbrowser
import time

from const import const_common
from utils.utils import wait_for_image, click_image

result = True

# 開きたいURLを指定
url = const_common.URL
# 既定のブラウザでURLを開く
webbrowser.open(url)

# IAMユーザー入力フォームがあるか探す
location = wait_for_image("IAM.png", timeout=20, confidence=0.8, interval=0.5)
if location:
    print("画像が見つかりました:", location)
    # 入力フォームをクリック
    pyautogui.click(location)
    time.sleep(const_common.WAITING_TIME["1"])
else:
    print("画像が見つかりませんでした")
    result = False

if result:
    # IMEをオフ（ローマ字入力）にする
    pyautogui.keyDown(const_common.KEYBOOARD["Alt"])
    # 日本語キーボードでは「半角/全角」キーは「`」に対応
    pyautogui.press(const_common.KEYBOOARD["Outhe"])
    pyautogui.keyUp(const_common.KEYBOOARD["Alt"])
    time.sleep(const_common.WAITING_TIME["0.5"])
    # IAMユーザー名を入力
    pyautogui.write(const_common.IAM, interval = const_common.WAITING_TIME["0.1"])

    # Tabキーを押して、Passwordフォームに移動
    pyautogui.hotkey(const_common.KEYBOOARD["Tab"])
    time.sleep(const_common.WAITING_TIME["0.5"])
    # Passwordを入力
    # ^（キャレット）ではなく、なぜか ~（チルダ）が入力されてしまうため、クリップボード貼り付け方式で実行
    pyperclip.copy(const_common.PASSWORD)
    pyautogui.hotkey(const_common.KEYBOOARD["Ctrl"], const_common.KEYBOOARD["v"])

if result:
    # Sing inフォームがあるか探す
    if click_image('Sign.png', timeout=20, confidence=0.8, interval=0.5):
        print("画像が見つかりました:", location)
    else:
        print("画像が見つかりませんでした")
        result = False

if result:
    # Auth拡張機能があるか探す
    location = wait_for_image("Auth.png", timeout=20, confidence=0.8, interval=0.5)
    if location:
        print("画像が見つかりました:", location)
        # 入力フォームをクリック
        pyautogui.click(location)
        time.sleep(const_common.WAITING_TIME["1"])
    else:
        print("画像が見つかりませんでした")
        result = False

if result:
    # 認証アプリのコードを取得
    if click_image('Auth.png', timeout=20, confidence=0.8, interval=0.5, offset_x=-90, offset_y=90):
        print("画像が見つかりました:", location)
    else:
        print("画像が見つかりませんでした")
        result = False

if result:
    # MFAフォームがあるか探す
    if click_image('MFA.png', timeout=20, confidence=0.8, interval=0.5):
        print("画像が見つかりました:", location)
        time.sleep(1)
    else:
        print("画像が見つかりませんでした")
        result = False

if result:
    # Ctrl+Vを使ってクリップボードの内容（認証アプリにて取得したMFA Code）を貼り付け
    pyautogui.hotkey(const_common.KEYBOOARD["Ctrl"], const_common.KEYBOOARD["v"])
    time.sleep(const_common.WAITING_TIME["0.5"])
    # Tabキーを押して、Sign inにフォーカスを当て、Enterキーを押して選択
    pyautogui.hotkey(const_common.KEYBOOARD["Tab"])
    pyautogui.hotkey(const_common.KEYBOOARD["Enter"])

