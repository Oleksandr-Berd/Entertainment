import {ReactComponent as LogoMobileSvg} from "assets/icons/logoMobile.svg"
import Navbar from "components/NavBar/NavBar";


const Header: React.FC = () => {
    return (<header>
        <LogoMobileSvg />
        <Navbar/>
    </header> );
}
 
export default Header;