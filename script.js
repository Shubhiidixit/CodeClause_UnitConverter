let conversionTypeSelect = document.querySelector('#conversion-type');
let inputField = document.querySelector('#input-field');
let fromUnitSelect = document.querySelector('#from-unit');
let toUnitSelect = document.querySelector('#to-unit');
let resultTable = document.querySelector('#result-table');

conversionTypeSelect.addEventListener('change', function () {
  let selectedOption = conversionTypeSelect.value;

  inputField.value = '';
  resultTable.innerHTML = '';

  if (selectedOption === 'length') {
    inputField.placeholder = 'Enter length (m)';
    showConversionFields(['Meter (m)', 'Centimeter (cm)', 'Foot (ft)', 'Inch (in)']);
  } else if (selectedOption === 'weight') {
    inputField.placeholder = 'Enter weight (kg)';
    showConversionFields(['Kilogram (kg)', 'Gram (g)', 'Pound (lb)', 'Ounce (oz)']);
  } else if (selectedOption === 'temperature') {
    inputField.placeholder = 'Enter temperature (°C)';
    showConversionFields(['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)']);
  } else if (selectedOption === 'area') {
    inputField.placeholder = 'Enter area (sq.m)';
    showConversionFields(['Square Meter (sq.m)', 'Square Kilometer (sq.km)', 'Square Foot (sq.ft)', 'Square Inch (sq.in)']);
  } else if (selectedOption === 'time') {
    inputField.placeholder = 'Enter time (s)';
    showConversionFields(['Second (s)', 'Minute (min)', 'Hour (hr)', 'Day (day)']);
  }
});

function showConversionFields(units) {

  fromUnitSelect.innerHTML = '';
  toUnitSelect.innerHTML = '';

  for (let i = 0; i < units.length; i++) {
    let option = document.createElement('option');
    option.text = units[i];
    fromUnitSelect.add(option);

    option = document.createElement('option');
    option.text = units[i];
    toUnitSelect.add(option);
  }

  document.querySelector('#conversion-fields').style.display = 'block';
}

function convert() {
  let inputValue = parseFloat(inputField.value);
  let selectedOption = conversionTypeSelect.value;

  if (isNaN(inputValue)) {
    resultTable.innerHTML = '<tr><td colspan="2">Invalid input</td></tr>';
    return;
  }

  let fromUnit = fromUnitSelect.value;
  let toUnit = toUnitSelect.value;

  let tableHTML = `
    <tr>
      <th>Unit</th>
      <th>Value</th>
    </tr>
  `;

  if (selectedOption === 'length') {
    let convertedValue = convertLength(inputValue, fromUnit, toUnit);

    tableHTML += createRow(fromUnit, inputValue);
    tableHTML += createRow(toUnit, convertedValue);
  } else if (selectedOption === 'weight') {
    let convertedValue = convertWeight(inputValue, fromUnit, toUnit);

    tableHTML += createRow(fromUnit, inputValue);
    tableHTML += createRow(toUnit, convertedValue);
  } else if (selectedOption === 'temperature') {
    let convertedValue = convertTemperature(inputValue, fromUnit, toUnit);

    tableHTML += createRow(fromUnit, inputValue);
    tableHTML += createRow(toUnit, convertedValue);
  } else if (selectedOption === 'area') {
    let convertedValue = convertArea(inputValue, fromUnit, toUnit);

    tableHTML += createRow(fromUnit, inputValue);
    tableHTML += createRow(toUnit, convertedValue);
  } else if (selectedOption === 'time') {
    let convertedValue = convertTime(inputValue, fromUnit, toUnit);

    tableHTML += createRow(fromUnit, inputValue);
    tableHTML += createRow(toUnit, convertedValue);
  }

  resultTable.innerHTML = tableHTML;
}

