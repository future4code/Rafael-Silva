import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const CardCover = styled.div`
    width: 100%;
`;

const CardContent = styled.div`
    flex: 1;
    text-align: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid #FF5F6D;

    h3 {
        margin-bottom: 10px;
    }

    p {
        padding: 0 30px;
    }
`;

const Card = (props) => {
    return (
        <CardContainer>
            <CardCover>
                <img src={props.Image} alt="card" />
            </CardCover>

            {props.Content === true ? (
                <CardContent>
                    <h3>{props.TitleCard}</h3>

                    <p>{props.TextCard}</p>
                </CardContent>
            ) : (
                ""
            )}
        </CardContainer>
    );
};

export default Card;
