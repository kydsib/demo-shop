import { Link } from 'react-router-dom'

import Button from '../../components/Button/Button'

function PageNotFound() {
    return (

        <div class="flex items-center justify-center min-h-screen bg-white py-48">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <div class="text-indigo-500 font-bold text-7xl">
                    404
                </div>
    
                <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                    This page does not exist
                </div>
    
                <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                    The page you are looking for could not be found.
                </div>
                <Link to="/">
                    <Button text='Go Home' />
                </Link>

            </div>
    
        
        </div>
    </div>
    )
}

export default PageNotFound