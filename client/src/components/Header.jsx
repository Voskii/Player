import React from "react";

export default function Header(props){

    const { logout } = props
    return (
        <header className="wrap" style={{textShadow: `2px 2px 1px var(--p)`}}>
            
                <div style={{fontSize: '6em'}}>World Eater</div>
                <button onClick={logout} className='game logButt'>Logout</button>
            
        </header>
    )
}
