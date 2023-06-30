// import {
//   useAddProductMutation,
//   useGetProductsQuery,
// } from "../../store/api/Product";
// import { useAppDispatch } from "../../app/hook";

// const Demo = () => {
//   const dispatch = useAppDispatch();
//   const { data, isLoading, error } = useGetProductsQuery();
//   const [addProduct, result] = useAddProductMutation();

//   if (isLoading) return <div>...loading</div>;
//   if (error) return <div>Data is not fetching</div>;
//   console.log(data?.products?.data);
//   return (
//     <div>
//       <button onClick={() => dispatch(addProduc({ name: "ahihi" }))}>
//         {result?.isLoading ? "loading..." : "Click"}
//       </button>
//     </div>
//   );
// };

// export default Demo;
