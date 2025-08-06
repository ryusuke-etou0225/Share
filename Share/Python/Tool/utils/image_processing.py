import pyautogui
import time

from const import const_pyautogui
from apllog.my_logging import get_logger

logger = get_logger(__name__)

class ImageClicker:
    def __init__(self, timeout=10, confidence=0.8, interval=0.5, offset_x=0, offset_y=0):
        self.timeout = timeout
        self.confidence = confidence
        self.interval = interval
        self.offset_x = offset_x
        self.offset_y = offset_y

    def _wait_for_image(self, image_path):
        """指定画像が画面に表示されるまで待機。見つかればlocationを返す。"""
        start_time = time.time()
        while True:
            try:
                location = pyautogui.locateOnScreen(image_path, confidence=self.confidence)
                if location:
                    logger.info(f"{image_path.removeprefix(const_pyautogui.DIRECTORY)} 座標取得成功: {location}")
                    return location
            except pyautogui.ImageNotFoundException:
                logger.warning(f"{image_path.removeprefix(const_pyautogui.DIRECTORY)} 不一致によるタイムアウト")

            if time.time() - start_time > self.timeout:
                logger.error(f"{image_path.removeprefix(const_pyautogui.DIRECTORY)} タイムアウト終了")
                return False
            time.sleep(self.interval)

    def click_image(self, image_path):
        """指定画像を探し、見つかればオフセット位置をクリック"""
        location = self._wait_for_image(image_path)
        if location:
            center_x, center_y = pyautogui.center(location)
            click_x = center_x + self.offset_x
            click_y = center_y + self.offset_y
            pyautogui.click(click_x, click_y)
            logger.info(f"{image_path.removeprefix(const_pyautogui.DIRECTORY)} クリック位置: x={click_x}, y={click_y}")
            return True
        else:
            return False