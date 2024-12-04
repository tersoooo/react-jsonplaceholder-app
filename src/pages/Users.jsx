import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Loader from "../components/Loader.jsx";

export default function Users() {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredUser, setFilteredUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setFilteredUser(data)
                setLoading(false)
            })
    }, []);

    useEffect(() => {
        setFilteredUser(
            users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm,users]);

    if(loading){
        return <Loader />
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold flex justify-center border-b pb-4 border-b-[#282828]">Users</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 mt-4 border rounded bg-transparent outline-none border-[#282828] focus:border-[#444]"
            />
            <ul className="grid grid-cols-4 mt-4 gap-x-4">
                {filteredUser.map(user => (
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
