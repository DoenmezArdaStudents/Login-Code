document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();  // Verhindert das Neuladen der Seite
  
      // Erfasst die Werte der Eingabefelder
      const username = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const password = form.querySelector('input[type="password"]').value;
  
      if (!username || !email || !password) {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
      }
  
      const userData = { username, email, password };
  
      try {
        // Senden der Registrierungsdaten an den Server
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert('Registrierung erfolgreich!');
        } else {
          alert(`Fehler: ${data.message}`);
        }
      } catch (error) {
        console.error('Fehler bei der Registrierung:', error);
        alert('Ein Fehler ist aufgetreten.');
      }
    });
  });
  