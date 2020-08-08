import React from 'react';
import './Header.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from './DataLayer';

function Header() {
    //retrieve users name
    const [{user}, dispatch] = useDataLayerValue()
    return (
        <div className='header'>
            <div className='header_left'>
                <SearchOutlinedIcon />
                <input
                    placeholder='Search'
                    type='text' 
                />
            </div>

            <div className='header_right'>
                <Avatar alt='' src={user?.images[0].url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
