package com.example.back_end.service;

import com.example.back_end.dto.productDto.IProductDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface IProductService {
    Page<IProductDto> getPageProduct(Pageable pageable,String productTypeName, Double gtePrice,Double ltePrice,String keyword);

    IProductDto getProductByProductCode(String productCode);
}
