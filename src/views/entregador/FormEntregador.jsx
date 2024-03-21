import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormSelect} from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from '../../MenuSistema';
import { Link } from "react-router-dom";

const UFs = [
    { key: 'PE', text: 'PE', value: 'PE' },
    { key: 'MT', text: 'MT', value: 'MT' },
    { key: 'SP', text: 'SP', value: 'SP' },
    { key: 'RJ', text: 'RJ', value: 'RJ' },
]

export default function FormCliente () {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState()
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [ativo, setAtivo] = useState(true);

    function salvar() {

		let entregadorRequest = {
            nome:nome,
            cpf:cpf,
            rg:rg,
            dataNascimento:dataNascimento,
            foneCelular:foneCelular,
            foneFixo:foneFixo,
            qtdEntregasRealizadas:qtdEntregasRealizadas,
            valorFrete:valorFrete,
            enderecoRua:enderecoRua,
            enderecoNumero:enderecoNumero,
            enderecoBairro:enderecoBairro,
            enderecoCidade:enderecoCidade,
            enderecoCep:enderecoCep,
            enderecoUf:enderecoUf,
            enderecoComplemento:enderecoComplemento,
            ativo:ativo
        }
	
		axios.post("http://localhost:8080/api/entregador", entregadorRequest)
		 .then((response) => {
		     console.log('Cliente cadastrado com sucesso.')
		})
		 .catch((error) => {
		      console.log('Erro ao incluir o um cliente.')
		 })
	}

    return (

        <div>

            <MenuSistema tela={'entregador'}/>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={"8"}    
                                >
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label="RG"
                                    width={"8"}
                                >
                                    <InputMask
                                        required
                                        mask="99999-999"
                                        value={rg}
                                        onChange={e => setRg(e.target.value)}
                                    />
                                </Form.Input>
                                

                            </Form.Group>
                            
                            <Form.Group widths="equal">

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={"3"}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={"5"}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={"5"}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label="QTD Entregas Realizadas"
                                    width={"4"}
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="Valor Por Frete"
                                    width={"4"}
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group widths="equal">

                                <Form.Input
                                    fluid
                                    label="Rua"
                                    value={enderecoRua}
                                    onChange={e => setEnderecoRua(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="Número"
                                    width={"4"}
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                />
                                
                            </Form.Group>

                            <Form.Group widths="equal">

                                <Form.Input
                                    fluid
                                    label="Bairro"
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="Cidade"
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="CEP"
                                    width={"4"}
                                >
                                    <InputMask
                                        mask="99999-999"
                                        value={enderecoCep}
                                        onChange={e => setEnderecoCep(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <FormSelect
                                fluid
                                label='UF'
                                options={UFs}
                                placeholder="Selecione"
                                value={enderecoUf}
                                onChange={(e, {value}) => {setEnderecoUf(value)}}
                            />

                            <Form.Input
                                fluid
                                label="Complemento"
                                value={enderecoComplemento}
                                onChange={e => setEnderecoComplemento(e.target.value)}
                            />

                            <Form.Group inline>
                                <label>Ativo:</label>
                                <Form.Radio
                                    label="Sim"
                                    name="radio"
                                    checked={ativo}
                                    onChange={() => setAtivo(true)}                                    
                                />

                                <Form.Radio
                                    label="Não"
                                    name="radio"
                                    checked={!ativo}
                                    onChange={() => setAtivo(false)}
                                />

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-cliente'}>Listar</Link>
                            </Button>
                                
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
