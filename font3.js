var Fontmin = require('fontmin');

var fontmin = [];
var fontType = ['ttf', 'eot', 'svg', 'woff'];

for(var i = 0; i < fontType.length; i++){
  fontmin[i] = new Fontmin();
  fontmin[i].src('./node_modules/font-awesome/fonts/fontawesome-webfont.' + fontType[i])
    .use(
      Fontmin.glyph({
        text: '\uf1d7\uf283\uf217\uf0b0\uf07a\uf077\uf078\uf053\uf054\uf1e0\uf002\uf00d\uf10b\uf110\uf009\uf015\uf03a\uf007\uf0d7\uf0d8\uf067\uf107\uf104\uf105\uf106\uf062\uf063\uf058\uf068\uf08a\uf004\uf005\uf006\uf040\uf1f8\uf069\uf071\uf00c\uf059\uf044\uf0f6\uf1c0\uf0c0\uf0c5\uf0c1\uf029\uf013\uf045\uf057\uf1c5\uf00e\uf010\uf06b\uf09d\uf1ea\uf084\uf02d\uf1db\uf05a'
      })
    )
    .dest('./dist/css/fonts3');

  fontmin[i].run(function (err, files) {
    if (err) { console.log('extract fonts err.'); throw err; }
    console.log('extract success!');
  });
}
