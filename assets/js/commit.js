async function fetchLastCommitDate() {
    const username = 'babikerbabiker';
    const repo = 'babikerbabiker.github.io';
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const lastCommitDate = new Date(data[0].commit.author.date);
      document.getElementById('last-updated').textContent = lastCommitDate.toDateString();
    } catch (error) {
      console.error('Error fetching the last commit date:', error);
      document.getElementById('last-updated').textContent = 'Error fetching date';
    }
  }

  fetchLastCommitDate();