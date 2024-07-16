package com.prom.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User signup(User user) {
        
        if (userRepository.findByUsername(user.getUsername()) == null) {
           return userRepository.save(user);
            
        }
        else{
            user.setId((long) 0);
            return user;
        }
        
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
