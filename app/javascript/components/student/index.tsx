import React, { useState } from "react";
import api from '../../api'
import './index.css'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';


export default function Student() {
  const [professorList, setProfessorList] = useState([]);
  const studentAPI = api.student()
  let navigate = useNavigate()

  React.useEffect(() => {
    (async () => {
        let ls = await studentAPI.getProfessorList()
        if (ls === undefined || ls.length == 0) {
          setProfessorList(null)
        } else {
          setProfessorList(ls)
        }
    })()
  }, [studentAPI]);

  const onClickRow = (e: any) => {
    navigate(`${e}`) // TODO
  }

  const professorToGridRows = (qs: any) => {
    return qs.map((q) => {
        return {
            professor_id: q.professor_id,
            professor_name: q.professor_name
        }
    })
}
  const columns: GridColDef[] = [
    { field: 'professor_id', headerName: 'ID', flex: 1, },
    { field: 'professor_name', headerName: 'Name', flex: 1, },
    ];

  return (
    <>
      <DataGrid
        getRowId={(row) => row.professor_id}
        rows={professorToGridRows(professorList)}
        onRowClick={onClickRow}
        columns={columns}
        autoPageSize={false}
        autoHeight={true}
        pageSize={10} >
      </DataGrid>
    </>
  );

}
