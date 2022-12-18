let buttons = document.getElementsByClassName('btn');
let labels = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
let arr = [];
let click = 0;
let clickHendler = document.getElementById("counter");

for (let i = 0; i < 16 ; i++){
    arr[i] = buttons[i].textContent;
}

function buttonClick (input){
    switch (input) {
        case 0:
            check(1,input);
            break;
        case 1:
            check(2,input);
            break;
        case 2:
            check(2,input);
            break;
        case 3:
            check(3,input);
            break;
        case 4:
            check(4,input);
            break;
        case 5:
            check(5,input);
            break;
        case 6:
            check(5,input);
            break;
        case 7:
            check(6,input);
            break;
        case 8:
            check(4,input);
            break;        
        case 9:
            check(5,input);
            break;
        case 10:
            check(5,input);
            break;
        case 11:
            check(6,input);
            break;
        case 12:
            check(7,input);
            break;
        case 13:
            check(8,input);
            break;
        case 14:
            check(8,input);
            break;
        case 15:
            check(9,input);
            break;    
    }
}

function check(input,num){
    switch (input) {
        case 1:
            if (arr[num+1]==""){
                arr[num+1] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num+4]==""){
                arr[num+4] = buttons[num].textContent;
                arr[num] = "";
                render();
            }
            break;
        case 2:
            if (arr[num+1]==""){
                arr[num+1] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num+4]==""){
                arr[num+4] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num-1]==""){
                arr[num-1] = buttons[num].textContent;
                arr[num] = "";
                render();
            }
            break;
        case 3:
            if (arr[num+4]==""){
                arr[num+4] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num-1]==""){
                arr[num-1] = buttons[num].textContent;
                arr[num] = "";
                render();
            }
            break;
        case 4:
            if (arr[num+1]==""){
                arr[num+1] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num+4]==""){
                arr[num+4] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num-4]==""){
                arr[num-4] = buttons[num].textContent;
                arr[num] = "";
                render();
            }
            break;
        case 5:
            if (arr[num-4]==""){
                arr[num-4] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num+1]==""){
                arr[num+1] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num+4]==""){
                arr[num+4] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num-1]==""){
                arr[num-1] = buttons[num].textContent;
                arr[num] = "";
                render();
            }
            break;
        case 6:
            if (arr[num-1]==""){
                arr[num-1] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num+4]==""){
                arr[num+4] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num-4]==""){
                arr[num-4] = buttons[num].textContent;
                arr[num] = "";
                render();
            }
            break;
        case 7:
            if (arr[num+1]==""){
                arr[num+1] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num-4]==""){
                arr[num-4] = buttons[num].textContent;
                arr[num] = "";
                render();
            }
            break;
        case 8:
            console.log(arr);
            if (arr[num+1]==""){
                arr[num+1] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num-4]==""){
                arr[num-4] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num-1]==""){
                arr[num-1] = buttons[num].textContent;
                arr[num] = "";
                render();
            }
            break;
        case 9:
            if (arr[num-1]==""){
                arr[num-1] = buttons[num].textContent;
                arr[num] = "";
                render();
            } else
            if (arr[num-4]==""){
                arr[num-4] = buttons[num].textContent;
                arr[num] = "";
                render();
            }
            break;
    }
}

function shuffle(){
    let n = labels.length; let tempArr = [];
    for ( var i = 0; i < n-1; i++ ) {
        tempArr.push(labels.splice(Math.floor(Math.random()*labels.length),1)[0]);
    }
    tempArr.push(labels[0]); 
    arr=tempArr; 
    arr[15]="";
    labels = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
    click = -1;
    render();
}

function render(){
    for (let i=0;i<16;i++){
        buttons[i].textContent = arr[i];
    }
    click++;
    clickHendler.innerHTML= `Clicks you have made: ${click}`;
}
