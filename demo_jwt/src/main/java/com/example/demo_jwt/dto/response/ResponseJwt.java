package com.example.demo_jwt.dto.response;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class ResponseJwt {
    private String token;
    private String type = "Bearer";
    private String name;
    private Collection<? extends GrantedAuthority> roles;

    public ResponseJwt() {
    }

    public ResponseJwt(String token, String type, String name, Collection<? extends GrantedAuthority> roles) {
        this.token = token;
        this.type = type;
        this.name = name;
        this.roles = roles;
    }

    public ResponseJwt(String token, String name, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
        this.name = name;
        this.roles = authorities;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<? extends GrantedAuthority> getRoles() {
        return roles;
    }

    public void setRoles(Collection<? extends GrantedAuthority> roles) {
        this.roles = roles;
    }
}
