import React from "react";
import { Cross, Message, Error } from "../style/error";
import { Wrapper } from "../style/Another";
import { useSelector } from "react-redux";
import { FetchType } from "../Store/Types";


const Err:React.FC = () => {

    const message = useSelector((state:FetchType) => state.songs.error);
   
    return (
        <Wrapper>
            <Error>
                <Cross>
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