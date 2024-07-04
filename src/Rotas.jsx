import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/client/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduct from './views/product/FormProduct';
import ListCliente from './views/client/ListCliente';
import ListProduto from './views/product/ListProduto';
import ListEntregador from './views/entregador/ListEntregador';
import FormFornecedor from './views/fornecedor/FormFornecedor';
import ListFornecedor from './views/fornecedor/ListFornecedor';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduct/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="form-fornecedor" element={ <FormFornecedor/> } />
                <Route path="list-fornecedor" element={ <ListFornecedor /> }/>
            </Routes>
        </>
    )
}

export default Rotas
