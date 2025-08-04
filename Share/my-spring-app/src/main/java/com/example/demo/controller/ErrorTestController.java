package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class ErrorTestController {

    private static final Logger logger = LoggerFactory.getLogger(ErrorTestController.class);

    @GetMapping("/error-test")
    public String errorTest() {
        try {
            // 意図的な例外
            throw new RuntimeException("テスト用の例外");
        } catch (RuntimeException e) {
            logger.error("エラーが発生しました: {}", e.getMessage(), e);
            return "エラーが発生しました";
        }
    }
}