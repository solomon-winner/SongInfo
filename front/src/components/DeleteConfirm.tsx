import React from "react";
import { Buttons, Cancel, Delete, Question, Sure } from "../style/Confirm";
import { showDelete } from "../Store/DisplaySlice";
import { useDispatch,useSelector } from "react-redux";
import { SelectType} from "../Store/Types";
import { deleteLoading } from "../Store/SongSlice";

const DeleteConfirm:React.FC = () => {
    const ID = useSelector((state:SelectType) => state.selected._id)

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
                <Sure onClick={() => dispatch(deleteLoading(ID))}> Delete</Sure>
            </Buttons>
        </Delete>
        </>
    )
}

export default DeleteConfirm;