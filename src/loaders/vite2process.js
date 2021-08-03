module.exports = function (source) {
  return source.replace(new RegExp('import.meta', 'g'), 'process')
}
