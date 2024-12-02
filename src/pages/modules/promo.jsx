import React from "react";
import styled from "styled-components";

import background from '../../images/img/bg/first.png'
import logo from '../../images/icon/logo.png'
import time from '../../images/icon/time.svg'
import message from '../../images/icon/messages.svg'
import handCart from '../../images/icon/hand-cart.svg'


const PromoSection = styled.section`
    height: 650px;
    background: url(${background}) center center /cover no-repeat;
    padding-top: 21px;        
`, Container = styled.div`
    width: 950px;
    margin: 0 auto;
`, Header = styled.div`
    display: flex;
    justify-content: space-between;
`, Logo = styled.img`
    width: 24%;
    height: 20%;
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
`, TelButton = styled.button`
    font-size: 12px;
    margin-top: 7px;
    width: 153px;
    height: 32px;
    border: none;
    border-radius: 5px;
    background: rgb(199, 1, 1);
    text-align: center;
    font-weight: 500;
    color: #fff;
`, MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 91px;
`, Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
`, Subtitle = styled.h2`
    font-size: 24px;
    text-transform: uppercase;
    margin-top: 17px;
    font-weight: 500;
    color: #fff;
`, IconsWrapper = styled.div`
    margin-top: 60px;
    display: flex;
    gap: 39px;
`, IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`, IconDescr = styled.h3`
    margin-top: 20px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    width: 136px;
`, Button = styled.button`
    margin-top: 67px;
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: rgb(199, 1, 1);
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
`, Link = styled.h3`
    font-size: 16px;
    color: #fff;
    margin-top: 23px;
`, Span = styled.a`
    text-decoration: underline;
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
                    <MainWrapper>
                        <Title>Подбор пульсометра</Title>
                        <Subtitle>с учётом Вашего уровня подготовки</Subtitle>
                        <IconsWrapper>
                        <IconWrapper>
                            <img src={time} alt=""/>
                            <IconDescr>Время подбора: 10 минут</IconDescr>
                        </IconWrapper>
                            <IconWrapper>
                                <img src={handCart} alt=""/>
                                <IconDescr>Бесплатная доставка</IconDescr>
                            </IconWrapper>
                            <IconWrapper>
                                <img src={message} alt=""/>
                                <IconDescr>Ответим на все вопросы</IconDescr>
                            </IconWrapper>
                        </IconsWrapper>
                        <Button>
                            заказать кОНСУЛЬТАЦИЮ
                        </Button>
                        <Link>или <Span href='h'>ПЕРЕЙТИ В КАТАЛОГ</Span> </Link>
                    </MainWrapper>
                </Container>
            </PromoSection>
        )
    }
}