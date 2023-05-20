package com.radu.ecommerce.service;

import com.radu.ecommerce.dto.Purchase;
import com.radu.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
