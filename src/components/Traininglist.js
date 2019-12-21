import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import TopAppBar from './Appbar';
import NavigationBar from './Navbar';
import Button from '@material-ui/core/Button'
import Moment from 'moment';

export default function Customerlist()  {
  const [training, setTraining] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
  fetch('https://customerrest.herokuapp.com/gettrainings')
  .then(response => response.json())
  .then(data => setTraining(data))
}

  const deleteTraining = (link) => {
  if(window.confirm('Are you sure you want to delete?')) {
    fetch('https://customerrest.herokuapp.com/api/trainings' + link, {
      method: 'DELETE'})
    .then(res => fetchData())
    .catch(err => console.err(err))
  }
}

const columns = [
  {
    Header: 'Activity',
    accessor: 'activity'
  },
  {
    Header: 'Date',
    id: 'date',
    accessor: d => { return Moment(d.timestamp)
      .local()
      .format('DD.MM.YYYY, hh:mm a');
  }},
  {
    Header: 'Duration (min)',
    accessor: 'duration'
  },
  {
    Header: 'Customer Firstname',
    accessor: 'customer.firstname'
  },
  {
    Header: 'Customer Lastname',
    accessor: 'customer.lastname'
  },
  {
    filterable: false,
    sortable: false,
    accessor: 'links[0].href',
    Cell: ({value}) => <Button color='secondary' size='small' onClick={() => deleteTraining(value)}>Delete</Button>
  }
]

return (
  <div>
  <div>
    <TopAppBar />
    <NavigationBar />
  </div>
  <div>
    <ReactTable filterable={true} data={training} columns={columns} />
  </div>
  </div>
  );
}