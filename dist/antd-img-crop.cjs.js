'use strict';



function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

var _regeneratorRuntime = require('@babel/runtime/regenerator');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutPropertiesLoose = require('@babel/runtime/helpers/objectWithoutPropertiesLoose');
var React = require('react');
var t = require('prop-types');
var Cropper = require('react-easy-crop');
var LocaleReceiver = require('antd/lib/locale-provider/LocaleReceiver');
var Modal = require('antd/lib/modal');
var Slider = require('antd/lib/slider');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutPropertiesLoose__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var t__default = /*#__PURE__*/_interopDefaultLegacy(t);
var Cropper__default = /*#__PURE__*/_interopDefaultLegacy(Cropper);
var LocaleReceiver__default = /*#__PURE__*/_interopDefaultLegacy(LocaleReceiver);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);
var Slider__default = /*#__PURE__*/_interopDefaultLegacy(Slider);

__$styleInject(".antd-img-crop-modal .ant-modal-body {\n  padding-bottom: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-container {\n  position: relative;\n  width: 100%;\n  height: 40vh;\n  margin-bottom: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-control {\n  display: flex;\n  align-items: center;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.antd-img-crop-modal .antd-img-crop-control button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  font-style: normal;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n}\n.antd-img-crop-modal .antd-img-crop-control button[disabled] {\n  cursor: default;\n}\n.antd-img-crop-modal .antd-img-crop-control.zoom button {\n  font-size: 18px;\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button {\n  font-size: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button:first-of-type {\n  transform: rotate(-20deg);\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button:last-of-type {\n  transform: rotate(20deg);\n}\n.antd-img-crop-modal .antd-img-crop-control .ant-slider {\n  flex: 1;\n  margin: 0 8px;\n}\n");

var pkg = 'antd-img-crop';

var noop = function noop() {};

