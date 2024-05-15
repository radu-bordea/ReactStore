import { Link, useLoaderData } from "react-router-dom"; // Importing Link and useLoaderData from react-router-dom

const ProductsGrid = () => {
  const { products } = useLoaderData(); // Using useLoaderData to fetch the products data

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Applying a CSS grid with gap and responsive column settings */}
      {products.map((product) => {
        // Iterating over the products array
        const { title, price, image } = product.attributes; // Destructuring attributes of each product
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`} // Setting the link to each product's detail page using its id
            className="card w-full shaddow-xl hover:shaddow-2xl transition duration-300"
            // Applying card styles and hover effects with transition
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
                // Styling the product image with responsive height, rounded corners, and cover mode
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              {/* Displaying the product title with capitalization and tracking-wide */}
              <span className="text-secondary">{price}</span>
              {/* Displaying the product price with secondary text color */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid; // Exporting the ProductsGrid component
