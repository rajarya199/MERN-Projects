import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { addUser } from '../services/api';
const AddUsers = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('User data submitted:', formData);
   await addUser(formData)
  };

  return (
    <Box
      sx={{ maxWidth: 500, 
        mx: 'auto',
         mt: 4, p: 2, 
         mb:2,
         border: '1px solid #ccc',
          borderRadius: 2 ,
                bgcolor: 'background.paper'
}}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" mb={2} textAlign="center">
        Add User
      </Typography>
      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="dense"
        value={formData.name}
        onChange={handleChange}
        required
      />
     <TextField
        label="Username"
        name="username"
        fullWidth
        margin="dense"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        margin="dense"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Phone"
        name="phone"
        fullWidth
        margin="dense"
        value={formData.phone}
        onChange={handleChange}
      />
      <TextField
        label="Address"
        name="address"
        fullWidth
        margin="dense"
        multiline
        rows={2} 
        value={formData.address}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
        Submit
      </Button>
    </Box>
  );
};

export default AddUsers;

