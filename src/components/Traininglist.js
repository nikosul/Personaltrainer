import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import TopAppBar from './Appbar';
import NavigationBar from './Navbar';
import Moment from 'moment';

export default function Customerlist()  {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
  fetch('https://customerrest.herokuapp.com/gettrainings')
  .then(response => response.json())
  .then(data => setTrainings(data))
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
  }
]

return (
  <div>
  <div>
    <TopAppBar />
    <NavigationBar />
  </div>
  <div>
    <ReactTable filterable={true} data={trainings} columns={columns} />
  </div>
  </div>
  );
}
