import propTypes from 'prop-types'

function ShopItemFunc(props) {
  return (
    <div className="main-content">
        <h2>{props.item.brand}</h2>
        <h1>{props.item.title}</h1>
        <h3>{props.item.description}</h3>
        <div className="description">{props.item.descriptionFull}</div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
            <div className="price">{props.item.currency + props.item.price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
        </div>
    </div>
  );
}
 
ShopItemFunc.propTypes = {
    brand: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    descriptionFull: propTypes.string,
    price: propTypes.number,
    currency: propTypes.string
}

export default ShopItemFunc;