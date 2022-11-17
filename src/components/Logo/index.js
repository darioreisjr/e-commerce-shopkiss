
import './logo.css'

import imagem from "../../assents/img/logoShopKiss.png"
import { useNavigate } from 'react-router-dom';


export default function Logo() {
    const navigate = useNavigate();


    function hadleHome() {
        navigate("/");
      }

    return (
        <img onClick={hadleHome} className='Container-Imagem' src={imagem} alt='logo do shopkiss e-commerce' />
    )
}
