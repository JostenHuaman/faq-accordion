const icon = document.querySelector('#iconcontainer');
const icon2 = document.querySelector('#iconcontainer2');
const icon3 = document.querySelector('#iconcontainer3');
const icon4 = document.querySelector('#iconcontainer4');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');
const text4 = document.querySelector('#text4');
const iconminus = document.querySelector('#icon-minus');
const iconminus2 = document.querySelector('#icon-minus2');
const iconminus3 = document.querySelector('#icon-minus3');
const iconminus4 = document.querySelector('#icon-minus4');
const iconplus = document.querySelector('#icon-plus');
const iconplus2 = document.querySelector('#icon-plus2');
const iconplus3 = document.querySelector('#icon-plus3');
const iconplus4 = document.querySelector('#icon-plus4');

icon.addEventListener('click', () => {
    text1.style.display = (text1.style.display === 'block') ? 'none' : 'block';
    if(text1.style.display === 'block'){
        iconminus.style.display = 'block';
        iconplus.style.display = 'none';
    }else{
        iconminus.style.display = 'none';
        iconplus.style.display = 'block';
    }
})

icon2.addEventListener('click', () => {
    text2.style.display = (text2.style.display === 'block') ? 'none' : 'block';
    if(text2.style.display === 'block'){
        iconminus2.style.display = 'block';
        iconplus2.style.display = 'none';
    }else{
        iconminus2.style.display = 'none';
        iconplus2.style.display = 'block';
    }
})

icon3.addEventListener('click', () => {
    text3.style.display = (text3.style.display === 'block') ? 'none' : 'block';
    if(text3.style.display === 'block'){
        iconminus3.style.display = 'block';
        iconplus3.style.display = 'none';
    }else{
        iconminus3.style.display = 'none';
        iconplus3.style.display = 'block';
    }
})

icon4.addEventListener('click', () => {
    text4.style.display = (text4.style.display === 'block') ? 'none' : 'block';
    if(text4.style.display === 'block'){
        iconminus4.style.display = 'block';
        iconplus4.style.display = 'none';
    }else{
        iconminus4.style.display = 'none';
        iconplus4.style.display = 'block';
    }
})