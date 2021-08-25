import React from "react";
import { Container, Card, Grid, Header } from "semantic-ui-react";
import Register from "./Register";
import "./Landing.css";
const Landing = () => {
  return (
    <Grid
      columns={2}
      divided
      style={{
        marginTop: 50,
      }}
    >
      <Grid.Column>
        <h1
          className="fade-in-image"
          style={{
            width: 300,
            marginTop: 50,
            fontSize: 44,
            fontWeight: 600,
            wordWrap: "word-break",
          }}
        >
          communicate with your <p style={{ color: "#4376A6" }}>community</p> 🥳
        </h1>
      </Grid.Column>
      <Grid.Column>
        <Container text>
          <p style={{ fontSize: 24 }}>
            make sure your audience is in
            <br /> the know for your next event.
          </p>
          <Card className="card" fluid color="blue">
            <Card.Content>
              <Register
                header="Welcome to Events!"
                tagline={"Find and host new experiences"}
              />
            </Card.Content>
          </Card>
        </Container>
      </Grid.Column>
      <Grid.Row>
        <Header
          size="huge"
          style={{
            marginTop: 50,
          }}
        >
          Coordinate events to guarantee transparency to attendees.
        </Header>
        <Header.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem
          sit amet quam congue condimentum at sit amet velit. Praesent lorem
          massa, convallis molestie sollicitudin ac, scelerisque sed felis.
          Maecenas at consectetur nisl. Nulla blandit accumsan nisi quis
          feugiat. Sed eu iaculis nunc. Morbi erat nisi, euismod tempor
          scelerisque vitae, varius in quam. Quisque eu tellus tincidunt, ornare
          velit sit amet, fringilla lacus. Pellentesque quis ante aliquam,
          convallis mauris non, scelerisque tortor. Aenean eget orci non lacus
          ultrices tincidunt. Fusce arcu lectus, consequat ac lacinia ut,
          placerat in metus. Sed ullamcorper pretium nulla eu aliquam.
          Suspendisse ut lacinia lectus, sit amet varius ante. Nam lacinia purus
          eu sem bibendum, in sagittis velit egestas. Pellentesque hendrerit,
          ante placerat tempus volutpat, arcu arcu sollicitudin lacus, nec
          luctus lectus lectus eget leo. Sed vel dolor consectetur, pulvinar
          velit quis, vehicula augue. Cras imperdiet enim viverra dapibus
          pharetra.
        </Header.Content>
      </Grid.Row>
      <Grid.Row>
        <Header
          size="huge"
          style={{
            marginTop: 50,
          }}
        >
          Coordinate events to guarantee transparency to attendees.
        </Header>
        <Header.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem
          sit amet quam congue condimentum at sit amet velit. Praesent lorem
          massa, convallis molestie sollicitudin ac, scelerisque sed felis.
          Maecenas at consectetur nisl. Nulla blandit accumsan nisi quis
          feugiat. Sed eu iaculis nunc. Morbi erat nisi, euismod tempor
          scelerisque vitae, varius in quam. Quisque eu tellus tincidunt, ornare
          velit sit amet, fringilla lacus. Pellentesque quis ante aliquam,
          convallis mauris non, scelerisque tortor. Aenean eget orci non lacus
          ultrices tincidunt. Fusce arcu lectus, consequat ac lacinia ut,
          placerat in metus. Sed ullamcorper pretium nulla eu aliquam.
          Suspendisse ut lacinia lectus, sit amet varius ante. Nam lacinia purus
          eu sem bibendum, in sagittis velit egestas. Pellentesque hendrerit,
          ante placerat tempus volutpat, arcu arcu sollicitudin lacus, nec
          luctus lectus lectus eget leo. Sed vel dolor consectetur, pulvinar
          velit quis, vehicula augue. Cras imperdiet enim viverra dapibus
          pharetra.
        </Header.Content>
      </Grid.Row>
      <Grid.Row color = "red">
        
      </Grid.Row>
    </Grid>
  );
};

export default Landing;
