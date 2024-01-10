package com.example.back_end.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "customer_type")
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false, unique = true, columnDefinition = "varchar(50)")
    private String name;

    @Column(name = "discount", nullable = false)
    private Double discount;

    @JsonBackReference
    @OneToMany(mappedBy = "customerType")
    private Set<Customer> customerSet;
}
