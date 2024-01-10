package com.example.back_end.controller;

import com.example.back_end.model.Account;
import com.example.back_end.security.userprincal.AccountPrinciple;
import com.example.back_end.service.IAccountService;
import com.example.back_end.dto.request.SignInForm;
import com.example.back_end.dto.request.SignUpForm;
import com.example.back_end.dto.response.ResponseJwt;
import com.example.back_end.dto.response.ResponseMessage;
import com.example.back_end.model.Role;
import com.example.back_end.model.RoleName;
import com.example.back_end.security.jwt.JwtProvider;
import com.example.back_end.service.IRoleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private IAccountService accountService;

    @Autowired
    private IRoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtProvider jwtProvider;

    @PostMapping("/signup")
    public ResponseEntity<?> register(@Valid @RequestBody SignUpForm signUpForm){
        if (accountService.existsByUsername(signUpForm.getUsername())){
            return new ResponseEntity<>(new ResponseMessage("The username existed! Please try again!"), HttpStatus.OK);
        }
//        if (accountService.existsByEmail(signUpForm.getEmail())){
//            return new ResponseEntity<>(new ResponseMessage("The email existed! Please try again!"), HttpStatus.OK);
//        }
        Account account = new Account(signUpForm.getUsername(), passwordEncoder.encode(signUpForm.getPassword()));
        Set<String> strRoles = signUpForm.getRoles();
        Set<Role> roles = new HashSet<>();
        strRoles.forEach(role ->{
            switch (role){
                case "admin":
                    Role adminRole = roleService.findByName(RoleName.ADMIN).orElseThrow(
                            ()->new RuntimeException("Role not found!")
                    );
                    roles.add(adminRole);
                    break;
                default:
                    Role userRole = roleService.findByName(RoleName.USER).orElseThrow(
                            ()->new RuntimeException("Role not found!")
                    );
                    roles.add(userRole);
                    break;
            }
        });
        account.setRoleSet(roles);
        accountService.save(account);
        return new ResponseEntity<>(new ResponseMessage("Create user success!"), HttpStatus.OK);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody SignInForm signInForm){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInForm.getUsername(), signInForm.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.createToken(authentication);
        AccountPrinciple userPrinciple = (AccountPrinciple) authentication.getPrincipal();
        return ResponseEntity.ok(new ResponseJwt(token, userPrinciple.getAuthorities()));
    }
}
