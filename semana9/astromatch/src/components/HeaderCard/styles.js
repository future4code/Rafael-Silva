import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin: 0 auto;

  border-bottom: 1px solid #1D2025;
`

export const Logo = styled.img`
  width: 35%;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(0.9);
  }
`

export const Right = styled.img`
  width: 10%;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(0.9);
  }
`

export const Left = styled.img`
  width: 10%;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(0.9);
  }
`