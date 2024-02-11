import React from "react";
import { Buttons, Cancel, Delete, Question, Sure } from "../style/Confirm";

const DeleteConfirm:React.FC = () => {
    return (
        <>
        <Delete>
            <Question>Are you Sure? You Want to Delete?</Question>
            <Buttons>
                <Cancel>Cancel</Cancel>
                <Sure> Delete</Sure>
            </Buttons>
        </Delete>
        </>
    )
}