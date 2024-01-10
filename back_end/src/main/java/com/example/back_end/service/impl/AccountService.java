package com.example.back_end.service.impl;

import com.example.back_end.model.Account;
import com.example.back_end.repository.IAccountRepository;
import com.example.back_end.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public Optional<Account> findByUsername(String name) {
        return accountRepository.findByUsername(name);
    }

    @Override
    public Boolean existsByUsername(String username) {
        return accountRepository.existsByUsername(username);
    }

//    @Override
//    public Boolean existsByEmail(String email) {
//        return accountRepository.existsByEmail(email);
//    }

    @Override
    public Account save(Account account) {
        return accountRepository.save(account);
    }
}
