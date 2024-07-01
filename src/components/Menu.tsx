import {Sidebar} from "primereact/sidebar";
import {useState} from "react";
import {FiGithub, FiHome} from "react-icons/fi";
import '../css/menu.css';

export default function Menu() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <button className="menu-button" onClick={() => setVisible(true)}>
                <FiHome />
            </button>

            <Sidebar visible={visible}  onHide={() => setVisible(false)}>
                <h4>Simon says</h4>
                <h5>Score board</h5>
                <p>Nothing here</p>

                <h5>About</h5>

                <a href="">
                    <FiGithub />
                </a>
                <p>Created by Pavka</p>
            </Sidebar>
        </>
    )
}