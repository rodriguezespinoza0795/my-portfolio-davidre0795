type TProductAttributes = {
  description: string;
  shape: string;
  hardiness: string;
  taste: string;
};

type TProduct = {
  id: string;
  name: string;
  sku: string;
  price: number;
  image: string;
  attributes: TProductAttributes;
};

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
