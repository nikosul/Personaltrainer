import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import TopAppBar from './Appbar';
import NavigationBar from './Navbar';
import 'react-table/react-table.css';

export default function Customerlist()  {
  const [customers, setCustomers] = useState([]);

useEffect(() => fetchData(), []);

  const fetchData = () => {
  fetch('https://customerrest.herokuapp.com/api/customers')
  .then(response => response.json())
  .then(data => setCustomers(data.content))
}

const columns = [
  {
    Header: 'Firstname',
    accessor: 'firstname'
  },
  {
    Header: 'Lastname',
    accessor: 'lastname'
  },
  {
    Header: 'Street Address',
    accessor: 'streetaddress'
  },
  {
    Header: 'Postcode',
    accessor: 'postcode'
  },
  {
    Header: 'City',
    accessor: 'city'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Phone',
    accessor: 'phone'
  }
]

return (
  <div>
  <div> 
  <TopAppBar />
  <NavigationBar />
  </div>
  <div>
    <ReactTable filterable={true} data={customers} columns={columns} />
  </div>
  </div>
  );
}