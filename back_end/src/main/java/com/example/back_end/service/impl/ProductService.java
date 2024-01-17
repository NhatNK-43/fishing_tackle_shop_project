package com.example.back_end.service.impl;

import com.example.back_end.dto.productDto.IProductDto;
import com.example.back_end.repository.IProductRepository;
import com.example.back_end.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Page<IProductDto> getPageProduct(Pageable pageable, String productTypeName, Double gtePrice, Double ltePrice, String keyword) {
        try {
            return productRepository.getPageProduct(pageable, "%" + productTypeName + "%", gtePrice, ltePrice, "%" + keyword + "%");
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public IProductDto getProductByProductCode(String productCode) {
        try {
            return productRepository.getProductByProductCode(productCode);
        } catch (Exception e) {
            return null;
        }
    }
}
