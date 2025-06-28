import { useState, useEffect } from 'react'
import { withLoading } from '../hoc/withLoading'
import { useParams } from 'react-router'
import ItemList from './ItemList'

const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        const url = 'https://dummyjson.com/products'
        const urlCategory = `https://dummyjson.com/products/category/${categoryName}`

        fetch(categoryName ? urlCategory : url)
            .then(res => res.json())
            .then(res => (setItems(res.products)))
    }, [categoryName])

    return (
        <ItemListWithLoading items={items} />
    )
}

export default ItemListContainer