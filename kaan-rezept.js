function multiplicator() {
    let inputNumber = +document.getElementById('inputField').value;
    let flour = 400;
    let bakingPowder = 1;
    let oil = 250;
    let sugar = 250;
    let vanillaSugar = 1;
    let milk = 250;
    let eggs = 4;
    let sourCherries = 1;
    let cacaoPowder = 30;

    let result1 = inputNumber * flour;
    let result2 = inputNumber * bakingPowder;
    let result3 = inputNumber * oil;
    let result4 = inputNumber * sugar;
    let result5 = inputNumber * vanillaSugar;
    let result6 = inputNumber * milk;
    let result7 = inputNumber * eggs;
    let result8 = inputNumber * sourCherries;
    let result9 = inputNumber * cacaoPowder;

    document.getElementById('flour').innerHTML = `${result1}g`;
    document.getElementById('bakingPowder').innerHTML = `${result2}Pck.`;
    document.getElementById('oil').innerHTML = `${result3}g`;
    document.getElementById('sugar').innerHTML = `${result4}g`;
    document.getElementById('vanillaSugar').innerHTML = `${result5}Pck.`;
    document.getElementById('milk').innerHTML = `${result6}ml`;
    document.getElementById('eggs').innerHTML = `${result7}`;
    document.getElementById('sourCherries').innerHTML = `${result8}Glas`;
    document.getElementById('cacaoPowder').innerHTML = `${result9}g`;
}

function english() {
    document.getElementById('title').innerHTML = `Marble cake with cherries`;
    document.getElementById('header').innerHTML = `Marble cake with cherries`;
    document.getElementById('ingredients').innerHTML = `Ingredients for`;
    document.getElementById('button').innerHTML = `Portions`;
    document.getElementById('flourx').innerHTML = `Flour`;
    document.getElementById('bakingPowderx').innerHTML = `Bakingpowder`;
    document.getElementById('oilx').innerHTML = `Oil, neutral (e.g. sunflower oil)`;
    document.getElementById('sugarx').innerHTML = `Sugar`;
    document.getElementById('vanillaSugarx').innerHTML = `Vanillasugar`;
    document.getElementById('milkx').innerHTML = `Milk`;
    document.getElementById('eggsx').innerHTML = `Eggs`;
    document.getElementById('sourCherriesx').innerHTML = `Sour cherries (drained weight 375g)`;
    document.getElementById('cacaoPowderx').innerHTML = `Cocoa powder (approx. Heaped tablespoon)`;
    document.getElementById('greasex').innerHTML = `Grease for the baking pan`;
    document.getElementById('headerPreparation').innerHTML = `Preparation`;
    document.getElementById('boxTime').innerHTML = `about 10 minutes`;
    document.getElementById('boxfullTime').innerHTML = `Total time approx. 20 minutes`;
    document.getElementById('maintext').innerHTML = `Preheat the oven to 160 ?? C (convection, top / bottom heat: 180 ?? C). Drain the sour cherries and drain well. Grease a baking pan (I use a springform pan with a bundt cake base). With the exception of the cocoa and cherries, mix all ingredients well with the mixer. Pour half of the batter into the pan. Spread the cherries on the dough. Stir the cocoa into the rest of the batter and spread the batter over the cherries. Bake for about 60 minutes. You can also make this cake without sour cherries. The baking time is then reduced by about 10-15 minutes.`;
    document.getElementById('reference').innerHTML = `Recipe created by`;
}

