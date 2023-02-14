import React from 'react';
import { injectIntl } from 'react-intl';
import { getLocalizedURL, getAppLocale } from '@intl/adobe-locales';
import { StockNavbarFranklinWrapper } from '../../../stock.navbar';

const config = {
    authentication: {
      imsClientId: 'AdobeStockClient2',
      imsLocale: 'en_US',
      scopes: [
        'account_cluster.read',
        'additional_info.address.mail_to',
        'additional_info.dob',
        'additional_info.projectedProductContext',
        'additional_info.roles',
        'AdobeID',
        'cc_private',
        'creative_cloud',
        'creative_sdk',
        'gnav',
        'openid',
        'read_organizations',
        'read_pc.stock',
        'read_pc.stock_credits',
        'sao.cce_private',
        'sao.stock',
        'stk.a.internal.cru'
      ],
      imsUrlParams: {
        ctx_id: 'adbstk_c',
        state: '{"ac":"stock.adobe.com"}'
      }
    },
    app: {
      environment: 'local',
    },
    isGloballySafeCollectionEnabled: false,
    phoneNumberForPage: '800-685-3602',
    cchomeLeftNavLocale: '',
    urls: {
      nonLocalized: {
        adobeAccount: 'https://stage.account.adobe.com',
        adobeDotCom: 'https://www.stage.adobe.com',
        adobeHelpX: 'https://helpx.stage.adobe.com',
        adobeStockContributor: 'https://primary.stock-contributor.stage.adobe.com',
      },
      localized: {
        adobeAccount: '',
        adobeDotCom: '',
        adobeHelpX: '',
        adobeStockContributor: '',
      }
    },
  };

function StockNavbar({ intl, isGloballySafeCollectionEnabled }) {  
  const appConfig = {
    ...config,
    isGloballySafeCollectionEnabled,
    cchomeLeftNavLocale: getAppLocale('cchome_leftnav', intl.locale),
  };

  // localize URLs in config
  const urlKeys = Object.keys(appConfig.urls.localized);
  urlKeys.forEach((urlKey) => {
    const nonLocalizedUrl = appConfig.urls.nonLocalized[urlKey];
    appConfig.urls.localized[urlKey] = getLocalizedURL(nonLocalizedUrl, intl.locale);
  });

  // read FFs from Franklin
  // <meta name="feature-flags" content="isNavbarV2Enabled">
  const featureFlags = document.head.getElementsByTagName('meta')['feature-flags'].content;
  // super simple for now - assume only 1 FF is passed
  const ffName = featureFlags.split(':')[0];
  const ffValue = featureFlags.split(':')[1];

  // Phone number
  const phoneNumber = document.head.getElementsByTagName('meta')['phone-number'].content;

  console.log(featureFlags);
  return (
    <StockNavbarFranklinWrapper
      config={appConfig}
      intl={intl}
      {...{
        [ffName]: eval(ffValue),
      }}
      // Can Phone number come dynamically from Franklin? Or use set of ph nos by locale
      phoneNumber={phoneNumber}
    />
    )
  }

export default injectIntl(StockNavbar);
