var setofwords=["dummy data acts as a placeholder for live data, the latter of which testers ",
"only introduce once its determined that the trail program does not have any unintended, negative impact on the underlying data.",
"You can think of dummy data like a car crash dummy"];
var sentence1=document.getElementById('sentence');
var btn1=document.getElementById('btn');
var myword=document.getElementById('mywords');
let startTime,endTime;
const playGame=()=>{
        var randonnumber=Math.floor(Math.random()*setofwords.length);
         sentence1.innerText=setofwords[randonnumber];
         let date=new Date();
         startTime=date.getTime();
         btn1.innerText="Done";
      }
      
const endPlay=()=>{
  let date=new Date();
  endTime=date.getTime();
  let loadtime=((endTime-startTime)/1000);
  console.log(loadtime);

// value of total words written by user
  let totalstr=myword.value;
  let wordCount=wordCounter(totalstr);
  let speed=(Math.round(wordCount/loadtime)*60);
  let final=("your speed is "+ `${speed}`+" per mintue ");
  final+=compareWords(sentence1.innerText,totalstr);
  sentence1.innerText=final;

}
const compareWords=(str1,str2)=>{
  let word1=str1.split(" ");
  let word2=str2.split(" ");
  let cnt=0;
  word1.forEach(function(item,index){
    if(item==word2[index]){
      cnt++;
    }
  })
  let errorwords=(word1.length-cnt);
  return (cnt+" correct out of "+word1.length+" words and the total numbers of error are "+errorwords+".");

}
// how we count the total words written by user
const wordCounter=(str)=>{
 let response=str.split(" ").length;
 console.log(response);
 return response;
}

btn.addEventListener('click',function(){
    if(this.innerHTML=='Start'){
      myword.disabled=false;  
      playGame();   
    }
    else if(this.innerText=="Done"){
         myword.disabled=true;
         btn.innerHTML="Start" 
        endPlay();
    }
})      
