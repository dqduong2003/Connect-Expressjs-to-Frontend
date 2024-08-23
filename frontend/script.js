// Author: Daniel Dang
// Last Modified: 23/8/2024

async function getData() {
    const url = "http://localhost:5000/api/posts";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;  // Return the JSON data
    } catch (error) {
        console.error(error.message);
        return null;  // Return null or handle the error as needed
    }
}

getData().then(data => {
    if (data) {
        // console.log('Data received:', data[0]);
        for (let i = 0; i < data.length; i++) {
            const post = data[i];
            
            const body = document.getElementsByTagName('body')[0];
            const postContainer = document.createElement('div');
            postContainer.className = 'post';
            postContainer.id = `post-${post.id}`;

            const postContent = document.createElement('div');
            postContent.className = 'post-content';
            
            const icon = document.createElement('i');
            if (post.id == 1) {
                icon.className = 'fa-brands fa-html5';
            }
            else if (post.id == 2) {
                icon.className = 'fa-brands fa-css3-alt';
            }
            else {
                icon.className = 'fa-brands fa-js';
            }

            const h1 = document.createElement('h1');
            h1.className = 'post-title';
            h1.textContent = post.title; 

            const p = document.createElement('p');
            p.className = 'post-body';
            p.textContent = post.content;

            postContent.appendChild(icon);
            postContent.appendChild(h1);
            postContent.appendChild(p);
            postContainer.appendChild(postContent);
            body.appendChild(postContainer);
        }

    } else {
        console.log('Failed to fetch data.');
    }
}).catch(error => {
    console.error('Error:', error);
});
  