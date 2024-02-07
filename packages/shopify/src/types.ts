import type { TFlow } from "@bot-whatsapp/bot/dist/types";

export type AddonConfig = {
  shopifyApyKey: string;
  shopifyCookie: string;
  flows: SmtartFlow[];
  callbackAgent: () => Promise<void>
};


export type SmtartFlow = {
  name: string;
  description: string;
  flow: TFlow<any, any>
}

export type Options = {
  model: "gpt-3.5-turbo-16k"|string;
  temperature: number;
  apiKey: string;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
}

export type ConversationalRetrievalQAChainInput = {
  question: string;
  chat_history: [string, string][];
};

export interface Products {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: Date;
  handle: string;
  updated_at: Date;
  published_at: Date;
  template_suffix: null;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: Variant[];
  options: Option[];
  images: Image[];
  image: Image;
}

export interface Image {
  id: number;
  alt: null;
  position: number;
  product_id: number;
  created_at: Date;
  updated_at: Date;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: any[];
}

export interface Option {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: any[];
}

export interface Variant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: string;
  position: number;
  inventory_policy: string;
  compare_at_price: null;
  fulfillment_service: string;
  inventory_management: null;
  option1: string;
  option2: null;
  option3: null;
  created_at: Date;
  updated_at: Date;
  taxable: boolean;
  barcode: null;
  grams: number;
  image_id: null;
  weight: number;
  weight_unit: string;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  requires_shipping: boolean;
  admin_graphql_api_id: string;
}
