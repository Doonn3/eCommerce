const env = import.meta.env;

const getRightUrl = (url: string) => {
  if (url === undefined) {
    throw new Error('Url undefined');
  }

  return url.endsWith('/') ? url.slice(0, -1) : url;
};

const project_key = env.VITE_CTP_PROJECT_KEY;
const client_id = env.VITE_CTP_CLIENT_ID;
const secret = env.VITE_CTP_CLIENT_SECRET;
const apiUrl = getRightUrl(env.VITE_CTP_API_HOST);
const authUrl = getRightUrl(env.VITE_CTP_AUTH_HOST);

const scope = {
  create_anonymous_token: `create_anonymous_token:${project_key}`,
  view_discount_codes: `view_discount_codes:${project_key}`,
  view_orders: `view_orders:${project_key}`,
  manage_my_payments: `manage_my_payments:${project_key}`,
  view_cart_discounts: `view_cart_discounts:${project_key}`,
  view_categories: `view_categories:${project_key}`,
  manage_my_quote_requests: `manage_my_quote_requests:${project_key}`,
  view_published_products: `view_published_products:${project_key}`,
  introspect_oauth_tokens: `introspect_oauth_tokens:${project_key}`,
  manage_my_profile: `manage_my_profile:${project_key}`,
  manage_my_business_units: `manage_my_business_units:${project_key}`,
  manage_my_quotes: `manage_my_quotes:${project_key}`,
  manage_customers: `manage_customers:${project_key}`,
  manage_my_shopping_lists: `manage_my_shopping_lists:${project_key}`,
  manage_my_orders: `manage_my_orders:${project_key}`,
  view_payments: `view_payments:${project_key}`,
  view_products: `view_products:${project_key}`
};

export const config = {
  project_key,
  client_id,
  secret,
  apiUrl,
  authUrl,
  scope
};
