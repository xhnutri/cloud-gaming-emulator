
const { getStream, launch } = require("puppeteer-stream");
const puppeteer = require('puppeteer');
const fs = require("fs");


// //Left click!
// robot.mouseClick();
const runner = async () => {
  console.log("Abrimos el navegador");
  var browser;

  browser = await puppeteer.launch({
    executablePath: "/usr/bin/firefox",
    // product: "firefox",
    headless: false,
    timeout: 10000,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: {
      width: 1220,
      height: 720,
    },
  });
  console.log("Abrimos la pagina")
  const page = await browser.newPage();
  page.setViewport({ width: 1220, height: 720 });
  // Configurar el tiempo de espera de la navegación
  // await page.setDefaultNavigationTimeout(1000);
  console.log("1.1 Iniciando Navegador");
  await page.goto("file:///root/Downloads/github/cloud-gaming-emulator/peerjs/index.html");
  console.log("1.2. Rellenando name user");
  await page.waitForSelector('input[id="room-input"]');
  await page.$eval('input[id="room-input"]', el => el.value = 'r3l86l');
  await page.click('button.btn.btn-secondary.mb-3');
   //sets the cursor the position with Puppeteer
  // await page.mouse.move(1220/2, 200);
  // await page.mouse.click(1220/2, 200);
  //Move the mouse down by 100 pixels.
  // robot.moveMouse(1220/2, 200);
  // console.log("1.3. Rellenando Password user");
  // await page.waitForSelector('input[name=pass]');
  // await page.$eval('input[name=pass]', el => el.value = 'r3l86lf1CZQK');
  // try {
  //   console.log("2.1 Iniciando Nueva Pagina");
  //   await Promise.all([
  //     page.click('div.boton.pad1.bblack.animate1s'),
  //     page.waitForNavigation()
  //   ]);
  //   // console.log("1.2. Rellenando name user");
  //   // await page.waitForSelector('input[name=user]');
  //   // await page.$eval('input[name=user]', el => el.value = 'xhpedro@hotmail.com');

  //   // console.log("1.3. Rellenando Password user");
  //   // await page.waitForSelector('input[name=pass]');
  //   // await page.$eval('input[name=pass]', el => el.value = 'r3l86lf1CZQK');
  //   // await Promise.all([
  //   //     page.click('div.boton.pad1.bblack.animate1s'),
  //   //     page.waitForNavigation()
  //   // ]);

  //   console.log("Esperando 3 segundos")
  //   await delay(3000);
  //   await Promise.all([
  //     console.log("2.2. Cerrar pantalla de mensaje"),
  //     page.waitForSelector('div.welcomewin div.novermas2'),
  //     page.click('div.welcomewin div.novermas2')
  //   ])
  //   console.log("Esperando 3 segundos")
  //   await delay(3000);
  //   await Promise.all([
  //     console.log("2.3. Entrando a unreal engine"),
  //     page.waitForSelector('li.menuop1.menutri.animate1s a'),
  //     page.hover('li.menuop1.menutri.animate1s a')
  //   ])
  //   console.log("Esperando 3 segundos")
  //   await delay(3000);
  //   // await page.waitForTimeout(3000);
  //   // await page.evaluate(async () => {
  //   //     await new Promise(function (resolve) {
  //   //         setTimeout(resolve, 3000)
  //   //     });
  //   // });

  //   // setTimeout(async () => {
  //   console.log("Terminaron los 3 segundos")
  //   try {
  //     console.log("3.1 Entrado a los videos");
  //     // await Promise.all([
  //     //   page.$eval('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)', el => el.click())
  //     // ]);
  //     // const liButton = await page.evaluate(() => Array.from(document.querySelectorAll('ul#cursosmenu.centerh.shadow.cursosmenu > li'), element => element.innerHTML));
  //     // for (let i = 0; i < liButton.length; i++) {
  //     //   const element = liButton[i];
  //     //   console.log(i);
  //     //   console.log(element);
  //     // }
  //     // await page.evaluate(() => {
  //     //   document.querySelectorAll('ul#cursosmenu.centerh.shadow.cursosmenu > li ')[1].click()
  //     // });
  //     await Promise.all([
  //       // page.waitForSelector('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)'),
  //       // page.click('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)'),
  //       page.mouse.click(844, 182),
  //       page.waitForNavigation()
  //     ]);
  //     stream = await getStream(page, { audio: true, video: true });
  //     console.log("3.3 Entrando a la Semana");
  //     // console.log("Esperando 3 segundos")
  //     // await delay(3000);
  //     // await page.waitForTimeout(3000);
  //     // await page.evaluate(async () => {
  //     //   await new Promise(function (resolve) {
  //     //     setTimeout(resolve, 3000)
  //     //   });
  //     // });
  //     // console.log("Terminaron los 3 segundos")
  //     // await page.evaluate(() => {
  //     //   document.querySelector("div[name='Semana 01 ']").click()
  //     // });
  //     await page.waitForSelector("div[name='Semana 01 ']")
  //     await page.click("div[name='Semana 01 ']");
  //     console.log("3.3 Click al video");
  //     // await page.evaluate(() => {
  //     //   document.querySelector("div[name='IntroduccionUnreal 01.mp4 ']").click()
  //     // });

  //     await page.waitForSelector("div[name='IntroduccionUnreal 01.mp4 ']")
  //     await page.click("div[name='IntroduccionUnreal 01.mp4 ']");
  //     console.log("3.3 Click play video");
  //     console.log('before waiting');
  //     // setTimeout(async () => {
  //     await delay(5000);
  //     await page.waitForTimeout(5000);
  //     await page.evaluate(async () => {
  //       await new Promise(function (resolve) {
  //         setTimeout(resolve, 5000)
  //       });
  //     });
  //     console.log('after waiting');
  //     // const liButton = await page.evaluate(() => Array.from(document.querySelectorAll('div#videocontent > iframe'), element => element.innerHTML));
  //     // for (let i = 0; i < liButton.length; i++) {
  //     //     const element = liButton[i];
  //     //     console.log(element);
  //     // }
  //     const elementHandle = await page.waitForSelector('div#videocontent > iframe');
  //     const frame = await elementHandle.contentFrame();
  //     // await frame.waitForSelector('[ng-model="vm.username"]');
  //     await Promise.all([
  //       frame.waitForSelector('div.fwdevp:last-child > div:nth-child(10) > div:first-child > div:last-child > div:last-child > img:last-child'),
  //       frame.click('div.fwdevp:last-child > div:nth-child(10) > div:first-child > div:last-child > div:last-child > img:last-child')
  //     ]);
  //     await Promise.all([
  //       frame.waitForSelector('div.fwdevp:last-child > div:nth-child(14)'),
  //       frame.click('div.fwdevp:last-child > div:nth-child(14)'),
  //     ]);
  //     // }, 10000);
  //     // await delay(1000);
  //     // await Promise.all([
  //     //     page.mouse.click(614, 711)
  //     // ])
  //     // await browser.close();
  //     // cleanup()
  //   } catch (error) {
  //     console.log(error)
  //     // cleanup()
  //   }
    // }, 3000);

  // } catch (err) {
  //   console.log(err)
  //   // cleanup()
  // }

  // console.log("recording");
  // stream.pipe(file);
  // // stream.pipe(file);
  // setTimeout(async () => {
  //   cleanup()
  // }, 20000);
  // return { "termino": "YES" }
  /*
  console.log("Abrimos el navegador");
  var browser;
  // console.log(revisionInfo.executablePath)
  // try {
  browser = await launch({
    executablePath: "/usr/bin/microsoft-edge-stable",
    // product: "firefox",
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: {
      width: 1220,
      height: 720,
    },
  });
  // /usr/bin/microsoft-edge-stable /usr/share/man/man1/microsoft-edge-stable.1.gz
  // } catch (error) {
  //   console.log(error);
  // }
  console.log("Abrimos la pagina")
  const page = await browser.newPage();
  async function cleanup() {
    try {
      await stream.destroy();
      file.close();
      await page.close();
      console.log("Subir Archivo");
      sa.subirVideo();
      await browser.close();
      console.log("finished");
    } catch (e) {
      console.log("Cannot cleanup istances");
    }
  }
  // Configurar el tiempo de espera de la navegación
  await page.setDefaultNavigationTimeout(100000);
  console.log("1.1 Iniciando Navegador");
  await page.goto("https://campus.ua.school/campus/", {
    waitUntil: "load",
  });
  console.log("1.2. Rellenando name user");
  await page.waitForSelector('input[name=user]');
  await page.$eval('input[name=user]', el => el.value = 'xhpedro@hotmail.com');

  console.log("1.3. Rellenando Password user");
  await page.waitForSelector('input[name=pass]');
  await page.$eval('input[name=pass]', el => el.value = 'r3l86lf1CZQK');
  try {
    console.log("2.1 Iniciando Nueva Pagina");
    await Promise.all([
      page.click('div.boton.pad1.bblack.animate1s'),
      page.waitForNavigation()
    ]);

    await Promise.all([
      console.log("2.2. Cerrar pantalla de mensaje"),
      page.waitForSelector('div.welcomewin div.novermas2'),
      page.click('div.welcomewin div.novermas2')
    ])
    await Promise.all([
      console.log("2.3. Entrando a unreal engine"),
      page.waitForSelector('li.menuop1.menutri.animate1s a'),
      page.hover('li.menuop1.menutri.animate1s a')
    ])
    console.log("Esperando 3 segundos")
    await delay(3000);
    await page.waitForTimeout(3000);
    await page.evaluate(async () => {
      await new Promise(function (resolve) {
        setTimeout(resolve, 3000)
      });
    });

    // setTimeout(async () => {
    console.log("Terminaron los 3 segundos")
    try {
      console.log("3.1 Entrado a los videos");
      // await Promise.all([
      //   page.$eval('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)', el => el.click())
      // ]);
      // const liButton = await page.evaluate(() => Array.from(document.querySelectorAll('ul#cursosmenu.centerh.shadow.cursosmenu > li'), element => element.innerHTML));
      // for (let i = 0; i < liButton.length; i++) {
      //   const element = liButton[i];
      //   console.log(i);
      //   console.log(element);
      // }
      // await page.evaluate(() => {
      //   document.querySelectorAll('ul#cursosmenu.centerh.shadow.cursosmenu > li ')[1].click()
      // });
      await Promise.all([
        // page.waitForSelector('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)'),
        // page.click('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)'),
        page.mouse.click(844, 182),
        page.waitForNavigation()
      ]);
      stream = await getStream(page, { audio: true, video: true });
      console.log("3.3 Entrando a la Semana");
      // console.log("Esperando 3 segundos")
      // await delay(3000);
      // await page.waitForTimeout(3000);
      // await page.evaluate(async () => {
      //   await new Promise(function (resolve) {
      //     setTimeout(resolve, 3000)
      //   });
      // });
      // console.log("Terminaron los 3 segundos")
      // await page.evaluate(() => {
      //   document.querySelector("div[name='Semana 01 ']").click()
      // });
      await page.waitForSelector("div[name='Semana 01 ']")
      await page.click("div[name='Semana 01 ']");
      console.log("3.3 Click al video");
      // await page.evaluate(() => {
      //   document.querySelector("div[name='IntroduccionUnreal 01.mp4 ']").click()
      // });

      await page.waitForSelector("div[name='IntroduccionUnreal 01.mp4 ']")
      await page.click("div[name='IntroduccionUnreal 01.mp4 ']");
      console.log("3.3 Click play video");
      console.log('before waiting');
      // setTimeout(async () => {
      await delay(5000);
      await page.waitForTimeout(5000);
      await page.evaluate(async () => {
        await new Promise(function (resolve) {
          setTimeout(resolve, 5000)
        });
      });
      console.log('after waiting');
      // const liButton = await page.evaluate(() => Array.from(document.querySelectorAll('div#videocontent > iframe'), element => element.innerHTML));
      // for (let i = 0; i < liButton.length; i++) {
      //     const element = liButton[i];
      //     console.log(element);
      // }
      const elementHandle = await page.waitForSelector('div#videocontent > iframe');
      const frame = await elementHandle.contentFrame();
      // await frame.waitForSelector('[ng-model="vm.username"]');
      await Promise.all([
        frame.waitForSelector('div.fwdevp:last-child > div:nth-child(10) > div:first-child > div:last-child > div:last-child > img:last-child'),
        frame.click('div.fwdevp:last-child > div:nth-child(10) > div:first-child > div:last-child > div:last-child > img:last-child')
      ]);
      await Promise.all([
        frame.waitForSelector('div.fwdevp:last-child > div:nth-child(14)'),
        frame.click('div.fwdevp:last-child > div:nth-child(14)'),
      ]);
      // }, 10000);
      // await delay(1000);
      // await Promise.all([
      //     page.mouse.click(614, 711)
      // ])
      // await browser.close();
      // cleanup()
    } catch (error) {
      console.log(error)
      // cleanup()
    }
    // }, 3000);

  } catch (err) {
    console.log(err)
    // cleanup()
  }

  console.log("recording");
  stream.pipe(file);
  // stream.pipe(file);
  setTimeout(async () => {
    cleanup()
  }, 20000);
  return { "termino": "YES" }
  */
};
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}
/*
const fs = require("fs");

const sa = require('./subirArchivo.js');
const { getStream, launch } = require("puppeteer-stream");
const test = async () => {

  const file = fs.createWriteStream("test.webm");
  // const browser = await launch({
  //     defaultViewport: {
  //         width: 1920,
  //         height: 1080,
  //     },
  // });

  // const browser = await launch({
  //     executablePath:
  //         "google-chrome-stable_current_amd64.deb",
  //     headless: true,
  //     defaultViewport: null,
  //     devtools: false,
  //     args: [
  //         "--window-size=1920,1080",
  //         "--window-position=1921,0",
  //         "--autoplay-policy=no-user-gesture-required",
  //     ],
  //     ignoreDefaultArgs: ["--mute-audio"],
  // });
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: {
      width: 1220,
      height: 720,
    },
  });
  const page = await browser.newPage();
  // Configurar el tiempo de espera de la navegación
  await page.setDefaultNavigationTimeout(100000);
  console.log("1.1 Iniciando Navegador");
  await page.goto("https://campus.ua.school/campus/", {
    waitUntil: "load",
  });


  // Type into search box.
  // await page.type('#search', 'odwhboidbijdbji');

  console.log("1.2. Rellenando name user");
  await page.waitForSelector('input[name=user]');
  await page.$eval('input[name=user]', el => el.value = 'xhpedro@hotmail.com');

  console.log("1.3. Rellenando Password user");
  await page.waitForSelector('input[name=pass]');
  await page.$eval('input[name=pass]', el => el.value = 'r3l86lf1CZQK');
  // await page.click('div.boton.pad1.bblack.animate1s');
  var code = 0;
  try {

    console.log("2.1 Iniciando Nueva Pagina");
    await Promise.all([
      page.click('div.boton.pad1.bblack.animate1s'),
      page.waitForNavigation()
    ]);
    // await page.waitForNavigation();

    await Promise.all([
      console.log("2.2. Cerrar pantalla de mensaje"),
      page.waitForSelector('div.welcomewin div.novermas2'),
      page.click('div.welcomewin div.novermas2')
    ])
    await Promise.all([
      console.log("2.3. Entrando a unreal engine"),
      page.waitForSelector('li.menuop1.menutri.animate1s a'),
      page.hover('li.menuop1.menutri.animate1s a')
    ])
    // const liButton = await page.evaluate(() => Array.from(document.querySelectorAll('ul#cursosmenu.centerh.shadow.cursosmenu li'), element => element.textContent));

    // await page.click('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)');
    try {
      console.log("3.1 Entrado a los videos");
      await Promise.all([
        page.waitForSelector('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)'),
        page.click('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)'),
        page.waitForNavigation()
      ]);
      // console.log("3.2 Cerrando pantalla de mensaje")
      // // await page.waitForResponse(response => response.ok())
      // await Promise.all([
      //   await page.waitForSelector('div.welcomewin div.novermas2'),
      //   await page.click('div.welcomewin div.novermas2')
      // ]);
      console.log("3.3 Entrando a la Semana");
      await Promise.all([
        later(10000),
        page.waitForSelector("div[name='Semana 01 ']"),
        page.click("div[name='Semana 01 ']"),
      ]);
      await Promise.all([
        console.log("2 segundos"),
        later(10000),
        console.log("3.3 Click al video"),
        page.waitForSelector("div[name='IntroduccionUnreal 01.mp4 ']"),
        page.click("div[name='IntroduccionUnreal 01.mp4 ']")
      ]);
      // await Promise.all([
      await Promise.all([
        console.log("2 segundos"),
        later(2000),
        console.log("3.3 Click play video"),
        // console.log("2.3. Entrando a unreal engine"),
        page.waitForSelector("campus.ua.school##html > div.fwdevp:last-child > div:nth-child(14) > img:last-child"),
        page.click("campus.ua.school##html > div.fwdevp:last-child > div:nth-child(14) > img:last-child")
      ])
      // ])

      // await page.click('div[name=Semana 01 ]');
      // await page.click('div[name=IntroduccionUnreal 01.mp4 ')
      // await page.mouse.click();
      // await page.click('div.fwdevp > div.video-screen-holder > div:nth-child(10')
    } catch (error) {
      console.log(error)
    }
    // console.log(liButton[0]);
    // console.log(liButton[1]);
    // console.log(liButton[2]);
    // const allResultsSelector = 'li';
    // console.log(allResultsSelector)
    // await page.waitForSelector(allResultsSelector);
    // await page.click('div.novermas2');
    // await page.click(liButton[1]);
  } catch (err) {
    console.log(err)
  }
  // await page.click('ul#cursosmenu.centerh.shadow.cursosmenu li');
  // Wait for suggest overlay to appear and click "show all results".
  // const allResultsSelector = '.style-scope .ytd-searchbox';
  // await page.waitForSelector(allResultsSelector);
  // await page.click(allResultsSelector);

  // Wait for the results page to load and display the results.
  // const resultsSelector = '.gsc-results .gs-title';
  // await page.waitForSelector(resultsSelector);
  const stream = await getStream(page, { audio: true, video: true });
  console.log("recording");

  stream.pipe(file);
  setTimeout(async () => {
    await stream.destroy();
    file.close();
    await browser.close();
    console.log("finished");
  }, 30000);
}
const entrarCampus = async () => {
  const file = fs.createWriteStream("test.webm");
  const browser = await puppeteer.launch({
    // executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: {
      width: 1220,
      height: 720,
    },
  });
  const page = await browser.newPage();
  // Configurar el tiempo de espera de la navegación
  await page.setDefaultNavigationTimeout(100000);
  console.log("1.1 Iniciando Navegador");
  await page.goto("https://campus.ua.school/campus/", {
    waitUntil: "load",
  });
  console.log("1.2. Rellenando name user");
  await page.waitForSelector('input[name=user]');
  await page.$eval('input[name=user]', el => el.value = 'xhpedro@hotmail.com');

  console.log("1.3. Rellenando Password user");
  await page.waitForSelector('input[name=pass]');
  await page.$eval('input[name=pass]', el => el.value = 'r3l86lf1CZQK');
  try {
    console.log("2.1 Iniciando Nueva Pagina");
    await Promise.all([
      page.click('div.boton.pad1.bblack.animate1s'),
      page.waitForNavigation()
    ]);

    await Promise.all([
      console.log("2.2. Cerrar pantalla de mensaje"),
      page.waitForSelector('div.welcomewin div.novermas2'),
      page.click('div.welcomewin div.novermas2')
    ])
    await Promise.all([
      console.log("2.3. Entrando a unreal engine"),
      page.waitForSelector('li.menuop1.menutri.animate1s a'),
      page.hover('li.menuop1.menutri.animate1s a')
    ])
    await delay(2000);
    var stream;
    try {
      console.log("3.1 Entrado a los videos");
      await Promise.all([
        page.waitForSelector('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)'),
        page.click('ul#cursosmenu.centerh.shadow.cursosmenu > li:nth-child(2)'),
        page.waitForNavigation()
      ]);
      console.log("3.3 Entrando a la Semana");
      await page.click("div[name='Semana 01 ']");
      console.log("3.3 Click al video");
      await page.waitForSelector("div[name='IntroduccionUnreal 01.mp4 ']")
      await page.click("div[name='IntroduccionUnreal 01.mp4 ']");
      console.log("3.3 Click play video");
      console.log('before waiting');
      await delay(10000);
      stream = await getStream(page, { audio: true, video: true });
      console.log('after waiting');
      // const liButton = await page.evaluate(() => Array.from(document.querySelectorAll('div#videocontent > iframe'), element => element.innerHTML));
      // for (let i = 0; i < liButton.length; i++) {
      //     const element = liButton[i];
      //     console.log(element);
      // }
      const elementHandle = await page.waitForSelector('div#videocontent > iframe');
      const frame = await elementHandle.contentFrame();
      // await frame.waitForSelector('[ng-model="vm.username"]');
      await Promise.all([
        frame.waitForSelector('div.fwdevp:last-child > div:nth-child(10) > div:first-child > div:last-child > div:last-child > img:last-child'),
        frame.click('div.fwdevp:last-child > div:nth-child(10) > div:first-child > div:last-child > div:last-child > img:last-child')
      ]);
      await Promise.all([
        frame.waitForSelector('div.fwdevp:last-child > div:nth-child(14)'),
        frame.click('div.fwdevp:last-child > div:nth-child(14)'),
      ]);
      await delay(1000);
      // await Promise.all([
      //     page.mouse.click(614, 711)
      // ])
      // await browser.close();
    } catch (error) {
      console.log(error)
    }
  } catch (err) {
    console.log(err)
  }
  console.log("recording");

  stream.pipe(file);
  setTimeout(async () => {
    await stream.destroy();
    file.close();
    console.log("Subir Archivo");
    sa.subirVideo();
    await browser.close();
    console.log("finished");
  }, 10000);
}
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}
*/
module.exports = runner;
