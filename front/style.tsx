/** @jsxImportSource @emotion/react */
import React from 'react'
import {SerializedStyles, css} from '@emotion/react'

interface StyleProps {
    children: React.ReactNode;
}
const Style:React.FC <StyleProps>= ({children}) => {
    const styles: {[key: string]: SerializedStyles}= {
        container: css`
        display:flex;
        flex-direction:column;
        text-align: center;
        align-items: center;
        justify-content:center;
        width: 100%;
        height:95vh;
        `,
        button: css`
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        width: 15%;
        transition: background-color 0.3s ease;
        text-decoration: none;
        &:hover {
            background-color: #0056b3;
        }
        `
    }
    return(
        <div css = {styles.container}>{children}</div>
    )
}