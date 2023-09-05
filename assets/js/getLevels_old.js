
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFwaV9iaXRlbCIsImlzcyI6IkhKS2E5MzIwS0tLZGFzZGwxMkg5ZEZHMjQ2SjMyMEpLRlNmdXU5NiIsImV4cCI6MTY5MzA4Njk2Nn0.aqjRRhJwrRZA_LMMHKuK3uG9dRTHTOgyx7IdXkawSlo"
const levelUrl = `https://biteltest.coquan.vn/api/Project/MyBitel/API/Loyalty/MobileMenu/select?token=${token}`

$.ajax({
    url: levelUrl,
    type: 'GET',
    dataType: 'json',
    beforeSend: function(xhr) {
      console.log('Getting data');
    },
    success: function(data) {
      console.log('Solicitud exitosa');
      console.log(data.data);

      const levels = data.data;
      const levelsMap = levels.map((x) => {
        return `<div class="col-3 m-1 pt-3 border rounded text-center bg-gray ">
            <img src="https://biteltest.coquan.vn/${x.icon}" alt="">
            <p style="color: ${x.colorLevel};">${x.title}</p>
            <p>230 puntos o menos</p>
        </div>`;
      });

      console.log(levelsMap);

      $("#levelsContainer").innerHTML = levelsMap;

    },
    complete: function(xhr, textStatus) {
      console.log('Request completed');
      // Se ejecuta después de que se haya completado la solicitud, sin importar si fue exitosa o no
    },
    error: function(xhr, textStatus, errorThrown) {
      console.log('Error in the request');
      console.log('Status:', textStatus);
      console.log('Error:', errorThrown);
    }
  });
  