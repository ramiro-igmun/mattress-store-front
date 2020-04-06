export interface Item {
  id: number | string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  outstanding?: boolean;
}