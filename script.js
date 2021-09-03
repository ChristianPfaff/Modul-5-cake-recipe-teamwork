function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

let menus = [`
<div id="menu" class="menu1">
<img src="img/Marmor0.jpg" />
<div class="menuShow">
<h1>Marmorkuchen mit Kirschen</h1>
<p>
Marmorkuchen ist ein Rührkuchen aus Rühr- oder Sandmasse. Ein Teil – meist etwa ein Drittel – der Masse wird mit Kakao dunkel gefärbt und schichtweise nur leicht mit der übrigen hellen Masse vermischt, wodurch ein an Marmor erinnerndes Muster entsteht. Er wird meist in einer Napf-, Kranz- oder Kastenform gebacken.
</p>

</div>
</div>
`,
  `
<div id="menu" class="menu1">
<img src="img/Medovik0.jpg" />
<div class="menuShow">
<h1>Medovik</h1>
<p>
Die Russische Honigtorte ist ein echter Klassiker in Russland und im Balkan, aber hier in Deutschland noch weitestgehend unbekannt. Das ist wirklich schade, weil die russische Honigtorte ausgesprochen lecker ist und trotz weniger, einfacher Zutaten beeindruckt.

</p>

</div>
</div>
`
  ,
  `
<div id="menu" class="menu1">
<img src="img/Schwarz0.jpg" />
<div class="menuShow">
<h1>Schwarzwälder-Kirschtorte</h1>
<p>
Die Schwarzwälder Kirschtorte besteht aus mehreren Lagen dunklem Biskuitboden, Kirschen, Schlagsahne und Schokoladenraspeln. Die Torte ist alkoholhaltig, da die unterste Biskuitschicht mit Kirschwasser getränkt wird und die daraufliegenden Kirschen ebenfalls mit Kirschwasser verfeinert werden.
</p>

</div>
</div>
`
];

let currentValue = 0;

function start() {
  if (currentValue < 3) {
    showMenu(currentValue);
    currentValue++;
  }
  if (currentValue == 3) {
    currentValue = 0;
  }
  setTimeout(start, 5000);

}

function showMenu(i) {
  document.getElementById('menu').innerHTML = menus[i];
}
