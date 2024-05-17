import { Link, useLoaderData } from "react-router-dom"; // Importing Link and useLoaderData from react-router-dom
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData(); // Using useLoaderData to fetch the products data

  return (
    <div className="mt-12 grid gap-y-8">
      {/* Applying a CSS grid with gap and responsive column settings */}
      {products.map((product) => {
        // Iterating over the products array
        const { title, price, image, company } = product.attributes; // Destructuring attributes of each product
        const dollarsAmmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h3 className="capitalize text-medium text-neutral-content">
                {company}
              </h3>
              <p className="font-medium ml-0 sm:ml-auto text-lg">
                {dollarsAmmount}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList; // Exporting the ProductsGrid component
