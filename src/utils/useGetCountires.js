import { useEffect, useState } from "react"


function useGetCountries() {
    const [countries, setCountries] = useState([])

    async function getCountries () {
            const response = await fetch('https://restcountries.com/v3.1/all')
            if(!response.ok) {
                throw new Error('Error occured while fetching data ', response.status)
            }
            const data = await response.json()
            setCountries([...data])
    }

    useEffect(() => {
        getCountries()
    }, [])
    console.info(countries, 'list should be here')
    return countries
}

export default useGetCountries


