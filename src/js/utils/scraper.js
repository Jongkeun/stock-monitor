import syncRequest from "sync-request";
import cheerio from "cheerio";

var url = 'https://finance.naver.com/search/searchList.nhn?query=휴네시온';
//var url = 'http://blog.saltfactory.net';
export function getContent() {
  let response = syncRequest("GET", url);
  var page = cheerio.load(response.body);
  return Promise.resolve(page).then((page) => {
      let val = "";
      page('#content > div.section_search > table > tbody > tr:nth-child(1) > td:nth-child(2)').each(function(){
        val = page(this).text();
      });
      return val;
    });
}
