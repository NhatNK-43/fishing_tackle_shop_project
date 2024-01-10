package com.example.back_end.dto.response;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class ResponseJwt {
    private String token;
    private String type = "Bearer";
    private Collection<? extends GrantedAuthority> roles;

    public ResponseJwt() {
    }

    public ResponseJwt(String token, String type, Collection<? extends GrantedAuthority> roles) {
        this.token = token;
        this.type = type;
        this.roles = roles;
    }

    public ResponseJwt(String token, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
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

    public Collection<? extends GrantedAuthority> getRoles() {
        return roles;
    }

    public void setRoles(Collection<? extends GrantedAuthority> roles) {
        this.roles = roles;
    }
}
