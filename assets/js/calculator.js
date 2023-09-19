// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    const calculatorForm = document.getElementById("calculator-form");
    calculatorForm.addEventListener('submit', event => {
      event.preventDefault();

      if (!calculatorForm.checkValidity()) {
        event.stopPropagation();
        
      }else{
        togglePuntosTableView();
        calculateBenefits();
      }
      calculatorForm.classList.add('was-validated')
    }, false)
    
})()


function togglePuntosTableView(){
    const contentTitle = document.getElementById("content-title");
    const contentTable = document.getElementById("content-table");
    contentTitle.style.display = "none";
    contentTable.style.display = "block";
    
    const pointsValue = document.getElementById('input_points');
    const cusPoints = document.getElementById('cus_points');
    cusPoints.innerHTML = parseInt(pointsValue.value);
}


const calculatorSelectForm = document.getElementById("calculator-cus_type");
calculatorSelectForm.addEventListener("change", function(event) {
    const beneficiosCus = document.getElementById("ratio-multiselect_packages");
    beneficiosCus.style.display = "block";

    var filter_type_select = document.querySelector("select[name='calculator-cus_type']");
    filter_type = filter_type_select.value;
    getPackages(filter_type);
});


