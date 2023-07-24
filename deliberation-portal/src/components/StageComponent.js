'use client'

import styled from 'styled-components';

const Container = styled.div`
    border: solid 1px;
    padding: 5px;
    background: rgba(129, 156, 255, 0.50);
    height: 100%;
    &:hover {
        background-color: #819CFF;
      }

`

//children will be array of "settings" i.e. ["file: *.md", "showToPositions: 0"]
export function StageComponent({type, children}) {
    return (
        <Container>
            <h3>{type}</h3>
            {children?.map((x) => <p key={x}>{x}</p>)}
        </Container>
    )
}