function generateAkanName() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);
  const gender = document.getElementById('gender').value;

  if (!day || !month || !year || !gender) {
    document.getElementById('result').textContent = 'Please  answer correctly.';
    return;
  }

  const dateOfBirth = new Date(year, month - 1, day);
  if (isNaN(dateOfBirth)) {
    document.getElementById('result').textContent = 'Invalid date. Please check your inputs.';
    return;
  }

  const dayOfWeek = dateOfBirth.getDay();
  const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"],
  };

  const akanName = akanNames[gender][dayOfWeek];
  document.getElementById('result').textContent = `Your Akan name is ${akanName}.`;
}