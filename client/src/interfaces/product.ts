import ICategory from "./category";
interface IProduct {
  _id?: string;
  name: string;
  price: number;
  image: {
    url: string;
    publicId: string;
  };
  album: [
    {
      url: string;
      publicId: string;
    }
  ];
  quantity: number;
  description: string;
  categoryId?: ICategory;
}

export default IProduct;
