import { Container, Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PieOverview from './components/PieOverview';
import RegisterForm from './components/RegisterForm';

const columns = [
    { field: 'id', headerName: 'ID', flex: 0.3, minWidth: 60 },
    { field: 'description', headerName: 'Description', flex: 1, minWidth: 150 },
    { field: 'category', headerName: 'Category', flex: 0.6, minWidth: 100},
    { field: 'type', headerName: 'Type', flex: 0.6, minWidth: 120 },
    { field: 'value', headerName: 'Value', flex: 0.6, minWidth: 100 },
    { field: 'date', headerName: 'Date', flex: 0.6, minWidth: 120 },
]

const rows = [
    { id: 1, description: 'Salary', category: 'Work', type: 'Income', value: 5000, date: '2023-10-01' },
    { id: 2, description: 'Groceries', type: 'Expense', value: -150, date: '2023-10-02' },
    { id: 3, description: 'Freelance', type: 'Income', value: 800, date: '2023-10-03' },
    { id: 4, description: 'Rent', type: 'Expense', value: -1200, date: '2023-10-04' },
    { id: 5, description: 'Utilities', type: 'Expense', value: -200, date: '2023-10-05' },
    { id: 6, description: 'Investment', type: 'Income', value: 300, date: '2023-10-06' },
    { id: 7, description: 'Dining Out', type: 'Expense', value: -75, date: '2023-10-07' },
    { id: 8, description: 'Gym Membership', type: 'Expense', value: -50, date: '2023-10-08' },
    { id: 9, description: 'Car Maintenance', type: 'Expense', value: -400, date: '2023-10-09' },
    { id: 10, description: 'Bonus', type: 'Income', value: 1000, date: '2023-10-10' },
    { id: 11, description: 'Coffee', type: 'Expense', value: -5, date: '2023-10-11' },
    { id: 12, description: 'Books', type: 'Expense', value: -60, date: '2023-10-12' },
    { id: 13, description: 'Gift', type: 'Income', value: 200, date: '2023-10-13' },
    { id: 14, description: 'Clothing', type: 'Expense', value: -120, date: '2023-10-14' },
    { id: 15, description: 'Travel', type: 'Expense', value: -800, date: '2023-10-15' },
];

export default function App() {
    return (
        <div>
            <Container maxWidth="lg" sx={{marginBottom: 4 }}>
                <Box my={4}>
                    <Typography variant="h1">Finance Manager</Typography>
                    <Typography variant="body1">Welcome to your financing application.</Typography>
                </Box>
                <PieOverview title="Income Overview" />
                <Box mb={14} sx={{ height: 630, width: '100%' }}>
                    <RegisterForm />
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                }
                            }
                        }}
                        pageSizeOptions={[10]}
                        disableRowSelectionOnClick
                        columnVisibilityModel={{
                            id: false,
                        }}
                        
                    />
                </Box>
            </Container>
        </div>
    );
}