//Create the event Listener for the buttons.
let post1 = {
    id: 1,
    author: 'John',
    content: 'My first Post!',
    likes: 10,
    comments: ['Great post!', 'Nice photo!'],
    image: 'https://files.codingninjas.in/image2-28694.jpg'
};

const { comments } = post1;
function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';


    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const authorElement = document.createElement('h3');
    authorElement.textContent = post1.author;

    const contentElement = document.createElement('p');
    contentElement.textContent = post1.content;

    const imageElement = document.createElement('img');
    imageElement.src = post1.image;
    imageElement.alt = 'Post Image';

    const likeButton = document.createElement('button');
    likeButton.textContent = `Like`;
    likeButton.classList.add('like-button');

    let isLike = false;
    likeButton.addEventListener('click', () => {
        if (!isLike) {
            if (!isLike) {
                post1.likes++;
                postFooter.textContent = `Likes: ${post1.likes} Comments: ${comments.length}`;
                likeButton.style.backgroundColor = 'red';
                likeButton.disabled = true;
                isLike = true;
            }
        }
    });

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.classList.add('comment-button')

    commentButton.addEventListener('click', () => {
        if (commentInput.value !== '') {
            comments.push(commentInput.value);
            
            const newCommentEl = document.createElement('p');
            newCommentEl.textContent = commentInput.value;
            commentsContainer.appendChild(newCommentEl);

            postFooter.textContent = `Likes: ${post1.likes} Comments: ${comments.length}`;
            commentInput.value = '';
            commentsContainer.style.display = 'block';
        }
    });

    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');
    postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    commentsContainer.style.display = 'none';

    comments.forEach((comment) => {
        const commentEl = document.createElement('p');
        commentEl.textContent = comment;
        commentsContainer.appendChild(commentEl);
    });

    postElement.appendChild(authorElement);

    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);

    postFooter.addEventListener('click', () => {
        if (commentsContainer.style.display === 'none') {
            commentsContainer.style.display = 'block';
        } else {
            commentsContainer.style.display = 'none';
        }
    });

    postsContainer.appendChild(postElement);
}

renderPosts();    