import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
        <h1 className="text-red-500 text-2xl sm:text-xl">
            Error: Page Not Found
        </h1>
        <Link to="/" className="bg-blue-500 text-white px-2 py-2">Back To Home</Link>
    </div>
  )
}
export default Error