import 'bulma/css/bulma.css';
import './PostShow.css';

function PostShow({addVote, post}) {

    const voteHandle = (event) => {
        let newVotes = post.votes + 1;
        addVote(post.id, newVotes);
    }

    return (
        <div>
            <article className="media">
                <figure className="media-left">
                    <img className="image is-64x64" src={post.postImage} />
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
                                {post.description}
                            <br />
                            <small className="is-size-7">
                            Отправлено:
                                <img className="image is-24x24" src={post.avatar} />
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