import styled from 'styled-components';

export const Paper = styled.div`
    height: ${props => props.height || "250px"};
    width: ${props => props.width  || "250px"};
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;
    background-color: white;
    
`;


export const ULHover = styled.ul`
  
  li:hover{
      background-color: #f1efef;
  }
  li:hover .button{
      display: inline-block;
      padding: 0px 3px 3px 3px;
      margin: 0px;
  }
`;

export const SpanBadge = styled.span`
  
  background-color: #f7f4f4;
  padding: 3px;
  margin: 2px;
  border-radius: 6px;
  :hover{
      background-color: yellow;
  }
`;

export const ShowHideDiv = styled.div`
  visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
  height: ${props => props.isHidden ? '0px' : 'auto'}
`;
