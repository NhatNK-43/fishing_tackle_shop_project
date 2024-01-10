package com.example.back_end.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "order_details")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "selling_price", nullable = false)
    private Double sellingPrice;

    @Column(name = "selling_quantity", nullable = false)
    private Integer sellingQuantity;

    @OneToOne
    @JoinColumn(name = "size_detail_id", referencedColumnName = "id")
    private SizeDetail sizeDetail;

    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    private Order order;
}
