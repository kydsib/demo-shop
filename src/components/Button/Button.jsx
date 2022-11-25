function Button({text, type, styling, clicked}) {
    // add types for secondary - primary
    return (
        <button onClick={clicked} className={
        `block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded ${styling}`}>{text}</button>
    )
}

export default Button