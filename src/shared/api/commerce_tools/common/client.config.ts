const env = import.meta.env;

const scopes = {
  create_anonymous_token: 'create_anonymous_token',
  view_discount_codes: 'view_discount_codes',
  view_orders: 'view_orders:',
  manage_my_payments: 'manage_my_payments',
  view_cart_discounts: 'view_cart_discounts',
  view_categories: 'view_categories',
  manage_my_quote_requests: 'manage_my_quote_requests',
  view_published_products: 'view_published_products',
  introspect_oauth_tokens: 'introspect_oauth_tokens',
  manage_my_profile: 'manage_my_profile',
  manage_my_business_units: 'manage_my_business_units',
  manage_my_quotes: 'manage_my_quotes',
  manage_customers: 'manage_customers',
  manage_my_shopping_lists: 'manage_my_shopping_lists',
  manage_my_orders: 'manage_my_orders',
  view_payments: 'view_payments'
};

const getRightUrl = (url: string) => {
  return url[url.length - 1] == '/' ? url.slice(0, -1) : url;
};

const client = {
  project_key: env.VITE_CTP_PROJECT_KEY,
  client_id: env.VITE_CTP_CLIENT_ID,
  secret: env.VITE_CTP_CLIENT_SECRET,
  apiUrl: getRightUrl(env.VITE_CTP_API_URL),
  authUrl: getRightUrl(env.VITE_CTP_AUTH_URL),
  scope: scopes
};

export default client;
