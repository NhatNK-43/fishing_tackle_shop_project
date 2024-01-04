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
@Table(name = "sizes")
public class Size {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "size_type_id", referencedColumnName = "id")
    private SizeType sizeType;

    @JsonBackReference
    @OneToMany(mappedBy = "size")
    private Set<SizeDetail> sizeDetailSet;
}
