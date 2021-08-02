import data from './data.js'

const buildCard = (card) => {

    // declare elements 
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const a = document.createElement('a');
    const img = document.createElement('img');
    
    // append elements recently created
    const body = document.querySelector('body');
    body.append(div);
    div.append(a);
    a.append(h4);
    a.append(img);
    
    // set atteributes
    div.setAttribute("class", "card");
    h4.innerHTML = card.name;
    a.setAttribute("href", card.link);
    img.setAttribute("src", card.pic);
}

data.forEach(card => buildCard(card))