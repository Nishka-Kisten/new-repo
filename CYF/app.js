document.getElementById('noun1').addEventListener('click', (event) => {
    event.target.innerText = 'bird';
  
  });
  
  document.getElementById('verb').addEventListener('click', (event) => {
    event.target.innerText = 'ate';
  
  });
  
  document.getElementById('adjective').addEventListener('click', (event) => {
    event.target.innerText = 'blue';
  
  });
  
  document.getElementById('noun2').addEventListener('click', (event) => {
    event.target.innerText = 'worm';
  
  });
  
  document.getElementById('day').addEventListener('click', (event) => {
    let element_list = document.getElementById('list');
    element_list.style.backgroundColor = '#ffffff';
    element_list.style.color = '#000066';
  
  });
  
  document.getElementById('night').addEventListener('click', (event) => {
    let element_list2 = document.getElementById('list');
    element_list2.style.backgroundColor = '#000066';
    element_list2.style.color = '#ffffff';
  
  });
  
  document.getElementById('color').addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#663366';
    event.target.style.color = '#ff99ff';
  
  });
  
  document.getElementById('image').addEventListener('click', (event) => {
    event.target.setAttribute("src", 'https://drive.google.com/thumbnail?id=1mOLO2lUe0Iq_jUqbzMHtdeuWdarZ9-Wa');
  
  });