package com.example.back_end.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_code", nullable = false, unique = true, columnDefinition = "varchar(50)")
    private String userCode;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(100)")
    private String name;

    @Column(name = "birthday", columnDefinition = "date")
    private Date birthday;

    @Column(name = "gender", columnDefinition = "bit(1)")
    private Boolean gender;

    @Column(name = "phone", nullable = false, unique = true, columnDefinition = "varchar(50)")
    private String phone;

    @Column(name = "email", nullable = false, unique = true, columnDefinition = "varchar(80)")
    private String email;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "is_deleted", columnDefinition = "bit(1) default 0")
    private Boolean deleted;

    @ManyToOne
    @JoinColumn(name = "customer_type_id", referencedColumnName = "id")
    private CustomerType customerType;

    @OneToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;
}
