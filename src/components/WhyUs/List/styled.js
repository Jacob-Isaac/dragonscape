import styled from 'styled-components';

export const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
     column-gap: 35px; 
     margin-left: 20px;
       margin-right: 20px;
       margin-bottom: 100px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
          display: flex;
          flex-direction: column;
         row-gap: 20px;
         margin: 0 auto;
    }
    @media (min-width: ${({ theme }) => theme.breakpoint.maxContentSize}px) {
        margin-left: 0px;
       margin-right: 0px;
    }
`;

export const ListItem = styled.li`
    display: inline-flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    padding: 4px;
    color:  ${({ theme }) => theme.color.text};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
    }
`;

