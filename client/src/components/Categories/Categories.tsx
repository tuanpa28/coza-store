/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ICategory from "../../interfaces/category";
import { getCategories } from "../../api/category";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  // Get Categories
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await getCategories();
        setCategories(categories.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="mx-auto-300 product-object">
      {categories?.map((cate) => (
        <div key={cate._id} className="sup-product-object">
          <div className="imgsup-product-object">
            {cate.name === "Women" && (
              <img
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685292825/coza-store/gixtp9jtyxxwybu4q5q3.webp"
                alt=""
              />
            )}
            {cate.name === "Men" && (
              <img
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685292825/coza-store/r5ejzfmfbd2uwhpfghz1.webp"
                alt=""
              />
            )}
            {cate.name === "Accessories" && (
              <img
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685292825/coza-store/a8erpqfrm3nzsjcm9qtb.webp"
                alt=""
              />
            )}
          </div>
          <Link to={""}>
            <div
              // onClick={() => onHandleGetOneCategory(cate._id)}
              className="textsup-product-object"
            >
              <div style={{ marginTop: "30px" }}>
                <h4>{cate.name}</h4>
                {cate.name === "Accessories" ? (
                  <p>New Trend</p>
                ) : (
                  <p>Spring 2023</p>
                )}
              </div>
              <div className="sn">
                <h5>SHOP NOW</h5>
                <span></span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
