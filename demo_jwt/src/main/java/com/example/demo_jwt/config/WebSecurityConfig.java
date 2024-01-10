package com.example.demo_jwt.config;

import com.example.demo_jwt.security.jwt.JwtEntryPoint;
import com.example.demo_jwt.security.jwt.JwtTokenFilter;
import com.example.demo_jwt.security.userprincal.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
    @Autowired
    private UserDetailService userDetailService;

    @Autowired
    private JwtEntryPoint jwtEntryPoint;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public JwtTokenFilter authenticationJwtTokenFilter() {
        return new JwtTokenFilter();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests((requests) -> requests
//                        Trang không cần đăng nhập
                                .requestMatchers("/api/auth/**").permitAll()
                                .anyRequest().authenticated()

//                        Trang cần có quyền hợp lệ

//                                .requestMatchers("/api/notification/list/**", "/api/notification/view", "/api/customer/**", "/api/customerType", "/api/overview/**").hasAnyRole("WAREHOUSE", "SALES", "MANAGER")
//                                .requestMatchers("/api/notification/add/**", "/api/sales-report/**").hasRole("MANAGER")
//                                .requestMatchers("/api/sale/**", "/api/sales/**").hasRole("SALE")
//                                .requestMatchers("/api/product/create").hasRole("WAREHOUSE")
//                                .requestMatchers("/api/warehouses/**").hasRole("WAREHOUSE")
//                                .requestMatchers("/api/size-detail/**").hasRole("WAREHOUSE")
//                                .requestMatchers("/api/sales-report/**").hasRole("MANAGER")
//                                .requestMatchers("/api/invoices/**", "/api/sales/**").hasRole("SALE")
//                                .requestMatchers("/api/employee/**", "/api/product/list").authenticated()
//                                .requestMatchers("/api/product/**").authenticated()
//                                .requestMatchers("/api/employee/**").authenticated()
//                                .requestMatchers("/api/changePassword").authenticated()
//                                .requestMatchers("/api/customer/**").authenticated()
//                                .anyRequest().authenticated()
                )
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class)
                .formLogin((form) -> form.disable())
                .logout((logout) -> logout.permitAll());

        return http.build();
    }
}
