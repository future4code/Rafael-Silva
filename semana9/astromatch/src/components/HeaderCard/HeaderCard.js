import {CardHeader, Left, Logo, Right} from "./styles.js";
import logo from "../../assets/images/logo.png";
import right from "../../assets/images/right-arrow.png";
import left from "../../assets/images/left-arrow.png";

const HeaderCard = (props) => {
    return (
        <>
            <CardHeader>

                {props.CurrentPage === "profiles"
                    ? (
                        <>
                            <Logo onClick={() => props.SelectPage("profiles")} src={logo} alt="logo astromatch"/>
                            <Right onClick={() => props.SelectPage("matches")} src={right} alt="ir para matches"/>
                        </>
                    )
                    : (
                        <>
                            <Left onClick={() => props.SelectPage("profiles")} src={left} alt="tela anterior"/>
                            <Logo onClick={() => props.SelectPage("profiles")} src={logo} alt="logo astromatch"/>
                        </>
                    )}

            </CardHeader>

        </>
    )
}

export default HeaderCard