import { useEffect, useState } from "react"


function useGetCountries() {
    const [countries, setCountries] = useState([])
    console.info('inside useGetCOuntries')
    async function getCountries () {
        console.info('api will be called')
        const response = await fetch('https://restcountries.com/v3.1/all')

        if(!response.ok) {
            throw new Error('Error occurred while fetching data ', response.status)
        }
        const data = await response.json()
        const sortedCountries = [...data]?.sort((a, b) => 
        (a.name.common).toLowerCase()
        .localeCompare((b.name.common).toLowerCase()));

        setCountries(sortedCountries)
        console.info(sortedCountries)
    }

    useEffect(() => {
        getCountries()
    }, [])
    return countries
}

export default useGetCountries


