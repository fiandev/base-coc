function show(self){
  var i = $(self).html().toLowerCase();
  var c = 0;
  $(".fuck-nav").removeClass("active");
  $(self).toggleClass("active");
  $("#root .base-card").remove();
  $.getJSON(`../data/${i}.json`,function(data){
    data.title.forEach((d,i) => {
      let title = d.toLowerCase();
      let image = data.thumbnail[i].split("https://cocbases.com/wp-content/uploads/").join("");
      let thumbnail = `./res/${image}`;
      let link = data.link[i];
      let newlink = link;
      $("#root").append(`<div class="base-card clearfix">
              <h5 class="my-1 title">${title}</h5>
              <a onclick="zoom('${thumbnail}','${title}')">
              <img onerror="error_image(this)" class="img-fluid" src="${thumbnail}" alt="${title}" />
              </a>
              <a href="${newlink}">
              <button style="margin-right: 5px;" class="float-end btn btn-outline-primary bg-primary text-light my-1" type="button">download</button>
              </a>
            </div>`)
    })
  })
}
/* responesove fucknav */
let w = $("#first").innerWidth();
$(".fuck-nav").css("height",`${w}`);
$(".fuck-nav").css("width",`${w}`);

let navs = document.querySelectorAll(".fuck-nav");
let random = navs[Math.floor(Math.random() * navs.length)];
show(random);

function error_image(self){
  $(self).attr("src","https://101red.com/prime/wp-content/uploads/2021/03/24-Error-404-Not-Found-Apa-Artinya-serta-Gimana-Metode-Mengatasinya.jpg");
}

$(document).ready(function()
{
    $(window).scroll(function()
    {
        var div = $(this);
        if (div.scrollTop() == 0)
        {
          // top
         $("#header").removeClass("fixed");
         $("#header").removeClass("mx-auto");
         $("#header").removeClass("bg-light");
        }
        else
        {
          $("#header").addClass("fixed");
          $("#header").addClass("bg-light");
        }
    });
});

function zoom(url, title){
  $(".container").append(`
  <div class="container-image-zooming">
    <h3 class="title-image-zooming">${title}</h3>
    <img src="${url}" class="image-zooming" />
    <div class="bg-image-zooming" onclick="hideAnu(this)"></div>
  </div>`);
}
function hideAnu(self){
  $(self)[0].parentElement.remove();
}