package com.example.back_end.repository;

import com.example.back_end.dto.cartDto.CartDto;
import com.example.back_end.dto.cartDto.ICartDto;
import com.example.back_end.model.Cart;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, Long> {
    @Query(value = "select a.id as accountId, c.id as cartId, sd.id as sizeDetailId, p.product_code as productCode, \n" +
            "c.quantity, sd.price, s.name as sizeName, p.name, pm.percent as promotion, \n" +
            "group_concat(distinct i.path_image) as imageSet\n" +
            "from carts c \n" +
            "join accounts a on c.account_id = a.id\n" +
            "join size_details sd on c.size_detail_id = sd.id\n" +
            "join products p on sd.product_id = p.id\n" +
            "join images i on i.product_id = p.id\n" +
            "join promotions pm on p.promotion_id = pm.id\n" +
            "join sizes s on s.id = sd.size_id\n" +
            "where a.username = :username\n" +
            "group by p.product_code, s.name, sd.price, c.quantity, c.id\n" +
            "order by c.id desc", nativeQuery = true)
    List<ICartDto> getCart(@Param("username") String username);

    @Transactional
    @Modifying
    @Query(value = "insert into carts(quantity, account_id, size_detail_id)\n" +
            "value ( :#{#cartDto.quantity}, :#{#cartDto.accountId}, :#{#cartDto.sizeDetailId})", nativeQuery = true)
    void addToCart(@Param("cartDto")CartDto cartDto);

    @Transactional
    @Modifying
    @Query(value = "update carts \n" +
            "set quantity = quantity + :#{#cartDto.quantity}\n" +
            "where account_id = :#{#cartDto.accountId} and size_detail_id = :#{#cartDto.sizeDetailId} \n" +
            "and exists (select 1 from carts where account_id = :#{#cartDto.accountId} and :#{#cartDto.sizeDetailId)", nativeQuery = true)
    void addDuplicateProductToCart(@Param("cartDto")CartDto cartDto);

    @Transactional
    @Modifying
    @Query(value = "update carts \n" +
            "set quantity = :#{#cartDto.quantity}, size_detail_id = :#{#cartDto.sizeDetailId}\n" +
            "where id = :#{#cartDto.id} ", nativeQuery = true)
    void updateProductInCart(@Param("cartDto")CartDto cartDto);
}
