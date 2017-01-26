'use strict'

var client = require('cheerio-httpcli');

// Googleで「node.js」について検索する。
client.fetch('http://gsacademy.tokyo/mentor/', function (err, $, res) {
//   // レスポンスヘッダを参照
//   console.log(res.headers);

//   // HTMLタイトルを表示
//   console.log($('title').text());

//   // リンク一覧を表示
//   $('a').each(function (idx) {
//     console.log($(this).attr('href'));
//   });

  // メンター一覧を表示
  $('.pri').each(function (idx) {
      
      let outputText = '';
      let searchResult1 = $(this).text().search(/（/);
      let searchResult2 = $(this).text().indexOf('(');
      if ( searchResult1 !== -1){
        //   if （ found
        outputText = $(this).text().substring(0,searchResult1);
      
      } else if (searchResult2 !== -1){
          outputText = $(this).text().substring(0,searchResult2);
      }else {
          outputText = $(this).text();
      }
      
      console.log(outputText);
  });
});