import {useEffect, useState} from "react";
import Loader from "./Loader.jsx";

export default function Comments({postId}) {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(data => {
                setComments(data)
                setLoading(false)
            })
    }, [postId]);

    if(loading){
        return <Loader />
    }

    return (
        <div className="mt-4 border-t border-t-[#282828] pt-2">
            <h3 className="text-lg font-bold mb-2">Yorumlar:</h3>
            <ul className="space-y-2">
                {comments.map(comment => (
                    <li key={comment.id} className="p-2 border border-[#282828] rounded">
                        <p className="text-sm font-semibold text-blue-500">
                            <a href={`mailto:${comment.email}`} className="hover:underline">{comment.email}</a>
                        </p>
                        <p className="text-sm">{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
