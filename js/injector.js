const desmos_api = document.createElement("script");
const api_key = "6b8d8b6869b140c18f9ceeb722d553b6";
desmos_api.setAttribute("type", "text/javascript")
desmos_api.setAttribute("src", `https://www.desmos.com/api/v1.11/calculator.js?apiKey=${api_key}&lang=zh-CN`);

document.head.appendChild(desmos_api);
