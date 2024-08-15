import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { logout } from './views/util/AuthenticationService';

export default function MenuSistema(props) {

    const handleLogout = () => {
        logout()
    }
    
  return (
    <>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={props.tela === "home"}
          as={Link}
          to="/"
        />

        <Menu.Item
          name="cliente"
          active={props.tela === "cliente"}
          as={Link}
          to="/form-cliente"
        />

        <Menu.Item
          name="produto"
          active={props.tela === "produto"}
          as={Link}
          to="/form-produto"
        />

        <Menu.Item
          name="entregador"
          active={props.tela === "entregador"}
          as={Link}
          to="/form-entregador"
        />

        <Menu.Item
          name="fornecedor"
          active={props.tela === "fornecedor"}
          as={Link}
          to="/form-fornecedor"
        />

        <Menu.Item
          name="fabricante"
          active={props.tela === "fabricante"}
          as={Link}
          to="/form-fabricante"
        />

        <Menu.Item
          className="navbar__item--mobile"
          onClick={handleLogout}
          content="Sair"
          as={Link}
          to="/"
        />
      </Menu>
    </>
  );
}
