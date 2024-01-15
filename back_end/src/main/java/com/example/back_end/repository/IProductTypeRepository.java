package com.example.back_end.repository;

import com.example.back_end.model.Product;
import com.example.back_end.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductTypeRepository extends JpaRepository<ProductType, Long> {
}
