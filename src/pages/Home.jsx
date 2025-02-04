import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import Container from "../components/Container";
import Card from "../components/Cards";
import { H1, H3, p } from "../components/Typogrphy";
import Counter from "../components/Counter";
import "./home.css";
class HomePage extends React.Component {
    render() {
        return (
            <>
                <Header myPage="home" />
                <h2>HomePage</h2>
                {/*
      <section>
     <Container>
  <h3>Section 1</h3>
  <Buttons tittle="Click Me" isActive="true" />
</Container> 
      </section>
      */}
                {/*
         <section>
           <Container>
        <h3>Section 2</h3>
        <Buttons tittle="Add Me"/>
        </Container>
      </section>
      */}
                {/*  <section>
           <Container>
        <h3>Section 3</h3>
        <Buttons/>
        </Container>
      </section>  */}
                {/*
                <section>
                    <Container>
                        <h3>Section 4</h3>
                        <div className="cards">
                            <Card
                                name="Ali Hassan"
                                parg="AliHassanTestHomePage"
                                imgSrc="logo512.png"
                            />

                            <Card
                                name="HarbE Mosbah"
                                parg="HaerbeTestHomePage"
                            />

                            <Card name="Ziad Morgan" parg="ZiadTestHomePage" />
                        </div>
                    </Container>
                </section>
                */}
                <section>
                    <Container>
                        <H1>Ali Hassan</H1>
                        <H3>Ali Hassan</H3>
                        <p>Ali Hassan</p>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Counter />
                    </Container>
                </section>
                <Footer />
            </>
        );
    }
}

export default HomePage;
