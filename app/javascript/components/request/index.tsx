import api from '../../api'
import './index.css'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useLocation} from 'react-router-dom';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';


export default function StudentRequest() {
  const studentAPI = api.student()
  const navigate = useNavigate()
  const [schoolID, setSchoolID] = useState('');
  const [schoolIDList, setSchoolIDList] = useState([]);
  const [dueDate, setDueDate] = useState<Dayjs | null>(
    dayjs(getCurrentDate()),
  );
  const [comment, setComment] = useState("Can I please get a recommendation letter?")
  const location = useLocation();
  const handleChange = (newValue: Dayjs | null) => {
    setDueDate(newValue);
  };

  function getCurrentDate(separator='-'){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }

  React.useEffect(
    () => {(async () => {
        let ls = await studentAPI.getSchoolList()
        if (!(ls === undefined || ls.length == 0)) {
          setSchoolIDList(ls)
        }
    })()
  }, [studentAPI]);

  function handleSubmit(event) {
    event.preventDefault();
    studentAPI.createRequest(
      dueDate?.format('YYYY-MM-DD'),
      location.state.professor_id,
      comment
    ).then(_ => navigate('/'))
  }

  const submitRequest = () => {
    async () => await studentAPI.createRequest(
      dueDate?.format('YYYY-MM-DD'),
      schoolID,
      comment
    )
    navigate('/')
  }

/*
t.uuid "rec_letter_id", default: -> { "gen_random_uuid()" }
    t.datetime "due_date"
    t.text "comment"
    t.string "status", default: "create"
    t.uuid "school_id_id"
    t.uuid "professor_id_id"
    t.uuid "student_id_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
*/
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={(event) => handleSubmit(event)}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Due Date (EST)"
            inputFormat="MM/DD/YYYY"
            value={dueDate}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Professor ID"
            defaultValue={location.state.professor_id}
            variant="standard"
          />
          <Autocomplete
            disablePortal
            id="schoolID"
            options={schoolIDList}
            getOptionLabel={(option) => option.school_name || ""}
            onChange={(_, v) => setSchoolID(v?.school_id)}
            renderInput={(params) => <TextField {...params} label="For School" />}
          />
          <TextField
            id="standard-multiline-static"
            label="Comment"
            multiline
            rows={2}
            defaultValue={comment}
            onInput={e=>{setComment(e.target.value)}}
            variant="standard"
          />
          </Stack>
          <Button
            type="submit"
            // onClick={submitRequest}
          >
            Submit
          </Button>
      </Box>
    </LocalizationProvider>
  );
}
