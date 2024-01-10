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
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "product_code", nullable = false, unique = true, columnDefinition = "varchar(50)")
    private String productCode;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false, columnDefinition = "longtext")
    private String description;

    @Column(name = "image", nullable = false, columnDefinition = "longtext")
    private String image;

    @Column(name = "is_deleted", columnDefinition = "bit(1) default 0")
    private Boolean deleted;

    @ManyToOne
    @JoinColumn(name = "promotion_id", referencedColumnName = "id")
    private Promotion promotion;

    @ManyToOne
    @JoinColumn(name = "product_type_id", referencedColumnName = "id")
    private ProductType productType;

    @JsonBackReference
    @OneToMany(mappedBy = "product")
    private Set<SizeDetail> sizeDetailSet;
}
