const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Oct 30, 2020 05:40:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

    
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById('hours').innerText = 00,
        document.getElementById('minutes').innerText = 00,
        document.getElementById('seconds').innerText = 00;
        document.getElementById("myBtn").disabled = false;
        document.getElementById("link1").style.backgroundColor = "#23272B";
      }

    }, second)

   