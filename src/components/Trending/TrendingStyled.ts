import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const CommonContainer = styled(Carousel)`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${props => props.theme.space[6]};

  @media (min-width: 1440px){
    justify-content: center;
  }
`;

export const ItemStyled = styled(Carousel.Item)`
  position: relative;

  min-width: 240px;
  min-height: 140px;

  color: ${(props) => props.theme.color.white};

  /* @media (min-width: 1440px){
    width: 670px;
    /* height: 230px; */
  } */
`;

export const ImageTrending = styled.img`
  min-width: ${(props) => props.theme.percentage[10]};
  min-height: ${(props) => props.theme.percentage[10]};

  border-radius: ${(props) => props.theme.radius[1]};

  @media (min-width: 1440px){
    width: 100%;
    height: 100%;
  }
`;

export const BookmarkButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  transform: translateY(8px) translateX(-8px);

  width: ${(props) => props.theme.space[8]};
  height: ${(props) => props.theme.space[8]};

  padding-top: 2px;
  padding-bottom: 7px;
  padding-right: 10px;
  padding-left: 10px;

  background-color: ${(props) => props.theme.color.semiDark};

  border-radius: ${(props) => props.theme.radius[5]};
  border: none;

  opacity: 0.5;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.color.semiDark};
    border: none;
  }

  @media (min-width: 768px) {
    transform: translateY(16px) translateX(-24px);
  }
`;

export const CaptionStyled = styled(Carousel.Caption)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Circle = styled.div`
  width: 2px;
  height: 2px;

  background-color: ${(props) => props.theme.color.white};

  border-radius: ${(props) => props.theme.radius[5]};

  @media (min-width: 768px) {
    width: 3px;
    height: 3px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${(props) => props.theme.space[1]};

  font-size: 12px;
  color: ${(props) => props.theme.color.white};

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.space[2]};
  }

  @media (min-width: 768px) {
    margin-bottom: 3px;

    font-size: 15px;
  }
`;

export const Title = styled.h5`
  text-align: left;

  color: ${(props) => props.theme.color.white};
  font-weight: ${(props) => props.theme.weight.normal};
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: ${props => props.theme.size.XXN};
  }
`;

export const RatingContainer = styled.div`
  color: ${(props) => props.theme.color.white};
`;
