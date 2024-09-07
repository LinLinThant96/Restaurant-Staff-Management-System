import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button, TextField, Box, Container, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


const Staff = () => {
      
    const [openDialog, setOpenDialog] = React.useState(false);
    const [staffToDelete, setStaffToDelete] = React.useState(null);

        const staff = [
            {
                id: 1,
                name: 'John Doe',
                gender: 'Male',
                email: 'john.doe@example.com',
                phone: '123-456-7890',
                daysWorked: 20,
                restaurantName: 'Cafe Mocha'
            },
            {
                id: 2,
                name: 'Jane Smith',
                gender: 'Female',
                email: 'jane.smith@example.com',
                phone: '098-765-4321',
                daysWorked: 18,
                restaurantName: 'Java House',
            },
            {
                id: 3,
                name: 'Mike Johnson',
                gender: 'Male',
                email: 'mike.johnson@example.com',
                phone: '555-123-4567',
                daysWorked: 15,
                restaurantName: 'Espresso Express',
            }
        ];

    const columnDefs = [
        { headerName: 'Staff ID', field: 'id', sortable: true, filter: true },
        { headerName: 'Name', field: 'name', sortable: true, filter: true },
        { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
        { headerName: 'Email Address', field: 'email', sortable: true, filter: true },
        { headerName: 'Phone Number', field: 'phone', sortable: true, filter: true },
        { headerName: 'Days Worked', field: 'daysWorked', sortable: true, filter: true },
        { headerName: 'Restaurant Name', field: 'restaurantName', sortable: true, filter: true },
        {
          headerName: 'Actions',
          cellRenderer: (params) => (
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleEdit(params.data)}
              startIcon={<EditIcon />} 
              size="small"
              sx={{
                marginRight: '8px',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '12px',
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: '#388e3c', 
                  boxShadow: 6,
                }
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(params.data.id)}
              startIcon={<DeleteIcon />} 
              size="small"
              sx={{
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '12px',
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: '#d32f2f', 
                  boxShadow: 6,
                }
              }}
            >
              Delete
            </Button>
          </Box>
          ),
        },
      ];
    
      const handleEdit = (staff) => {
        console.log('Edit staff:', staff);
      };
    
      const handleConfirmDelete = () => {
        console.log('Delete staff with ID:', staffToDelete);
        setOpenDialog(false);
    };

    const handleCancelDelete = () => {
        setOpenDialog(false);
        setStaffToDelete(null);
    };
    
      const handleAddNewStaff = () => {
        console.log('Add New Staff');
      };
    
      const handleDelete = (staffId) => {
        console.log('Delete staff with ID:', staffId);
        setStaffToDelete(staffId);
        setOpenDialog(true);
    };
    
    
    return (
        <Container>
          <Typography variant="h4" gutterBottom>Staff Management</Typography>
          
          <Button 
            variant="contained" 
            color="success" 
            onClick={handleAddNewStaff} 
            startIcon={<AddIcon />}
            style={{ marginBottom: '16px' }}
          >
            Add New Staff
          </Button>


      <Dialog
        open={openDialog}
        onClose={handleCancelDelete}
        maxWidth="sm"       
      >
      <DialogTitle
        sx={{
          backgroundColor: 'error.main',
          color: 'error.contrastText',
          textAlign: 'center',
          fontWeight: 'bold',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        Confirm Deletion
      </DialogTitle>
      <DialogContent
        sx={{
          padding: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="body1">
          Are you sure you want to delete this staff?
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: 'center',
          padding: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Button 
          onClick={handleCancelDelete} 
          color="error" 
          variant="outlined"
          sx={{
            textTransform: 'none',
            borderRadius: 1,
          }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleConfirmDelete} 
          color="success" 
          variant="contained"
          sx={{
            textTransform: 'none',
            borderRadius: 1,
            marginLeft: 2,
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>



        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
              rowData={staff}
              columnDefs={columnDefs}
              pagination={true}
              paginationPageSize={10}
            />
        </div>
          
          

    </Container>


      );
};

export default Staff;