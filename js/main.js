(function() {
  (function init() {
    triggerChangeHello();
    changeIntroPeriodically();
  })();

  function triggerChangeHello() {
    const promises = [waitForDom(), getCountry()];
    Promise.all(promises)
      .then(function(results) {
        const { country } = results.find(function(result) {
          return typeof result === "object" && result.country;
        });
        changeHelloText(country);
      })
      .catch(function(error) {
        console.warn(error[0]);
      });

    function changeHelloText(country) {
      const hello = document.querySelector(".hello");
      const name = document.querySelector(".name");

      switch (country) {
        case "japan":
          hello.innerText = "こんにちは";
          name.innerText = "MY NAME IS " + "イート。";
          break;
          case "turkey":
          hello.innerText = "HELLO";
          break;
          case "finland":
          name.innerText = "MY NAME IS " + "JIIT.";
          hello.innerText = "Hei!"
          break;
          case "estonia":
          hello.innerText = "Tere!";
          break;
      }
      window.sayHello = changeHelloText;
    }

    function getCountry() {
      return new Promise(function(resolve, reject) {
        fetch("https://extreme-ip-lookup.com/json/")
          .then(function(result) {
            return result.json();
          })
          .then(function(result) {
            resolve({ country: result.country.toLowerCase() });
          })
          .catch(function(err) {
            reject("Error fetching ip address and location data.\n" + err);
          });
      });
    }
  }

  function waitForDom() {
    return new Promise(function(resolve) {
      document.addEventListener("DOMContentLoaded", resolve());
    });
  }

  function changeIntroPeriodically() {
    const intro = document.querySelector('.intro');
    const whatAmI = ['a Full-Stack Developer', 'a Senior University Student', 'an Amateur Rapper', 'a Traveler', 'a Software Engineer'];
    let index = 0;
    setInterval(function() {
      intro.innerText = ('I\'m ' + whatAmI[index]).toUpperCase() + '.';
      index = (index + 1) % whatAmI.length;
    }, 2500);
  }
})();
