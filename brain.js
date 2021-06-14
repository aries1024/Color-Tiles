let colors = ['red','green','yellow','goldenrod','blue','cyan'];
let counter = [0,0,0,0,0,0];
for(let i=1;i<=9;i++){
    let id = 'r' + String(i);
    let ins = document.getElementById(id);
    let randome = colors[Math.floor(Math.random()*colors.length)];
    counter[(colors.indexOf(randome))]++;
    ins.style.backgroundColor = randome;
}
let five_counter = [0,0,0,0,0,0];
for(let j=1;j<=24;j++){
    let game_id='s'+String(j);
    let ans = document.getElementById(game_id);
    let game_randm=colors[Math.floor(Math.random()*colors.length)];
    five_counter[(colors.indexOf(game_randm))]++;
    ans.style.backgroundColor = game_randm;
}

for(let r=0;r<5;r++){
    if(five_counter[r]<counter[r]){
        window.location.reload();
    }
}

let checkGame = function(){
    let flag = true;
for(let i=1;i<=9;i++){
    let ind = '#r' + String(i);
    let check= document.querySelector(ind);
    let five;
    if(i<=3){
        five = document.querySelector('#s'+String(i+6));
    }else if(i>3 && i<=6){
        five = document.querySelector('#s'+String(i+8));
    }else{
        five = document.querySelector('#s'+String(i+10));
    }
    if(check.style.backgroundColor!=five.style.backgroundColor){
        flag=false;
        break;
    }
}

if(flag){
    alert("You Won !!");
    window.location.reload();
}

}

let seconds = 0;
let minutes = 0;
let hour = 0;

let score =0 ;
for(let k=1;k<=25;k++){
    let new_id = '#s'+String(k);
    let button = document.querySelector(new_id);
    
    button.addEventListener('click',function(){
        score++;
        let selectScore=document.querySelector('#score');
        selectScore.innerHTML = `Score: ${score}`;
        let curr_pos = document.querySelector(new_id);
        let right;
        if(k!=5 && k!=10 && k!=15 && k!=20 && k!=25){
            right = document.querySelector('#s' + String(k+1));
            if(right.style.backgroundColor=='' || right.style.backgroundColor=='darkslategray'){
                right.style.backgroundColor = curr_pos.style.backgroundColor;
                curr_pos.style.backgroundColor = 'darkslategray';
                checkGame();
            }
        }
        let left = document.querySelector('#s' + String(k-1));
        let top = document.querySelector('#s' + String(k-5));
        if(k!=21 && k!=22 && k!=23 && k!=24 && k!=25){
            let down = document.querySelector('#s' + String(k+5));
            if(down.style.backgroundColor=='' || down.style.backgroundColor=='darkslategray'){
                down.style.backgroundColor=curr_pos.style.backgroundColor;
                curr_pos.style.backgroundColor = 'darkslategray';
                checkGame();
            }
        }

        if(k!=1 && k!=6 && k!=11 && k!=16 && k!=21){
            if(left.style.backgroundColor=='' || left.style.backgroundColor=='darkslategray'){
                left.style.backgroundColor = curr_pos.style.backgroundColor;
                curr_pos.style.backgroundColor = 'darkslategray';
                checkGame();
            }
        }
        if(k!=1 && k!=2 && k!=3 && k!=4 && k!=5){
            if(top.style.backgroundColor=='' || top.style.backgroundColor=='darkslategray'){
                top.style.backgroundColor = curr_pos.style.backgroundColor;
                curr_pos.style.backgroundColor = 'darkslategray';
                checkGame();
            }
        }
    });    
}

let stopWatch = function(){
    seconds++;
    if(seconds/60 ==1){
        seconds =0 ;
        minutes++;

        if(minutes/60 ==1){
            minutes=0;
            hour++;
        }
    }
    let display_sec=seconds;
    let display_min=minutes;
    let display_hour=hour;
    if(seconds <10){
        display_sec = '0'+String(seconds);
    }
    if(minutes<10){
        display_min = '0'+String(minutes);
    }
    if(hour<10){
        display_hour = '0'+String(hour);
    }
    if(minutes==15){
        alert("Times Up!!");
        window.clearInterval(inter);
        alert('Your Score is: '+score);
        window.location.reload();
    }
    let disp_time = document.querySelector('#timer');
    disp_time.innerHTML = 'Time: '+display_hour + ':'+display_min+':'+display_sec;
}

let relo = document.querySelector('#reload');
relo.addEventListener('click',function(){
    window.location.reload();
});

let inter=window.setInterval(stopWatch,1000);
