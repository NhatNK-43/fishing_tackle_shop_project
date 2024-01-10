package com.example.back_end.repository;

import com.example.back_end.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Account, Integer> {
    Optional<Account> findByUsername(String name);//Tim kiem co ton tai trong DB khong
    Boolean existsByUsername(String username);
//    Boolean existsByEmail(String email);
}
