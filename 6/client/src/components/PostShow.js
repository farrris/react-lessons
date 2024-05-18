import 'bulma/css/bulma.css';
import './PostShow.css';
import usePostsContext from '../hooks/usePostsContext';

function PostShow({post}) {

    const { addVoteHandle } = usePostsContext();

    const voteHandle = (event) => {
        addVoteHandle(post.id);
    }

    return (
        <div>
            <article className="media">
                <figure className="media-left">
                    <img className="image is-64x64" src={post.image} />
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>
                                <a href={post.url} className="has-text-info">
                                    {post.title}
                                </a>
                                <span className="tag is-small">#4</span>
                            </strong>
                            <br />
                                {post.content}
                            <br />
                            <small className="is-size-7">
                            Отправлено:
                                <img className="image is-24x24" src={post.user_avatar} />
                            </small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <span className="icon is-small">
                        <i className="fa fa-chevron-up"></i>
                        <p onClick={voteHandle} >Голос</p>
                        <strong className="has-text-info">{post.votes}</strong>
                    </span>
                </div>
            </article>
        </div>
    );
}

export default PostShow;