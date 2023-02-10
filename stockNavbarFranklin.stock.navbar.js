(window["webpackJsonpstockNavbar"] = window["webpackJsonpstockNavbar"] || []).push([["stockNavbarFranklin"],{

/***/ "./src/components/profileDropdown/stockNavbarProfileDropdownFranklin.jsx":
/*!*******************************************************************************!*\
  !*** ./src/components/profileDropdown/stockNavbarProfileDropdownFranklin.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _astock_core_cc_storage_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @astock/core-cc-storage-authentication */ "../core-cc-storage-authentication/src/index.js");
/* harmony import */ var _react_react_spectrum_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react/react-spectrum/OverlayTrigger */ "@react/react-spectrum/OverlayTrigger");
/* harmony import */ var _react_react_spectrum_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _astock_core_react_i18n_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @astock/core-react-i18n-utils */ "../core-react-i18n-utils/src/index.js");
/* harmony import */ var _astock_styled_react_components_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @astock/styled-react-components/avatar */ "@astock/styled-react-components/avatar");
/* harmony import */ var _astock_styled_react_components_avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_astock_styled_react_components_avatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _astock_styled_react_components_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @astock/styled-react-components/constants */ "@astock/styled-react-components/constants");
/* harmony import */ var _astock_styled_react_components_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_astock_styled_react_components_constants__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _astock_styled_react_components_dropdownList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @astock/styled-react-components/dropdownList */ "@astock/styled-react-components/dropdownList");
/* harmony import */ var _astock_styled_react_components_dropdownList__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_astock_styled_react_components_dropdownList__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../strings */ "./src/strings/index.js");
/* harmony import */ var _stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stockNavbarProfileDropdownMarketplace.style */ "./src/components/profileDropdown/stockNavbarProfileDropdownMarketplace.style.js");
/* harmony import */ var _manageAccount_manageAccountModalContent_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manageAccount/manageAccountModalContent.style */ "./src/components/profileDropdown/manageAccount/manageAccountModalContent.style.js");
/* harmony import */ var _stockNavbarProfileDropdownMarketplace_strings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stockNavbarProfileDropdownMarketplace.strings */ "./src/components/profileDropdown/stockNavbarProfileDropdownMarketplace.strings.js");

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2021 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
















/**
 * @param {Object} props
 * @returns {React.Element}
 */
