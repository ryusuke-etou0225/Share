# =============================================
# ファイル名  : auto_typing.py
# 用途       : 座標クリックおよびテキスト自動入力にてAWS IAMユーザーログインツール
# 概要       : PyAutoGUI を使用して、特定座標にクリックし、テキストを入力する。
# 使用環境   : Windows 11 HOME, Python 3.12.10, pip install pyautogui, pyinstaller
# 作成者     : my
# 作成日     : 2025-07-21
# 最終更新日 : 2025-08-06
# バージョン : 2.1.0
# 備考       : PyInstaller にてWindows環境での.exeファイルを作成して使用する
#             「pyinstaller auto_login_aws.py --noconfirm --hidden-import=cv2」
# =============================================
import pyautogui
import pyperclip
import webbrowser
import time

from const import const_iamuser, const_pyautogui, const_time
from utils.image_processing import ImageClicker
from utils.ime import ime_off
from apllog.my_logging import get_logger

# フラグ、インスタンス設定
result = True
logger = get_logger(__name__)
clicker = ImageClicker(timeout=const_time.TIMEOUT, confidence=const_pyautogui.THRESHOLD, interval=const_pyautogui.INTERVAL)

logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
logger.info("■ 手順1 AWSログインフォームアクセス")
logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
# 開きたいURLを指定
url = const_iamuser.URL
# 既定のブラウザでURLを開く
webbrowser.open(url)
logger.info("■ SUCCESS : 手順1 AWSログインフォームアクセス\n")

logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
logger.info("■ 手順2 IAMユーザー、パスワード入力")
logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
# IAMユーザー入力フォームがあるか探す
if clicker.click_image(const_pyautogui.USERNAMEFORM):
    time.sleep(const_time.WAITING_TIME["0.5"])
else:
    logger.info("■ FAILDE : 手順2 IAMユーザー、パスワード入力\n")
    result = False

if result:
    # IAMユーザー名を入力 キーボードがカナ入力の場合処理が失敗するためクリップボード貼り付け方式で実行
    # ime_off()
    # time.sleep(const_time.WAITING_TIME["0.5"])
    pyperclip.copy(const_iamuser.IAM)
    pyautogui.hotkey(const_pyautogui.KEYBOOARD["Ctrl"], const_pyautogui.KEYBOOARD["v"])
    time.sleep(const_time.WAITING_TIME["0.5"])

    # Tabキーを押して、Passwordフォームに移動
    pyautogui.hotkey(const_pyautogui.KEYBOOARD["Tab"])
    time.sleep(const_time.WAITING_TIME["0.5"])
    # Passwordを入力
    # ^（キャレット）ではなく、なぜか ~（チルダ）が入力されてしまうため、クリップボード貼り付け方式で実行
    pyperclip.copy(const_iamuser.PASSWORD)
    pyautogui.hotkey(const_pyautogui.KEYBOOARD["Ctrl"], const_pyautogui.KEYBOOARD["v"])
    logger.info("■ SUCCESS : 手順2 IAMユーザー、パスワード入力\n")

if result:
    logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    logger.info("■ 手順3 Sing in")
    logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    # Sing inフォームがあるか探す
    if clicker.click_image(const_pyautogui.SINGIN):
        logger.info("■ SUCCESS : 手順3 Sing in\n")
        time.sleep(const_time.WAITING_TIME["0.5"])
    else:
        logger.info("■ FAILDE : 手順3 Sing in\n")
        result = False

if result:
    logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    logger.info("■ 手順4 Authenticater code取得")
    logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    # Auth拡張機能があるか探す
    if clicker.click_image(const_pyautogui.AUTHICON):
        time.sleep(const_time.WAITING_TIME["0.5"])
    else:
        logger.info("■ FAILDE : 手順4 Authenticater code取得\n")
        result = False

if result:
    changelocation = ImageClicker(timeout=const_time.TIMEOUT, confidence=const_pyautogui.THRESHOLD, interval=const_pyautogui.INTERVAL, offset_x=const_pyautogui.OFFSET["x"], offset_y=const_pyautogui.OFFSET["y"])
    # 認証アプリのコードを取得
    if changelocation.click_image(const_pyautogui.AUTHENTICATOR):
        logger.info("■ SUCCESS : 手順4 Authenticater code取得\n")
        time.sleep(const_time.WAITING_TIME["0.5"])
    else:
        logger.info("■ FAILDE : 手順4 Authenticater code取得\n")
        result = False

if result:
    logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    logger.info("■ 手順5 AWSログイン")
    logger.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    # MFAフォームがあるか探す
    if clicker.click_image(const_pyautogui.MAFCODEFORM):
        time.sleep(const_time.WAITING_TIME["0.5"])
    else:
        logger.info("■ FAILDE : 手順5 MFAcodeフォーム\n")
        result = False

if result:
    # Ctrl+Vを使ってクリップボードの内容（認証アプリにて取得したMFA Code）を貼り付け
    pyautogui.hotkey(const_pyautogui.KEYBOOARD["Ctrl"], const_pyautogui.KEYBOOARD["v"])
    time.sleep(const_time.WAITING_TIME["0.5"])
    # Tabキーを押して、Sign inにフォーカスを当て、Enterキーを押して選択
    pyautogui.hotkey(const_pyautogui.KEYBOOARD["Tab"])
    pyautogui.hotkey(const_pyautogui.KEYBOOARD["Enter"])
    logger.info("■ SUCCESS : 手順5 AWSログイン\n")