var MEDIA_CLASS = pkg + "-media";
var ZOOM_STEP = 0.1;
var MIN_ROTATE = 0;
var MAX_ROTATE = 360;
var ROTATE_STEP = 1;
var EasyCrop = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var src = props.src,
      aspect = props.aspect,
      shape = props.shape,
      grid = props.grid,
      hasZoom = props.hasZoom,
      zoomVal = props.zoomVal,
      rotateVal = props.rotateVal,
      setZoomVal = props.setZoomVal,
      setRotateVal = props.setRotateVal,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      onComplete = props.onComplete;

  var _useState = React.useState({
    x: 0,
    y: 0
  }),
      crop = _useState[0],
      setCrop = _useState[1];

  var onCropComplete = React.useCallback(function (croppedArea, croppedAreaPixels) {
    onComplete(croppedAreaPixels);
  }, [onComplete]);
  return /*#__PURE__*/React__default['default'].createElement(Cropper__default['default'], {
    ref: ref,
    image: src,
    crop: crop,
    onCropChange: setCrop,
    aspect: aspect,
    cropShape: shape,
    showGrid: grid,
    zoomWithScroll: hasZoom,
    zoom: zoomVal,
    rotation: rotateVal,
    onZoomChange: setZoomVal,
    restrictPosition: false,
    onRotationChange: setRotateVal,
    minZoom: minZoom,
    maxZoom: maxZoom,
    onCropComplete: onCropComplete,
    classes: {
      containerClassName: pkg + "-container",
      mediaClassName: MEDIA_CLASS
    }
  });
});
EasyCrop.propTypes = {
  src: t__default['default'].string,
  aspect: t__default['default'].number,
  shape: t__default['default'].string,
  grid: t__default['default'].bool,
  hasZoom: t__default['default'].bool,
  zoomVal: t__default['default'].number,
  rotateVal: t__default['default'].number,
  setZoomVal: t__default['default'].func,
  setRotateVal: t__default['default'].func,
  minZoom: t__default['default'].number,
  maxZoom: t__default['default'].number,
  onComplete: t__default['default'].func
};
var ImgCrop = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var aspect = props.aspect,
      shape = props.shape,
      grid = props.grid,
      zoom = props.zoom,
      rotate = props.rotate,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      modalTitle = props.modalTitle,
      modalWidth = props.modalWidth,
      modalOk = props.modalOk,
      modalCancel = props.modalCancel,
      beforeCrop = props.beforeCrop,
      children = props.children;
  var hasZoom = zoom === true;
  var hasRotate = rotate === true;

  var _useState2 = React.useState(''),
      src = _useState2[0],
      setSrc = _useState2[1];

  var _useState3 = React.useState(1),
      zoomVal = _useState3[0],
      setZoomVal = _useState3[1];

  var _useState4 = React.useState(0),
      rotateVal = _useState4[0],
      setRotateVal = _useState4[1];

  var beforeUploadRef = React.useRef();
  var fileRef = React.useRef();
  var resolveRef = React.useRef(noop);
  var rejectRef = React.useRef(noop);
  var cropPixelsRef = React.useRef();
  /**
   * Upload
   */

  var renderUpload = React.useCallback(function () {
    var upload = Array.isArray(children) ? children[0] : children;

    var _upload$props = upload.props,
        beforeUpload = _upload$props.beforeUpload,
        accept = _upload$props.accept,
        restUploadProps = _objectWithoutPropertiesLoose__default['default'](_upload$props, ["beforeUpload", "accept"]);

    beforeUploadRef.current = beforeUpload;
    return _extends__default['default']({}, upload, {
      props: _extends__default['default']({}, restUploadProps, {
        accept: accept || 'image/*',
        beforeUpload: function beforeUpload(file, fileList) {
          return new Promise(function (resolve, reject) {
            if (beforeCrop && !beforeCrop(file, fileList)) {
              reject();
              return;
            }

            fileRef.current = file;
            resolveRef.current = resolve;
            rejectRef.current = reject;
            var reader = new FileReader();
            reader.addEventListener('load', function () {
              setSrc(reader.result);
            });
            reader.readAsDataURL(file);
          });
        }
      })
    });
  }, [beforeCrop, children]);
  /**
   * EasyCrop
   */

  var onComplete = React.useCallback(function (croppedAreaPixels) {
    cropPixelsRef.current = croppedAreaPixels;
  }, []);
  /**
   * Controls
   */

  var isMinZoom = zoomVal - ZOOM_STEP < minZoom;
  var isMaxZoom = zoomVal + ZOOM_STEP > maxZoom;
  var isMinRotate = rotateVal === MIN_ROTATE;
  var isMaxRotate = rotateVal === MAX_ROTATE;
  var subZoomVal = React.useCallback(function () {
    if (!isMinZoom) setZoomVal(zoomVal - ZOOM_STEP);
  }, [isMinZoom, zoomVal]);
  var addZoomVal = React.useCallback(function () {
    if (!isMaxZoom) setZoomVal(zoomVal + ZOOM_STEP);
  }, [isMaxZoom, zoomVal]);
  var subRotateVal = React.useCallback(function () {
    if (!isMinRotate) setRotateVal(rotateVal - ROTATE_STEP);
  }, [isMinRotate, rotateVal]);
  var addRotateVal = React.useCallback(function () {
    if (!isMaxRotate) setRotateVal(rotateVal + ROTATE_STEP);
  }, [isMaxRotate, rotateVal]);
  /**
   * Modal
   */

  var modalProps = React.useMemo(function () {
    var obj = {
      width: modalWidth,
      okText: modalOk,
      cancelText: modalCancel
    };
    Object.keys(obj).forEach(function (key) {
      if (!obj[key]) delete obj[key];
    });
    return obj;
  }, [modalCancel, modalOk, modalWidth]);
  var onClose = React.useCallback(function () {
    setSrc('');
    setZoomVal(1);
    setRotateVal(0);
  }, []);
  var onOk = React.useCallback( /*#__PURE__*/_asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2() {
    var naturalImg, naturalWidth, naturalHeight, canvas, ctx, maxLen, halfMax, left, top, maxImgData, _cropPixelsRef$curren, width, height, x, y, _fileRef$current, type, name, uid;

    return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            onClose();
            naturalImg = document.querySelector("." + MEDIA_CLASS);
            naturalWidth = naturalImg.naturalWidth, naturalHeight = naturalImg.naturalHeight;
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d'); // create a max canvas to cover the source image after rotated

            maxLen = Math.sqrt(Math.pow(naturalWidth, 2) + Math.pow(naturalHeight, 2));
            canvas.width = maxLen;
            canvas.height = maxLen; // rotate the image

            if (hasRotate && rotateVal > 0 && rotateVal < 360) {
              halfMax = maxLen / 2;
              ctx.translate(halfMax, halfMax);
              ctx.rotate(rotateVal * Math.PI / 180);
              ctx.translate(-halfMax, -halfMax);
            }

            ctx.fillStyle = 'rgb(255, 255, 255)';
            ctx.fillRect(0, 0, canvas.width, canvas.height); // draw the source image in the center of the max canvas

            left = (maxLen - naturalWidth) / 2;
            top = (maxLen - naturalHeight) / 2;
            ctx.drawImage(naturalImg, left, top); // shrink the max canvas to the crop area size, then align two center points

            maxImgData = ctx.getImageData(0, 0, maxLen, maxLen);
            _cropPixelsRef$curren = cropPixelsRef.current, width = _cropPixelsRef$curren.width, height = _cropPixelsRef$curren.height, x = _cropPixelsRef$curren.x, y = _cropPixelsRef$curren.y;
            canvas.width = width;
            canvas.height = height;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.putImageData(maxImgData, Math.round(-left - x), Math.round(-top - y)); // get the new image

            _fileRef$current = fileRef.current, type = _fileRef$current.type, name = _fileRef$current.name, uid = _fileRef$current.uid;
            canvas.toBlob( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(blob) {
                var newFile, res, passedFile, _type;

                return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        newFile = new File([blob], name, {
                          type: type
                        });
                        newFile.uid = uid;

                        if (!(typeof beforeUploadRef.current !== 'function')) {
                          _context.next = 4;
                          break;
                        }

                        return _context.abrupt("return", resolveRef.current(newFile));

                      case 4:
                        res = beforeUploadRef.current(newFile, [newFile]);

                        if (!(typeof res !== 'boolean' && !res)) {
                          _context.next = 8;
                          break;
                        }

                        console.error('beforeUpload must return a boolean or Promise');
                        return _context.abrupt("return");

                      case 8:
                        if (!(res === true)) {
                          _context.next = 10;
                          break;
                        }

                        return _context.abrupt("return", resolveRef.current(newFile));

                      case 10:
                        if (!(res === false)) {
                          _context.next = 12;
                          break;
                        }

                        return _context.abrupt("return", rejectRef.current('not upload'));

                      case 12:
                        if (!(res && typeof res.then === 'function')) {
                          _context.next = 25;
                          break;
                        }

                        _context.prev = 13;
                        _context.next = 16;
                        return res;

                      case 16:
                        passedFile = _context.sent;
                        _type = Object.prototype.toString.call(passedFile);
                        if (_type === '[object File]' || _type === '[object Blob]') newFile = passedFile;
                        resolveRef.current(newFile);
                        _context.next = 25;
                        break;

                      case 22:
                        _context.prev = 22;
                        _context.t0 = _context["catch"](13);
                        rejectRef.current(_context.t0);

                      case 25:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[13, 22]]);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }(), type, 0.4);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [hasRotate, onClose, rotateVal]);

  var renderComponent = function renderComponent(titleOfModal) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, renderUpload(), src && /*#__PURE__*/React__default['default'].createElement(Modal__default['default'], Object.assign({
      visible: true,
      wrapClassName: pkg + "-modal",
      title: titleOfModal,
      onOk: onOk,
      onCancel: onClose,
      maskClosable: false,
      destroyOnClose: true
    }, modalProps), /*#__PURE__*/React__default['default'].createElement(EasyCrop, {
      ref: ref,
      src: src,
      aspect: aspect,
      shape: shape,
      grid: grid,
      hasZoom: hasZoom,
      zoomVal: zoomVal,
      rotateVal: rotateVal,
      setZoomVal: setZoomVal,
      setRotateVal: setRotateVal,
      minZoom: minZoom,
      maxZoom: maxZoom,
      onComplete: onComplete
    }), hasZoom && /*#__PURE__*/React__default['default'].createElement("div", {
      className: pkg + "-control zoom"
    }, /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: subZoomVal,
      disabled: isMinZoom
    }, "\uFF0D"), /*#__PURE__*/React__default['default'].createElement(Slider__default['default'], {
      min: minZoom,
      max: maxZoom,
      step: ZOOM_STEP,
      value: zoomVal,
      onChange: setZoomVal
    }), /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: addZoomVal,
      disabled: isMaxZoom
    }, "\uFF0B")), hasRotate && /*#__PURE__*/React__default['default'].createElement("div", {
      className: pkg + "-control rotate"
    }, /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: subRotateVal,
      disabled: isMinRotate
    }, "\u21BA"), /*#__PURE__*/React__default['default'].createElement(Slider__default['default'], {
      min: MIN_ROTATE,
      max: MAX_ROTATE,
      step: ROTATE_STEP,
      value: rotateVal,
      onChange: setRotateVal
    }), /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: addRotateVal,
      disabled: isMaxRotate
    }, "\u21BB"))));
  };

  if (modalTitle) return renderComponent(modalTitle);
  return /*#__PURE__*/React__default['default'].createElement(LocaleReceiver__default['default'], null, function (locale, localeCode) {
    return renderComponent(localeCode === 'zh-cn' ? '编辑图片' : 'Edit image');
  });
});
ImgCrop.propTypes = {
  aspect: t__default['default'].number,
  shape: t__default['default'].oneOf(['rect', 'round']),
  grid: t__default['default'].bool,
  zoom: t__default['default'].bool,
  rotate: t__default['default'].bool,
  minZoom: t__default['default'].number,
  maxZoom: t__default['default'].number,
  modalTitle: t__default['default'].string,
  modalWidth: t__default['default'].oneOfType([t__default['default'].number, t__default['default'].string]),
  modalOk: t__default['default'].string,
  modalCancel: t__default['default'].string,
  beforeCrop: t__default['default'].func,
  children: t__default['default'].node
};
ImgCrop.defaultProps = {
  aspect: 1,
  shape: 'rect',
  grid: false,
  zoom: true,
  rotate: false,
  minZoom: 1,
  maxZoom: 3
};

module.exports = ImgCrop;