function convertLength(value, fromUnit, toUnit) {
  if (fromUnit === 'Meter (m)') {
    if (toUnit === 'Meter (m)') {
      return value;
    } else if (toUnit === 'Centimeter (cm)') {
      return value * 100;
    } else if (toUnit === 'Foot (ft)') {
      return value * 3.28084;
    } else if (toUnit === 'Inch (in)') {
      return value * 39.3701;
    }
  } else if (fromUnit === 'Centimeter (cm)') {
    if (toUnit === 'Meter (m)') {
      return value / 100;
    } else if (toUnit === 'Centimeter (cm)') {
      return value;
    } else if (toUnit === 'Foot (ft)') {
      return value * 0.0328084;
    } else if (toUnit === 'Inch (in)') {
      return value * 0.393701;
    }
  } else if (fromUnit === 'Foot (ft)') {
    if (toUnit === 'Meter (m)') {
      return value * 0.3048;
    } else if (toUnit === 'Centimeter (cm)') {
      return value * 30.48;
    } else if (toUnit === 'Foot (ft)') {
      return value;
    } else if (toUnit === 'Inch (in)') {
      return value * 12;
    }
  } else if (fromUnit === 'Inch (in)') {
    if (toUnit === 'Meter (m)') {
      return value * 0.0254;
    } else if (toUnit === 'Centimeter (cm)') {
      return value * 2.54;
    } else if (toUnit === 'Foot (ft)') {
      return value * 0.0833333;
    } else if (toUnit === 'Inch (in)') {
      return value;
    }
  }

  return 0;
}

function convertWeight(value, fromUnit, toUnit) {
  if (fromUnit === 'Kilogram (kg)') {
    if (toUnit === 'Kilogram (kg)') {
      return value;
    } else if (toUnit === 'Gram (g)') {
      return value * 1000;
    } else if (toUnit === 'Pound (lb)') {
      return value * 2.20462;
    } else if (toUnit === 'Ounce (oz)') {
      return value * 35.274;
    }
  } else if (fromUnit === 'Gram (g)') {
    if (toUnit === 'Kilogram (kg)') {
      return value / 1000;
    } else if (toUnit === 'Gram (g)') {
      return value;
    } else if (toUnit === 'Pound (lb)') {
      return value * 0.00220462;
    } else if (toUnit === 'Ounce (oz)') {
      return value * 0.035274;
    }
  } else if (fromUnit === 'Pound (lb)') {
    if (toUnit === 'Kilogram (kg)') {
      return value * 0.453592;
    } else if (toUnit === 'Gram (g)') {
      return value * 453.592;
    } else if (toUnit === 'Pound (lb)') {
      return value;
    } else if (toUnit === 'Ounce (oz)') {
      return value * 16;
    }
  } else if (fromUnit === 'Ounce (oz)') {
    if (toUnit === 'Kilogram (kg)') {
      return value * 0.0283495;
    } else if (toUnit === 'Gram (g)') {
      return value * 28.3495;
    } else if (toUnit === 'Pound (lb)') {
      return value * 0.0625;
    } else if (toUnit === 'Ounce (oz)') {
      return value;
    }
  }

  return 0;
}

function convertTemperature(value, fromUnit, toUnit) {
  if (fromUnit === 'Celsius (°C)') {
    if (toUnit === 'Celsius (°C)') {
      return value;
    } else if (toUnit === 'Fahrenheit (°F)') {
      return (value * 9) / 5 + 32;
    } else if (toUnit === 'Kelvin (K)') {
      return value + 273.15;
    }
  } else if (fromUnit === 'Fahrenheit (°F)') {
    if (toUnit === 'Celsius (°C)') {
      return ((value - 32) * 5) / 9;
    } else if (toUnit === 'Fahrenheit (°F)') {
      return value;
    } else if (toUnit === 'Kelvin (K)') {
      return ((value - 32) * 5) / 9 + 273.15;
    }
  } else if (fromUnit === 'Kelvin (K)') {
    if (toUnit === 'Celsius (°C)') {
      return value - 273.15;
    } else if (toUnit === 'Fahrenheit (°F)') {
      return ((value - 273.15) * 9) / 5 + 32;
    } else if (toUnit === 'Kelvin (K)') {
      return value;
    }
  }

  return 0;
}

