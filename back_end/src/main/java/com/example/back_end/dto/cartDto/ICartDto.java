package com.example.back_end.dto.cartDto;

public interface ICartDto {
    Long getCartId();
    Long getAccountId();
    Long getSizeDetailId();
    String getProductCode();
    Integer getQuantity();
    Double getPrice();
    String getSizeName();
    String getName();
    Double getPromotion();
    String getImageSet();
}
