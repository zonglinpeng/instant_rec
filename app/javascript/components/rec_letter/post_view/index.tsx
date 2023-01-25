
import React from 'react';
import './index.css'

interface PostViewProps{
    comment: string
}

const PostView = (prop: PostViewProps) => {

    const lettersToPostviewList = (comment: string) => {
        return (
            <div className='postview-entry d-flex'>
                <div className='postview-content d-flex'>{ comment }</div>
            </div>
        )
    }

    return (
        <div className='postview-list-wrap'>
            { lettersToPostviewList(prop.comment) }
        </div>
    )
}

export default PostView
