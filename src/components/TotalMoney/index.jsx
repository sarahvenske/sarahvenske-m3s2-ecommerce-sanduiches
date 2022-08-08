import "./style.css";

function TotalMoney({currentSale}){

    const reducedValue = currentSale.reduce((previous, actual) => {
        return previous + actual.price
    }, 0)

    return(
        <div className="boxTotal">
            <h3>Total</h3>
            <p>R$ {reducedValue.toFixed(2)}</p>
        </div>
    )
}


export default TotalMoney;