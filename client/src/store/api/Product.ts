// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const productApi = createApi({
//   reducerPath: "productApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://coza-store-be.vercel.app/api",
//   }),
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => `/products`,
//     }),
//     addProduct: builder.mutation({
//       query: (product) => {
//         return {
//           url: "/products",
//           method: "POST",
//           body: product,
//         };
//       },
//     }),
//   }),
// });

// export const { useGetProductsQuery, useAddProductMutation } = productApi;
