const addButton=document.querySelector('.notes__add');

const updateLSData=()=>{
    const textAreaData=document.querySelectorAll('textarea');

    const notes=[];


    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })


    /*save it to local storage*/

    localStorage.setItem('notes',JSON.stringify(notes));
}


const addNewNote= (text = '')=>{
     

       /***create that div here class names as note****/

       const note= document.createElement('div');
       note.classList.add('note');



       const htmlData= `<div class="tools">
       <button class="edit"> <i class="fas fa-edit"></i></button>
       <button class="delete"> <i class="fas fa-trash-alt"></i></button>
   </div>


   <div class="main ${text ? " " : "hidden"}"><span></span></div>
   <textarea class="${text ? "hidden" : " "}"></textarea>`;


   note.insertAdjacentHTML('afterbegin', htmlData);



  /**taking the references of buttons*/

  const editButton = note.querySelector('.edit');
  const delButton= note.querySelector('.delete');
  const mainDiv= note.querySelector('.main');
  const textArea = note.querySelector('textarea');


   /*functionality of delete button*/
  delButton.addEventListener('click', ()=> {
      note.remove();
      updateLSData();
  });

  /**toggling*/

   textArea.value=text;
   mainDiv.innerHTML=text;

  editButton.addEventListener('click',()=>{
      mainDiv.classList.toggle('hidden');
      textArea.classList.toggle('hidden');
  });


  /*storing textarea data to main div*/

  textArea.addEventListener('change',(event)=>{
         const value=event.target.value;
         mainDiv.innerHTML=value;


         updateLSData();
  });




  document.body.appendChild(note);
  

}


/*before add note jo data phle user n save kia hua tha wo mjhe show krwana hai*/

const notes=JSON.parse(localStorage.getItem('notes'));


if(notes)
{
    notes.forEach((note)=>{
        addNewNote(note);
    })
}


addButton.addEventListener('click', ()=>
    addNewNote()
);