import React, { useState } from 'react';
import { TextField, Grid, Button, Select, MenuItem, InputLabel, FormControl, OutlinedInput, InputAdornment, type SelectChangeEvent } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Record from '../utils/Record';
import { Register } from '../utils/fakeApi';
import { Dayjs } from 'dayjs';

function RegisterForm() {
    const [description, setDescription] = useState<string>('');
    const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }
    const [category, setCategory] = useState<string>('');
    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    }
    const [type, setType] = useState<string>('');
    const handleChangeType = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    const [value, setValue] = useState<number>(0);
    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    }
    const [date, setDate] = useState<Dayjs | null>(null);
    const handleChangeDate = (newDate: Dayjs | null) => {
        setDate(newDate);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const tempRecord = new Record(description, category, type, value, date);
        Register({record: tempRecord});
    }
    return(
        <form onSubmit={handleSubmit}>
            <Grid container my={2} spacing={2} sx={{ justifyContent: 'space-between' }}>
                <TextField 
                    id="description"
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={handleChangeDescription}
                    sx={{ flexGrow: 1 }}
                />
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        value={category}
                        label="Category"
                        onChange={handleChangeCategory}
                    >
                        <MenuItem value="work">Work</MenuItem>
                        <MenuItem value="housing">Housing</MenuItem>
                        <MenuItem value="groceries">Groceries</MenuItem>
                        <MenuItem value="utilities">Utilities</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                        labelId="type-label"
                        id="type"
                        value={type}
                        label="Type"
                        onChange={handleChangeType}
                    >
                        <MenuItem value="income">Income</MenuItem>
                        <MenuItem value="expense">Expense</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ maxWidth: 140 }}>
                    <InputLabel htmlFor="value">Value</InputLabel>
                    <OutlinedInput
                        id="value"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Value"
                        type="number"
                        value={value}
                        onChange={handleChangeValue}
                    />
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        label="Date"
                        sx={{maxWidth: 180}}
                        value={date}
                        onChange={handleChangeDate}
                    />
                </LocalizationProvider>
                <Button variant="contained" color="primary" type="submit">
                    Register
                </Button>
            </Grid>
        </form>
    );
}

export default RegisterForm;