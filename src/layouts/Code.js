import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Code = ({onClick}) => {
  return(
<div className="row">
<div className="bg-info col-12 d-flex justify-content-center align-items-center py-100" style={{"height":"200px"}}>
  <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Button onClick={onClick} color="primary">جستجو</Button>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input type="text" name='code' dir="rtl" placeholder="کد ملی را وارد کنید" />
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

Code.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Code;
