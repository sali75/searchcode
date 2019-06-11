import React,{Component} from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import users from "./data/users";


class App extends Component{

  state = { users: users };

search = () => {
    alert("hi")
  }

  render()
  {
      const { users } = this.state;
      console.log(users);
  return (
    <div className="App row">
      <div className="bg-info col-12 d-flex justify-content-center align-items-center py-100" style={{"height":"200px"}}>
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Button onClick={this.search} color="primary">جستجو</Button>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="email" dir="rtl" name="email" id="exampleEmail" placeholder="کد ملی را وارد کنید" />
              <Label for="exampleEmail" className="mr-sm-2 ml-sm-1 text-white">:کدملی</Label>
          </FormGroup>
        </Form>
      </div>
      <div className="col-8 bg-primary">
        bye
      </div>
      <div className="col-4 bg-warning">
        side
      </div>
    </div>
  );
}
}

export default App;
