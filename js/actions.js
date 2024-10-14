document.addEventListener('DOMContentLoaded', function() {
    // Función para eliminar el contenido del input
    document.getElementById('clearButton').addEventListener('click', function() {
      document.getElementById('expressionInput').value = '';
    });
  
    // Función para copiar el contenido del input
    document.getElementById('copyButton').addEventListener('click', function() {
      var input = document.getElementById('expressionInput');
      input.select();
      document.execCommand('copy');
    });
  
    // Función para copiar la tabla de verdad generada
    document.getElementById('pasteButton').addEventListener('click', function() {
      var tableTarget = document.getElementById('table-target');
      var range = document.createRange();
      range.selectNode(tableTarget);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
    });
  });
  