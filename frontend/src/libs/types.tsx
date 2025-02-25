export type PayButtonProps = {
  isLoading: boolean;
  isSuccess: boolean;
};

export type DishProps = {
  id: number;
  imagePath: string;
  name: string;
  numberOfStars: number;
  snippet: string;
  price: number;
  inCart: boolean;
  quantity?: number;
  category_id: number;
};
