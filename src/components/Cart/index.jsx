import TotalMoney from "../TotalMoney";
import "./style.css"

function Cart({currentSale, removeCartItem, removeAllItems}){
    
    if(currentSale.length == 0){
        return(
            <div className="cartBox">
                <div className="cartBox_title">Carrinho de compras</div>
                <div className="cartBox_empty">
                    <h3>Sua sacola está vazia</h3>
                    <p>Adicione itens</p>
                </div>
            </div>
         
        )
    }
    return(
        <div className="cartBox">
            <div className="cartBox_title">Carrinho de compras</div>
                <ul className="cartBox_ul">{currentSale.map((item) => {
                    return(
                    <li key={item.id} className="cartBox_li">
                        <div className="cartBox_divImg">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="cartBox_divInfo">
                            <div className="cartBox_divInfoBox">
                                <h3>{item.name}</h3>
                                <button onClick={(e) => removeCartItem(item)}>Remover</button>
                            </div>
                            <span>{item.category}</span>
                        </div>
                    </li>
                    )
                })}
                </ul>
                <div className="cartBox_total">
                    <TotalMoney currentSale={currentSale}/>
                    <button onClick={removeAllItems} className="buttonRemoveAll">Remover todos</button>
                </div>
        </div>
        
    )
}

export default Cart;