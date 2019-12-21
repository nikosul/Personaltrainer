import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import TopAppBar from './Appbar';
import NavigationBar from './Navbar';
import Button from '@material-ui/core/Button'
import 'react-table/react-table.css';
import EditCustomer from './EditCustomer';
import AddCustomer from './AddCustomer';
import AddTraining from './AddTraining';

export default function Customerlist()  {
  const [customer, setCustomer] = useState([]);

useEffect(() => fetchData(), []);

  const fetchData = () => {
  fetch('https://customerrest.herokuapp.com/api/customers')
  .then(response => response.json())
  .then(data => setCustomer(data.content))
}

  const saveCustomer = (customer) => {
  fetch('https://customerrest.herokuapp.com/api/customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })
  .then(res => fetchData())
  .catch(err => console.error(err))
}

  const updateCustomer = (content, link) => {
    fetch(link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
  }

  const deleteCustomer = (link) => {
  if(window.confirm('Are you sure you want to delete?')) {
    fetch(link, {method: 'DELETE'})
    .then(res => fetchData())
    .catch(err => console.err(err))
  }
}

const saveTraining = (training) => {
  fetch('https://customerrest.herokuapp.com/api/trainings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(training)
  })
  .then(res => fetchData())
  .catch(err => console.error(err))
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
  },
  {
    filterable: false,
    sortable: false,
    accessor: 'links[0].href',
    width: 120,
    Cell: row => <AddTraining saveTraining={saveTraining} customer={row.original} />
  },
  {
    filterable: false,
    sortable: false,
    width: 90,
    Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original} />
  },
  {
    filterable: false,
    sortable: false,
    width: 90,
    accessor: 'links[0].href',
    Cell: ({value}) => <Button color='secondary' size='small' onClick={() => deleteCustomer(value)}>Delete</Button>
  }
]

return (
  <div>
  <div> 
  <TopAppBar />
  <NavigationBar />
  </div>
  <div>
    <AddCustomer saveCustomer={saveCustomer} />
    <ReactTable filterable={true} data={customer} columns={columns} />
  </div>
  </div>
  );
}