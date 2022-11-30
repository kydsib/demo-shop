import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import CART_ACTION_TYPES from '../../store/cart/cart.types';

function ProductCard({props}) {

	const dispatch = useDispatch();

	function addItemToCart() {
		dispatch({
			type: CART_ACTION_TYPES.ADD_TO_CART,
			payload: {
				...props,
				quantity: 1
			} 
		})
	}

	const titleForUrl = props.title.split(' ').join('-').toLowerCase();
    return (
<li className="max-w-2xl mx-auto">
	<div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<Link to={`/products/${props.id}/${titleForUrl}`}>
			<img className="rounded-t-lg p-8" src={props.images[0]} alt={props.category.name} />
        </Link>
			<div className="px-5 pb-5">
					<h3 className="text-gray-900 mb-2.5 font-semibold text-xl tracking-tight dark:text-white">{props.title}</h3>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">$ {props.price}</span>
					<Button clicked={addItemToCart}  text="Add to cart"/>
					
				</div>
			</div>
	</div>
</li>
    )
}


export default ProductCard