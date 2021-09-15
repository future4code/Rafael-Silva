import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CardCover = styled.div`
  // height: 50%;
  width: 100%;
`

const CardContent = styled.div`
  flex: 1;
  text-align: center;
  margin: 20px auto;
`

const Card = (props) => {
  return (
    <CardContainer>
      <CardCover>
        <img src={props.Image} />
      </CardCover>
    </CardContainer>
  );
};

export default Card;
