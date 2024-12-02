import React from "react";
import styled from "styled-components";

import cup from '../../images/icon/cup.svg'
import heart from '../../images/icon/heart.svg'
import shoe from '../../images/icon/shoe.svg'

const AdvantagesSection = styled.section`
    height: 473px;
    padding-top: 73px;
`,Container = styled.div`
    width: 950px;
    margin: 0 auto;
`, Title = styled.h2`
    font-size: 30px;
    text-align: center;
`, AdvantagesWrapper = styled.div`
    display: flex;
    margin-top: 65px;
    justify-content: space-around;
`, AdvantageItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`, HeadingItem = styled.h2`
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
`, DescrItem = styled.h3`
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    width: 269px;
`, Span = styled.a`
    color: red;
    text-decoration: underline;
`

export default class Advantages extends React.Component {
    render() {
        return(
            <AdvantagesSection>
                <Container>
                    <Title>НАШИ ПРЕИМУЩЕСТВА</Title>
                    <AdvantagesWrapper>
                        <AdvantageItem>
                            <img src={cup} alt=""/>
                            <HeadingItem>Делимся опытом</HeadingItem>
                            <DescrItem>Наши сотрудники всегда готовы поделиться своим опытом,  так как сами бегают полумарафоны, переплыли Босфор, готовятся к соревнованиям по триатлону!</DescrItem>
                        </AdvantageItem>
                        <AdvantageItem>
                            <img src={heart} alt=""/>
                            <HeadingItem>Заботимся о здоровье</HeadingItem>
                            <DescrItem>Мы работаем для того,  чтобы Ваши занятия спортом шли на пользу Вашему здоровью и были в радость Вам и Вашим близким!</DescrItem>
                        </AdvantageItem>
                        <AdvantageItem>
                            <img src={shoe} alt=""/>
                            <HeadingItem>Учим бегать</HeadingItem>
                            <DescrItem>Помогаем с обучением  правильной технике бега!  Дружим с крупнейшей школой бега в России - <Span href="#">I LOVE RUNNING.</Span></DescrItem>
                        </AdvantageItem>
                    </AdvantagesWrapper>
                </Container>
            </AdvantagesSection>
        )
    }
}