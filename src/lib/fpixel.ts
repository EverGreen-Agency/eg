export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '';

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  }
};

// Eventos específicos para a página de finanças
export const trackAddToCart = (currency = 'BRL', value: number) => {
  event('AddToCart', { currency, value });
};

export const trackInitiateCheckout = (currency = 'BRL', value: number) => {
  event('InitiateCheckout', { currency, value });
};

export const trackPurchase = (currency = 'BRL', value: number) => {
  event('Purchase', { currency, value });
}; 