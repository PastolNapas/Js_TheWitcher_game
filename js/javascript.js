let witcher = {
    power: 7,
    health: 50,
    coin: 0
}
let wolf = {
    power: 6,
    health: 50,
    coin: 15
}

let imlerih = {
    power: 8,
    health: 61,
    coin:20,
}

let karantir = {
    power: 10,
    health: 68,
    coin:20,
}

let eredin = {
    power: 15,
    health: 80,
    coin:20
}

let show = function(){
    alert ('Ваше здоровье = ' +witcher.health+ "...Ваша атака = "+witcher.power+ "...Ваши деньги = "+witcher.coin)
}

let shop = function(){
    let weapon = prompt('Выбери оружие: 1.Эликсир улучшенный Гром - 15 монет(Увеличивает урон на 5).  2. Зелье Раффара Белого - 15 монет(Увеличивает здоровья в два раза)');
    switch (weapon) {
        case '1':
            if(witcher.coin >= 15){
             witcher.power+= 5;
             witcher.coin-=15;
            }else{
                alert('Недостаточно монет')
            }
            break;
        case '2':
            if (witcher.coin>=15){
                witcher.health+=50;
                witcher.coin -= 15;
            }
            else(
                alert('Недостаточно монет')
            )
    }
}

function battleWolf(){
    let x=witcher.health;
    let y=wolf.health;
    
    for (i=0; x>0; i++ ){
        x-=wolf.power;
    }

    for (j=0; y>0; j++){
        y-=witcher.power;
    }

    if (i>j){
        alert ('Удачи');
        alert ('Поздравляем! Ведьмак победил');
        return wolf.health=0, witcher.coin+=wolf.coin, wolf.coin=0;
    }
    else{
        alert ("Удачи!");
        alert ("Очень жаль! Волки победили");
        alert ("До встречи в следующий раз.");
        return witcher.health=0, witcher.coin=0;
    }

}

function battleImlerih(){
    let x=witcher.health;
    let y=imlerih.health;
    
    for (i=0; x>0; i++ ){
        x-=imlerih.power;
    }

    for (j=0; y>0; j++){
        y-=witcher.power;
    }

    if (i>j){
        alert ('Удачи');
        alert ('Поздравляем! Ведьмак победил');
        return imlerih.health=0, witcher.coin+=imlerih.coin, imlerih.coin=0;
    }
    else{
        alert ("Удачи!");
        alert ("Очень жаль! Имлерих победили");
        alert ("До встречи в следующий раз.");
        return witcher.health=0, witcher.coin=0;
    }

}
function battleKarantir(){
    let x=witcher.health;
    let y=karantir.health;
    
    for (i=0; x>0; i++ ){
        x-=karantir.power;
    }

    for (j=0; y>0; j++){
        y-=witcher.power;
    }

    if (i>j){
        alert ('Удачи');
        alert ('Поздравляем! Ведьмак победил');
        return karantir.health=0, witcher.coin+=karantir.coin, karantir.coin=0;
    }
    else{
        alert ("Удачи!");
        alert ("Очень жаль! Карантир победили");
        alert ("До встречи в следующий раз.");
        return witcher.health=0, witcher.coin=0;
    }
}
function battleEredin(){
    let x=witcher.health;
    let y=eredin.health;
    
    for (i=0; x>0; i++ ){
        x-=eredin.power;
    }

    for (j=0; y>0; j++){
        y-=witcher.power;
    }

    if (i>j){
        alert ('Удачи');
        alert ('Поздравляем! Ведьмак победил');
        return eredin.health=0, witcher.coin+=eredin.coin, eredin.coin=0;
    }
    else{
        alert ("Удачи!");
        alert ("Очень жаль! Эредин победили");
        alert ("До встречи в следующий раз.");
        return witcher.health=0, witcher.coin=0;
    }
}