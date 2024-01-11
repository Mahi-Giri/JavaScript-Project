let postsData = [
    {
        id: 1,
        author: 'John',
        content: 'Hello, Instagram!',
        likes: 10,
        comments: ['Great post!', 'Nice photo!'],
        image: 'https://files.codingninjas.in/image2-28694.jpg'
    },
    {
        id: 2,
        author: 'Jane',
        content: 'This is a great post!',
        likes: 15,
        comments: [],
        image: 'https://files.codingninjas.in/oip-28704.jpg'
    },
    {
        id: 3,
        author: 'Alice',
        content: 'Another post',
        likes: 8,
        comments: [],
        image: 'https://files.codingninjas.in/th-2-28706.jpg'
    },
    {
        id: 4,
        author: 'Bob',
        content: 'Check out this photo!',
        likes: 20,
        comments: [],
        image: 'https://files.codingninjas.in/image1-28708.jpg'
    },
];

const posts = document.getElementById('posts');
posts.innerHTML = '';
function renderPosts() {

    for (const post of postsData) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        posts.appendChild(postElement);

        const authorElement = document.createElement('h3');
        authorElement.textContent = post.author;
        postElement.appendChild(authorElement);

        const imgEl = document.createElement('img');
        imgEl.src = post.image;
        imgEl.alt = 'Post Image';
        postElement.appendChild(imgEl);

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        postElement.appendChild(contentElement);

        const likeButton = document.createElement('button');
        likeButton.textContent = `Like`;
        likeButton.classList.add('like-button');
        postElement.appendChild(likeButton)

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Write a comment...';
        postElement.appendChild(input);

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        commentButton.classList.add('comment-button');
        postElement.appendChild(commentButton);

        const postFooter = document.createElement('div');
        postFooter.classList.add('post-footer');
        postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
        postElement.appendChild(postFooter);

        likeButton.addEventListener('click', () => {
            likePost(post, likeButton);
        });


        const commentsContainer = document.createElement('div');
        commentsContainer.classList.add('comments-container');
        postElement.appendChild(commentsContainer);

        post.comments.forEach((comment) => {
            const commentEl = document.createElement('p');
            commentEl.textContent = comment;
            commentsContainer.appendChild(commentEl);
        });

        commentButton.addEventListener('click', () => {
            inputValue = input.value.trim();
            if (inputValue !== '') {
                addComment(post, inputValue);

                const newCommentEl = document.createElement('p');
                newCommentEl.textContent = input.value;
                commentsContainer.appendChild(newCommentEl);

                postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
                input.value = '';

                commentsContainer.style.display = 'block';
            }
        });

        commentsContainer.style.display = 'none';

        postFooter.addEventListener('click', () => {
            if (commentsContainer.style.display === 'none') {
                commentsContainer.style.display = 'block';
            } else {
                commentsContainer.style.display = 'none';
            }
        });
    }

    function likePost(post, likeButton) {
        post.likes++;
        likeButton.style.backgroundColor = 'red';
        likeButton.disabled = true;
        const postFooter = likeButton.parentElement.querySelector('.post-footer');
        postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
    }

    function addComment(post, comment) {
        post.comments.push(comment);
    }
}

renderPosts();