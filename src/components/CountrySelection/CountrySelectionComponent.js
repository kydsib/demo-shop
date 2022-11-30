import { useEffect, useMemo, useState } from "react"
// import useGetCountries from "../../utils/useGetCountires";

import ListOfCountries from "./ListOfCountries"
import SelectedCountry from "./SelectedCountry"

function CountrySelection() {
 
  const [countries, setCountries] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState();
  const [savedCountry, setSavedCountry] = useState(null);
  useEffect(() => {
      const dataFetch = async () => {
      const data = await (
      await fetch('https://restcountries.com/v3.1/all')).json()

        const sortedCountries = [...data]?.sort((a, b) => 
        (a.name.common).toLowerCase()
        .localeCompare(
          (b.name.common).toLowerCase()
          )
        );
      setCountries(sortedCountries)
  };
  dataFetch();
}, [])

const list = useMemo(() => {
  return (
    <ListOfCountries 
    countrySelected={selectCountry} 
    savedCountry={savedCountry} 
    countries={countries}/>
  )
}, [savedCountry, countries])

const selected = useMemo(() => {
  return (
    <SelectedCountry 
    saveCountry={saveSelectedCountry}  
    currentSelection={selectedCountry}/>
  )
}, [selectedCountry])

function selectCountry(item){
  setSelectedCountry(item)
}

function saveSelectedCountry(item) {
  setSavedCountry(item)
}

    return (
        <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
          { list }
          { selected }
      </div>
    )
}

export default CountrySelection