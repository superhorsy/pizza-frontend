import React from 'react';

import './stripe-button.styles.scss';
import { STRIPE_KEY, API_HOST } from '../../env';

const StripeCheckoutButton = ({price, onOpened, history, emptyCart}) => {
  const priceForStripe = price * 100; // 'cents'

  const onToken = async token => {
    const orderID = store.getState().cart.orderID; // accessing ID directly
    const payload = {
      orderID,
      stripeToken: token.id
    };

    const response = await fetch(`${API_HOST}/api/payment-success`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(payload)
    });
    const body = await response.json();
    alert(body.message);
    emptyCart();
    history.push('/');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='The Pin-up Pizza'
      currency='EUR'
      image='https://svgshare.com/i/F0p.svg'
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={STRIPE_KEY}
      opened={onOpened}
    />
  );
};

export default StripeCheckoutButton;
