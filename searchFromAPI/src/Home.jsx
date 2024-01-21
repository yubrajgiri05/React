import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState([])
    const [records, setRecords] = useState(data)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
	.then(response => response.json())
	.then(data => {
        setData(data)
        setRecords(data)
    })
	.catch(err => console.error(err));
    },[])

    const Filter =(event) =>{
        setRecords(data.filter(f=> f.name.toLowerCase()
        .includes(event.target.value)))

    }
  return (
    <>
      <div className="p-5">
        <input type="text" className='form-control' onChange={Filter} placeholder='search data' />
        <table className='bg-success m-5'>
            <thead>
                <tr className='bg-danger '>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>company</th>
                </tr>
            </thead>
            <tbody>
                {records.map((d,i)=>(
                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                    <td>{d.company.name}</td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
