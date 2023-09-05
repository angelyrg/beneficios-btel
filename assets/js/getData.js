$( document ).ready(function (){
  getAds();
  getLevels();
  getExchangeInfo();
  getRatioInfo();
  getAcumulatePoints();
  getMinusPoints();
});

function getLevels() {
  $.ajax({
    // url: "src/levels.json",
    url: "src/get_levels.php",
    type: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      console.log("Getting data...");
    },
    success: function (res) {
      const levels = res.data;

      let htmlInsert = "";
      levels.map((x) => {
        htmlInsert += `<div class="col-4">
                <div class="card text-center level_card px-1 pb-4 pt-3">
                    <div>
                        <img src="https://biteltest.coquan.vn/${x.icon}" class="img-fluid" style="width:60px;" alt="">
                    </div>
                    <p class="m-0"><b style="color: ${x.colorLevel};">${x.title}</b></p>
                    <small>${x.content}</small>
                </div>
            </div>`;
      });

      $("#levelsContainer").html(htmlInsert);
    },
    complete: function (xhr, textStatus) {
      console.log("Request completed");
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log("Error in the request");
      console.log("Status:", textStatus);
      console.log("Error:", errorThrown);
    },
  });
}

function getAds() {
  const jsonData = {
    clientID: 5977422,
    categoryID: 2,
    level: 1,
    home: 1,
    pageNumber: 1,
    couponNumber: 10,
  };
  $.ajax({
    // url: "https://loyalty.bitel.com.pe/api/coup_category",
    url: "src/ads.json",
    type: "GET",
    // dataType: "json",
    contentType: "application/json",
    // data: jsonData,
    beforeSend: function (xhr) {
      console.log("Getting Ads...");
    },
    success: function (res) {
      
      const cuponList = res.couponList;

      console.log(cuponList);

      let htmlInsert = "";
      cuponList.map((x) => {
        htmlInsert += `<div class="swiper-slide">
            <div class="card border-0 shadow rounded-3">
                <img class="card-img-top" src="${x.imageWebUrl}" alt="" />
                <div class="card-body text-start">
                    <h5 class="card-title">${x.brand.brandName}</h5>
                    <p class="card-text">${x.couponSummary}</p>
                </div>
            </div>
        </div>`;
      });

      $("#cuponListContainer").html(htmlInsert);
    },
    complete: function (xhr, textStatus) {
      console.log("Ads request completed");
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log("Error in the request");
      console.log("Status:", textStatus);
      console.log("Error:", errorThrown);
    },
  });
}

function getExchangeInfo() {
  $.ajax({
    url: "src/get_exchange_info.php",
    type: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      console.log("Getting getExchangeInfo data...");
    },
    success: function (res) {
      const levels = res.data;
      let htmlInsert = "";
      levels.map((x) => {
        htmlInsert += `<tr>
            <td><b>${x.title}</b></td>
            <td>${x.content}</td>
          </tr>`;
      });
      $("#tableExchangeInfo").html(htmlInsert);
    },
    complete: function (xhr, textStatus) {
      console.log("Request completed");
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log("Error in the request");
      console.log("Status:", textStatus);
      console.log("Error:", errorThrown);
    },
  });
}

function getRatioInfo() {
  $.ajax({
    url: "src/get_ratio_info.php",
    type: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      console.log("Getting RatioInfo data...");
    },
    success: function (res) {
      const ratioInfo = res.data;
      $("#ratioInfoContainer").text(ratioInfo[0].content);
      $("#ratioInfo2Container").text(ratioInfo[0].content);
    },
    complete: function (xhr, textStatus) {
      console.log("RatioInfo Request completed");
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log("Error in the request");
      console.log("Status:", textStatus);
      console.log("Error:", errorThrown);
    },
  });
}

function getAcumulatePoints() {
  $.ajax({
    url: "src/get_acumulate_points.php",
    type: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      console.log("Getting data...");
    },
    success: function (res) {
      const recievedData = res.data;

      let htmlInsert = "";
      recievedData.map((x) => {
        htmlInsert += `<div class="col-6 col-xl-4 mb-3">
          <div class="card card-puntos border-0 py-3">
              <div class="card-body card-puntos-body">
                  <img src="https://biteltest.coquan.vn/${x.image}" class="img-fluid" width="30%" alt="">
                  <p class="text-brand card-puntos-text mb-2">${x.title}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" viewBox="0 0 50 2" fill="none">
                      <path d="M0 1H50" stroke="url(#paint0_linear_1954_25310)"/>
                      <defs>
                          <linearGradient id="paint0_linear_1954_25310" x1="-1.66667" y1="1.99999" x2="50.8333" y2="1.99999" gradientUnits="userSpaceOnUse">
                              <stop offset="0.0208333" stop-color="#D7E6FA" stop-opacity="0"/>
                              <stop offset="0.526042" stop-color="#D7E6FA"/>
                              <stop offset="1" stop-color="#D7E6FA" stop-opacity="0"/>
                          </linearGradient>
                      </defs>
                  </svg>
                  <div class="bg-gray rounded-3 card-puntos-tag">${x.brief}</div>
              </div>
          </div>
      </div>`;
      });

      $("#acumulatePointsContainer").html(htmlInsert);
    },
    complete: function (xhr, textStatus) {
      console.log("Acumulate Points Request completed");
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log("Error in the request");
      console.log("Status:", textStatus);
      console.log("Error:", errorThrown);
    },
  });
}

