const Item = ({
    country,
    savedCountry,
    countrySelected
    }) => {
    const conditionalClass = savedCountry && country?.fifa === savedCountry.fifa 
    ? "flex items-center gap-4 p-4 cursor-pointer bg-purple-300" : "flex items-center gap-4 p-4 cursor-pointer hover:bg-purple-300"

    return (
        <div onClick={() => countrySelected(country)} key={`${country.fifa}-`} className={conditionalClass}>
        <img className="w-12 h-12 object-contain" alt="Flag" src={country.flags.svg} />
        <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">{country?.name.common}</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">{country?.name.official === country.name.common ? '' : country.name.official }</span>
        </div>
    </div>
    )
}


function ListOfCountries({countries, savedCountry, countrySelected}) {
    return (
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
            <h3 className="text-xl dark:text-white  font-semibold leading-5 text-gray-800">Country Settings</h3>
            <div className="overflow-auto w-full h-72 relative mx-auto  bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
                {countries.map((country, index) => <Item key={`${country.fifa}-${index}`} country={country} savedCountry={savedCountry} countrySelected={countrySelected} />)}
            </div>
        </div>
    )
}

export default ListOfCountries