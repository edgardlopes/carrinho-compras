import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Carrinho } from "./Carrinho";
import { ListaProdutos } from "./ListaProdutos";
import { useApp } from "./useApp";

const App: React.FC = () => {
  const { itemsCarrinho, adicionarProduto, removerProduto } = useApp();

  return (
    <Container>
      <Row>
        <Col>
          <ListaProdutos
            produtoAdicionado={adicionarProduto}
            produtoRemovido={removerProduto}
          />
        </Col>
        <Col>
          <Carrinho itemsCarrinho={itemsCarrinho} />
        </Col>
      </Row>
    </Container>
  );
};
export default App;
