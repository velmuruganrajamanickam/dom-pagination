const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const itemsPerPage = 10; 
let currentPage = 1;     

const dataContainer = document.getElementById('container');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');

function updatePage() {
  dataContainer.innerHTML = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    .map(item => `<div>${item}</div>`).join('');
  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(data.length / itemsPerPage)}`;
}
updatePage();

nextButton.addEventListener('click', () => {
  if (currentPage < Math.ceil(data.length / itemsPerPage))
   {
    currentPage++;
    updatePage();
  }
});

prevButton.addEventListener('click', () => {
  if (currentPage > 1) 
  {
    currentPage--;
    updatePage();
  }
});
