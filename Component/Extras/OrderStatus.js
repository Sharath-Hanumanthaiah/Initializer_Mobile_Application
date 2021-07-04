import React from 'react';
import {AppColor} from './Colors';
export default function GetCurrentOrderStatus(orderStatus, paymentMode) {
    // Cash on delivery -- we don't show payment status for COD
    console.log("in orderstatus", orderStatus);
    if(paymentMode !== 'M') {
        if(orderStatus.payment === 'P') {
            return {
                text: "Processing Payment",
                status: AppColor.Warning
            };
        } else if (orderStatus.payment === 'F') {
            return {
                text: "Payment failed",
                status: AppColor.Warning
            };
        }
    }
    if(!orderStatus.confirmed) {
        return {
            text: "Processing Order",
            status: AppColor.Warning
        };
    }
    if(!orderStatus.delivered) {
        return {
            text: "Confirmed",
            status: AppColor.Green
        };
    }
    if(orderStatus.delivered) {
        return {
            text: "delivered",
            status: AppColor.Green
        };
    }
}