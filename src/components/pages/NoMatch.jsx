import { Link } from "react-router-dom"

const NoMatch = () => {
    return (
      <div>
        <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px'}}>404 NOT FOUND</h1>
        <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '24px'}}>Page doesn`t exist</p>
        <Link style={{display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: '24px', 
        marginTop: '30px'}} to='/'>Back to main page</Link>
      </div>
    )
}

export default NoMatch