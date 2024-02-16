import React from "react";
import { Buttons, Cancel, Delete, Question, Sure } from "../style/Confirm";
import { showDelete, showDetail } from "../Store/DisplaySlice";
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
const confirmed = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(deleteLoading(ID))
    dispatch(showDelete(false))
    dispatch(showDetail(false));
}


    return (
        <>
        <Delete>
            <Question>Are you Sure? You Want to Delete?</Question>
            <Buttons>
                <Cancel onClick={DontShowDelete}>Cancel</Cancel>
                <Sure onClick={confirmed}> Delete</Sure>
            </Buttons>
        </Delete>
        </>
    )
}

export default DeleteConfirm;