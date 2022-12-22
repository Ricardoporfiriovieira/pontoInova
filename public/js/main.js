window.addEventListener('load', function() {
    // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
    var form = document.getElementById('formulario');
    
    // Faz um loop neles e evita o envio
  
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false ) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  
}, false);