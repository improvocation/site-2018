// query selector of input tag to check and tag selector of error message tag
function notEmpty(inputId,errorId){
  if (document.getElementById(inputId).value.length === 0) {
    document.getElementById(errorId).style.visibility='visible'
    return true;
  } else {
    document.getElementById(errorId).style.visibility='hidden'
    return false;
  }
}
function isEmail(inputId,errorId){
  document.getElementById(errorId).style.visibility='visible'

  return false;
}

function toggleVisibility(){

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
