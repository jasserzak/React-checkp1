import React from "react";
import Card from "react-bootstrap/Card";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      {/* Hello message */}
      <div>
        <p>Hello, John!</p> {/* Replace 'John' with your first name */}
        {/* Display image if first name is provided */}
        <img src="https://example.com/profile-image.jpg" alt="Profile" />
      </div>
    </div>
  );
};

export default App;
