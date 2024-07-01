import {Sidebar} from "primereact/sidebar";
import {useState} from "react";
import { FiHome } from "react-icons/fi";
import '../css/menu.css';

export default function Menu() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <button className="menu-button" onClick={() => setVisible(true)}>
                <FiHome />
            </button>

            <Sidebar visible={visible}  onHide={() => setVisible(false)}>
                <h2>Simon says</h2>
            </Sidebar>
        </>
    )
}