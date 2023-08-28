import { Button, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface Student {
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
}

const EditForm: React.FC = () => {
  const [student, setStudent] = useState<Student>({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted Student:', student);
    // You can perform further actions here, like sending the data to an API
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            disabled
            name="studentId"
            label="Student ID"
            variant="outlined"
            value={student.studentId}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            value={student.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={student.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            name="email"
            label="Email Address"
            variant="outlined"
            value={student.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Edit Student
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditForm;
