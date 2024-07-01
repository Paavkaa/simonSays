import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import Menu from './components/Menu';
import Content from "./components/Content.tsx";

function App() {
    return (
        <div>
            <Menu />
            <div className="content">
                <Content />
            </div>
        </div>
    );
}

export default App;