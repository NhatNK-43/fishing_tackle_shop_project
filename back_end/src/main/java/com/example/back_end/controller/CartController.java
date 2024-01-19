package com.example.back_end.controller;

import com.example.back_end.dto.cartDto.CartDto;
import com.example.back_end.dto.cartDto.ICartDto;
import com.example.back_end.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/carts")
public class CartController {
    @Autowired
    private ICartService cartService;

    @GetMapping("")
    public ResponseEntity<List<ICartDto>> getCart(@RequestParam(name = "username") String username){
        List<ICartDto> cartDtoList = cartService.getCart(username);
        if(cartDtoList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(cartDtoList,HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Void> addToCart(@RequestBody CartDto cartDto){
        Boolean status = cartService.addToCart(cartDto);
        if (!status){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("")
    public ResponseEntity<Void> updateProductInCart(@RequestBody CartDto cartDto){
        Boolean status = cartService.updateProductInCart(cartDto);
        if (!status){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> updateProductInCart(@PathVariable(name = "id") Long id){
        Boolean status = cartService.deleteProductInCart(id);
        if (!status){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
