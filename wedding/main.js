let map;

var locations = [{"label":"Atlanta Beltline","cat":"See & Do","lat":33.7467017629,"lon":-84.3582220027,"url":"https:\/\/maps.app.goo.gl\/vQfrdhYfdWjBcn9EA","ind":1},{"label":"Krog Street Market","cat":"Shopping","lat":33.756855427,"lon":-84.3641802007,"url":"https:\/\/maps.app.goo.gl\/gmUiEKfHY4jXubLE8","ind":1},{"label":"Wild Heaven West End Brewery & Gardens","cat":"Food & Drink","lat":33.730392717,"lon":-84.4194045889,"url":"https:\/\/maps.app.goo.gl\/9spKzFmGRnAo545LA","ind":1},{"label":"Wylie Street Murals","cat":"See & Do","lat":33.7526566269,"lon":-84.3600538532,"url":"https:\/\/maps.app.goo.gl\/Avu2gcVwLSucLVeU8","ind":1},{"label":"97 Estoria","cat":"Food & Drink","lat":33.7520108534,"lon":-84.363453474,"url":"https:\/\/maps.app.goo.gl\/DQngmjCFgrijayeHA","ind":1},{"label":"Atlantic Station Shopping","cat":"Shopping","lat":33.7926918509,"lon":-84.3989542761,"url":"https:\/\/maps.app.goo.gl\/WE4j7U8FGGDzjvGJ9","ind":1},{"label":"Talat Market Thai Food","cat":"Food & Drink","lat":33.7317916124,"lon":-84.3839379836,"url":"https:\/\/maps.app.goo.gl\/wryppG9QifvctSDX8","ind":1},{"label":"Grant Park","cat":"Nature & Outdoors","lat":33.7358168615,"lon":-84.3715107709,"url":"https:\/\/maps.app.goo.gl\/qfLYC68Cv95odVebA","ind":1},{"label":"El Tesoro Mexican Food","cat":"Food & Drink","lat":33.7494588745,"lon":-84.3427166996,"url":"https:\/\/maps.app.goo.gl\/7pgDKoqh2eeVrZPW7","ind":1},{"label":"Gaja Korean Food","cat":"Food & Drink","lat":33.7405126865,"lon":-84.3461814989,"url":"https:\/\/maps.app.goo.gl\/nB3CbamnsnbNKLxc6","ind":1},{"label":"So Ba Vietnamese Restaurant","cat":"Food & Drink","lat":33.7394611894,"lon":-84.3456827141,"url":"https:\/\/maps.app.goo.gl\/moCHBPeb8unX4QCt9","ind":1},{"label":"Mushi Ni (Baos & Bowls)","cat":"Food & Drink","lat":33.8020266914,"lon":-84.4287302774,"url":"https:\/\/maps.app.goo.gl\/T35khjgkGGK9Qhut7","ind":1},{"label":"Victory Sandwich bar","cat":"Food & Drink","lat":33.7639603105,"lon":-84.3577159599,"url":"https:\/\/maps.app.goo.gl\/iqDdqyT2xfkHzVMh7","ind":1},{"label":"Argosy Restaurant","cat":"Food & Drink","lat":33.741320984,"lon":-84.3463762548,"url":"https:\/\/maps.app.goo.gl\/TcabcrLfs6ShbsS27","ind":1},{"label":"Felinnis Pizza","cat":"Food & Drink","lat":33.7735144734,"lon":-84.3576274394,"url":"https:\/\/maps.app.goo.gl\/bXU78X96rRnkt1aJA","ind":1},{"label":"Piedmont Park","cat":"Nature & Outdoors","lat":33.7878818205,"lon":-84.3723720646,"url":"https:\/\/maps.app.goo.gl\/d6VNxqyXApsF9vZE7","ind":1},{"label":"Atlanta Botanical Garden","cat":"Nature & Outdoors","lat":33.7898948704,"lon":-84.3725872167,"url":"https:\/\/maps.app.goo.gl\/ZdUw9kjUf4ZoitCw5","ind":1},{"label":"La Hacienda Mexican food","cat":"Food & Drink","lat":33.7791521196,"lon":-84.3696674547,"url":"https:\/\/maps.app.goo.gl\/ohqYnXmvyvFsNcpT8","ind":1},{"label":"Ponce City Market","cat":"Shopping","lat":33.7727805641,"lon":-84.3657276265,"url":"https:\/\/maps.app.goo.gl\/YutCn7rwvjdjn6xi8","ind":1},{"label":"High Museum of Art","cat":"See & Do","lat":33.7900301162,"lon":-84.3856059177,"url":"https:\/\/maps.app.goo.gl\/3QiF1zaNbyw9NTES9","ind":1},{"label":"Fernbank Museum","cat":"See & Do","lat":33.7738774374,"lon":-84.3279421002,"url":"https:\/\/maps.app.goo.gl\/rgRZ8JLdKQXCVa8y8","ind":1},{"label":"National Center of Civil and Human Rights","cat":"See & Do","lat":33.7639369466,"lon":-84.3930681763,"url":"https:\/\/maps.app.goo.gl\/oNoiYabjJmTfDmWP8","ind":1},{"label":"Martin Luther King, Jr. National Historical Park","cat":"See & Do","lat":33.7565742295,"lon":-84.3732166093,"url":"https:\/\/maps.app.goo.gl\/dx12GmAjmfFt8LHu6","ind":1},{"label":"The Millenium Gate Museum","cat":"See & Do","lat":33.7910937948,"lon":-84.3997458125,"url":"https:\/\/maps.app.goo.gl\/EqvmEi4gjssyQbSn8","ind":1},{"label":"Center of Puppetry Art","cat":"See & Do","lat":33.7928549633,"lon":-84.3898466655,"url":"https:\/\/maps.app.goo.gl\/9g4RRBUMXWcWzcXh9","ind":1},{"label":"Stone Mountain","cat":"Nature & Outdoors","lat":33.8099199888,"lon":-84.1467850169,"url":"https:\/\/maps.app.goo.gl\/aemY4izf9D5ZTnCN9","ind":1},{"label":"Your Dekalb Farmers Market","cat":"Shopping","lat":33.7868079866,"lon":-84.2696933854,"url":"https:\/\/maps.app.goo.gl\/6RydT8i1rLosBujt9","ind":1},{"label":"Cascade Springs Nature preserve","cat":"Nature & Outdoors","lat":33.7194830996,"lon":-84.4813544934,"url":"https:\/\/maps.app.goo.gl\/Bycq8eAxMU2aktp28","ind":1},{"label":"Arabia Mountain Top Trail","cat":"Nature & Outdoors","lat":33.664281284,"lon":-84.118869005,"url":"https:\/\/maps.app.goo.gl\/tRYYEFLfEGw2Uzn49","ind":1},{"label":"Chattahoochee River National Recreation Area","cat":"Nature & Outdoors","lat":33.9866339612,"lon":-84.324367575,"url":"https:\/\/maps.app.goo.gl\/D6jsthgT56mU389c9","ind":1},{"label":"Dunwoody Nature Center","cat":"Wedding","lat":33.9565776817,"lon":-84.3327992602,"url":"https:\/\/maps.app.goo.gl\/TXt1zhdoaJweP3nT9","ind":3},{"label":"Antico Pizza Napoletana","cat":"Rehersal Dinner","lat":33.7846128659,"lon":-84.4057092122,"url":"https:\/\/maps.app.goo.gl\/P3pekCCA8cJw8PMc9","ind":2}]

var colormap = {"Shopping": "#8da0cb",
                "Food & Drink": "#e78ac3",
                "Nature & Outdoors": "#a6d854",
                "See & Do": "#66c2a5",
                "Rehersal Dinner": "#fc8d62",
                "Wedding": "#ffd92f"}

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: { lat: 33.7531305, lng: -84.3876679 },
    zoom: 12,
    mapId: "WEDDING_MAP"
  });

  locations.forEach(function(loc) {
  
    const labelTag = document.createElement("a");
    labelTag.className = "label-tag";
    labelTag.textContent = loc.label;
    labelTag.style.backgroundColor = colormap[loc.cat];
    labelTag.setAttribute('href', loc.url)

    const marker = new AdvancedMarkerElement({
      map: map,
      position: { lat: loc.lat, lng: loc.lon },
      content: labelTag,
      zIndex: loc.ind
    });

    marker.addListener('click', ({domEvent, latLng}) => {
      const {target} = domEvent;
    });

  });

}

initMap();


