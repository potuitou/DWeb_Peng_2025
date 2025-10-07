import React from "react";
import {Link, NavLink} from 'react-router-dom'
import Panel from './Panel'

const Navbar = ()=>{
    return(
        <Panel className = "Sticky top-0 overflow-y-scroll flex flex-col">
            <link to ="/" className = "text-blue-500">
                Button
            </link>
        </Panel>
    )
}

export default Navbar