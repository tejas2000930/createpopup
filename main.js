const alertContainer = document.querySelector('.alert-container');
const btnCreate = document.getElementById('create');

const createAlert = () => {
  const newAlert = document.createElement('div');
  const closeNewAlert = document.createElement('span');
  
  newAlert.innerText = 'This is an alert message on the web page! It will fade in 5 seconds';
  
  closeNewAlert.innerHTML = '&times;';
  
  newAlert.appendChild(closeNewAlert);
  
  newAlert.classList.add('alert');
  
  alertContainer.appendChild(newAlert);
  
  setTimeout(()=> {
    newAlert.classList.add('fadeOut');
  },3000)
  
  setTimeout(()=> {
    newAlert.remove();
  },5000)
  
};


alertContainer.addEventListener('click', (e) => {
    if(e.target.nodeName == 'SPAN') {
        e.target.parentNode.remove();
    }
})

btnCreate.addEventListener('click', createAlert);

