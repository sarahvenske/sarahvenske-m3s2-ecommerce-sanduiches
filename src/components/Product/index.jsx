import "./style.css"

function Product({item, handleClick}){
    return (
        <>

            <div className="boxDiv_img">
                <img src={item.img} alt={item.name}></img>
            </div>
            <div className="boxDiv_info">
                <h3>{item.name}</h3>
                <span>{item.category}</span>
                <p>R$ {item.price.toFixed(2)}</p>
                <button onClick={() => handleClick(item.id)}>Adicionar</button>
 
            </div>
        </>
    )
}

export default Product;
