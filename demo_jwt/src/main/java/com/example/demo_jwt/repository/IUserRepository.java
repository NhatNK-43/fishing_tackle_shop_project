package com.example.demo_jwt.repository;

import com.example.demo_jwt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String name);//Tim kiem co ton tai trong DB khong
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
