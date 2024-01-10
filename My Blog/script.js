//complete the addBlog function to add moveup, movedown and delete button. 
function addBlog(blog) {
    const blogList = document.querySelector('.blog-list');


    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');

    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
    newBox.appendChild(newBlogPost);


    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);

    // create a new div with className blog-buttons and append it to newBox

    const blog_buttons = document.createElement('div');
    blog_buttons.classList.add('blog-buttons');
    newBox.append(blog_buttons);

    //Create moveup button with class blog-button and move-up

    const blog_btn_move_up = document.createElement('button');
    blog_btn_move_up.classList.add('blog-button', 'move-up');
    blog_btn_move_up.innerText = 'Move Up';
    blog_buttons.append(blog_btn_move_up);

    blog_btn_move_up.addEventListener('click', () => {
        newBox.parentNode.insertBefore(newBox, newBox.previousElementSibling);
    });    

    //Create movedown button with class blog-button and move-down
    const blog_btn_move_down = document.createElement('button');
    blog_btn_move_down.classList.add('blog-button', 'move-down');
    blog_btn_move_down.innerText = 'Move Down';
    blog_buttons.append(blog_btn_move_down);

    blog_btn_move_down.addEventListener('click', () => {
        newBox.parentNode.insertBefore(newBox.nextElementSibling, newBox);
    });
    
    //Create delete button with class blog-button and delete
    const blog_btn_delete = document.createElement('button');
    blog_btn_delete.classList.add('blog-button', 'delete');
    blog_btn_delete.innerText = 'Delete';
    blog_buttons.append(blog_btn_delete);

    blog_btn_delete.addEventListener('click', () => {
        newBox.remove();
    });

    blogList.appendChild(newBox);

    // Add event listeners to the buttons
}

const blogData = [
    {
        title: 'First Blog Post',
        date: 'January 1, 2022',
        content: 'This is the content of the first blog post.'
    },
    {
        title: 'Second Blog Post',
        date: 'February 1, 2022',
        content: 'This is the content of the second blog post.'
    },
    {
        title: 'Third Blog Post',
        date: 'March 1, 2022',
        content: 'This is the content of the third blog post.'
    }
];

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array