function calculateAge(){
  const dob=new Date(document.getElementById('dob').value);
  let today=new Date();
  let birthDay=new Date(dob);
  const age=today.getFullYear()-birthDay.getFullYear();
  document.getElementById('output').innerHTML="you age is "+age +" years ";

  if(isNaN(dob.getTime())){
    document.getElementById('output').innerHTML="Enter a valid date";
    return;
  }
  if(dob>today || dob.getFullYear().toString().length !==4){
    document.getElementById('output').innerHTML="Enter a valid date"
  }
}