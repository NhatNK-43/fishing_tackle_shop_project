package com.example.back_end.service.impl;

import com.example.back_end.service.IRoleService;
import com.example.back_end.model.Role;
import com.example.back_end.model.RoleName;
import com.example.back_end.repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;
    @Override
    public Optional<Role> findByName(RoleName name) {
        return roleRepository.findByName(name);
    }

    @Override
    public List<Role> findRole() {
        return roleRepository.findAll();
    }
}
