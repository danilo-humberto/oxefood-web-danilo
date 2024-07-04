import React, { useState, useEffect } from "react";
import { Button, Container, Divider, Form, Icon, FormInput } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import InputMask from 'react-input-mask';

export default function FormFornecedor () {

    const {state} = useLocation();
    const [idFornecedor, setIdFornecedor] = useState()

    const [nome, setNome] = useState();
    const [endereco, setEndereco] = useState();
    const [dataFundacao, setDataFundacao] = useState();
    const [valorMercado, setValorMercado] = useState();
    const [paginaWeb, setPaginaWeb] = useState();
    const [contadoVendedor, setContadoVendedor] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/fornecedor/" + state.id)
            .then((response) => {
                setIdFornecedor(response.data.id)
                setNome(response.data.nome)
                setEndereco(response.data.endereco)
                setDataFundacao(response.data.dataFundacao)
                setValorMercado(response.data.valorMercado)
                setPaginaWeb(response.data.paginaWeb)
                setContadoVendedor(response.data.contadoVendedor)
            })
        }
    }, [state])

    function salvar(){

        let fornecedorRequest = {
            nome: nome,
            endereco: endereco,
            dataFundacao: dataFundacao,
            valorMercado: valorMercado,
            paginaWeb: paginaWeb,
            contatoVendedor: contadoVendedor
        }

        if(idFornecedor != null ) {
            axios.put("http://localhost:8080/api/fornecedor/" + idFornecedor, fornecedorRequest)
            .then((response) => { console.log("Fornecedor alterado com sucesso.")})
            .catch((error) => {console.log("Erro ao incluir fornecedor")})
        } else {
            axios.post("http://localhost:8080/api/fornecedor", fornecedorRequest)
            .then((response) => { console.log('Fornecedor cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o fornecedor.') })
        }
    }

    return (

        <div>

            <MenuSistema tela={'fornecedor'}/>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idFornecedor === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Fornecedor &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                }
                
                { idFornecedor !== undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Fornecedor &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
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
                                    label='Data Fundação'
                                    placeholder="Informe a data de fundação"
                                    width={"8"}
                                >
                                    <InputMask 
                                        required
                                        mask="99/99/9999"
                                        value={dataFundacao}
                                        onChange={e => setDataFundacao(e.target.value)}
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
                                    label='Contado do Vendedor'
                                    placeholder='informe o contato'
                                    width={12}
                                >
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={contadoVendedor}
                                        onChange={e => setContadoVendedor(e.target.value)}
                                    />
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

                            <Link to={'/list-fornecedor'}>
                                <Button
                                    type="button"
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                >
                                    <Icon name='reply' />
                                    <Link to={'/list-fornecedor'}>Listar</Link>
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