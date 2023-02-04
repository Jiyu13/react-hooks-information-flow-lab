import React from "react"


function Header({onChangeMode, isDarkMode}) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onChangeMode}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}



export default Header