function StockNavbarProfileDropdownFranklin(_ref) {
  let {
    adobeAccountUrl,
    avatarImageUrl,
    avatarAlt,
    currentProfileName,
    email,
    trackProfileDropdownClick,
    defaultShow,
    isSudLicenseHistoryForEnterpriseEnabled,
    intl
  } = _ref;
  const licenseHistoryUrl = isSudLicenseHistoryForEnterpriseEnabled ? _constants_routes__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_ROUTES"].STOCK_USER_DASHBOARD_LICENSE_HISTORY : _constants_routes__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_ROUTES"].LICENSE_HISTORY;
  const stopPropagation = e => {
    // Need to stop propagation so following listener won't prevent browser
    // from following the link:
    // https://git.corp.adobe.com/React/react-spectrum-v2/blob/dd3c2ee301b3247c0586a698eb07901c412864d8/src/Menu/js/Menu.js#L82
    e.stopPropagation();
  };
  const onLogout = e => {
    trackProfileDropdownClick('sign-out');

    // Clear Cached Storage Data
    Object(_astock_core_cc_storage_authentication__WEBPACK_IMPORTED_MODULE_4__["clearCachedStorageAccessData"])();
    stopPropagation(e);

    // logout with IMS Lib V2
    window.adobeIMS.signOut();
  };
  const onProfileDropdownClickHandler = subtype => e => {
    trackProfileDropdownClick(subtype);
    stopPropagation(e);
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_react_spectrum_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default.a, {
    trigger: "click",
    defaultShow: defaultShow,
    placement: "bottom left",
    delayHide: 0
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["ProfileDropdownButton"], {
    "data-t": "navbar-profile-dropdown-button",
    "aria-label": intl.formatMessage(_stockNavbarProfileDropdownMarketplace_strings__WEBPACK_IMPORTED_MODULE_14__["messages"]['navbar.profile.dropdown.ariaLabel']),
    quiet: true,
    variant: "action"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_astock_styled_react_components_avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
    alt: avatarAlt,
    dataT: "navbar-profile-icon",
    imageUrl: avatarImageUrl,
    rounded: true,
    size: _astock_styled_react_components_constants__WEBPACK_IMPORTED_MODULE_8__["AVATAR_XSMALL"]
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["StyledMenu"], {
    "data-t": "navbar-profile-dropdown-menu"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_astock_styled_react_components_dropdownList__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["StyledProfileDropdownListItem"], {
    isMainProfileList: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["ProfileWrapper"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_astock_styled_react_components_avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
    alt: avatarAlt,
    dataT: "avatar-image",
    imageUrl: avatarImageUrl,
    rounded: true,
    size: _astock_styled_react_components_constants__WEBPACK_IMPORTED_MODULE_8__["AVATAR_LARGE"]
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["Profile"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["ProfileName"], {
    "data-t": "avatar-profile-name-label"
  }, currentProfileName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["ProfileEmail"], {
    "data-t": "avatar-profile-email-label"
  }, email), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_manageAccount_manageAccountModalContent_style__WEBPACK_IMPORTED_MODULE_13__["ManageAccountLink"], {
    "data-t": "avatar-manage-account-link",
    onClick: () => {
      // analytics
      onProfileDropdownClickHandler('manage-account');
      window.location.assign(adobeAccountUrl);
    },
    href: adobeAccountUrl
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    "data-t": "avatar-manage-account-label"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
    defaultLocale: intl.defaultLocale,
    locale: intl.locale,
    messages: _strings__WEBPACK_IMPORTED_MODULE_11__["default"][intl.locale]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "navbar.manageAccount.link",
    defaultMessage: "Manage Account"
  }))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["StyledProfileDropdownListItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["StyledProfileItemHeading"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
    defaultLocale: intl.defaultLocale,
    locale: intl.locale,
    messages: _strings__WEBPACK_IMPORTED_MODULE_11__["default"][intl.locale]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "navbar.profile.dropdown.heading",
    defaultMessage: "Adobe Stock"
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["LinkWrapperWithHover"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
    defaultLocale: intl.defaultLocale,
    locale: intl.locale,
    messages: _strings__WEBPACK_IMPORTED_MODULE_11__["default"][intl.locale]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "navbar.licenseHistory.link",
    defaultMessage: "License History"
  }, licenseHistoryText => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["StyledLink"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    "data-t": "avatar-member-license-history",
    onClick: onProfileDropdownClickHandler('license-history')
  }, {
    href: licenseHistoryUrl,
    title: licenseHistoryText
  }), licenseHistoryText))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["StyledProfileDropdownListItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["LinkWrapperWithHover"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
    defaultLocale: intl.defaultLocale,
    locale: intl.locale,
    messages: _strings__WEBPACK_IMPORTED_MODULE_11__["default"][intl.locale]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "navbar.auth.signOut",
    defaultMessage: "Sign Out"
  }, signOutText => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stockNavbarProfileDropdownMarketplace_style__WEBPACK_IMPORTED_MODULE_12__["StyledLink"], {
    "data-t": "susi-logout",
    onClick: onLogout,
    className: "js-susi-logout"
  }, signOutText))))))));
}
StockNavbarProfileDropdownFranklin.propTypes = {
  adobeAccountUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  avatarImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  avatarAlt: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  currentProfileName: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  email: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  trackProfileDropdownClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  defaultShow: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  isFollowContributorEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  isSudLicenseHistoryForEnterpriseEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  intl: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])(_astock_core_react_i18n_utils__WEBPACK_IMPORTED_MODULE_6__["IntlPropType"]).isRequired
};
StockNavbarProfileDropdownFranklin.defaultProps = {
  avatarAlt: 'Profile',
  defaultShow: false,
  isFollowContributorEnabled: false,
  isSudLicenseHistoryForEnterpriseEnabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_astock_core_react_i18n_utils__WEBPACK_IMPORTED_MODULE_6__["withInjectedIntl"])(StockNavbarProfileDropdownFranklin, _strings__WEBPACK_IMPORTED_MODULE_11__["default"]));

