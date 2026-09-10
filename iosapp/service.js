/* =========================================
   SCRUB MATE SERVICE QUANTITY
========================================= */

const scurbServiceQuantities = {};


/* =========================================
   RENDER SERVICE QUANTITY
========================================= */

function renderScurbServiceQuantity(addButton, serviceId){

  const quantity =
    scurbServiceQuantities[serviceId] || 0;

  /* Return to original small + */

  if(quantity <= 0){

    scurbServiceQuantities[serviceId] = 0;

    addButton.classList.remove("scurbQtyMode");

    addButton.innerHTML = `
      <span class="scurbSinglePlus">+</span>
    `;

    return;
  }


  /* Show − quantity + */

  addButton.classList.add("scurbQtyMode");

  addButton.innerHTML = `
    <span
      class="scurbServiceMinus"
      role="button"
      aria-label="Decrease quantity"
    >
      −
    </span>

    <span class="scurbServiceQty">
      ${quantity}
    </span>

    <span
      class="scurbServicePlus"
      role="button"
      aria-label="Increase quantity"
    >
      +
    </span>
  `;
}


/* =========================================
   SINGLE CLICK HANDLER
========================================= */

document.addEventListener("click", function(event){

  const addButton =
    event.target.closest(".scurbServiceAddBtn");

  if(!addButton){
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  const serviceCard =
    addButton.closest(".scurbServiceCard");

  if(!serviceCard){
    return;
  }

  const serviceId = serviceCard.id;

  const minusButton =
    event.target.closest(".scurbServiceMinus");

  const plusButton =
    event.target.closest(".scurbServicePlus");


  /* Expanded minus */

  if(minusButton){

    scurbServiceQuantities[serviceId] =
      Math.max(
        0,
        (scurbServiceQuantities[serviceId] || 0) - 1
      );

    renderScurbServiceQuantity(
      addButton,
      serviceId
    );

    return;
  }


  /* Expanded plus */

  if(plusButton){

    scurbServiceQuantities[serviceId] =
      (scurbServiceQuantities[serviceId] || 0) + 1;

    renderScurbServiceQuantity(
      addButton,
      serviceId
    );

    return;
  }


  /* Initial small plus */

  if(!addButton.classList.contains("scurbQtyMode")){

    scurbServiceQuantities[serviceId] = 1;

    renderScurbServiceQuantity(
      addButton,
      serviceId
    );
  }

});