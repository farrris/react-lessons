function ProfileCard({title, handle, img, description}) {
    return (
        <div>
            <img width="100px" height="100px" src={img} alt="card logo" />
            <div>Title: {title}</div>
            <div>Handle: {handle}</div>
            <div>Description: {description}</div>
        </div>
    )
}

export default ProfileCard;