function german() {
    document.getElementById('title').innerHTML = `Marmorkuchen mit Kirschen`;
    document.getElementById('header').innerHTML = `Marmorkuchen mit Kirschen`;
    document.getElementById('ingredients').innerHTML = `Zutaten f??r`;
    document.getElementById('button').innerHTML = `Portionen`;
    document.getElementById('flourx').innerHTML = `Mehl`;
    document.getElementById('bakingPowderx').innerHTML = `Backpulver`;
    document.getElementById('oilx').innerHTML = `??l, neutrales (z.B. Sonnenblumen??l)`;
    document.getElementById('sugarx').innerHTML = `Zucker`;
    document.getElementById('vanillaSugarx').innerHTML = `Vanillinzucker`;
    document.getElementById('milkx').innerHTML = `Milch`;
    document.getElementById('eggsx').innerHTML = `Ei(er)`;
    document.getElementById('sourCherriesx').innerHTML = `Sauerkirschen (Abtropfgewicht 375g)`;
    document.getElementById('cacaoPowderx').innerHTML = `Kakaopulver (ca. geh.EL)`;
    document.getElementById('greasex').innerHTML = `Fett f??r die Form`;
    document.getElementById('headerPreparation').innerHTML = `Zubereitung`;
    document.getElementById('boxTime').innerHTML = `ca. 10 minuten`;
    document.getElementById('boxfullTime').innerHTML = `Gesamtzeit ca. 20 minuten`;
    document.getElementById('maintext').innerHTML = `Den Backofen auf 160??C (Umluft, Ober-/Unterhitze: 180??C) vorheizen. Die Sauerkirschen abgie??en und gut abtropfen lassen. Eine Backform fetten (ich benutze eine Springform mit Gugelhupfboden). Bis auf den Kakao und die Kirschen alle Zutaten mit dem Mixer gut verr??hren. Die H??lfte des Teigs in die Form f??llen. Die Kirschen auf dem Teig verteilen. Den Kakao unter den restlichen Teig r??hren und den Teig auf den Kirschen verteilen. Ca. 60 Minuten backen. Man kann diesen Kuchen auch ohne Sauerkirschen zubereiten. Die Backzeit verringert sich dann um etwa 10 - 15 Minuten.`;
    document.getElementById('reference').innerHTML = `Rezept erstellt von`;
}

function turkish() {
    document.getElementById('title').innerHTML = `Kirazl?? mermer kek`;
    document.getElementById('header').innerHTML = `Kirazl?? mermer kek`;
    document.getElementById('ingredients').innerHTML = `Malzeme miktar??`;
    document.getElementById('button').innerHTML = `porsiyon`;
    document.getElementById('flourx').innerHTML = `Un`;
    document.getElementById('bakingPowderx').innerHTML = `Kabartma tozu`;
    document.getElementById('oilx').innerHTML = `S??v?? ya????, (??r. Ay??i??ek ya????)`;
    document.getElementById('sugarx').innerHTML = `??eker`;
    document.getElementById('vanillaSugarx').innerHTML = `vanilya??ekeri`;
    document.getElementById('milkx').innerHTML = `S??t`;
    document.getElementById('eggsx').innerHTML = `Yumurta(lar)`;
    document.getElementById('sourCherriesx').innerHTML = `Vi??ne (s??z??lm???? a????rl??k 375g)`;
    document.getElementById('cacaoPowderx').innerHTML = `Kakao tozu (yakl. yemek ka????????`;
    document.getElementById('greasex').innerHTML = `??ekil i??in ya??`;
    document.getElementById('headerPreparation').innerHTML = `Haz??rlama`;
    document.getElementById('boxTime').innerHTML = `yakla????k 10 dakika`;
    document.getElementById('boxfullTime').innerHTML = `Toplam s??re yakla????k 20 dakika`;
    document.getElementById('maintext').innerHTML = `F??r??n?? ??nceden 160 ?? C'ye ??s??t??n (konveksiyon, ??st / alt ??s??tma: 180 ?? C). Vi??neleri s??z??n ve iyice s??z??n. Bir f??r??n tepsisini ya??lay??n (kek tabanl?? bir kelep??eli tava kullan??yorum). Kakao ve kirazlar haricinde t??m malzemeleri mikser ile iyice kar????t??r??n. Hamurun yar??s??n?? tavaya d??k??n. Kirazlar?? hamurun ??zerine yay??n. Kakaoyu, hamurun geri kalan??na kar????t??r??n ve hamuru kirazlar??n ??zerine yay??n. Yakla????k 60 dakika pi??irin. Bu pastay?? vi??ne olmadan da yapabilirsiniz. Pi??irme s??resi daha sonra yakla????k 10-15 dakika azalt??l??r.`;
    document.getElementById('reference').innerHTML = `Tarifi olu??turan`;
}
