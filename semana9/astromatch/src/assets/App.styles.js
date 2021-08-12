import styled from "styled-components";

export const Container = styled.div`
  // position: ${(props) => props.CurrentPage === "profiles" ? "fixed" : "sticky"};
  position: sticky;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 5% auto;
`