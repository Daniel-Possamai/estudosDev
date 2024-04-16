document.querySelectorAll('.btnQuest').forEach(item => {
    item.addEventListener('click', event => {
      const answer = event.target.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });