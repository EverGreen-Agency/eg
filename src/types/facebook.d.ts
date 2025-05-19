interface Window {
  fbq: (
    event: string,
    action: string,
    params?: Record<string, any>
  ) => void;
  _fbq: any;
} 