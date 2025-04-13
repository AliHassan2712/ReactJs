import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cards from "../components/Cards";
import Container from "../components/Container";
import Counter from "../components/Counter";
import Todo from "../components/Todo";
import {H2 , H3} from "../components/Typography";

import "./style.css";

const TestPage = () => {
  return (
    <>
    
      <Container>
        <h2>Test Page</h2>
        <Button tittle="Test Button" isActive />
      </Container>
      <div>
        <Container>
          <h2>Section 2</h2>
          <Button />
        </Container>
        <Container>
          <div className="sec2">
            <Cards
              name="ALiHassan"
              parg="lorem sdkfnkaslnfsnafnsajfndsjfhiw fi iweifsdjnf"
              link="logo192.png"
            />

            <Cards
              name="MohammedHassan"
              link="logo192.png"
              parg="lorem sdkfnkaslnfsnafnsajfndsjfhiw fi iweifsdjnf"
            />

            <Cards
              name="AhmadHassan"
              parg="lorem sdkfnkaslnfsnafnsajfndsjfhiw fi iweifsdjnf"
              link="logo192.png"
            />

            <Cards
              name="AhmadHassan"
              parg="lorem sdkfnkaslnfsnafnsajfndsjfhiw fi iweifsdjnf"
            />

            <Cards
              name="AhmadHassan"
              parg="lorem sdkfnkaslnfsnafnsajfndsjfhiw fi iweifsdjnf"
              link="logo192.png"
              rev
            />

            <Cards
              name="AhmadHassan"
              parg="lorem sdkfnkaslnfsnafnsajfndsjfhiw fi iweifsdjnf"
              link="logo192.png"
              rev
            />
          </div>

          <div>
          {/* <Typography.H2>Counter Test</Typography.H2> */}

        
            <Counter/>
            <H2>ALIHASSAN</H2>
            <H3>ALIHASSAN</H3>
          </div>


          <Todo/>
        </Container>
      </div>

     
    </>
  );
};

export default TestPage;
