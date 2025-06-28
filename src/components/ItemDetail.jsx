import ItemCounter from './ItemCounter'

function ItemDetail ({ item }) {
    return (
        <div>
            <img src={item?.thumbnail} alt={item?.title} />
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <p>{item?.price}</p>
            <ItemCounter />
        </div>
    )
}

export default ItemDetail