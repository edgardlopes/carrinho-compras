import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { Produto } from "./produto.entity";

type Props = {
  produtoAdicionado: (produto: Produto) => void;
  produtoRemovido: (produto: Produto) => void;
};

export const ListaProdutos: React.FC<Props> = ({
  produtoAdicionado,
  produtoRemovido,
}) => {
  const produtos: Produto[] = [
    { id: "1", nome: "banana" },
    { id: "2", nome: "abobrinha" },
    { id: "3", nome: "maça" },
  ];

  return (
    <div className="lista">
      <ListGroup>
        {produtos.map((produto) => (
          <ListGroup.Item key={produto.id}>
            {produto.nome}
            <ButtonGroup
              className="mr-2 float-right"
              aria-label="First group"
              size="sm"
            >
              <Button
                variant="secondary"
                onClick={() => produtoRemovido(produto)}
              >
                -
              </Button>
              <Button
                variant="secondary"
                onClick={() => produtoAdicionado(produto)}
              >
                +
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
