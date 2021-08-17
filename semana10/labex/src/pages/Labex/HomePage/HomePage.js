import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";

const HomePage = (props) => {
    const history = useHistory()
    return (
        <>
            <div>
                <h1>HomePage</h1>
                <Button onClick={() => history.push("/trips/list")}>Ver Viagens</Button>
                <Button onClick={() => history.push("/login")}>Área de Admin</Button>
            </div>
        </>
    )
}

export default HomePage