package com.example.back_end.security.jwt;

import com.example.back_end.security.userprincal.AccountPrinciple;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtProvider {
    private static final Logger logger = (Logger) LoggerFactory.getLogger(JwtProvider.class);
    private String jwtSecret = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    private Integer jwtExpiration = 86400;//seconds

    public String createToken(Authentication authentication) {
        AccountPrinciple accountPrinciple = (AccountPrinciple) authentication.getPrincipal();
        // Tạo một đối tượng Map để chứa các thông tin trong phần payload của JWT
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", accountPrinciple.getAuthorities());
        return Jwts.builder()
                .setSubject(accountPrinciple.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + jwtExpiration * 1000))
                .signWith(key(), SignatureAlgorithm.HS256)
                .addClaims(claims)
                .setHeaderParam("typ","JWT")
                .compact();
    }

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }
    public Boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(key()).build().parseClaimsJws(token);
            return true;
        } catch (SignatureException e) {
            logger.error("Invalid JWT signature -> Message: {}", e);
        } catch (MalformedJwtException e) {
            logger.error("Invalid format Token -> Message: {}", e);
        } catch (ExpiredJwtException e) {
            logger.error("Expired JWT token -> Message: {}", e);
        } catch (UnsupportedJwtException e) {
            logger.error("Unsupported JWT token -> Message: {}", e);
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty --> Message {}", e);
        }
        return false;
    }

    public String getUerNameFromToken(String token) {
        String userName = Jwts.parser().setSigningKey(key()).build().parseClaimsJws(token).getBody().getSubject();
        return userName;
    }
}
