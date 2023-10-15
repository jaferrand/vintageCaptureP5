import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductContext from '../../../context/products/ProductContext';
import UserContext from '../../../context/UserContext';
import CartContext from '../../../context/cartContext/cartContext';

export default function Product() {
  const params = useParams();
  const { id } = params;

  const { addItemToCart } = useContext(CartContext);
  const ctxProduct = useContext(ProductContext);
  const { product, getProduct } = ctxProduct;

  const ctxUser = useContext(UserContext);
  const { info2 } = ctxUser;

  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(id);
    };

    fetchProduct();
  }, [id, getProduct]);

  // Verifica que product sea un array y contenga al menos un elemento
  if (!product || product.length === 0) {
    return <div>No se encontró el producto.</div>;
  }

  const { marca, modelo, year, formato_Pel, estado, precio, foto, stock } = product[0];

  const addProductToCart = () => {
    addItemToCart(product[0]);
  };

  return (
    <div className="mt-6 bg-white"> {/* Modificación para agregar espacio en la parte superior */}
      <div className="pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <Link to="/products" className="mr-2 text-sm font-medium text-gray-900">
                  Catálogo
                </Link>
                <svg
                  width="16"
                  height="50"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {marca}
              </a>
            </li>
          </ol>
        </nav>

        <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="w-full rounded-lg overflow-hidden">
            <img src={foto} alt="Imagen del producto" className="w-full h-full object-center object-cover" />
          </div>
          <div className="lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{marca}</h1>
            <h2 className="text-3xl font-extrabold text-gray-400">Características</h2>
            <p className="text-base text-gray-900 mt-6">
              <b>Precio</b>: ${precio} CLP
            </p>
            <p className="text-base text-gray-900">
              <b>Marca</b>: {marca}
            </p>
            <p className="text-base text-gray-900">
              <b>Modelo</b>: {modelo}
            </p>
            <p className="text-base text-gray-900">
              <b>Año</b>: {year}
            </p>
            <p className="text-base text-gray-900">
              <b>Formato Pel</b>: {formato_Pel}
            </p>
            <p className="text-base text-gray-900">
              <b>Estado</b>: {estado}
            </p>
            {info2?.email ? (
              <div className="mt-10" id="payment-form"></div>
            ) : (
              <Link to="/Products">
                {stock === 0 ? (
                  <h4 className="text-red-800 no-underline">Sin Stock</h4>
                ) : (
                  <button
                    onClick={addProductToCart}
                    type="button"
                    className="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Añadir al Carrito
                  </button>
                )}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
