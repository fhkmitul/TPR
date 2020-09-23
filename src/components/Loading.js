import React from 'react';
import lG from '../images/gif/loading-arrow.gif';
import styled from 'styled-components';

function Loading() {
    return (
        <LoadingWrap>
            <h3>data is loading...</h3>
            <img src={lG} alt="loading"/>
        </LoadingWrap>
    )
}

const LoadingWrap = styled.div`
    text-transform: capitalize;
    text-align: center;
    margin-top: 3rem;
`

export default Loading
