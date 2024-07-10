document.getElementById('personForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
  
    fetch('/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, age })
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('result').textContent = data;
    });
  });
  
  document.getElementById('getPerson').addEventListener('click', function() {
    const id = document.getElementById('getId').value;
    fetch(`/people/${id}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data);
      });
  });
  
  document.getElementById('deletePerson').addEventListener('click', function() {
    const id = document.getElementById('deleteId').value;
    fetch(`/people/${id}`, { method: 'DELETE' })
      .then(response => response.text())
      .then(data => {
        document.getElementById('result').textContent = data;
      });
  });
  