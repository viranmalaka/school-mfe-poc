import { Button, Grid, TextField } from '@mui/material';
import { sharedLib } from '@school-mfe-poc/shared-lib';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface Teacher {
  firstName: string;
  lastName: string;
  email: string;
}

const AddNew: React.FC = () => {
  const [teacher, setTeacher] = useState<Teacher>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted Teacher:', teacher);
    // You can perform further actions here, like sending the data to an API
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            value={teacher.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={teacher.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="email"
            label="Email Address"
            variant="outlined"
            value={teacher.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Add Teacher
          </Button>
        </Grid>
      </Grid>
      <p>{sharedLib()}</p>
    </form>
  );
};

export default AddNew;
