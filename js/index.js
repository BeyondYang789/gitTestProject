function showH1(h1title,className) {
　　var element = document.createElement('h1');
    element.className=className;
　　element.innerHTML = h1title;
    document.body.appendChild(element);
}

function showH2(h2title,className) {
　　var element = document.createElement('h2');
    element.className=className;
　　element.innerHTML = h2title;
    document.body.appendChild(element);
}

    
module.exports = {showH1,showH2};