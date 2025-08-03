async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear loading message
    dataContainer.innerHTML = '';

    // Create a list element
    const userList = document.createElement('ul');

    // Loop through the users and add each one to the list
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    // Append the list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Handle error
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
  }
}

// Run after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

