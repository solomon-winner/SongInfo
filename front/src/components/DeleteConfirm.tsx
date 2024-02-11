import React from "react";
import { Buttons, Cancel, Delete, Question, Sure } from "../style/Confirm";
import { showDelete } from "../Store/DisplaySlice";
import { useDispatch } from "react-redux";

const DeleteConfirm:React.FC = () => {
    const dispatch = useDispatch()
const DontShowDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showDelete(false))
}
    return (
        <>
        <Delete>
            <Question>Are you Sure? You Want to Delete?</Question>
            <Buttons>
                <Cancel onClick={DontShowDelete}>Cancel</Cancel>
                <Sure> Delete</Sure>
            </Buttons>
        </Delete>
        </>
    )
}

export default DeleteConfirm;