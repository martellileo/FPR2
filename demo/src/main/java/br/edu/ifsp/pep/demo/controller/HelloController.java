package br.edu.ifsp.pep.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/hello")
public class HelloController {

    //* GET http://localhost:8080/hello
    @GetMapping
    public String getHello() {
        return "Hello";
    }
    
}
