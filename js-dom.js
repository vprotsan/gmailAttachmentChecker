window.addEventListener('load', function(event){
  var textField = Array.prototype.slice.call(document.getElementsByClassName('send'));

  textField.forEach(function(el){
    el.addEventListener('click', function(event){
      event.preventDefault();
      console.log('clicked send button');

      var textarea = document.getElementById('msg-body');

      if (textarea.value.indexOf('attach') > -1 ){
        console.log('has value');

        if(document.getElementById('file').value){
          console.log('file is there');
          document.getElementById('file').classList.remove('red-border');
        } else {
          alert ("You forgot to attach your document");
          document.getElementById('file').classList.add('red-border');
        }
      }
    })
  });
});
