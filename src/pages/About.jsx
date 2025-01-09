import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

class AboutPage extends React.Component {
  state = {
    SubscribeNumbers: 0, 
  };

  increment = () => {
    this.setState((prevState) => ({
      SubscribeNumbers: prevState.SubscribeNumbers + 1, 
    }));
  };

  render() { 
    return (
     <>
        <Header myPage="about" />
        <h2>About Page</h2>
        <Container>
          <button onClick={this.increment}>Subscribe</button>
          <span>Subscribers: {this.state.SubscribeNumbers}</span>
        </Container>
        <Footer />
    </>  
    );
  }
}

export default AboutPage; 