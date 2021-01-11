(function () {
  (function init() {
    triggerChangeHello();
    changeIntroPeriodically();
  })();

  function triggerChangeHello() {
    const promises = [waitForDom(), getCountry()];
    Promise.all(promises)
      .then(function ([, { country }]) {
        changeTextBasedOnCountry(country);
      })
      .catch(function (error) {
        console.warn(error);
      });

    function changeTextBasedOnCountry(country) {
      switch (String(country).toLowerCase()) {
        case "japan":
          changeHelloHtml("こんにちは");
          changeNameHtml("<span class='bold'>ウスタ</span>です。");
          break;
        case "turkey":
          changeHelloHtml("SELAM");
          break;
        case "finland":
          changeHelloHtml("Hei!");
          changeNameHtml("MY NAME IS JIIT.");
          break;
        case "estonia":
          changeHelloHtml("Tere!");
          break;
      }
    }

    function changeHelloHtml(html) {
      document.querySelector(".hello").innerHTML = html;
    }

    function changeNameHtml(html) {
      document.querySelector(".name").innerHTML = html;
    }

    function getCountry() {
      return new Promise(function (resolve, reject) {
        fetch("https://extreme-ip-lookup.com/json/")
          .then(function (result) {
            return result.json();
          })
          .then(function (result) {
            resolve({ country: result.country.toLowerCase() });
          })
          .catch(function (err) {
            reject("Error fetching ip address and location data.\n" + err);
          });
      });
    }
  }

  function waitForDom() {
    return new Promise(function (resolve) {
      document.addEventListener("DOMContentLoaded", resolve());
    });
  }

  function changeIntroPeriodically() {
    const intro = document.querySelector(".intro");
    const whatAmI = [
      "a Full-Stack Software Engineer",
      "an AWS Certified Solutions Architect",
      "an Amateur Rapper",
      "a Traveler",
      "a German rap fan",
      "a Japanese learner",
    ];
    let index = 0;
    setInterval(function () {
      intro.innerHTML = "I'm " + whatAmI[index] + ".";
      index = (index + 1) % whatAmI.length;
    }, 2500);
  }
})();
