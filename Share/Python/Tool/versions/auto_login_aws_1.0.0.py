# =============================================
# ファイル名  : auto_typing.py
# 用途       : 座標クリックおよびテキスト自動入力にてAWS IAMユーザーログインツール
# 概要       : PyAutoGUI を使用して、特定座標にクリックし、テキストを入力する。
# 使用環境   : Windows 11 HOME, Python 3.12.10, pip install pyautogui, pyinstaller
# 作成者     : my
# 作成日     : 2025-07-21
# 最終更新日 : 2025-07-21
# バージョン : 1.0.0
# 備考       : PyInstaller にてWindows環境での.exeファイルを作成して使用する
#             「pyinstaller --onefile --noconsole auto_login_aws.py」
#              今後は画像認識を導入予定。座標クリックでの処理ではerror停止確率が高いため
# =============================================

import pyautogui
import pyperclip
import webbrowser
import time

from const import const_common

# 開きたいURLを指定
url = const_common.URL
# 既定のブラウザでURLを開く
webbrowser.open(url)
time.sleep(const_common.WAITING_TIME["10"])

# IAMユーザー入力フォームをクリック
pyautogui.click(x = const_common.LOCATION["IAMusername_form"]["x"], y = const_common.LOCATION["IAMusername_form"]["y"])
time.sleep(const_common.WAITING_TIME["0.5"])

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
# Tabキーを4回押して、Sign inにフォーカスを当て、Enterキーを押して選択
pyautogui.hotkey(const_common.KEYBOOARD["Tab"], const_common.KEYBOOARD["Tab"], const_common.KEYBOOARD["Tab"], const_common.KEYBOOARD["Tab"])
pyautogui.hotkey(const_common.KEYBOOARD["Enter"])
time.sleep(const_common.WAITING_TIME["2"])

# 認証アプリをクリック
pyautogui.click(x = const_common.LOCATION["AUTHENTICATOR"]["x"], y = const_common.LOCATION["AUTHENTICATOR"]["y"])
time.sleep(const_common.WAITING_TIME["1"])

# MFA Codeをクリック
pyautogui.click(x = const_common.LOCATION["MFACode"]["x"], y = const_common.LOCATION["MFACode"]["y"])
time.sleep(const_common.WAITING_TIME["0.5"])

# MFA Code入力フォームをクリック
pyautogui.click(x = const_common.LOCATION["MFACode_form"]["x"], y = const_common.LOCATION["MFACode_form"]["y"])
time.sleep(const_common.WAITING_TIME["0.5"])

# Ctrl+Vを使ってクリップボードの内容（認証アプリにて取得したMFA Code）を貼り付け
pyautogui.hotkey(const_common.KEYBOOARD["Ctrl"], const_common.KEYBOOARD["v"])
time.sleep(const_common.WAITING_TIME["0.5"])

# Tabキーを押して、Sign inにフォーカスを当て、Enterキーを押して選択
pyautogui.hotkey(const_common.KEYBOOARD["Tab"])
pyautogui.hotkey(const_common.KEYBOOARD["Enter"])