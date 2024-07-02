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
                <h5>Score board</h5>

                <DataTable
                    value={gameResults}
                    removableSort={true}
                    scrollable={true}
                    scrollHeight="100%"
                    style={{height: "50%"}}
                >
                    <Column
                        field="position"
                        header="Position"
                    />
                    <Column
                        field="score"
                        header="Score"
                        sortable={true}
                    />
                </DataTable>

                <h5 className="about">About</h5>
                <p>
                    Small game project to practice React and TypeScript. The game is a simple Simon says game where the player has to remember the sequence of colors and tries to get high score.
                </p>

                <a href="https://github.com/Paavkaa">
                    <FiGithub />
                </a>
                <p>Created by Pavka</p>
            </Sidebar>
        </>
    )
}