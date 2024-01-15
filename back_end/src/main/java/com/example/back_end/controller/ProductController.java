package com.example.back_end.controller;

import com.example.back_end.dto.productDto.IProductDto;
import com.example.back_end.model.ProductType;
import com.example.back_end.service.IProductService;
import com.example.back_end.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private IProductTypeService productTypeService;
    @Autowired
    private IProductService productService;

    @GetMapping("/product-types")
    public ResponseEntity<List<ProductType>> getAllProductType() {
        List<ProductType> productTypeList = productTypeService.getAllProductType();
        if (productTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(productTypeList, HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<Page<IProductDto>> getPageProduct(@RequestParam(name = "page") Integer page,
                                                            @RequestParam(name = "productTypeName", defaultValue = "") String productTypeName,
                                                            @RequestParam(name = "gtePrice", defaultValue = "0") Double gtePrice,
                                                            @RequestParam(name = "ltePrice", defaultValue = "90000000") Double ltePrice,
                                                            @RequestParam(name = "keyword", defaultValue = "") String keyword) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<IProductDto> productDtoPage = productService.getPageProduct(pageable, productTypeName, gtePrice, ltePrice, keyword);
        if (productDtoPage==null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(productDtoPage, HttpStatus.OK);
    }
}
