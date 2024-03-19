document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate-btn').addEventListener('click', calculateRemainingYears);
    document.getElementById('close-btn').addEventListener('click', closeLightbox);

    // Adicionar funcionalidade para clicar nas letras e ir para os campos correspondentes
    var labels = document.querySelectorAll('.calculator label');
    labels.forEach(function(label) {
        label.addEventListener('click', function() {
            var inputId = this.getAttribute('for');
            var inputElement = document.getElementById(inputId);
            inputElement.focus();
        });
    });
});

function calculateRemainingYears() {
    var age = parseInt(document.getElementById('age').value);
    var sleepHours = parseInt(document.getElementById('sleep-hours').value);
    var foodQuality = parseInt(document.getElementById('food-quality').value);
    var alcohol = parseInt(document.getElementById('alcohol').value);
    var drugs = parseInt(document.getElementById('drugs').value);

    if (isNaN(age) || isNaN(sleepHours) || isNaN(foodQuality) || isNaN(alcohol) || isNaN(drugs)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var remainingYears = 78 - age;

    if (age > 30) {
        remainingYears -= (age - 30) * 0.2; // Diminuir 0.2 ano para cada ano acima de 30
    }
    remainingYears -= (sleepHours / 24) * 0.9; // Considerando que menos horas de sono diminuem mais o tempo de vida
    remainingYears -= (10 - foodQuality) * 0.7; // Quanto menor a qualidade da alimentação, mais diminui o tempo de vida
    remainingYears -= alcohol * 0.9; // Assuming 1 point decreases 0.2 year
    remainingYears -= drugs * 1.5; // Assuming 1 point decreases 0.5 year

    displayResult(remainingYears.toFixed(1));
}

function displayResult(remainingYears) {
    var lightbox = document.getElementById('result-lightbox');
    var overlay = document.getElementById('overlay');
    var resultText = document.getElementById('result');
    
    resultText.innerText = "Você tem aproximadamente " + remainingYears + " anos restantes de vida.";

    lightbox.style.display = 'block';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
}

function closeLightbox() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('result-lightbox').style.display = 'none';
}
