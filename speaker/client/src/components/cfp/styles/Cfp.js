import styled from 'styled-components'

export const CfpTop = styled.div`
    height: 20%;
    width: 90%;
    margin: 0 auto;
    background: red;
    position: relative;
    margin-top: 3%;

`

export const CfpBottom = styled.div`
    min-height: 69%;
    width: 90%;
    margin: auto;
    /* position: relative; */
    margin-top: 3%;
    /* background: blue; */
    display: flex;
    flex-direction: row;
    @media(max-width: 768px){
        flex-direction: column;
        min-width: 90%;
        height: 80%;
    }
`

export const CfpDetailsLeft = styled.div`
    min-width: 75%;
    min-height: 100%;
    height: auto;
    background: blue;

`

export const CfpDetailsRight = styled.div`
    min-width: 25%;
    min-height: 100%;
    height: auto;
    background: green;

`

export const CfpDescription = styled.div`
    height: 100%;
    width: 100%;
`

export const DottedCircle = styled.div`
    
`
