package com.example.back_end.service.impl;

import com.example.back_end.dto.cartDto.CartDto;
import com.example.back_end.dto.cartDto.ICartDto;
import com.example.back_end.repository.ICartRepository;
import com.example.back_end.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Override
    public List<ICartDto> getCart(String username) {
            try {
                return cartRepository.getCart(username);
            } catch (Exception e){
                return new ArrayList<>();
            }
    }

    @Override
    public Boolean addToCart(CartDto cartDto) {
        try {
            cartRepository.addDuplicateProductToCart(cartDto);
            return true;
        } catch (Exception e){
            try {
                cartRepository.addToCart(cartDto);
                return true;
            } catch (Exception exception){
                return false;
            }
        }
    }

    @Override
    public Boolean updateProductInCart(CartDto cartDto) {
        try {
            cartRepository.updateProductInCart(cartDto);
            return true;
        } catch (Exception e){
            return false;
        }
    }

    @Override
    public Boolean deleteProductInCart(Long id) {
        try {
            cartRepository.deleteById(id);
            return true;
        } catch (Exception e){
            return false;
        }
    }
}
