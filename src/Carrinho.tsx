import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { CarrinhoItem } from "./carrinho-item.entity";

type Props = {
  itemsCarrinho: CarrinhoItem[];
};

export const Carrinho: React.FC<Props> = ({ itemsCarrinho }) => {
  return (
    <div className="lista">
      <ListGroup>
        {itemsCarrinho.map(({ produto, quantidade }) => (
          <ListGroup.Item key={produto.id}>
            {produto.nome} ({quantidade})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
