/*import { Route, Routes } from 'react-router-dom';

export function Router() {
    return (
        <Routes>
            <Route path='/previsao' element={<Previsao />} />
        </Routes>
    );
}*/

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Previsao from "./pages/Previsao";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Previsao} path="/previsao" />
        </BrowserRouter>
    )
}

export default Routes;