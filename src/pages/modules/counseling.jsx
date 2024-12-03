import React from "react";
import styled from "styled-components";

import background from '../../images/img/bg/second.png'

const CounselingSection = styled.section`
    height: 680px;
    background: url(${background}) center center/ cover no-repeat;
    padding-top: 100px;
`, Container = styled.div`
    width: 950px;
    margin: 0 auto;
`, Title = styled.h2`
    font-size: 36px;
    color: #fff;
    line-height: 54px;
    text-transform: uppercase;
`, Subtitle = styled.h3`
    color: #fff;
    font-size: 20px;
    width: 426px;
    margin-top: 10px;
    line-height: 30px;
`, Form = styled.form`
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`, Input = styled.input`
    width: 285px;
    padding-left: 21px;
    border: none;
    border-radius: 5px;
    height: 54px;
`, Button = styled.button`
    margin-top: 17px;
    width: 303px;
    height: 58px;
    border: none;
    border-radius: 5px;
    background: rgb(199, 1, 1);
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        content: '';
        border: solid 1px #fff;
        transition: all 0.1s;
    }
`
export default class Counseling extends React.Component {
    render() {
        return(
            <CounselingSection>
                <Container>
                    <Title>Получите бесплатную консультацию по подбору пульсометра </Title>
                    <Subtitle>Просто заполните форму заявки  и мы перезвоним вам в течении 10 минут</Subtitle>
                    <Form action="#">
                        <Input placeholder='Ваше имя' type="text"/>
                        <Input placeholder='Ваш телефон' type="text"/>
                        <Input placeholder='Ваш E-mail' type="text"/>
                    </Form>
                    <Button>заказать кОНСУЛЬТАЦИЮ</Button>
                </Container>
            </CounselingSection>
        )
    }
}