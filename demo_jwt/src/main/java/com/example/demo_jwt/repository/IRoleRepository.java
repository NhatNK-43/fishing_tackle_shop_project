package com.example.demo_jwt.repository;

import com.example.demo_jwt.model.Role;
import com.example.demo_jwt.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IRoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(RoleName name);
}
