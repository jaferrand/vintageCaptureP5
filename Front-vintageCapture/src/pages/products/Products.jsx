import { useContext, useEffect } from "react";
import ListProducts from "../../components/listProducts/ListProducts";
import ProductContext from "../../context/products/ProductContext";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts();
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Nuestros Productos
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ListProducts key={product.id} product={product} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
