package com.cake.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cake.model.User;
import com.cake.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String username, String password) {
        List<User> users = userRepository.findByUsername(username);
        for (User user : users) {
            if (user.getPassward() != null && user.getPassward().equals(password)) {
                return true;
            }
        }
        return false;
    }
}
