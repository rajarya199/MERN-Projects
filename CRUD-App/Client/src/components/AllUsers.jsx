import React,{useState,useEffect} from 'react'
import { getAllUsers } from '../services/api.js';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography,
  CircularProgress, Box
} from '@mui/material';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    fetchUsers()
  },[])
  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.log('Error while fetching users:', error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" sx={{ p: 2, textAlign: 'center' }}>
        All Users
      </Typography>
      <Table aria-label="Users table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map(user => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.address}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AllUsers
