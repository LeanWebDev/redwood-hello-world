import { Link, routes } from '@redwoodjs/router'

const FentonPage = () => {
  return (
    <>
      <h1>FentonPage</h1>
      <p>
        Find me in <code>./web/src/pages/FentonPage/FentonPage.js</code>
      </p>
      <p>
        My default route is named <code>fenton</code>, link to me with `
        <Link to={routes.fenton()}>Fenton</Link>`
      </p>
    </>
  )
}

export default FentonPage
