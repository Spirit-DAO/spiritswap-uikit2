/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import styled from "styled-components";
import { Text } from "../../components/Text";
import { Link } from "../../components/Link";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem 1rem;
  border-radius: 0.5rem;
`

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

export const SocialColum = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-right: 20px;
  padding: 10px;

  @media only screen and (max-width: 1000px) {
    margin-bottom: 40px;
    margin-right: 0;
  }
`
export const SocialIcons = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 22.5rem;
  margin: 0px 0.25em;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 30px;
    justify-content: space-around;
  }
`

export const Colums = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-left: 40px;
    align-items: flex-start;
    justify-content: start;
    margin-bottom: 40px;
  }
`

export const Title = styled(Text)`
  box-sizing: border-box;
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
  color: #6dd784;
`

export const StyledLink = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  color: #fcfae2;

  &:hover {
    text-decoration: underline;
  }
`

export const Info = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    justify-content: space-evenly;
  }
`

export const InfoItems = styled(Link)`
  margin-right: 2rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 1000px) {
    margin: 0;
  }
`

export const LinksColum = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  align-items: flex-start;
  justify-items: center;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 160px);
    justify-content: center;
    grid-column-gap: 20%;
    margin-top: 30px;
  }
`

export const Copyright = styled(Text)`
  text-align: start;
  font-size: 14px;
  margin-top: 2rem;
  color: gray;
  @media only screen and (max-width: 1000px) {
    text-align: center;
    display: none;
  }
`

export const CopyrightInMobile = styled(Text)`
  font-size: 14px;
  text-align: center;
  color: gray;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`