package com.example.back_end.service;

import com.example.back_end.dto.cartDto.CartDto;
import com.example.back_end.dto.cartDto.ICartDto;

import java.util.List;

public interface ICartService {
    List<ICartDto> getCart(String username);

    Boolean addToCart(CartDto cartDto);

    Boolean updateProductInCart(CartDto cartDto);

    Boolean deleteProductInCart(Long id);
}
