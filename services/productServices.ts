import { ProductFilterParams, ProductFilterResult } from "~/models/search/ProductSearchResultDTo";
import { FetchApi } from "~/utilities/customApiFetch";
import { ApiResponse } from "~~/models/ApiResponse";
import { baseFilterResult } from "~~/models/base/baseFilterResult";
import { ProductCardDto } from "~~/models/ProductCard";
// import { SingleProductDto } from "~~/models/products/singleProductDto";
// import { RemoveEmptyProps } from "~~/utilities/objectutils";

export const getProductByFilter = (
  filterParams: ProductFilterParams
): Promise<ApiResponse<ProductFilterResult>> => {
//   RemoveEmptyProps(filterParams);
  return FetchApi(`/product/shop`, {
    method: "Get",
    params: filterParams,
  });
};