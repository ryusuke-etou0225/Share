import win32gui
import win32con
import win32api
import win32process
import ctypes

def ime_off():
    hwnd = win32gui.GetForegroundWindow()
    hIMC = ctypes.windll.imm32.ImmGetContext(hwnd)
    ctypes.windll.imm32.ImmSetOpenStatus(hIMC, False)  # False = IME OFF
    ctypes.windll.imm32.ImmReleaseContext(hwnd, hIMC)