import PostShow from "./PostShow.js";
import usePostsContext from "../hooks/usePostsContext.js";

function PostList() {
    const {posts} = usePostsContext();

    const renderedPosts = posts
                                .sort((a, b) => b.votes - a.votes)
                                .map((post) => {
                                    return <PostShow key={post.id} post={post} />;
                                });

    return (
        <div>
            {renderedPosts}
        </div>
    )
}

export default PostList;