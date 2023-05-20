package com.radu.ecommerce.dto;

import lombok.Data;

@Data
public class PurchaseResponse {

    // only generates constructor for final fields - Lombok
    private final String orderTrackingNumber;

}
