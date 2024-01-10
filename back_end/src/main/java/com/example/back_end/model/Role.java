package com.example.back_end.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(name = "name", nullable = false, unique = true, columnDefinition = "varchar(50)")
    private RoleName name;

    @ManyToMany(mappedBy = "roleSet")
    private Set<Account> accountSet;
}
