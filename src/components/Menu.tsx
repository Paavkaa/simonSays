import {Sidebar} from "primereact/sidebar";
import {useState} from "react";
import {FiGithub, FiMenu} from "react-icons/fi";
import '../css/menu.css';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export default function Menu({gameResults}: { gameResults: { position: number, score: number }[] }) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <button className="menu-button" onClick={() => setVisible(true)}>
                <FiMenu />
            </button>

            <Sidebar visible={visible}  onHide={() => setVisible(false)}>
                <h4>Simon says</h4>
                <h5>Leaderboard</h5>
                <DataTable value={gameResults} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="position" header="Position"></Column>
                    <Column field="score" header="Score"></Column>
                </DataTable>

                <h5>About</h5>

                <a href="">
                    <FiGithub />
                </a>
                <p>Created by Pavka</p>
            </Sidebar>
        </>
    )
}