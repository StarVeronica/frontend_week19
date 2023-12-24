function addPost(obj) {
    const title = document.createElement('h3');
    title.textContent = `Заголовок: ${obj.title}`;
	const body = document.createElement('p');
    body.textContent = `Статья: ${obj.body}`;
    const newDiv = document.createElement('div');
    newDiv.append(title);
    newDiv.append(body);
    document.getElementById('main_div').append(newDiv);
}

function getText() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            data.forEach(element => {
                addPost(element);
            });
        })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
}

getText();
