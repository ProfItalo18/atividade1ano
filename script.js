// Elementos do DOM
const musicForm = document.getElementById('musicForm');
const musicTableBody = document.querySelector('#musicTable tbody');
const exportBtn = document.getElementById('exportBtn');

// Função para adicionar uma linha na tabela
musicForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = document.getElementById('numero').value;
    const musica = document.getElementById('musica').value;
    const genero = document.getElementById('genero').value;
    const cantor = document.getElementById('cantor').value;
    const autoria = document.getElementById('autoria').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${numero}</td>
        <td>${musica}</td>
        <td>${genero}</td>
        <td>${cantor}</td>
        <td>${autoria}</td>
    `;
    
    musicTableBody.appendChild(newRow);

    // Limpar o formulário
    musicForm.reset();
});

// Função para exportar a tabela como planilha dinâmica
exportBtn.addEventListener('click', function() {
    const tableRows = document.querySelectorAll('#musicTable tr');
    const csvContent = [];
    
    // Extrair dados da tabela
    tableRows.forEach(row => {
        const rowData = Array.from(row.cells).map(cell => cell.innerText).join(',');
        csvContent.push(rowData);
    });

    // Criar arquivo CSV
    const csvBlob = new Blob([csvContent.join('\n')], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);

    const a = document.createElement('a');
    a.href = csvUrl;
    a.download = 'catalogo_musicas.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
