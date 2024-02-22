import React from "react";
import { Cross, Message, Error } from "../style/error";
import { Wrapper } from "../style/Another";
import { useDispatch, useSelector } from "react-redux";
import { FetchType } from "../Store/Types";
import { showErr } from "../Store/DisplaySlice";


const Err:React.FC = () => {
    const dispatch = useDispatch();
    const message = useSelector((state:FetchType) => state.songs.error);
   
    return (
        <Wrapper>
            <Error>
                <Cross onClick={() => dispatch(showErr())}>
                    <img src="./assets/xmark-solid.svg" alt="" />
                </Cross>
                <Message>
                    {
                       message 
                    }
                </Message>
            </Error>

        </Wrapper>
    )
}

export default Err;