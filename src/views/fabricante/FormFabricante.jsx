import React, { useState, useEffect } from "react";
import { Button, Container, Divider, Form, Icon, FormInput } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import InputMask from 'react-input-mask';

export default function FormFabricante() {

    const { state } = useLocation();
    const [idFabricante, setIdFabricante] = useState();

    const [nome, setNome] = useState();
    const [endereco, setEndereco] = useState();
    const [valorMercado, setValorMercado] = useState();
    const [paginaWeb, setPaginaWeb] = useState();
    const [qtdFuncionarios, setQtdFuncionarios] = useState();
    const [inicioContrato, setInicioContrato] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/fabricante/" + state.id)
            .then((response) => {
                setIdFabricante(response.data.id)
                setNome(response.data.nome)
                setEndereco(response.data.endereco)
                setValorMercado(response.data.valorMercado)
                setPaginaWeb(response.data.paginaWeb)
                setQtdFuncionarios(response.data.qtdFuncionarios)
                setInicioContrato(response.data.inicioContrato)
            })
        }
    }, [state])

    function salvar(){
        
        let fabricanteRequest = {
            nome:nome,
            endereco:endereco,
            valorMercado:valorMercado,
            paginaWeb:paginaWeb,
            qtdFuncionarios:qtdFuncionarios,
            inicioContrato:inicioContrato
        }

        axios.post("http://localhost:8080/api/fabricante", fabricanteRequest)
            .then((response) => { console.log("Fabricante cadastrado com sucesso")})
            .catch((error) => { console.log("Erro ao incluir o fabricante! ")})
    }

    return (

        <div>

            <MenuSistema tela={'fabricante'}/>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idFabricante === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Fabricante &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                }
                
                { idFabricante !== undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Fabricante &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                }


                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    placeholder="Informe o nome"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Início de Contrato'
                                    placeholder="Informe a data de início de contrato"
                                    width={"8"}
                                >
                                    <InputMask 
                                        required
                                        mask="99/99/9999"
                                        value={inicioContrato}
                                        onChange={e => setInicioContrato(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>

                            <FormInput
                                required
                                fluid
                                label='Endereço' 
                                placeholder='Informe o endereço' 
                                value={endereco}
                                onChange={e => setEndereco(e.target.value)}
                            />
                            
                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor de Mercado'
                                    placeholder='informe o valor'
                                    width={5}
                                    value={valorMercado}
                                    onChange={e => setValorMercado(e.target.value)}
                                    >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Quantidade de Funcionários'
                                    placeholder='informe a quantidade de funcionários'
                                    width={12}
                                    value={qtdFuncionarios}
                                    onChange={e => setQtdFuncionarios(e.target.value)}
                                >
                               </Form.Input>
                            </Form.Group>

                            <Form.Input
                                    fluid
                                    label='Página Web'
                                    placeholder='informe a página web'
                                    value={paginaWeb}
                                    onChange={e => setPaginaWeb(e.target.value)}
                                />
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Link to={'/list-fabricante'}>
                                <Button
                                    type="button"
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                >
                                    <Icon name='reply' />
                                    <Link to={'/list-fabricante'}>Listar</Link>
                                </Button>
                            </Link>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );
}