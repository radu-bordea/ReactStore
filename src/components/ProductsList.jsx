import { Link, useLoaderData } from "react-router-dom"; // Importing Link and useLoaderData from react-router-dom
import { formatPrice } from "../utils"; // Importing a utility function for formatting prices

const ProductsList = () => {
  const { products } = useLoaderData(); // Using useLoaderData to fetch the products data

  return (
    <div className="mt-12 grid gap-y-8">
      {/* Applying a CSS grid with a top margin and gap between rows */}
      {products.map((product) => {
        // Iterating over the products array
        const { title, price, image, company } = product.attributes; // Destructuring attributes of each product
        const dollarsAmmount = formatPrice(price); // Formatting the price to a dollar amount
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            // Setting up the link to the product's detail page with styling and hover effects
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              // Displaying the product image with styling and hover effects
            />
            <div className="ml-0 sm:ml-16">
              {/* Container for product details */}
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              {/* Displaying the product title */}
              <h3 className="capitalize text-medium text-neutral-500">
                {company}
              </h3>
              {/* Displaying the product company */}
              <p className="font-medium ml-0 sm:ml-auto text-lg">
                {dollarsAmmount}
              </p>
              {/* Displaying the formatted price */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList; // Exporting the ProductsList component
