package com.radu.ecommerce.dto;

import com.radu.ecommerce.entity.Address;
import com.radu.ecommerce.entity.Customer;
import com.radu.ecommerce.entity.Order;
import com.radu.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
