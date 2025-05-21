import Fetcher from './Fetcher'

function App() {
  return (
    <div>
      <h1>Backend for Frontend Proxy</h1>
      <Fetcher title="Calling backend directly" url="http://localhost:3002/" />
      <p>* Will fail due to missing CORS</p>
      <Fetcher title="Calling bff directly" url="http://localhost:3001/" />
      <p>* Will pass due to added CORS</p>
      <Fetcher
        title="Calling backend via proxy"
        url="http://localhost:3001/proxy/"
      />
      <p>* Will pass via proxy</p>
    </div>
  )
}

export default App
