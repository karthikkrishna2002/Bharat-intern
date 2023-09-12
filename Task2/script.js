function showImagePopup(imageUrl) {
    var popup = document.getElementById('popup');
    var popupImage = document.getElementById('popupImage');
    popupImage.src = "i2.jpg";
    popup.classList.add('show');
  }

  function hideImagePopup() {
    var popup = document.getElementById('popup');
   popup.classList.remove('show');
  }

  function toggleConverter() {
    var converterContainer = document.getElementById('converterContainer');
    if (converterContainer.style.display === 'none') {
      converterContainer.style.display = 'block';
    } else {
      converterContainer.style.display = 'none';
    }
  }

  function toggleContactForm() {
    var contactForm = document.getElementById('contactForm');
    if (contactForm.style.display === 'none') {
      contactForm.style.display = 'block';
    } else {
      contactForm.style.display = 'none';
    }
  }

  function convert() {
    var input = document.getElementById("input").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (unit === "kelvin") {
      result.innerHTML = `
        Celsius: ${parseFloat(input) - 273.15} °C<br>
        Fahrenheit: ${(parseFloat(input) - 273.15) * 1.8 + 32} °F<br>
        Rankine: ${parseFloat(input) * 1.8} °R<br>
        Réaumur: ${(parseFloat(input) - 273.15) * 0.8} °Ré
      `;
    } else if (unit === "celsius") {
      result.innerHTML = `
        Kelvin: ${parseFloat(input) + 273.15} K<br>
        Fahrenheit: ${parseFloat(input) * 1.8 + 32} °F<br>
        Rankine: ${parseFloat(input) * 1.8 + 491.67} °R<br>
        Réaumur: ${parseFloat(input) * 0.8} °Ré
      `;
    } else if (unit === "fahrenheit") {
      result.innerHTML = `
        Kelvin: ${(parseFloat(input) - 32) / 1.8 + 273.15} K<br>
        Celsius: ${(parseFloat(input) - 32) / 1.8} °C<br>
        Rankine: ${parseFloat(input) + 459.67} °R<br>
        Réaumur: ${(parseFloat(input) - 32) / 2.25} °Ré
      `;
    } else if (unit === "rankine") {
      result.innerHTML = `
        Kelvin: ${parseFloat(input) / 1.8} K<br>
        Celsius: ${(parseFloat(input) - 491.67) / 1.8} °C<br>
        Fahrenheit: ${parseFloat(input) - 459.67} °F<br>
        Réaumur: ${(parseFloat(input) - 491.67) / 2.25} °Ré
      `;
    } else if (unit === "reaumur") {
      result.innerHTML = `
        Kelvin: ${parseFloat(input) / 0.8 + 273.15} K<br>
        Celsius: ${parseFloat(input) / 0.8} °C<br>
        Fahrenheit: ${parseFloat(input) * 2.25 + 32} °F<br>
        Rankine: ${parseFloat(input) * 2.25 + 491.67} °R
      `;
    }
  }

  function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    toggleContactForm();
  }