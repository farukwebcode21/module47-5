// use local storage as your database

const addToDd = id =>{
    const exists = localStorage.getItem(id);
   if(!exists){
    localStorage.setItem(id, 1);
   }else{
       const newCount = parseInt(exists) +1;
       localStorage.setItem(id, newCount);
   }
}
export {addToDd}