/***/ }),

/***/ "./src/components/stockNavbarFranklin.jsx":
/*!************************************************!*\
  !*** ./src/components/stockNavbarFranklin.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "../../node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "../../node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _intl_adobe_locales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @intl/adobe-locales */ "../../node_modules/@intl/adobe-locales/dist/adobe-locales.js");
/* harmony import */ var _intl_adobe_locales__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_intl_adobe_locales__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _identity_imslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @identity/imslib */ "../../node_modules/@identity/imslib/index.js");
/* harmony import */ var _react_react_spectrum_Icon_Apps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react/react-spectrum/Icon/Apps */ "@react/react-spectrum/Icon/Apps");
/* harmony import */ var _react_react_spectrum_Icon_Apps__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Icon_Apps__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _astock_core_react_i18n_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @astock/core-react-i18n-utils */ "../core-react-i18n-utils/src/index.js");
/* harmony import */ var _astock_react_feature_flags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @astock/react-feature-flags */ "../react-feature-flags/src/index.js");
/* harmony import */ var _astock_core_react_context_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @astock/core-react-context/core */ "../core-react-context/src/core.jsx");
/* harmony import */ var _astock_styled_react_components_navbarMarketplace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @astock/styled-react-components/navbarMarketplace */ "@astock/styled-react-components/navbarMarketplace");
/* harmony import */ var _astock_styled_react_components_navbarMarketplace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_astock_styled_react_components_navbarMarketplace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _astock_stock_locales_basenames_tier1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @astock/stock-locales/basenames/tier1 */ "../stock-locales/src/basenames/tier1.js");
/* harmony import */ var _astock_stock_locales_basenames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @astock/stock-locales/basenames */ "../stock-locales/src/basenames/index.js");
/* harmony import */ var _astock_stock_locales_basenameToCountry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @astock/stock-locales/basenameToCountry */ "../stock-locales/src/basenameToCountry.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _constants_locales__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constants/locales */ "./src/constants/locales.js");
/* harmony import */ var _helpers_linkHelpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../helpers/linkHelpers */ "./src/helpers/linkHelpers.jsx");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../strings */ "./src/strings/index.js");
/* harmony import */ var _stockNavbarMarketplace_strings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./stockNavbarMarketplace.strings */ "./src/components/stockNavbarMarketplace.strings.js");
/* harmony import */ var _profileDropdown_stockNavbarProfileDropdownFranklin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profileDropdown/stockNavbarProfileDropdownFranklin */ "./src/components/profileDropdown/stockNavbarProfileDropdownFranklin.jsx");
/* harmony import */ var _stockNavbarMarketplaceWaffleLeftNavButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./stockNavbarMarketplaceWaffleLeftNavButton */ "./src/components/stockNavbarMarketplaceWaffleLeftNavButton.jsx");
/* harmony import */ var _leftLinksV2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./leftLinksV2 */ "./src/components/leftLinksV2.jsx");




/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2021 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/







// import { useTracking } from 'react-tracking';

















/**
 * Return the 2 code basename, 4 code basename split with an _ or null based on window.location.pathname
 *
 * @param {Object} location
 * @returns {String}
 */
function getRouteBasename(_ref) {
  let {
    location
  } = _ref;
  const {
    pathname
  } = location;
  const urlParts = pathname.split('/');
  const basename = urlParts[1];
  return _astock_stock_locales_basenames__WEBPACK_IMPORTED_MODULE_15__["STOCK_BASENAMES"].has(basename) ? basename : _astock_stock_locales_basenames__WEBPACK_IMPORTED_MODULE_15__["STOCK_BASENAME_DEFAULT"];
}
function getLocale(url) {
  const locale = url.pathname.split('/')[1];
  if (/^[a-z]{2}$/.test(locale)) {
    return locale;
  }
  return 'us';
}

