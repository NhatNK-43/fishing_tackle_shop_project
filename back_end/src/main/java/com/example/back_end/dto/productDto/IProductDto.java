package com.example.back_end.dto.productDto;

public interface IProductDto {
    Long getId();
    String getProductCode();
    String getName();
   String getDescription();
   String getManufacturer();
   Double getPromotion();
   String getProductTypeName();
   Double getPrice();
   String getSizeName();

   String getImageSet();
}
