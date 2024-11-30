import React from 'react'
import styled, {createGlobalStyle} from "styled-components";

import Promo from "./modules/Promo";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,500,700;1,500,700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
    }
    h2{
        font-family: "MuseoModerno", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    }
    h3{
        font-family: "MuseoModerno", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }
`
export default class IndexPage extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle/>
                <Promo/>
            </>
        )
    }
}