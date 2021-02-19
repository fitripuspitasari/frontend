const endpoint_url = 'https://51018010.p-web.click/Final/api';

function getEvents() {
  fetch(endpoint_url + "/events/eventdetail")
    .then(status)
    .then(json)
    .then(function(data) {
      var events = "";
      data.event.forEach(function(pa) {
        events += `
        <div class="col-lg-4">
          <img src="..${pa.gambar_event}" class="img rounded-circle" width="140" height="140" alt="2005">

          <h2> ${pa.nama_event} </h2>
          <p>Info event: ${pa.info_event} </p>
          <p> Tanggal / Tahun Diselenggarakan : 5 - 6 Maret 2005 </p>
          <p><a class="btn btn-outline-info" href="../event.html?id=${pa.id_event}" role="button"> View Details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->


        ` ;

    });
              document.getElementById("events").innerHTML = events;

      })
    .catch(error);
}


function geteventsdetail(event_id) {
  fetch(endpoint_url + "/events/eventdetail"+"?id="+event_id)
    .then(status)
    .then(json)
    .then(function(data) {
      var events = "";
      data.event.forEach(function(pt) {
        events+= `
        <div class="col-md-7">
          <h2 class="featurette-heading  text-center">${pt.nama_event}</h2>
          <p class="lead">${pt.info_event}</p>

        </div>
        <div class="col-md-5 text-center">
        <h2 class="featurette-heading  text-center">Kode Event:${pt.kode_event}</h2>
        <br>
        <br>
         <div class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" >
              <img src="..${pt.gambar_event}" alt="">
         </div>
        </div>

        ` ;

    });
              document.getElementById("eventdetail").innerHTML = events;

      })
    .catch(error);
}
