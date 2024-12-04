import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Loader from "../components/Loader.jsx";

export default function Users() {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, []);

    if(loading){
        return <Loader />
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold flex justify-center border-b pb-4 border-b-[#282828]">Users</h1>
            <ul className="grid grid-cols-4 mt-4 gap-x-4">
                {users.map(user => (
                    <li key={user.id} className="mb-2 p-2  rounded border border-[#282828] font-Roboto font-semibold">
                        <Link to={`/posts/${user.id}`} className="hover:underline">
                            {user.name}
                            <p className="text-lg">{user.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
