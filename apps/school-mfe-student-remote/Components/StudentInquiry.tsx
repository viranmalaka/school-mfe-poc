import { Button, Grid, TextField } from '@mui/material';

const StudentInquiry = () => {
  return (
    <form>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={8}>
          <TextField name="studentId" label="Student ID" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField name="email" label="Email Address" variant="outlined" />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Add Student
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default StudentInquiry;
