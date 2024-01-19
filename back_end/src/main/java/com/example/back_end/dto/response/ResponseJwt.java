package com.example.back_end.dto.response;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class ResponseJwt {
    private String token;
    private String type = "Bearer";

    public ResponseJwt() {
    }


    public ResponseJwt(String token) {
        this.token = token;
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

}
