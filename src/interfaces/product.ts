type Category = 'pequeño' | 'estandar' | 'bolsaza' | 'familiar';

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: Category;
}

export interface IUpdateProduct {
  name?: string;
  price?: number;
  stock?: number;
  category?: Category;
}
