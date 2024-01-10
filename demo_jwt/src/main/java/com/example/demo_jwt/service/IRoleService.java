package com.example.demo_jwt.service;

import com.example.demo_jwt.model.Role;
import com.example.demo_jwt.model.RoleName;

import java.util.Optional;

public interface IRoleService {
    Optional<Role> findByName(RoleName name);
}
