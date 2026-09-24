import { Link } from "react-router-dom"
function NewPage() {
    return (
        <div>
            <h1>New Page</h1>
            <p>This is a new page</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default NewPage
