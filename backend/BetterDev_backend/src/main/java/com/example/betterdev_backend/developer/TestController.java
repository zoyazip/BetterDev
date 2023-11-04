package com.example.betterdev_backend.developer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/developer")
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "test";
    }

}
