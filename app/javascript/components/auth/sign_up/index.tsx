import * as React from 'react';
import api from '../../../api';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {
  function refreshPage() {
    window.location.reload();
  }
  const navigate = useNavigate()
  const authAPI = api.auth()
  const studentAPI = api.student()
  const [isProfessor, setIsProfessor] = React.useState(false)
  const [schoolIDList, setSchoolIDList] = React.useState([]);
  const [schoolID, setSchoolID] = React.useState('');

  React.useEffect(
    () => {(async () => {
        let ls = await studentAPI.getSchoolList()
        if (!(ls === undefined || ls.length == 0)) {

          setSchoolIDList(ls)
        }
    })()
  }, [studentAPI]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (isProfessor) {
      authAPI.professorSignUp(
        data.get('firstName'),
        data.get('lastName'),
        data.get('email'),
        data.get('password'),
        schoolID
      )
      .then(() => navigate("/"))
      .then(() => refreshPage())
    }
    else {
      authAPI.studentSignUp(
        data.get('firstName'),
        data.get('lastName'),
        data.get('email'),
        data.get('password'),
        schoolID
      )
      .then(() => navigate("/"))
      .then(() => refreshPage())
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="schoolID"
                  options={schoolIDList}
                  getOptionLabel={(option) => option.school_name || ""}
                  onChange={(_, v) => setSchoolID(v?.school_id)}
                  renderInput={(params) => <TextField {...params} label="For School" />}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <FormControlLabel
                  control={<Checkbox
                    value="isProfessor"
                    color="primary"
                    onChange={(event) => (event.target.checked)}
                  />}
                  label="I am a professor"
                  id="isProfessor"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => navigate("/")}variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