function getMinusPoints() {
  $.ajax({
    url: "src/get_minus_points.php",
    type: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      console.log("Getting data...");
    },
    success: function (res) {
      const recievedData = res.data;

      let htmlInsert = "";
      recievedData.map((x) => {
        htmlInsert += `<div class="col-6 col-xl-4 mb-3">
          <div class="card card-puntos border-0 py-3">
              <div class="card-body card-puntos-body">
                  <p class="text-brand card-puntos-text">${x.title}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" viewBox="0 0 50 2" fill="none">
                      <path d="M0 1H50" stroke="url(#paint0_linear_1954_25310)"/>
                      <defs>
                          <linearGradient id="paint0_linear_1954_25310" x1="-1.66667" y1="1.99999" x2="50.8333" y2="1.99999" gradientUnits="userSpaceOnUse">
                              <stop offset="0.0208333" stop-color="#D7E6FA" stop-opacity="0"/>
                              <stop offset="0.526042" stop-color="#D7E6FA"/>
                              <stop offset="1" stop-color="#D7E6FA" stop-opacity="0"/>
                          </linearGradient>
                      </defs>
                  </svg>
                  <div class="bg-gray rounded-3 card-puntos-tag px-2">${x.brief}</div>
              </div>
          </div>
      </div>`;
      });

      $("#minusPointsContainer").html(htmlInsert);
    },
    complete: function (xhr, textStatus) {
      console.log("Acumulate Points Request completed");
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log("Error in the request");
      console.log("Status:", textStatus);
      console.log("Error:", errorThrown);
    },
  });
}

function getPackages(filter_type) {
  $.ajax({
    url: `src/get_packages.php`,
    type: "POST",
    dataType: "json",
    data: { filter_type: filter_type },
    dataType: "json",
    beforeSend: function (xhr) {
      console.log("Getting Packages data...");
      $("#packagesOptionsContainer").html(`<small>Cargando...</small>`);
    },
    success: function (res) {
      const data = res.data;

      let htmlInsert = "";
      data.map((x) => {
        htmlInsert += `<div class="d-flex justify-content-between m-0">
            <label class="form-check-label text-start" for="${x.id}">${x.title}</label>
            <input class="form-check-input" type="radio" name="packages_options" id="${x.id}" value="${x.id}" required>
        </div>`;
      });

      $("#packagesOptionsContainer").html(htmlInsert);
      $("#btn_calcular").removeAttr("disabled");
    },
    complete: function (xhr, textStatus) {
      console.log("Packages Request completed");
    },
    error: function (xhr, textStatus, errorThrown) {
      $("#packagesOptionsContainer").html("");
      console.log("Error in the request");
      console.log("Status:", textStatus);
      console.log("Error:", errorThrown);
    },
  });
}

function calculateBenefits() {
  $.ajax({
    url: "src/get_benefits.php",
    type: "POST",
    dataType: "json",
    data: $("#calculator-form").serialize(),
    beforeSend: function (xhr) {
      console.log("Calculating benefits...");
      $("#benefits_table_body").html("<small>Cargando...</small>");
    },
    success: function (res) {
      if (res.totalItems == 0) {
        $("#benefits_table_body").text("No hay para mostrar");
      } else {
        const data = res.data;
        let htmlInsert = "";
        data.map((x) => {
          htmlInsert += `<tr>
              <td>${x.title}</td>
              <td>${x.code}</td>
              <td>${x.point}</td>
          </tr>`;
        });

        $("#benefits_table_body").html(htmlInsert);
      }
    },
    complete: function (xhr, textStatus) {
      console.log("Calculating completed");
    },
    error: function (xhr, textStatus, errorThrown) {
      $("#benefits_table_body").text("No se pudieron obtener datos");
      console.log("Error in the request");
      console.log("Status:", textStatus);
      console.log("Error:", errorThrown);
    },
  });
}

