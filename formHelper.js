// query selector of input tag to check and tag selector of error message tag
function notEmpty(inputId,errorId){
  if (document.getElementById(inputId).value.length === 0) {
    document.getElementById(errorId).style.visibility='visible'
    return false;
  } else {
    document.getElementById(errorId).style.visibility='hidden'
    return true;
  }
}
function isEmail(inputId,errorId){
  let email = document.getElementById(inputId).value
  if (validateEmail(email)) {
    document.getElementById(errorId).style.visibility='hidden'
    return true;
  } else {
    document.getElementById(errorId).style.visibility='visible'
    return false;
  }
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function toggleVisibility(){

}
function allFieldOk(allBools) {
  return allBools.reduce((pre,elem)=>pre && elem,true)
}
function ajaxForm(formTag,url,callback) {
  let datas= new FormData(document.getElementById(formTag));
  let request = new XMLHttpRequest();
  request.open("POST",url);
  request.addEventListener('load',function(e){
    if (request.status === 200) {      
      callback(request.responseText)
    }
  })
  console.log(datas);
  request.send(datas);

}
