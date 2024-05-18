function getRandomAvatar() {
    const avatars = ["images/avatars/daniel.jpg", "images/avatars/kristy.png", "images/avatars/veronika.jpg", "images/avatars/molly.png"]

    return avatars[Math.floor(Math.random() * avatars.length)];
}

function getRandomPostImage() {
    const postImages = ["images/posts/image-yellow.png", "images/posts/image-rose.png", "images/posts/image-steel.png", "images/posts/image-aqua.png"]

    return postImages[Math.floor(Math.random() * postImages.length)]
}

export {getRandomAvatar, getRandomPostImage}