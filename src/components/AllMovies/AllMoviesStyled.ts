import styled from "styled-components"

export const CommonContainer = styled.div``

export const AllMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.space[4]};

  margin-top: ${props => props.theme.space[6]};
`;

export const AllMoviesItemStyled = styled.li`
  min-width: 164px;
`;

export const BookmarkContainer = styled.div`
position: relative;
`

export const BookmarkButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  transform: translateY(8px) translateX(-8px);

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
`;


export const AllMoviesItemImage = styled.img`
width: 100%;
min-height: 110px;

margin-bottom: ${props => props.theme.space[2]};

border-radius: ${props => props.theme.radius[1]};
`

export const AllMoviesInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${(props) => props.theme.space[1]};

  font-size: 11px;
  font-weight: ${props => props.theme.weight.light};
  color: ${props => props.theme.color.grey};

  & >:not(:last-child){
    margin-right: 6px;
  }
`;

export const Circle = styled.div`
width: 2px;
height: 2px;

background-color: ${props => props.theme.color.grey};

border-radius: ${props => props.theme.radius[5]};

`

export const MovieTitle = styled.h3`
font-weight: ${props => props.theme.weight.normal};
font-size: 14px;
`