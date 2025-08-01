package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class TestController {
    private static final Logger logger = LoggerFactory.getLogger(TestController.class);

    @GetMapping("/test")
    public String testEndpoint(HttpServletRequest request, HttpServletResponse response) {
        long startTime = System.currentTimeMillis();
        logger.info("アクセスされました");
        logger.info("URL: {}", request.getRequestURL());
        logger.info("ステータス: {}", response.getStatus());
        // 疑似的に処理時間を測定（ここでは固定値）
        long duration = System.currentTimeMillis() - startTime;
        logger.info("処理時間: {}ms", duration);
        return "Hello from /test endpoint!";
    }
}