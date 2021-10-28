// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'ImageProce... Remove this comment to see the full error message
const ImageProcessor = require('./image-processor.js')
const ImageResizer = require('./image-resizer.js')

module.exports = {
  ImageProcessor: new ImageProcessor(),
  ImageResizer: new ImageResizer(),
  Logger: function (msg: any) {
    console.log(msg)
  }
}
