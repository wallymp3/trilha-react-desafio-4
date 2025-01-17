import styled from 'styled-components';


export const ButtonContainer = styled.button<{ disabled: boolean }>`
    width: 100%;
    height: 42px;
    color: #FFF;
    border: 1px solid #81259D;
    border-radius: 21px;
    background-color: ${(props) => (props.disabled ? "#cccccc" : "#81259D")};
    color: ${(props) => (props.disabled ? "#666666" : "white")};

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    
`