import React, { useState } from 'react';
import { Button, Dialog } from '@mui/material';
import UserInformationChangeModal from './userSettingPage';

const UserInformationChangeButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>Open</Button>
        <Dialog open={open} onClose={handleClose}>
          <UserInformationChangeModal handleClose={handleClose} />
        </Dialog>
      </div>
    );
  };

export default UserInformationChangeButton;
