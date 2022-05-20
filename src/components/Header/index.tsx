import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpemNewTransactionModal: ( ) => void
}

export function Header({onOpemNewTransactionModal}: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpemNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
