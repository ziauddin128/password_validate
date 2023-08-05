var eye = document.querySelector(".password_field i");
var input = document.querySelector(".password_field input");
var li = document.querySelectorAll(".password_req li");

eye.addEventListener("click",function()
{
  input.type = input.type === "password" ? "text" : "password";
  eye.className = input.type === "password" ? "ri-eye-line" : "ri-eye-off-line";
})

//requirments in array object
var requirments = [
  {regex:/.{8,}/,index:0},
  {regex:/[0-9]/,index:1},
  {regex:/[a-z]/,index:2},
  {regex:/[^A-Za-z0-9]/,index:3},
  {regex:/[A-Z]/,index:4},
]


input.addEventListener("input",function(event)
{
  requirments.forEach(function(elem)
  {
    var val = event.target.value;
    var test = elem.regex.test(val);
    var li_item = li[elem.index];
    
    if(test)
    {
      li_item.firstElementChild.className = "ri-check-line";
      li_item.firstElementChild.classList.add("valid");
    }
    else 
    {
      li_item.firstElementChild.className = "ri-circle-fill";
      li_item.firstElementChild.classList.remove("valid");
    }
    
  })


})


