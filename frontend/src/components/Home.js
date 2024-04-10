import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";

import axios from "axios";

import { API_URL } from "../constants";

// VERSİYA 1 - fetching data from api (Dede Baba üsulu)

// let data = await fetch(API_URL, {
//   method: "GET",
//   headers: {
//       "Content-Type": "application/json",
//   }
// });
// console.log(data);

// let items = await data.json();
// console.log(items);


// VERSIYA 2 - Axios

// axios.get(API_URL).then(res => console.log(res.data));



class Home extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {

    axios.get(API_URL).then(res => this.setState({ students: res.data })); // ishleyir
    // console.log(this.state.students);
    // console.log(axios.get(API_URL));
  };

  resetState = () => {
    this.getStudents();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <StudentList
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStudentModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;