
import { RecLetter } from '../../../models/RecLetter';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';


interface PreViewProps{
    rec_letters: RecLetter[]
}

const PreView = (prop: PreViewProps) => {
    const lettersToGridRows = (ls: RecLetter[]) => {
        return ls.map((l) => {
            return {
                rec_letter_id: l.rec_letter_id,
                professor_id: l.professor_id_id,
                comment: l.comment
            }
        })
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Letter ID', flex: 1, },
        { field: 'professor_id', headerName: 'Professor ID', flex: 1, },
        { field: 'comment', headerName: 'Comment', flex: 1, },
    ];


    const onClickRow = (e: any) => {
        useNavigate()(`/qviewer/${e.id}`)
    }

    return (
        <DataGrid
            rows={lettersToGridRows(prop.rec_letters)}
            onRowClick={onClickRow} columns={columns}
            autoPageSize={false}
            autoHeight={true}
            pageSize={10}
            getRowId={(row: any) =>  row.rec_letter_id}
        >
        </DataGrid>
    )
}

export default PreView
