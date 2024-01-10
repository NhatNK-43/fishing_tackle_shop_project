package com.example.demo_jwt.service;

import com.example.demo_jwt.model.User;

import java.util.Optional;

public interface IUserService {
    Optional<User> findByUsername(String name);//Tim kiem co ton tai trong DB khong
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    User save (User user);
}
