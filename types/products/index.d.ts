interface IProduct {
  _id: string;
  title: string;
  serial: number;
  author: string;
  price: number;
  src: string;
}

interface ICartProduct extends IProduct {
  count: number;
}