// Replace Authentication using SUSI with IMS Lib V2
async function getUserProfile() {
  return window.adobeIMS.getProfile();
}
function loadIMS(authConfig) {
  window.adobeid = {
    client_id: authConfig.imsClientId,
    scope: authConfig.scopes.join(','),
    locale: authConfig.imsLocale,
    environment: 'stg1',
    useLocalStorage: false,
    autoValidateToken: true,
    redirect_uri: window.location.href,
    api_parameters: {
      authorize: {
        redirect_uri: window.location.href
      }
    },
    onAccessToken(tokenInformation) {},
    onReauthAccessToken(reauthTokenInformation) {},
    onError(error) {},
    onAccessTokenHasExpired() {},
    onReady(appState) {},
    onProfile: profile => {}
  };
}

/**
 * @param {Object} props
 * @returns {ReactElement}
 */
function StockNavbarFranklin(_ref2) {
  let {
    config,
    intl,
    navbarPhoneNumber,
    isNavbarV2Enabled
  } = _ref2;
  // mocking for Franklin
  const tracking = {
    trackEvent: _ref3 => {
      let {
        subtype
      } = _ref3;
      return console.log(`tracking click for ${subtype}`);
    }
  };
  const trackNavbarEvent = subtype => tracking.trackEvent({
    subtype
  });
  const history = {
    createHref: () => '/',
    location: {
      pathname: '/'
    }
  };

  // get locale info
  const {
    pathname
  } = window.location;
  const basename = getRouteBasename(window);

  // get config
  const {
    isGloballySafeCollectionEnabled,
    urls,
    app: {
      environment: env
    },
    authentication: {
      imsClientId
    }
  } = config;

  // get feature flags
  // const {
  //   [isNavbarV2EnabledFF.id]: {
  //     value: isNavbarV2Enabled = false,
  //   } = {},
  //   [isNavbarV2WithoutFreePremiumEnabledFF.id]: {
  //     value: isNavbarV2WithoutFreePremiumEnabled = false,
  //   } = {},
  //   [isThaiAndUkrainianLocalizationEnabledFF.id]: {
  //     value: isThaiAndUkrainianLocalizationEnabled = false,
  //   } = {},
  //   [isIndonesianTurkishHungarianMalaysianEnabledFF.id]: {
  //     value: isIndonesianTurkishHungarianMalaysianEnabled = false,
  //   } = {},
  //   [isSudLicenseHistoryForEnterpriseEnabledFF.id]: {
  //     value: isSudLicenseHistoryForEnterpriseEnabled = false,
  //   } = {},
  // } = useFeatureFlags();

  // console.log(useCoreContext(FEATURE_FLAGS_NAMESPACE), isNavbarV2Enabled)

  // mock out isNavbarV2WithoutFreePremiumEnabled
  const isNavbarV2WithoutFreePremiumEnabled = false;
  const isTier1Country = _astock_stock_locales_basenames_tier1__WEBPACK_IMPORTED_MODULE_14__["default"].has(basename);
  const [isAuthenticated, setIsAuthenticated] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [accessToken, setAccessToken] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const [avatarImageUrl, setAvatarImageUrl] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const [profile, setProfile] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);

  // Initialize IMS
  async function imsInit(adobeIms) {
    await adobeIms.initialize();

    // set IMS window object
    window.adobeIMS = adobeIms;

    // check if signed-in
    if (window.adobeIMS.isSignedInUser()) {
      setIsAuthenticated(true);
      const authToken = window.adobeIMS.getAccessToken();
      setAccessToken(authToken);

      // sanitize URL
      if (window.location.hash.indexOf('access_token') !== -1) {
        window.location.hash = window.location.hash.replace(/access_token[^&]*&?/, '');
      }

      // get profile info
      const userProfile = await getUserProfile();
      setProfile(userProfile);

      // fetch Avatar from Behance API
      fetch(`https://cc-api-behance-stage.adobe.io/v2/users/${userProfile.userId}?api_key=${imsClientId}`).then(res => res.json()).then(response => {
        var _response$user, _response$user$images;
        if (response !== null && response !== void 0 && (_response$user = response.user) !== null && _response$user !== void 0 && (_response$user$images = _response$user.images) !== null && _response$user$images !== void 0 && _response$user$images[115]) {
          setAvatarImageUrl(response.user.images[115]);
        }
      }).catch(error => {/* do nothing */});
    }
  }

  // Initialize IMS Lib V2 if it's not present in the window object already
  if (!window.adobeIMS) {
    // set locale
    const imsLocale = getLocale(window.location);

    // For feature-flagged locales below, we want to create an en_US login url if the flag is not enabled
    // if (!isThaiAndUkrainianLocalizationEnabled && BASENAMES_HK_TH_TW_UA.includes(basename)) {
    //   imsLocale = EN_US;
    // }

    // // For feature-flagged locales below, we want to create an en_US login url if the flag is not enabled
    // if (!isIndonesianTurkishHungarianMalaysianEnabled && BASENAMES_FI_HU_ID_MY_TR.includes(basename)) {
    //   imsLocale = EN_US;
    // }

    // loads window.adobeid data
    loadIMS(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, config.authentication, {
      imsLocale
    }));
    const adobeIms = new _identity_imslib__WEBPACK_IMPORTED_MODULE_8__["AdobeIMS"](window.adobeid);

    // initialize IMS Lib V2
    imsInit(adobeIms);
  }

  /**
   * Sign-in link or Profile Dropdown
   */
  const accountOrSignIn = isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_profileDropdown_stockNavbarProfileDropdownFranklin__WEBPACK_IMPORTED_MODULE_22__["default"], {
    adobeAccountUrl: Object(_intl_adobe_locales__WEBPACK_IMPORTED_MODULE_7__["getLocalizedURL"])(urls.nonLocalized.adobeAccount, intl.locale),
    currentProfileName: profile && profile.name ? profile.name : '',
    email: profile && profile.email ? profile.email : '',
    avatarImageUrl: avatarImageUrl,
    avatarAlt: intl.messages['navbar.avatar.text'],
    trackProfileDropdownClick: trackNavbarEvent,
    isSudLicenseHistoryForEnterpriseEnabled: true
  }) : {
    href: '#',
    text: intl.messages['navbar.auth.signIn'],
    title: intl.messages['navbar.auth.signIn'],
    onClick: () => {
      trackNavbarEvent('sign-in');

      // sign in using ims lib v2
      window.adobeIMS.signIn();
    }
  };
  const leftLinks = Object(_helpers_linkHelpers__WEBPACK_IMPORTED_MODULE_19__["getLeftLinks"])({
    intl,
    history,
    tracking,
    // navbar links for GSC-sensitive countries
    allowList: isGloballySafeCollectionEnabled ? _constants_routes__WEBPACK_IMPORTED_MODULE_17__["GSC_ROUTES"] : [],
    pathname,
    basename
  });
  const removalPriorityLinks = Object(_helpers_linkHelpers__WEBPACK_IMPORTED_MODULE_19__["getRemovalPriorityLinks"])({
    intl,
    history,
    tracking,
    // navbar links for GSC-sensitive countries
    allowList: isGloballySafeCollectionEnabled ? _constants_routes__WEBPACK_IMPORTED_MODULE_17__["GSC_ROUTES"] : [],
    pathname,
    basename
  });
  const rightLinksData = {
    intl,
    history,
    tracking,
    urls,
    isAuthenticated,
    isPersonalProfileActive: false,
    creditCardPurchaseEligibility: {},
    isTeam: false,
    basename
  };
  const rightLinks = Object(_helpers_linkHelpers__WEBPACK_IMPORTED_MODULE_19__["getRightLinks"])(rightLinksData);
  const helpDropdownLinks = Object(_helpers_linkHelpers__WEBPACK_IMPORTED_MODULE_19__["getHelpDropdownLinks"])({
    intl,
    navbarPhoneNumber,
    tracking,
    urls
  });
  console.log(leftLinks, removalPriorityLinks, rightLinks, helpDropdownLinks);
  const moreNavLinkObject = {
    text: intl.messages['navbar.leftlinks.more.text'],
    dataTPrefix: 'more',
    onClick: () => trackNavbarEvent('more')
  };

  // imsData object for Waffle Nav
  const imsData = {
    accessToken,
    adobeId: profile && profile.userId ? profile.userId : '',
    countryCode: _astock_stock_locales_basenameToCountry__WEBPACK_IMPORTED_MODULE_16__["default"].get(basename)
  };
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_astock_styled_react_components_navbarMarketplace__WEBPACK_IMPORTED_MODULE_13___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    accountOrSignIn: accountOrSignIn,
    adobeLogoLink: {
      href: Object(_intl_adobe_locales__WEBPACK_IMPORTED_MODULE_7__["getLocalizedURL"])(urls.nonLocalized.adobeDotCom, intl.locale),
      title: intl.messages['navbar.adobeLogoLink.title']
    },
    onAdobeLogoIconClick: () => trackNavbarEvent('adobe-logo-icon'),
    stockLogoLink: {
      href: '/',
      title: intl.messages['navbar.stockLogo.link.ariaLabel']
    },
    onStockLogoLinkClick: () => {
      trackNavbarEvent('stock-logo');
    },
    isTier1Country: isTier1Country,
    leftLinks: leftLinks
  }, (isNavbarV2Enabled || isNavbarV2WithoutFreePremiumEnabled) && {
    LeftLinksV2: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_leftLinksV2__WEBPACK_IMPORTED_MODULE_24__["default"], {
      intl: intl,
      trackNavbarMarketplaceClick: trackNavbarEvent,
      isNavbarV2WithoutFreePremiumEnabled: isNavbarV2WithoutFreePremiumEnabled,
      basename: basename
    })
  }, {
    rightLinks: rightLinks,
    helpDropdownLinks: helpDropdownLinks,
    removalPriorityLinks: removalPriorityLinks,
    moreNavLinkObject: moreNavLinkObject,
    locale: intl.locale,
    isGloballySafeCollectionEnabled: isGloballySafeCollectionEnabled,
    defaultEntitlementQuota: [],
    WaffleLeftNav: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_stockNavbarMarketplaceWaffleLeftNavButton__WEBPACK_IMPORTED_MODULE_23__["default"], {
      intl: intl,
      isGloballySafeCollectionEnabled: isGloballySafeCollectionEnabled,
      urls: urls,
      isAuthenticated: isAuthenticated,
      isPersonalProfileActive: false,
      creditCardPurchaseEligibility: {},
      isTeam: false,
      env: env,
      imsClientId: imsClientId,
      trackNavbarMarketplaceClick: trackNavbarEvent,
      placeholderIcon: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_react_react_spectrum_Icon_Apps__WEBPACK_IMPORTED_MODULE_9___default.a, {
        size: "S"
      }),
      imsData: imsData,
      isNavbarV2Enabled: isNavbarV2Enabled || isNavbarV2WithoutFreePremiumEnabled
    }),
    isHomepageActive: pathname === '/'
  })));
}
const configPropType = Object(prop_types__WEBPACK_IMPORTED_MODULE_6__["shape"])({
  isGloballySafeCollectionEnabled: prop_types__WEBPACK_IMPORTED_MODULE_6__["bool"].isRequired
});
StockNavbarFranklin.defaultProps = {
  navbarPhoneNumber: '',
  isNavbarV2Enabled: false
};
StockNavbarFranklin.propTypes = {
  config: configPropType.isRequired,
  intl: Object(prop_types__WEBPACK_IMPORTED_MODULE_6__["shape"])(_astock_core_react_i18n_utils__WEBPACK_IMPORTED_MODULE_10__["IntlPropType"]).isRequired,
  navbarPhoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_6__["string"],
  isNavbarV2Enabled: prop_types__WEBPACK_IMPORTED_MODULE_6__["bool"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(StockNavbarFranklin));

/***/ })

}]);