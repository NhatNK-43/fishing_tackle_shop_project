package com.example.back_end.dto.cartDto;

public class CartDto {
    private Long id;
    private Integer quantity;
    private Long accountId;
    private Long sizeDetailId;

    public CartDto() {
    }

    public CartDto(Integer quantity, Long accountId, Long sizeDetailId) {
        this.quantity = quantity;
        this.accountId = accountId;
        this.sizeDetailId = sizeDetailId;
    }

    public CartDto(Long id, Integer quantity, Long accountId, Long sizeDetailId) {
        this.id = id;
        this.quantity = quantity;
        this.accountId = accountId;
        this.sizeDetailId = sizeDetailId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public Long getSizeDetailId() {
        return sizeDetailId;
    }

    public void setSizeDetailId(Long sizeDetailId) {
        this.sizeDetailId = sizeDetailId;
    }
}
