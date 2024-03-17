import { BrowserRouter, Route, Routes } from "react-router-dom";
import CorpoApp from "./components/CorpoApp";
import PaginaInicial from "./pages/PaginaInicial";
import Experiencia from "./pages/Experiencia";
import MapaDeSetores from "./pages/MapaDeSetores";
import Informacoes from "./pages/Informacoes";
import Ingresso from "./pages/Ingresso";
import NotFound from "./pages/NotFound";
import EstilosGlobais from "./components/EstilosGlobais";
import FormularioIngresso from "./pages/Ingresso/FormularioIngresso";
import IngressoCompra from "./pages/Ingresso/IngressoCompra";
import { useState } from "react";

const AppRoutes = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tipo, setTipo] = useState('');
    const [nascimento, setNascimento] = useState('');

    return (
        <>
            <EstilosGlobais />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CorpoApp />}>
                        <Route index element={<PaginaInicial />} />
                        <Route path="experiencia" element={<Experiencia />} />
                        <Route path="setores" element={<MapaDeSetores />} />
                        <Route path="informacoes" element={<Informacoes />} />
                        <Route path="ingresso/" element={<Ingresso />}>
                            <Route index element={<FormularioIngresso
                                infos={{nome, email, tipo, nascimento}}
                                acoes={{setNome, setEmail, setTipo, setNascimento}}
                            />} />
                            <Route path="compra" element={<IngressoCompra />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRoutes;
