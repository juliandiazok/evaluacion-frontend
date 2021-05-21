const urlAPI = 'http://api.mediastack.com/v1/news?access_key=2fce6a7f789a8e329595fe11a583f3ed'
const table = document.querySelector('table')

fetch(urlAPI)
  .then((response) => response.json())
  .then(({data}) => {
    data.forEach((n) => {
      const tr = document.createElement('tr');
      const author = document.createElement('td');
      const category = document.createElement('td');
      const language = document.createElement('td');
      const source = document.createElement('td');
      const title = document.createElement('td');
      const url = document.createElement('td');
      author.innerHTML = n.author;
      category.innerHTML = n.category;
      language.innerHTML = n.language;
      source.innerHTML = n.source;
      title.innerHTML = n.title;
      url.innerHTML = n.url;
      tr.appendChild(author);
      tr.appendChild(category);
      tr.appendChild(language);
      tr.appendChild(source);
      tr.appendChild(title);
      tr.appendChild(url);
      table.appendChild(tr);
      console.log(tr)
    }) ;
  })

