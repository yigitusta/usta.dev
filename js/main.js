(function() {
  const promises = [waitForDom(), getCountry()];
  Promise.all(promises)
    .then(function(results) {
      const country = results.find(function(result) {
        return typeof result === "object" && result.country;
      }).country;
      internationalization(country);
    })
    .catch(function(error) {
      console.error(error[0]);
    });

  function internationalization(country) {
    const hello = document.querySelector(".hello");

    switch (country) {
      case "japan":
        const name = document.querySelector(".name");
        hello.innerText = "こんにちは";
        name.innerText = "MY NAME IS " + "イート。";
        break;
        case "turkey":
        hello.innerText = "HELLO";
        break;
    }
  }

  window.sayHello = internationalization;

  function waitForDom() {
    return new Promise(function(resolve) {
      document.addEventListener("DOMContentLoaded", resolve());
    });
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
})();
