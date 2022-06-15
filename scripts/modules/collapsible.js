const collapse = document.querySelectorAll('.collapse');

if (collapse.length) {
  collapse.forEach((element) => {
    const collapseToggle = element.querySelector('.collapse-toggle');
    const collapseContent = element.querySelector('.collapse-content');

    // Initialize the maxHeight value
    if (collapseContent.classList.contains('open'))
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;

    collapseToggle.addEventListener('click', () => {
      const isCollapseOpen = collapseContent.classList.contains('open');
      const toggleIcon = collapseToggle.querySelector('ion-icon');

      if (isCollapseOpen) {
        toggleIcon.setAttribute('name', 'chevron-down');
        toggleIcon.setAttribute('name', 'chevron-forward');
        collapseContent.classList.remove('open');
        collapseContent.style.maxHeight = 0;

        return;
      }

      toggleIcon.setAttribute('name', 'chevron-forward');
      toggleIcon.setAttribute('name', 'chevron-down');
      collapseContent.classList.add('open');
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;
    });
  });
}
