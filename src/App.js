import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Table } from 'react-bootstrap'

function App() {
  const [kickstarterList, setKickstarterList] = useState([])
  const url = 'http://starlord.hackerearth.com/kickstarter'
  const config = {
    headers: { 'Content-Type': 'application/json' },
    'Access-Control-Allow-Origin': '*',
  }
  useEffect(() => {
    axios
      .get(url, config)
      .then((res) => {
        setKickstarterList(res.data)
      })
      .catch((err) => console.log(err))
  }, [config])
  return (
    <div className='container mt-3'>
      <Card className='text-center'>
        <Card.Header>
          <h1>Kickstarter</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>Highly rated Kickstarter Projects</Card.Title>
          <Table responsive hover>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Blurb</th>
                <th>Percentage Funded</th>
                <th>Amount Pledged</th>
              </tr>
            </thead>
            <tbody>
              {kickstarterList.map((entry, i) => (
                <tr key={i}>
                  <td>{entry['s.no']}</td>
                  <td>{entry['blurb']}</td>
                  <td>{entry['percentage.funded']}</td>
                  <td>{entry['amt.pledged']}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App
