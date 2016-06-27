for(var i = 1; i < 101; i++){
var li = document.createElement('li');

if( i % 3 == 0 && i % 5 ==5){
li.textContent = i + '回目';
}

document.getElementById('list').appendChild(li);
}
