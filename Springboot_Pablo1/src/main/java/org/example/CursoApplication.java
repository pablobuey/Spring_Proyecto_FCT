package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan //esto lo he añadido yo
public class CursoApplication {
    public static void main(String[] args){
SpringApplication.run(CursoApplication.class, args);

    }
}

