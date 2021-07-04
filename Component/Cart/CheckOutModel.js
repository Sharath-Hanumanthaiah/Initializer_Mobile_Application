import Address from "../Address/Address"

export default class CheckOutModel {
    address
    cart 
    totalAmount
    orderId
    constructor() {
        this.address = new Address()
        this.cart = []
    }
}