import logging
import os
import sys
from datetime import datetime

from const import const_logging

def get_exe_dir():
    """ 実行ファイルまたはスクリプトのあるディレクトリを取得 """
    if getattr(sys, 'frozen', False):  # PyInstallerでexe化されている場合
        return os.path.dirname(sys.executable)
    else:
        return os.path.dirname(__file__)

# dist フォルダに log フォルダを作り、その中に log.txt を作成
exe_dir = get_exe_dir()
log_dir = os.path.join(exe_dir, const_logging.DIRECTORY)
os.makedirs(log_dir, exist_ok=True)

# 日付付きのログファイル名を作成
log_file_name = f"{datetime.now().strftime(const_logging.DAY_DORMAT)}-{const_logging.FILE_NAME}"
log_path = os.path.join(log_dir, log_file_name)

# ログレベル設定
LOG_LEVEL = logging.DEBUG

# ルートロガー設定
logging.basicConfig(
    level=LOG_LEVEL,
    format=const_logging.LOG_FORMAT,
    datefmt=const_logging.DATE_FORMAT,
    handlers=[
        logging.FileHandler(log_path, encoding=const_logging.ENCODING),
        #logging.StreamHandler()  # コンソール出力も追加
    ]
)

def get_logger(name: str) -> logging.Logger:
    """ モジュール名を指定してロガーを取得 """
    return logging.getLogger(name)