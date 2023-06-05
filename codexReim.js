const { chromium } = require('playwright');

(async () => {
  try {
    const edgeOptions = {
      executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      headless: false,
    };

    const edgeBrowser = await chromium.launch(edgeOptions);
    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();

    for (let i = 0; i < 300; i++) {
      console.log(`==> Running hacking sequence ${i + 1}`);

      console.log('==> Clearing cache and cookies... ??');
      await edgeContext.clearCookies();
      //await edgeContext.clearStorageState({ cache: true });

      console.log('==> Cache and cookies cleared successfully. ?');

      console.log('==> Initiating hacking sequence... ??');
      await edgePage.goto('https://stereohitsradio.com/chart/stereo-top-bol/');

      console.log('==> Waiting for page to load... ?');
      //await edgePage.waitForTimeout(5000);
      console.log('==> Page loaded successfully. ?');

      // Esperar a que aparezca el selector "#clearBrowsingDataConfirm"
      //await edgePage.waitForSelector('#clearBrowsingDataConfirm');

      console.log('==> Hacking the page and clicking on element... ??');
      await edgePage.click('#chartvoting0 a.proradio-chartvote-link.not-collapse.qt-up');

      console.log('==> Element clicked successfully. ?');

      console.log('==> Hacking sequence completed successfully. ?');
    }

    // Mantén el navegador abierto para inspeccionar los resultados
    // await edgeBrowser.close();
  } catch (error) {
    console.error('Error al controlar Microsoft Edge:', error);
  }
})();
