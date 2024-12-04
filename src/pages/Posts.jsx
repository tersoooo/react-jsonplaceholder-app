import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Comments from "../components/Comments.jsx";

export default function Posts() {

    const { userId } = useParams()
    const [posts, setPosts] = useState([]);
    const [expandedPostId, setExpandedPostId] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const url = userId
        ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        :`https://jsonplaceholder.typicode.com/posts`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
            })
    }, [userId]);

    if(loading){
        return <Loader />
    }



    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">
                {userId ? ` ${userId} POST` : 'ALL POSTS'}
            </h1>
            <ul className="mt-4 space-y-4">
                {posts.map(post => (
                    <li key={post.id} className="p-4 border border-[#282828] rounded">
                        <h2 className="text-lg font-bold">{post.title}</h2>
                        <p className="text-sm mt-2">{post.body}</p>
                        <button
                            className="bg-transparent border border-[#282828] px-2 mt-4 rounded py-1"
                            onClick={() =>
                            setExpandedPostId(expandedPostId === post.id ? null : post.id)
                        }
                        >
                            {expandedPostId === post.id ? 'Yorumları Gizle' : 'Yorumları Göster'}
                        </button>
                        {expandedPostId === post.id && <Comments postId={post.id} />}
                    </li>
                ))}
            </ul>
        </div>
    )
}
