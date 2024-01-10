package com.example.back_end.service;

import com.example.back_end.model.Role;
import com.example.back_end.model.RoleName;

import java.util.List;
import java.util.Optional;

public interface IRoleService {
    Optional<Role> findByName(RoleName name);
    List<Role> findRole();
}
