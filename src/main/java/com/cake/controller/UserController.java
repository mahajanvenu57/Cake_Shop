package com.cake.controller;

import com.cake.model.User;
import com.cake.repository.UserRepository;
import com.cake.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userRepository.save(user);
    }

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        boolean authenticated = userService.authenticate(user.getUsername(), user.getPassward());
        if (authenticated) {
            return "Login successful!";
        } else {
            return "Invalid username or password!";
        }
    }
}




//package com.cake.controller;
//
//import com.cake.model.User;
//import com.cake.repository.UserRepository;
//import com.cake.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@CrossOrigin("*")
//public class UserController {
//
//    @Autowired
//    UserRepository userRepository;
//
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/register")
//    public String register(@RequestBody User user) {
//        // Validate phone number
//        if (!isValidPhoneNumber(user.getPhoneno())) {
//            return "Invalid phone number!";
//        }
//
//        // Save user if phone number is valid
//        userRepository.save(user);
//        return "Registration successful!";
//    }
//
//    @PostMapping("/login")
//    public String login(@RequestBody User user) {
//        boolean authenticated = userService.authenticate(user.getUsername(), user.getPassward());
//        if (authenticated) {
//            return "Login successful!";
//        } else {
//            return "Invalid username or password!";
//        }
//    }
//
//    // Method to validate phone number
//    private boolean isValidPhoneNumber(String phoneNumber) {
//        return phoneNumber != null && phoneNumber.matches("\\d{10}");
//    }
//}
