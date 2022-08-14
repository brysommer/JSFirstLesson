let el = document.querySelector('input[name="jssource"]');


el.addEventListener('change', (ev) => {
    let text = ev.target.value;

    if(text === 'стояти'){

        let el = document.querySelector('.test');
        el.style.backgroundColor = 'red';

    }

    if(text === 'приготуйся'){

        let el = document.querySelector('.test');
        el.style.backgroundColor = 'yellow';

    }

    if(text === 'не бійся'){

        let el = document.querySelector('.test');
        el.style.backgroundColor = 'green';

    }
    else {
        console.log(text);
    }
    
})






const button = document.querySelector('.button');
const addText = document.querySelector('.result');



button.addEventListener('click', (click) => {
    addText.innerHTML = '<h1>Відлік розпочався</h1>';
    
    
    setTimeout(() => {
    
        let el = document.querySelector('.test');
        el.style.backgroundColor = 'green';
        addText.innerHTML = '<img src="http://images-on-off.com/images/60/zeleniysignalsvetoforazelenayastrelkapra-efab8cf9.jpg" width="400">'
    
    }, 10000);
    
        

    
    
})




