package com.example.back_end.repository;

import com.example.back_end.dto.productDto.IProductDto;
import com.example.back_end.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Product, Long> {
//    @Query(value = "select p.product_code as productCode, p.name, p.description, p.manufacturer, pt.name as productTypeName, pm.percent as promotion, sd.price, s.name as sizeName\n" +
//            "from products p \n" +
//            "join product_types pt on p.product_type_id = pt.id \n" +
//            "join promotions pm on p.promotion_id = pm.id \n" +
//            "join size_details sd on p.id = sd.product_id\n" +
//            "join sizes s on s.id = sd.size_id\n" +
//            "where p.is_deleted = 0\n" +
//            "and pt.name like :productTypeName\n" +
//            "and (sd.price between :gtePrice and :ltePrice) \n" +
//            "and (p.name like :keyword or p.manufacturer like :keyword)",
//            nativeQuery = true)
//    Page<IProductDto> getAllProduct(Pageable pageable,
//                                    @Param("productTypeName") String productTypeName,
//                                    @Param("gtePrice") Double gtePrice,
//                                    @Param("ltePrice") Double ltePrice,
//                                    @Param("keyword") String keyword);

    @Query(value = "select p.product_code as productCode, p.name, p.description, p.manufacturer, pt.name as productTypeName, pm.percent as promotion, group_concat(i.path_image) as imageSet\n" +
            "from products p \n" +
            "join product_types pt on p.product_type_id = pt.id \n" +
            "join promotions pm on p.promotion_id = pm.id \n" +
            "join size_details sd on p.id = sd.product_id\n" +
            "join sizes s on s.id = sd.size_id\n" +
            "join images i on i.product_id = p.id\n" +
            "where p.is_deleted = 0\n" +
            "and pt.name like :productTypeName\n" +
            "and (sd.price between :gtePrice and :ltePrice) \n" +
            "and (p.name like :keyword or p.manufacturer like :keyword)\n" +
            "group by p.product_code",
            nativeQuery = true)
    Page<IProductDto> getPageProduct(Pageable pageable,
                                    @Param("productTypeName") String productTypeName,
                                    @Param("gtePrice") Double gtePrice,
                                    @Param("ltePrice") Double ltePrice,
                                    @Param("keyword") String keyword);
}
