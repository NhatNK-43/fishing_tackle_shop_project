package com.example.back_end.dto.productDto;

import com.example.back_end.model.Image;
import com.example.back_end.model.ProductType;
import com.example.back_end.model.Promotion;
import com.example.back_end.model.SizeDetail;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.Set;

public class ProductDto {
    private Long id;

    private String productCode;

    private String name;

    private String description;

    private Boolean deleted;

    private String manufacture;


    private Set<Image> imageSet;

    private Promotion promotion;

    private ProductType productType;

    private Set<SizeDetail> sizeDetailSet;
}
