import {useState} from "react";
import PostShow from "./PostShow";
import postsData from "../data.js"

function PostList() {
    const [posts, setPosts] = useState(postsData);

    const addVoteHandle = (id, newVotes) => {
        const updatedPosts = posts.map((post) => {
            if (post.id == id) {
                return { ...post, votes: newVotes}
            }
            
            return post;
        });

        setPosts(updatedPosts);
    }

    const renderedPosts = posts
                                .sort((a, b) => b.votes - a.votes)
                                .map((post) => {
                                    return <PostShow addVote={addVoteHandle} key={post.id} post={post} />;
                                });

    return (
        <div>
            {renderedPosts}
        </div>
    )
}

export default PostList;