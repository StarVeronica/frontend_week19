form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: document.getElementById('title').value,
            body: document.getElementById('body').value,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
        })
        .then(response => response.json())
        .then((data) => {
            const newTitle = document.createElement('h3');
            newTitle.textContent = data.title;
            const newBody = document.createElement('p');
            newBody.textContent = data.body;
            const newDiv = document.createElement('div');
            newDiv.append(newTitle);
            newDiv.append(newBody);
            document.getElementById('posts').append(newDiv);
            document.forms.form.reset();
        })
});
