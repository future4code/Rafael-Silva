import { useHistory } from "react-router";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 3.062rem;
  width: 100vw;
  border-bottom: 1px solid #d0d0d0;
  background-color: #fff;
  z-index: 1;
  padding: 10px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 10%;
    min-height: 80%;
  }
`;

const Button = styled.button`

  outline: none;
  border-radius: 12px;
  color: #fff;
  background-color: #2d4159;
  font-size: 20px;

  :hover {
    background-color: #5a6879;
    cursor: pointer;
  }
`;

const Header = (props) => {
  const history = useHistory()
  return (
      <Container>
          <div>
              {props.BackButton === true ? (
                  <Button onClick={() => history.goBack()}>Voltar</Button>
              ) : (
                  <Button onClick={props.Embarrass}>Embaralhar</Button>
              )}
          </div>
      </Container>
  );
};

export default Header;
