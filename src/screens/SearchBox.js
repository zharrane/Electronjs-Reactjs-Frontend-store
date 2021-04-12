import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import './searchForm.scss';

//***////////////////*** */ */

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/manageproducts');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <div className="Form-button-input">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>

        <Button type="submit" variant="outline-success" className="p-2">
          <BiSearchAlt />
        </Button>
      </div>
    </Form>
  );
};

export default SearchBox;
