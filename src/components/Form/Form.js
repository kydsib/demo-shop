import { useState } from 'react'
import './form.css'



const INITIAL_STATE = {
    name: '',
    surname: '',
    phoneCode: '',
    phone: '',
    email: '',
    country: '', // this will come from parent?
    state: '', // is country is US
    stateBilling: '',
    street: '',
    zipShipping: '',
    zipBilling: '',
    cityShipping: '',
    cityBilling: '',
    streetAddressShipping: '',
    streetAddressBilling: '',
    remember: '',
}

// check if form fields have changed in update scenario

const isFormChanged = (form) => Object.keys(form)
    .reduce((acc, key) => {
        const isChanged = form[key] !== INITIAL_STATE[key]; // this is ok with newFormEntires
        // what to do with the form that is being updated
        return {...acc, [key]: isChanged}
    }, {})

function Form() {
    console.info('Form was rerendered')
    //  phone code by country http://country.io/phone.json

    const [form, setForm] = useState(INITIAL_STATE)
    // I could use uncontrolled form as I'm not using validation on every key stroke, jus on submit

    // Add a drop down if billing address differs from shipping address.
    // Checkbox - billing address differs from shipping address


    function handleSubmit(e) {
        // do I need controlled or uncontrolled inputs? Can I just check them on submit?
        // controlled is good if I need to keep submit disabled until all fields are filled
        e.preventDefault()
        setForm({
            ...form,
            [e.target.id]: [e.target.value]
        })
    }

    // Add errors 

    return (
        <div className="max-w-2xl mx-auto bg-white p-8">

        <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input 
                    type="text" 
                    id="name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required />
            </div>
            <div>
                <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input 
                    type="text" 
                    id="surname" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Doe" 
                    required />
            </div>
            <div className='phone-block'>
                <div className="">
                    <label htmlFor="phoneCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code</label>
                    <input id="phoneCode" readOnly type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
            </div>
        </div>
            {/* Adress part */}
            <fieldset className="border border-grey-lighter rounded py-3 px-4">
                <legend>Shipping address</legend>
        <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="grid-city">
                City
            </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
            {/* show states only if selected country is us */}
            {/* country must be selected in order to fill the htmlForm */}
            { (form.country) ? <div className="md:w-1/2 px-3 mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="stateBilling">
                    State
                </label>
                <div className="relative">
                    <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 pl-8 rounded" id="stateBilling">
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    {/* <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"> */}
                    <svg className="h-4 w-4 -mt-8 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    {/* </div> */}
                </div>
            </div> : <></>} 
            <div className="md:w-1/2 px-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="zip">
                Zip
            </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="zip" type="text" placeholder="90210" />
            </div>
        </div>
        <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="streetAddressShipping">
                Street address
            </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            id="streetAddressShipping" 
            type="text" 
            placeholder="" />
        </div>
        </fieldset>

        <fieldset className="border border-grey-lighter rounded py-3 mt-6 px-4">
            <legend>Billing address</legend>
            <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="grid-city">
                City
            </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
            {/* show states only if selected country is us */}
            {/* country must be selected in order to fill the htmlForm */}
            { (form.country) ? <div className="md:w-1/2 px-3 mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="state">
                    State
                </label>
                <div className="relative">
                    <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 pl-8 rounded" id="state">
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    {/* <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"> */}
                    <svg className="h-4 w-4 -mt-8 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    {/* </div> */}
                </div>
            </div> : <></>} 
            <div className="md:w-1/2 px-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="zip">
                    Zip
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="zip" type="text" placeholder="90210" />
            </div>
            
        </div>
        <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="streetAddressBilling">
                Street address
            </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            id="streetAddressBilling" 
            type="text" 
            placeholder="" />
        </div>
    </fieldset>

        <div className="flex items-start my-6">
            <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div>

        <button 
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        
            >Submit</button>
    </form>
</div>
    )
}

export default Form