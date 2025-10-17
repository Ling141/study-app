"use client"
import React, {useState} from "react";
import Link from 'next/link';
import {Drawer, Button} from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Header() {
  const DrawerList = (
    <div style={{ width: 250, padding: 20 }}>
      <Link href="/notes">
           Notes
         </Link>
    </div>
  );
    const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen:boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header>
      <h1>
            <Link 
      href={{
        pathname: '/',
        query: { name: 'Focus Friend' },
        
      }}
      style={{textDecoration:"none", color:"#FFF5F2"}}
    >
      Focus Friend
    </Link>
        {/* <a href="/" style={{textDecoration:"none"}}> Focus Friend</a> */}
         
</h1>
      <div>
      <Button onClick={toggleDrawer(true)}><DehazeIcon sx={{ color: "#FFF5F2" }}/></Button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      </div>
         
    </header>
  );
}

export default Header;