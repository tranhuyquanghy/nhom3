var films = [
    {
        name: 'film1',
        id: 1 ,
        link : '...'
    },
    {
        name: 'film2',
        id: 2 ,
        link : '...'
    },
    {
        name: 'film3',
        id: 3 ,
        link : '...'
    }
]


var input = document.getElementById('input');
var button = document.getElementById('button');

button.onclick = function() {
    let search = input.value.trim()
    if (search === '') {
        alert('bạn chưa nhập')
    }
    else {
        const film = films.filter(function(item){
            return item.name.toLowerCase().includes(search.toLowerCase());
            
        })
        localStorage.setItem("listfilm",film)
    }
    window.location.href="./detail.html"
    if(film.length > 0) {
        displayItem(film);
    }
    else {
        alert('không có kết quả phù hợp')
    }
}

