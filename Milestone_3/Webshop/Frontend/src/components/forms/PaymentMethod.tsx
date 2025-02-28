import React, { useState } from "react";
import styles from "./PaymentMethod.module.scss";

const PaymentMethod = ({ data, onChange }: any) => {
  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ method: event.target.value });
  };

  return (
    <div className={styles.paymentMethodContainer}>
      <h2 className={styles.title}>Choose a Payment Method</h2>

      <div className={styles.paymentOptions}>
        <label className={styles.radioLabel}>
          <input type="radio" value="paypal" checked={data.method === "paypal"} onChange={handlePaymentMethodChange} />
          PayPal
        </label>
        <label className={styles.radioLabel}>
          <input type="radio" value="creditcard" checked={data.method === "creditcard"} onChange={handlePaymentMethodChange} />
          Credit Card
        </label>
      </div>

      {data.method === "paypal" ? (
        <div className={styles.paypalFields}>
          <h3>PayPal</h3>
          <label>
            Email Address:
            <input
              type="email"
              name="paypalEmail"
              placeholder="Your PayPal Email"
              value={data.paypalEmail}
              onChange={(e) => onChange({ paypalEmail: e.target.value })}
              className={styles.inputField}
            />
          </label>
        </div>
      ) : (
        <div className={styles.creditCardFields}>
          <h3>Credit Card</h3>
          <label>
            Card Number:
            <input
              type="text"
              name="creditCardNumber"
              placeholder="1234 5678 9012 3456"
              value={data.creditCardNumber}
              onChange={(e) => onChange({ creditCardNumber: e.target.value })}
              className={styles.inputField}
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="month"
              name="expiryDate"
              value={data.expiryDate}
              onChange={(e) => onChange({ expiryDate: e.target.value })}
              className={styles.inputField}
            />
          </label>
          <label>
            CVC:
            <input
              type="text"
              name="cvc"
              placeholder="123"
              value={data.cvc}
              onChange={(e) => onChange({ cvc: e.target.value })}
              className={styles.inputField}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
