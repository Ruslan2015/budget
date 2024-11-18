let row = ["Первый", "Второй", "Третий"];

let table = document.createElement('table');
content.append(table);
table.insertAdjacentHTML('beforeend', `<tr><td>${row[2]}</td><td>${row[1]}</td><td>${row[0]}</td></tr>`);