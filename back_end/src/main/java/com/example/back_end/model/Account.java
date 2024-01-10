package com.example.back_end.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false, unique = true, columnDefinition = "varchar(50)")
    private String username;

    @JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "role_accounts",
            joinColumns = @JoinColumn(name = "account_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roleSet;

    @JsonBackReference
    @OneToMany(mappedBy = "account")
    private Set<Order> orderSet;

    @JsonBackReference
    @OneToMany(mappedBy = "account")
    private Set<Cart> cartSet;

    public Account(String username, String encode) {
        this.username = username;
        this.password = encode;
    }
}
