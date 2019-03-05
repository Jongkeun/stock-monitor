import syncRequest from "sync-request";
import cheerio from "cheerio";

var getCodeUrl = "http://www.ksfc.co.kr/services/loan/avg/popup/codes.do?findStr=";
var url = 'https://finance.naver.com/item/main.nhn?code=';

export function getContent(name) {
  return getCode(name)
  .then(getPrice);
}

function getCode(name) {
  let response = syncRequest("GET", getCodeUrl + name);
  let page = cheerio.load(response.body);
  return new Promise(function (resolve, reject) {
    let val = "";
    page('body > div.popWrap > div > div > div.mt20 > div.scrollArea.mt10 > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').each(function(){
      val = page(this).text();
    });
    resolve(val);
  });
}

function getPrice(code) {
  console.log(code)
  let response = syncRequest("GET", url + code);
  var page = cheerio.load(response.body);
  return new Promise(function (resolve, reject) {
    let val = "";
    page('#chart_area > div.rate_info > div').each(function(){
      val = page(this).text();
    });
    resolve(val);
  });
}
