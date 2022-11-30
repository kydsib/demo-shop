import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Categories() {

    const dispatch = useDispatch();

    useEffect(() => {
        // can I add aditional ckeck for LS?
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((response) => {
            if(response.ok) {
            return response.json();
        } else {
            throw response
        }
        })
        .then((data) => {
            const filteredData = [...data]?.filter(item => item.category.id !== 5)
            dispatch({
                type: 'SET_STORE_ITEMS',
                payload: filteredData
            })
        })
            .catch(error => {
            console.error('Error while fetching ', error)
        })
            .finally(() => {
            // setIsLoading(false)
        })
        }, [dispatch])

    return (
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
    <div>
      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50">Categories</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 md:mt-10">
    
    <div className="bg-gray-50 dark:bg-gray-800 p-8">
        <div className="">
            <h2 className="text-xl text-gray-600 dark:text-white">Shoes</h2>
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-12">
            <Link to="/collections/shoes" >
                <img className="w-full h-2/3" src="https://images.unsplash.com/photo-1563662931846-29b0af7443ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="A sofa chair with wooden legs"/>
            </Link>
        </div>
    </div>
    
    <div className="bg-gray-50 dark:bg-gray-800 p-8">
        <div className="">
            <h2 className="text-xl text-gray-600 dark:text-white">Jackets</h2>
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-12">
            <Link to="/collections/jackets">
            <img className="w-full h-2/3" src="https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="A sofa chair with wooden legs"/>
            </Link>
        </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-800 p-8">
        <div className="">
            <h2 className="text-xl text-gray-600 dark:text-white">Accessories</h2>
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-12">
            <Link to="/collections/accessories">
                <img className="w-full " src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="A sofa chair with wooden legs"/>
            </Link>
        </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-800 p-8">
        <div className="">
            <h2 className="text-xl text-gray-600 dark:text-white">Bags</h2>

        </div>
        <div className="flex justify-center items-center mt-8 md:mt-12">
            <Link to="/collections/bags">
            <img className="w-full" src="https://images.unsplash.com/photo-1613482184972-f9c1022d0928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="A sofa chair with wooden legs"/>
            </Link>
        </div>
        </div>
    </div>
    </div>

)
}

export default Categories