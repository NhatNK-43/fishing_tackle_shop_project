package com.example.back_end.service;

import com.example.back_end.model.Account;

import java.util.Optional;

public interface IAccountService {
    Optional<Account> findByUsername(String name);//Tim kiem co ton tai trong DB khong
    Boolean existsByUsername(String username);
//    Boolean existsByEmail(String email);
    Account save (Account account);
}
