function launchMission(){
   const prepareShip = document.getElementById('prepare-ship');
   prepareShip.classList.add('big');

   const shipReady = document.getElementById('ship-ready')
   shipReady.classList.remove('big')

   const destinationLink = document.querySelector('.destination-link');
   destinationLink.href = 'http://mars.nasa.gov/'
   destinationLink.textContent = 'Mars'


   const countdown= document.getElementById('countdown')
   countdown.style.display = 'none';

   const name = document.getElementById('name-input').value;
   document.querySelector('h1').textContent = "Greetings" + name;

}

