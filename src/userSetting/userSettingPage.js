import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper, Typography, DialogTitle, DialogContent } from '@mui/material';
import { BasicChips3 } from '../productDetail/productComponent/BasicChips';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

const UserInformationChangeModal = ({ handleClose }) => {
  const [email, setEmail] = useState('');
  const [tall, setTall] = useState('');
  const [weight, setWeight] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: 'koera',
    email: 'sadfsd@gmail.com',
    username: 'kim',
    tall: 178,
    weight: 65,
    age: 22
  });

  useEffect(() => {
    // Check if all fields are filled
    setIsFormComplete(!!email || !!tall || !!weight);
  }, [email, tall, weight]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTallChange = (event) => {
    setTall(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleInfoChange = () => {
    // Logic to update user information
    console.log('Email:', email);
    console.log('Tall:', tall);
    console.log('Weight:', weight);
    setEmail('');
    setTall('');
    setWeight('');
  };

  const handleWithdrawal = () => {
    // Logic to handle membership withdrawal
    console.log('Membership withdrawal');
  };

  return (
    <Grid display="flex" alignItems="center" justifyContent="center" container spacing={5}>
      <Grid item>
        <Paper style={{ width: '100%', padding: '10px' }}>
          <DialogTitle>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <SettingsApplicationsIcon sx={{ fontSize: 40 }} /> 사용자 설정
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleClose} style={{ width: 2, height: 30 }}>
                  X
                </Button>
              </Grid>
            </Grid>
          </DialogTitle>

          <DialogContent>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={3} style={{ marginTop: '-15px' }}>
                <Typography>아이디</Typography>
              </Grid>
              <BasicChips3 info={userInfo.id} />
            </Grid>

            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={3} style={{ marginTop: '10px' }}>
                <Typography>이메일</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField label={userInfo.email} fullWidth value={email} onChange={handleEmailChange} />
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={3} style={{ marginTop: '6px' }}>
                <Typography>닉네임</Typography>
              </Grid>
              <Grid item xs={8}>
                <BasicChips3 info={userInfo.username} />
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={3} style={{ marginTop: '10px' }}>
                <Typography>키</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField label={userInfo.tall} fullWidth value={tall} onChange={handleTallChange} />
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={3} style={{ marginTop: '10px' }}>
                <Typography>몸무게</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField label={userInfo.weight} fullWidth value={weight} onChange={handleWeightChange} />
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={3} style={{ marginTop: '5px' }}>
                <Typography>나이</Typography>
              </Grid>
              <Grid item xs={8}>
                <BasicChips3 info={userInfo.age} />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              onClick={handleInfoChange}
              fullWidth
              style={{ marginTop: '20px', height: 50 }}
              disabled={!isFormComplete}
            >
              변경하기
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={handleWithdrawal}
              fullWidth
              style={{ marginTop: '10px', height: 50 }}
            >
              회원 탈퇴
            </Button>
          </DialogContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserInformationChangeModal;
