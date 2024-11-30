import React from "react";
import styled from "styled-components";

import background from '../../images/img/bg/first.png'
import logo from '../../images/icon/logo.png'

const PromoSection = styled.section`
    height: 650px;
    background: url(${background}) no-repeat ;
    padding-top: 21px;        
`, Container = styled.div`
    width: 950px;
    margin: 0 auto;
`, Header = styled.div`
    display: flex;
    justify-content: space-between;
`, Logo = styled.img`
    width: 32%;
`, OfficialWrap = styled.div`
    display: flex;
    flex-direction: column;
`, OfficialHeading = styled.h3`
    text-align: center;
    font-size: 12px;
    color: #fff;
`, OfficialName = styled.h2`
    font-size: 18px;
    margin-top: 7px;
    color: #fff;
`, TelWrapper = styled.div`
    display: flex;
    flex-direction: column;
`, TelHeading = styled.h2`
    font-size: 18px;
    color: #fff;
`, TelButton = styled.div`
    font-size: 12px;
    margin-top: 7px;
    width: 153px;
    height: 32px;
    border-radius: 5px;
    background: rgb(199, 1, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "MuseoModerno", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    color: #fff;


`

export default class Promo extends React.Component{
    render() {
        return(
            <PromoSection>
                <Container>
                    <Header>
                        <Logo src={logo} alt="" />
                        <OfficialWrap>
                            <OfficialHeading>Официальный представитель</OfficialHeading>
                            <OfficialName>Garmin, Polar, Suunto</OfficialName>
                        </OfficialWrap>
                        <TelWrapper>
                            <TelHeading>+7 (499) 922-89-74</TelHeading>
                            <TelButton>заказать звонок</TelButton>
                        </TelWrapper>
                    </Header>
                </Container>
            </PromoSection>
        )
    }
}