import React from 'react';
import './App.css';
import MaterialIcon from '@material-ui/core/Icon';
import styled from 'styled-components';

import { 
  Alert,
  Button,
  Checkbox,
  Dropdown,
  GlobalStyle,
  Icon,
  Input,
  Modal,
  Popover,
  SnackBar,
  Tag,
  Toggle,
  Badge,
  Card,
  Colors,
  Form,
  Col,
  Container,
  Hide,
  Row,
  List,
  Pagination,
  RadioGroup,
  Slider,
  TabbedView,
  TextArea,
  Tooltip,
 } from '@catho/quantum';

function App() {

  const limpa = (a) => {
    console.log('limpa');
    console.log(a.currentTarget.parentElement.querySelector('input').value = '');
    return true;
  };

  const StyledCol = styled(Col)`
  background-color: #f6f8fa;
  padding: 8px;
  font-size: 14px;
`;

  return (
    <div className="App">
      <Container style={{textAlign: 'left'}}>
        
        <Row  no-gutters>
          <Col xsmall={4} xsmall-offset={4}>
            <Alert>
              Exemplo de alerta
            </Alert>
          </Col>
        </Row>
        <Row  no-gutters>
          <Col xsmall={4} xsmall-offset={4}>
            <Row>
              <Col>
                <Input label="texto" onClean={limpa} />
              </Col>
            </Row>
            <Form>
              <Row>
                <Col>
                  <Input label="aaaa" onClean={limpa} value="xala" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input.CEP label="CEP" onClean={limpa}/>
                </Col>
              </Row>
              <Row>
                <Col>
                <Dropdown
                  autocomplete
                  label="Autocomplete"
                  placeholder="Start typing..."
                  items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
                />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
          <StyledCol medium={1}>{'<Col medium={1}>'}</StyledCol>
        </Row>

        <Row>
          <StyledCol medium={8}>{'<Col medium={8}>'}</StyledCol>
          <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
        </Row>

        <Row>
          <Col>
          <Card>
            <Card.Header>
              <Card.HeaderText>
                <Card.Title>Vaga de programador PHP/C#/Java/Advpl/Cobol sênior com salário de R$ 5000,00 PJ no Grajaú</Card.Title>
                <Card.Description>
                  Vaga de programador PHP/C#/Java/Advpl/Cobol sênior com salário de R$ 5000,00 PJ no Grajaú, tem que saber tudo isso, pq temos muitos sistemas e todos estão bugados.
                </Card.Description>
              </Card.HeaderText>
            </Card.Header>
            <Card.Content>
              <p>
                Requisitos:
              </p>
              <ul>
                <li>Formação de no mínimo 4 anos na área de tecnologia (de preferência faculdade com renome ou no exterior);</li>
                <li>Inglês e alemão fluente;</li>
                <li>Mestrado em redes neurais;</li>
                <li>Saber deixar o Java leve;</li>
                <li>Faixa preta em Krav Maga ou Ninjutsu;</li>
              </ul>
              <p>Detalhes da vaga:</p>
              <ul>
                <li>Salário compatível com o mercado de R$ 5000,00 PJ</li>
                <li>Jornada de trabalho 44h semanais (podendo se extender aos finais de semana)</li>
                <li>Home office em feriados</li>
              </ul>

            </Card.Content>
            <Card.Footer>
              <Button>Enviar CV agora !</Button>
            </Card.Footer>
          </Card>
          </Col>
        </Row>

        <Row>
          <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
          <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
          <StyledCol medium={4}>{'<Col medium={4}>'}</StyledCol>
        </Row>
        <Row  no-gutters>
          <Col xsmall={4} xsmall-offset={4}>
          <Pagination
                prevButtonText="Previous Page"
                nextButtonText="Next Page"
                totalPages={10}
                activePage={5}
              />
          </Col>
        </Row>
        <Row  no-gutters>
          <Col xsmall={4} xsmall-offset={4}>
            <Button
              name="submit"
              type="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
