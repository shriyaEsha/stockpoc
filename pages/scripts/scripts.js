/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {
  setLibs,
  unwrapSingularFragments,
  decorateButtons,
  turnH6intoDetailM,
  customSpacings,
  externalLinks,
  gnavUnderline,
  handleAnchors,
} from './utils.js';

const LIBS = 'https://milo.adobe.com/libs';
const STYLES = '/pages/styles/styles.css';
const CONFIG = {
  // imsClientId: 'college',
  contentRoot: '/pages',
  codeRoot: '/pages',
  locales: {
    '': { ietf: 'en-US', tk: 'hah7vzn.css' },
    br: { ietf: 'pt-BR', tk: 'inq1xob.css' },
    es: { ietf: 'es-ES', tk: 'oln4yqj.css' },
    jp: { ietf: 'ja-JP', tk: 'dvg6awq' },
  },
};

(async function loadLCPImage() {
  const lcpImg = document.querySelector('img');
  lcpImg?.setAttribute('loading', 'eager');
}());

/*
 * ------------------------------------------------------------
 * Edit below at your own risk
 * ------------------------------------------------------------
 */

const miloLibs = setLibs(LIBS);

(function loadStyles() {
  const paths = [`${miloLibs}/styles/styles.css`];
  if (STYLES) { paths.push(STYLES); }
  paths.forEach((path) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', path);
    document.head.appendChild(link);
  });
}());

function loadStockNavbar() {
  // temporary - figure out how to remove milo's gnav
  const gnavCurtain = document.getElementsByClassName('gnav-curtain')[0];
  const gnavWrapper = document.getElementsByClassName('gnav-wrapper')[0];

  gnavCurtain.remove();
  gnavWrapper.remove();

  // try to load nav lazily
  // const scriptNav = document.createElement('script');
  // scriptNav.src = '/dist/scripts.js';
  // scriptNav.type = 'module';
  // document.querySelector('head').append(scriptNav);

  // const cssNav = document.createElement('link');
  // cssNav.href = '/dist/scripts.css';
  // cssNav.rel = 'stylesheet';
  // document.querySelector('head').append(cssNav);
}

const { loadArea, loadDelayed, setConfig } = await import(`${miloLibs}/utils/utils.js`);

(async function loadPage() {
  setConfig({ ...CONFIG, miloLibs });
  decorateButtons();
  turnH6intoDetailM();
  await loadArea();
  unwrapSingularFragments();
  externalLinks();
  customSpacings();
  gnavUnderline();
  handleAnchors();
  loadStockNavbar();
  loadDelayed();
}());
