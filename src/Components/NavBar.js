import React, { useState } from 'react';
import {HiOutlineBars3} from 'react-icons/hi2';
import {Box,Drawer,List,ListItem,ListItemButton,ListItemIcon, ListItemText, listItemText} from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Draw  from '@mui/icons-material';


const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const menuOptions = [
    {

        text:'Home',
        icon:<HomeIcon/>

    },
    {

        text:'About',
        icon:<InfoIcon/>

    },
    {

        text:'Porfolio',
        icon:<CommentRoundedIcon/>

    },
    {

        text:'Contact',
        icon:<CommentRoundedIcon/>

    }
];
return (
    <nav>
        <div className='nav-logo-container'>
            <img src='{logo}' alt=''/>
        </div>
        <div className='navbar-links-container'>
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Portfolio</a>
            <a href=''>Contact</a>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor='right'>
            <Box sx={{width:250}}
            role='presentation'
            onClick={() =>setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item)=> (
                        <ListItem key={item.text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>

                        </ListItem>
                    ))}
                </List>
            </Box>



        </drawer>
    </nav>
)
};

export default NavBar;
