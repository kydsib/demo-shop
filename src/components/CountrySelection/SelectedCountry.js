import Button from "../Button/Button"

function SelectedCountry({currentSelection, saveCountry}) {
    return (
        <>
        {currentSelection ? 
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                <h3 className="text-xl dark:text-white  font-semibold leading-5 text-gray-800">Select your country</h3>
                <div className="overflow-auto w-full h-full relative mx-auto  bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
                    <div  key={currentSelection?.fifa} className="flex justify-between h-full  gap-4 p-4 cursor-pointer ">
                        <div className="flex justify-around flex-col pt-4 flex-col h-full ">
                            <p className="text-slate-900 text-base font-medium dark:text-slate-200">Country: {currentSelection?.name.common}</p>
                            <p className="text-slate-900 text-base font-medium dark:text-slate-200">Capital: {currentSelection?.capital ? currentSelection?.capital : '-'}</p>
                            <p className="text-slate-900 text-base font-medium dark:text-slate-200">Region: {currentSelection?.continents}</p>
                            <p className="text-slate-900 text-base font-medium dark:text-slate-200">Subregion: {currentSelection?.subregion ? currentSelection?.subregion : '-'}</p>
                            <p className="text-slate-900 text-base font-medium dark:text-slate-200">Currency: {currentSelection?.currencies ? Object.values(currentSelection?.currencies)[0].name : '-'}</p>
                            <Button clicked={() => saveCountry(currentSelection) } styling="mt-12 ml-0" text='Save' />
                        </div>
                        <img className="w-24 h-24 object-contain" alt="Flag" src={currentSelection?.flags.svg} />
                    </div>
                </div>
            </div> : 
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                <h3 className="text-xl dark:text-white  font-semibold leading-5 text-gray-800">Country Settings</h3>
                <h4 className="text-lg dark:text-white  font-semibold leading-5 text-gray-800">Please select the country</h4> 
            </div>
        }
    </>
    )
}

export default SelectedCountry