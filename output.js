//Mon Jan 12 2026 07:57:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  const _0x1a97d0 = document.getElementById("system-type");
  if (_0x1a97d0) {
    const _0x5df11a = _0x1a97d0.textContent;
    _0x5df11a == "development" ? window.systemEnv = {
      VITE_APP_HTTPS: "1",
      VITE_APP_BASE_API: "/space/dev/dev-api",
      VITE_APP_SPACE_URL_H5: "/mspace/dev/",
      VITE_APP_AI_SPACE: "/aiSpace/dev/",
      VITE_APP_MGT_API: "/dev-api",
      VITE_APP_URL: "https://data.pthink.com.cn",
      VITE_APP_DATAROOM_URL: "https://data.pthink.com.cn/dev/dataviz/",
      VITE_APP_DATA_FACTORY_URL: "https://data.pthink.com.cn/dev/dashboard/",
      VITE_APP_SUPERSET_URL: "https://chart.pthink.com.cn",
      VITE_MGT_URL: "https://data.pthink.com.cn"
    } : window.systemEnv = {
      VITE_APP_HTTPS: "1",
      VITE_APP_BASE_API: "/space/xpcDemo/prod-api",
      VITE_APP_SPACE_URL_H5: "/",
      VITE_APP_AI_SPACE: "/aiSpace/xpcDemo/",
      VITE_APP_MGT_API: "/prod-api",
      VITE_APP_URL: "https://data.pthink.com.cn",
      VITE_APP_DATAROOM_URL: "https://data.pthink.com.cn/test/dataviz/",
      VITE_APP_DATA_FACTORY_URL: "https://data.pthink.com.cn/test/dashboard/",
      VITE_APP_SUPERSET_URL: "https://chart.pthink.com.cn",
      VITE_MGT_URL: "https://data.pthink.com.cn"
    };
    if (window.systemEnv && window.systemEnv.VITE_APP_HTTPS == "1") {
      const _0x4776c8 = document.createElement("meta");
      _0x4776c8.httpEquiv = "Content-Security-Policy";
      _0x4776c8.content = "upgrade-insecure-requests";
      document.head.appendChild(_0x4776c8);
    }
    _0x1a97d0.remove();
  }
})();