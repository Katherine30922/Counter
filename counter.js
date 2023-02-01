//set initial count
let i=0;//must use 'let', becausse 'const' is unchangeable.
//select value and buttons
const vnum=document.querySelector(".vnum");
const btns=document.querySelectorAll(".btn");//querySelectorAll():returns a NodeList representing a list of the document's elements that match the specified group of selectors.
//don't have to set each button one by one, there's the way can set all in once.
btns.forEach(function(btn){//forEach():calls a function and iterates over the elements of an array.
   btn.addEventListener('click', function(b){
    const change=b.currentTarget.classList;//to know which button be clicked, more sepecific in class list.

    if(change.contains("d")){
        i--;
    }else if(change.contains("r")){
        i=0;
    }else{
        i++;
    }
    vnum.textContent=i;

    if(i<0){
            vnum.style.color="indianred";
        }
        else if(i>0){
            vnum.style.color="#60B468";
        }
        else{
            vnum.style.color="black";
        }
   });
});
