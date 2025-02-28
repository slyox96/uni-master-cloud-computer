import React, { useState } from 'react';
import styles from './PaymentMethod.module.scss';

const PaymentMethod: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'creditcard'>('paypal');

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value as 'paypal' | 'creditcard');
  };

  return (
    <div className={styles.paymentMethodContainer}>
      <h2 className={styles.title}>Wählen Sie eine Zahlungsmethode</h2>

      <div className={styles.paymentOptions}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={handlePaymentMethodChange}
          />
          PayPal
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            value="creditcard"
            checked={paymentMethod === 'creditcard'}
            onChange={handlePaymentMethodChange}
          />
          Kreditkarte
        </label>
      </div>

      {paymentMethod === 'paypal' ? (
        <div className={styles.paypalFields}>
          <h3>PayPal</h3>
          <label>
            E-Mail-Adresse:
            <input type="email" placeholder="Ihre PayPal E-Mail" className={styles.inputField} />
          </label>
        </div>
      ) : (
        <div className={styles.creditCardFields}>
          <h3>Kreditkarte</h3>
          <label>
            Kartennummer:
            <input type="text" placeholder="1234 5678 9012 3456" className={styles.inputField} />
          </label>
          <label>
            Ablaufdatum:
            <input type="month" className={styles.inputField} />
          </label>
          <label>
            CVC:
            <input type="text" placeholder="123" className={styles.inputField} />
          </label>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
