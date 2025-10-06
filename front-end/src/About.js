import { useEffect, useState } from 'react'

/**
 * A React component that represents the About Us page of the app.
 * Fetches personal info from the backend and displays it.
 */
const About = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/about')
      .then(res => res.json())
      .then(info => setData(info))
      .catch(err => console.error('Error fetching about info:', err))
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>About Us</h1>
      <img
        src={data.image}
        alt="Profile"
        style={{ width: '200px', borderRadius: '50%', marginBottom: '1rem' }}
      />
      <h2>{data.name}</h2>
      <h4>{data.title}</h4>
      {data.paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </>
  )
}

// make this component available to be imported into any other file
export default About
