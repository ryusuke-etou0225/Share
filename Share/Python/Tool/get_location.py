import pyautogui
import time

while True:
    x, y = pyautogui.position()
    print(f'現在の座標: ({x}, {y})')
    time.sleep(1)