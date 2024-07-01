import {Sidebar} from "primereact/sidebar";
import {useState} from "react";
import { FiHome } from "react-icons/fi";
import '../css/menu.css';
import {Link} from "react-router-dom";

export default function Menu() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <button className="menu-button" onClick={() => setVisible(true)}>
                <FiHome />
            </button>

            <Sidebar visible={visible}  onHide={() => setVisible(false)}>
                <h4>Simon says</h4>

                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/scores'}>Scores</Link>
                </div>

            </Sidebar>
        </>
    )
}