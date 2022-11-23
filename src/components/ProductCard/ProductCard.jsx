import { Link } from 'react-router-dom';

function ProductCard({props}) {
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
					<a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
						to cart</a>
				</div>
			</div>
	</div>
</li>
    )
}


export default ProductCard