package com.example.back_end.repository;

import com.example.back_end.model.Role;
import com.example.back_end.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IRoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(RoleName name);
}
