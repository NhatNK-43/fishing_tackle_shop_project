package com.example.demo_jwt.service.impl;

import com.example.demo_jwt.model.Role;
import com.example.demo_jwt.model.RoleName;
import com.example.demo_jwt.repository.IRoleRepository;
import com.example.demo_jwt.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;
    @Override
    public Optional<Role> findByName(RoleName name) {
        return roleRepository.findByName(name);
    }
}
