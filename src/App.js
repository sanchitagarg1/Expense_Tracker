import styled from 'styled-components';
import Home from './components/Home';

const Container = styled.div`
  font-family: 'VT323', monospace;
  display : flex;
  flex-direction : column;
  align-items : center;
  margin : 40px 0px 10px 0px;
`;


const Header = styled.h1`
  color : black;
  font-size : 35px;
  font-weigth : bold;
`;

function App() {
  return (
    <Container>

      <Header>Expense Tracker</Header>

      <Home/>

    </Container>
  );
}

export default App;
