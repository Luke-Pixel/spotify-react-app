import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';

//materialUI icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className='sidebar'>
            <img
            className='sidebar_logo'
            src={require("./images/Spotify_Logo_CMYK_White.png")} alt="" />

            <SidebarOptions Icon={HomeOutlinedIcon} title='Home' />
            <SidebarOptions Icon={SearchOutlinedIcon} title='Search' />
            <SidebarOptions Icon={LibraryMusicOutlinedIcon} title='Your Library' />
            <br/>
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
               <SidebarOptions title={playlist.name} /> 
            ))}
        </div>
    )
}

export default Sidebar;
