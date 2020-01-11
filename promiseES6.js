let drink = 1;

function shoot(arrow){
    console.log('Вы сделали выстрел');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("Вы промахунлись");
             }, 3000)
    })

    return promise;
   
};

function win(){
    console.log('Вы победили');
    (drink == 1) ? buyBear() : giveMoney();
}

function buyBeer(){
    console.log('Вам купили пива');
}

function giveMoney(){
    console.log('Вам дали деньги');
}


function loose(){
    console.log('Вы проиграли');
}
shoot({})
    .then(mark => console.log('Вы попали в цель'))
    .then(win)
    .catch(loose)