import "./App.css";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import ProductsList from "./components/ProductsList/ProductsList";
import CategoryForm from "./components/categoryForm/categoryForm";
import ProductForm from "./components/productForm/ProductForm";
import CategoryProvider from "./contexts/CategoryContext/CategoryProvider";
import FilterProductsProvider from "./contexts/FilterProductsProvider/FilterProductsProvider";
import ProductProvider from "./contexts/ProductProvider/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <FilterProductsProvider>
        <CategoryProvider>
          <Navbar />
          <Layout>
            <CategoryForm />
            <ProductForm />
          </Layout>
          <ProductsList />
        </CategoryProvider>
      </FilterProductsProvider>
    </ProductProvider>
  );
}

export default App;
