export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  discount: number;
  discounted_price: number;
  installment_value: number;
  max_installments: number;
  has_interest: boolean;
  highlight_status: ProductHighlightStatus;
  store_name: string;
  image_link: string;
  category?: string;
  is_deleted?: boolean;
  created_at?: string;
  updated_at?: string;
  arrive_today: boolean;
  total_reviews: number;
  review_score: number;
}

export type ProductHighlightStatus = 'BEST_SELLER' | 'DAILY_OFFER' | null;
