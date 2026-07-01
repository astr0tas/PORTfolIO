package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class AppApplication {

  public static void main(String[] args) {
    SpringApplication app = new SpringApplication(AppApplication.class);
    Environment env = app.run(args).getEnvironment();
  }

}
