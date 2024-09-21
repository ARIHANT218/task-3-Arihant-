// Planet mass data (example in scientific notation)
const planetMasses = {
    earth: "5.972 × 10^24 kg",
    moon: "7.35 × 10^22 kg",
    sun: "1.989 × 10^30 kg",
    mars: "6.417 × 10^23 kg",
    venus: "4.867 × 10^24 kg",
    mercury: "3.285 × 10^23 kg",
    jupiter: "1.898 × 10^27 kg",
    saturn: "5.683 × 10^26 kg",
    neptune: "1.024 × 10^26 kg",
    uranus: "8.681 × 10^25 kg"
};

// Gravity ratios compared to Earth
const gravityRatio = {
    earth: 1.0,
    moon: 0.165,
    sun: 27.9,
    mars: 0.38,
    venus: 0.91,
    mercury: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    neptune: 1.19,
    uranus: 0.92
};

// Calculate weight based on the selected planet
function calculateWeight(planet) {
    const weight = parseFloat(document.getElementById('weight_input').value);  // User's weight
    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    const planetWeight = (weight * gravityRatio[planet]).toFixed(2); // Weight on selected planet
    const planetMass = planetMasses[planet];  // Mass of selected planet

    // Display the result in the modal
    const modalText = document.getElementById('modal_text');
    modalText.innerHTML = `
      <h2>Weight on Earth: ${weight} KG</h2>
      <h2>Weight on ${planet.charAt(0).toUpperCase() + planet.slice(1)}: ${planetWeight} KG</h2>
      <h3>Mass of ${planet.charAt(0).toUpperCase() + planet.slice(1)}: ${planetMass}</h3>
    `;

    document.getElementById('launch_result').click();  // Open the modal
}

// Event listeners for planet buttons
document.getElementById('btn_earth').addEventListener('click', () => calculateWeight('earth'));
document.getElementById('btn_moon').addEventListener('click', () => calculateWeight('moon'));
document.getElementById('btn_sun').addEventListener('click', () => calculateWeight('sun'));
document.getElementById('btn_mars').addEventListener('click', () => calculateWeight('mars'));
document.getElementById('btn_venus').addEventListener('click', () => calculateWeight('venus'));
document.getElementById('btn_mercury').addEventListener('click', () => calculateWeight('mercury'));
document.getElementById('btn_jupiter').addEventListener('click', () => calculateWeight('jupiter'));
document.getElementById('btn_saturn').addEventListener('click', () => calculateWeight('saturn'));
document.getElementById('btn_neptune').addEventListener('click', () => calculateWeight('neptune'));
document.getElementById('btn_uranus').addEventListener('click', () => calculateWeight('uranus'));
