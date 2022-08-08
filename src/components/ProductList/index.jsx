import Product from "../Product";
import "./style.css"

function ProductList({products, handleClick}){
    return products.map((item) => (
        <li key={item.id} className="productLi">
            <Product item={item} handleClick={handleClick} /> 
        </li>
    ))
}

export default ProductList;