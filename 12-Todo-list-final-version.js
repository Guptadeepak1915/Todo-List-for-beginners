 const newArr=[];
  function todoList2(){
   const Todo_values1=document.querySelector('.input2').value;
  const date=document.querySelector('.date-input').value

   newArr.push({
    name:Todo_values1,
    duedate:date
  });
   console.log(newArr);
  document.querySelector('.input2').value='';
  show();
  }
 

  function show(){
 let todolistHtml='';
 for(let i=0;i<newArr.length;i++){
  const name=newArr[i].name;
  const duedate=newArr[i].duedate;
 todolistHtml+=`
 <div>${i+1}</div>
 <div>${name}</div>
 <div> ${duedate}</div>
 <button class="delete-btn" onclick="
 newArr.splice(${i},1);">Delete</button>
 `;
 }
document.querySelector('.result').innerHTML=todolistHtml;

  }

 