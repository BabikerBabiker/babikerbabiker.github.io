async function fetchCommitDateForElement(element) {
  const username = 'babikerbabiker';
  const repo = element.getAttribute('data-repo');
  const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits?timestamp=${new Date().getTime()}`;

  console.log('Fetching commits from:', apiUrl);

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error('No commits found for this repository.');
    }

    const lastCommitDate = new Date(data[0].commit.author.date);
    element.textContent = lastCommitDate.toDateString();
  } catch (error) {
    console.error('Error fetching the last commit date:', error);
    element.textContent = 'Error fetching date';
  }
}

async function fetchAllCommitDates() {
  const projectElements = document.querySelectorAll('.project');
  for (const element of projectElements) {
    await fetchCommitDateForElement(element);
  }

  const footerElement = document.querySelector('.last-updated');
  await fetchCommitDateForElement(footerElement);
}

window.addEventListener('load', fetchAllCommitDates);