import { useSelector } from 'react-redux'

import Navigation from '../../components/Nav/Nav'
import ProductCard from '../../components/ProductCard/ProductCard'
import { selectProducts } from '../../store/ProductsStore/products.selectros'

import './ProductList.css'

function ProductList({categoryName}) {
    const storedData = useSelector(selectProducts);

    const itemList = storedData.map((item) => 
        <ProductCard key={item.id}  props={item} />)

    return (
        <div>
            <Navigation />
            <div>
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50">{categoryName}</h1>
            </div>
            <ul className='product-list'>
            {itemList}
        </ul>
        </div>
        
    )
}

export default ProductList