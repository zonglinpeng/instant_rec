
import { RecLetter } from '../../../models/RecLetter';
import React, {useContext} from 'react';
import "./index.css"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import RecLetterContext from "../split_pane/rec_letter_context";

interface PreViewProps{
    rec_letters: RecLetter[]
}

const PreView = (prop: PreViewProps) => {
    function formatDate(string){
        var options = { hour: "2-digit", minute: "2-digit" };
        return new Date(string).toLocaleDateString([], options);
    }
    const { setCurRecLetter } = useContext(RecLetterContext);

    const onClickEntry = (e: any) => {
        setCurRecLetter(e.rec_letter_id)
    }

    const lettersToPreviewList = (ls: RecLetter[]) => {
        return ls.map((l) => {
            return (
                <Box sx={{ width: '100%' }} key={l.rec_letter_id}>
                    <Stack spacing={2}>
                        <div
                            className='preview-entry d-flex align-items-start'
                            onClick={() => onClickEntry(l)}
                        >
                            <div className='preview-title d-flex justify-content-between'>
                                <h3>{ l.comment }</h3>
                            </div>
                            <div className='preview-content-wrap d-flex justify-content-between align-items-center'>
                                <div className='preview-content d-flex'>
                                    { l.comment }
                                </div>
                            </div>
                            <div className='preview-footer d-flex align-items-center'>
                                <div className='due-date'>
                                    Due on: { formatDate(l.due_date) }
                                </div>
                            </div>

                        </div>
                    </Stack>
                </Box>
                // <div
                //     key={l.rec_letter_id}
                //     className='preview-wrapper d-flex align-items-center '>


            )
        })
    }

    return (
        <div className='preview-list-wrap'>
            { lettersToPreviewList(prop.rec_letters) }
        </div>
    )
}

export default PreView