function convertArea(value, fromUnit, toUnit) {
  if (fromUnit === 'Square Meter (m²)') {
    if (toUnit === 'Square Meter (m²)') {
      return value;
    } else if (toUnit === 'Square Kilometer (km²)') {
      return value / 1000000;
    } else if (toUnit === 'Square Mile (mi²)') {
      return value / 4046.86;
    } else if (toUnit === 'Hectare (ha)') {
      return value / 10000;
    } else if (toUnit === 'Acre (ac)') {
      return value / 4046.86;
    }
  } else if (fromUnit === 'Square Kilometer (km²)') {
    if (toUnit === 'Square Meter (m²)') {
      return value * 1000000;
    } else if (toUnit === 'Square Kilometer (km²)') {
      return value;
    } else if (toUnit === 'Square Mile (mi²)') {
      return value * 0.386102;
    } else if (toUnit === 'Hectare (ha)') {
      return value * 100;
    } else if (toUnit === 'Acre (ac)') {
      return value * 247.105;
    }
  } else if (fromUnit === 'Square Mile (mi²)') {
    if (toUnit === 'Square Meter (m²)') {
      return value * 4046.86;
    } else if (toUnit === 'Square Kilometer (km²)') {
      return value * 2.58999;
    } else if (toUnit === 'Square Mile (mi²)') {
      return value;
    } else if (toUnit === 'Hectare (ha)') {
      return value * 259;
    } else if (toUnit === 'Acre (ac)') {
      return value * 640;
    }
  } else if (fromUnit === 'Hectare (ha)') {
    if (toUnit === 'Square Meter (m²)') {
      return value * 10000;
    } else if (toUnit === 'Square Kilometer (km²)') {
      return value * 0.01;
    } else if (toUnit === 'Square Mile (mi²)') {
      return value * 0.00386102;
    } else if (toUnit === 'Hectare (ha)') {
      return value;
    } else if (toUnit === 'Acre (ac)') {
      return value * 2.47105;
    }
  } else if (fromUnit === 'Acre (ac)') {
    if (toUnit === 'Square Meter (m²)') {
      return value * 4046.86;
    } else if (toUnit === 'Square Kilometer (km²)') {
      return value * 0.00404686;
    } else if (toUnit === 'Square Mile (mi²)') {
      return value * 0.0015625;
    } else if (toUnit === 'Hectare (ha)') {
      return value * 0.404686;
    } else if (toUnit === 'Acre (ac)') {
      return value;
    }
  }

  return 0;
}

function convertTime(value, fromUnit, toUnit) {
  if (fromUnit === 'Second (s)') {
    if (toUnit === 'Second (s)') {
      return value;
    } else if (toUnit === 'Minute (min)') {
      return value / 60;
    } else if (toUnit === 'Hour (hr)') {
      return value / 3600;
    } else if (toUnit === 'Day (day)') {
      return value / 86400;
    }
  } else if (fromUnit === 'Minute (min)') {
    if (toUnit === 'Second (s)') {
      return value * 60;
    } else if (toUnit === 'Minute (min)') {
      return value;
    } else if (toUnit === 'Hour (hr)') {
      return value / 60;
    } else if (toUnit === 'Day (day)') {
      return value / 1440;
    }
  } else if (fromUnit === 'Hour (hr)') {
    if (toUnit === 'Second (s)') {
      return value * 3600;
    } else if (toUnit === 'Minute (min)') {
      return value * 60;
    } else if (toUnit === 'Hour (hr)') {
      return value;
    } else if (toUnit === 'Day (day)') {
      return value / 24;
    }
  } else if (fromUnit === 'Day (day)') {
    if (toUnit === 'Second (s)') {
      return value * 86400;
    } else if (toUnit === 'Minute (min)') {
      return value * 1440;
    } else if (toUnit === 'Hour (hr)') {
      return value * 24;
    } else if (toUnit === 'Day (day)') {
      return value;
    }
  }

  return 0;
}
function clearFields() {
  inputField.value = '';
  resultTable.innerHTML = '';
  conversionTypeSelect.selectedIndex = 0;
}


function createRow(unit, value) {
  return `
    <tr>
      <td>${unit}</td>
      <td>${value}</td>
    </tr>
  `;
}
