import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export class Product {
  desc: string = "";
  price: number = 0;
  id?: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>(new Product());
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>(
        "http://localhost:8000/products/"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCreateProduct = async () => {
    try {
      const response = await axios.post<Product>(
        "http://localhost:8000/products/",
        product
      );
      setProducts([...products, response.data]);
      setProduct(new Product());
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await axios.put<Product>(
        `http://localhost:8000/products/${product.id}/`,
        product
      );
      const updatedProducts = products.map((p) =>
        p.id === response.data.id ? response.data : p
      );
      setProducts(updatedProducts);
      setProduct(new Product());
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (id?: number) => {
    try {
      await axios.delete(`http://localhost:8000/products/${id}/`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = (product: Product) => {
    setProduct(product);
    setIsEditing(true);
  };

  return (
    <div className="App">
      <h1>Product Management</h1>

      <div>
        <input
          type="text"
          name="desc"
          value={product.desc}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <button
          className={isEditing ? "update-button" : "create-button"}
          onClick={isEditing ? handleUpdateProduct : handleCreateProduct}
        >
          {isEditing ? "Update Product" : "Create Product"}
        </button>
        {isEditing && (
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        )}
      </div>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.desc} - ${product.price}
            <button onClick={() => handleEditProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
