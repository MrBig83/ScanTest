import IProduct from "./IProduct";

export default interface IProductResponse {
  results: IProduct[];
  total: number;
}