var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  },500);
})
