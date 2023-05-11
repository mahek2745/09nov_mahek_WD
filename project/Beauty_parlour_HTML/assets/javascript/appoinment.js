
function formvalidation() {

  let name = document.forms["form1"]["name"].value;
  let number = document.forms["form1"]["number"].value;
  let email = document.forms["form1"]["email"].value;

  if (name == "")
  {

      alert('please enter your name');
      return false;

  }
  else
  {
      if(name === number)
      {
          alert('please add valid value!');
          return false;
      }
      else
      {
          
      }
  }
  
  if (email == "") {

      alert('please enter your E-mail')
      return false
  }


  if (number == "") {

      alert('please enter your Mobile number');
      return false;
  }

  else 
  {
      if (number.length != 10 )
          {
              alert("You have entered an valid phone Number!")
              return (false)
          }
      else {
          
          }
  }


}