import { useState, useEffect } from "react";
import Cart from "../../components/Cart";
import ProductList from "../../components/ProductList";
import api from "../../services/api";
import "./style.css"

const HomePage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products', {
            params: {
                offset: 0,
                limit: 10
            }
        }).then((response) => setProducts(response.data))
    }, [])


    const [filteredProducts, setFilteredProducts] = useState("");

    function showProducts(e){
        e.preventDefault()
        if(filteredProducts == '') return 

        const filter = products.filter((item) => item.name === filteredProducts)

        setProducts(filter) 
    }

    const [currentSale, setCurrentSale] = useState([])

    function handleClick(id){
        const exists = currentSale.find((item) => item.id === id)
        if(exists) return;

        const findItem = products.find((item) => item.id === id)        
        setCurrentSale([...currentSale, findItem])
    }

    function removeCartItem(itemToRemove){
        const cartAfterRemoval = currentSale.filter((item) => item !== itemToRemove) 

        setCurrentSale(cartAfterRemoval)
    }

    function removeAllItems(){
        setCurrentSale([])
    }
    
    return(
        <>
            <header>
                <div>Burguer Kenzie</div>
                <form onSubmit={showProducts}>
                        <input type="search" placeholder="Digite sua pesquisa" value={filteredProducts} onChange={(e) => setFilteredProducts(e.target.value)}/>
                        <button type="submit">Pesquisar</button>
                </form>
            </header>
            <main>
                <section>
                    <ul>
                        <ProductList products={products} handleClick={handleClick}/>
                    </ul>
                </section>
                <aside>
                    <Cart currentSale={currentSale} removeCartItem={removeCartItem} removeAllItems={removeAllItems}/>
                </aside>
            </main>
        </>
    )
}

export default HomePage;
