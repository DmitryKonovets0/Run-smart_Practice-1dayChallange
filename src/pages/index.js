import React from 'react'
import styled, {createGlobalStyle} from "styled-components";

import Promo from "./modules/promo";
import Advantages from './modules/advantages'
import Counseling from "./modules/counseling";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,500,700;1,500,700&display=swap');
    *{
        margin: 0;
        padding: 0;
        font-family: "MuseoModerno", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
    h2{
        font-weight: 700;
    }
    h3{
        font-weight: 500;
    }
`
export default class IndexPage extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle/>
                <Promo/>
                <Advantages/>
                <Counseling/>
            </>
        )
    }
}