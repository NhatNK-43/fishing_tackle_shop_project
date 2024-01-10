package com.example.back_end.security.userprincal;

import com.example.back_end.model.Account;
import com.example.back_end.model.Role;
import com.example.back_end.repository.IAccountRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AccountDetailService implements UserDetailsService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found -> username or password" + username));
        return AccountPrinciple.build(account);
    }

//    @Override
//    @Transactional
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Account account = accountRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found -> username or password" + username));
//        return (UserDetails) new Account(account.getUsername(), account.getPassword(), (Set<Role>) mapRolesToAuthorities(account.getRoleSet()));
//    }
//
//    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Set<Role> roles) {
//        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toSet());
//    }
}
