import React, { useState } from "react";
import PaymentMethod from "../components/forms/PaymentMethod";
import AddressInformation from "../components/forms/AddressInformation";
import styles from "./Checkout.module.scss";
import { useStore } from "../store/store";
import ApiService from "../api/ApiService";

const Checkout = () => {
    const { cart, products } = useStore();

  const [addressData, setAddressData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    country: "",
    state: "",
    zip: "",
    address: "",
  });

  const [paymentData, setPaymentData] = useState({
    method: "paypal",
    paypalEmail: "",
    creditCardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((product) => product.id === item.productId);
    const quantity = Number(item.quantity) || 0;
    return sum + product!.price * quantity;
  }, 0);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (data: any) => {
    setPaymentData({ ...paymentData, ...data });
  };

  const handleSubmit = async () => {
    const orderData = {
      orderNumber: `ORD-${Date.now()}`, // Eine einfache, einzigartige Bestellnummer
      totalAmount: totalPrice,
      status: "PENDING", // Standardstatus
      paymentMethod: paymentData.method,
    };
  
    try {
      const response = await ApiService.post("/orders/", orderData);
      console.log("Bestellung erfolgreich erstellt:", response);
    } catch (error) {
      console.error("Fehler beim Erstellen der Bestellung:", error);
    }
  };

  return (
    <div className={styles.container}>
      <AddressInformation data={addressData} onChange={handleAddressChange} />
      <PaymentMethod data={paymentData} onChange={handlePaymentChange} />
      <button className={styles.order} onClick={handleSubmit}>
        Bestellen
      </button>
    </div>
  );
};

export default Checkout;
