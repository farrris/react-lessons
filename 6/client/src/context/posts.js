import { createContext, useCallback, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../constants/api";

const PostsContext = createContext();

function Provider({children}) {
    const [posts, setPosts] = useState([]);

    const getPosts = useCallback(async () => {
        await axios.get(SERVER_URL + "/api/posts").then((res) => {
            setPosts(res.data);
        })
    }, []);

    const addVoteHandle = (id) => {
        axios.post(SERVER_URL + `/api/posts/${id}/vote`).then((res) => {
            const resPost = res.data;
            const updatedPosts = posts.map((post) => {
                if (post.id == id) {
                    return { ...resPost, votes: resPost.votes}
                }
                
                return post;
            });

            setPosts(updatedPosts);
        });
    }

    const postsData = {
        posts, getPosts, addVoteHandle
    }

    return (
        <PostsContext.Provider value={postsData}>
            {children}
        </PostsContext.Provider>
    )
}

export { Provider };
export default PostsContext;