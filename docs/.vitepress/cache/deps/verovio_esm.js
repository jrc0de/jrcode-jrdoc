import "./chunk-JVWSFFO4.js";

// node_modules/verovio/dist/verovio.mjs
var createEmscriptenProxy = (VerovioModule) => {
  return new Proxy({}, {
    get: (target, method) => {
      return (...args) => {
        return getToolkitFunction(VerovioModule, method)(...args);
      };
    }
  });
};
function getToolkitFunction(VerovioModule, method) {
  const mapping = {};
  mapping.constructor = VerovioModule.cwrap("vrvToolkit_constructor", "number", []);
  mapping.destructor = VerovioModule.cwrap("vrvToolkit_destructor", null, ["number"]);
  mapping.edit = VerovioModule.cwrap("vrvToolkit_edit", "number", ["number", "string"]);
  mapping.editInfo = VerovioModule.cwrap("vrvToolkit_editInfo", "string", ["number"]);
  mapping.getAvailableOptions = VerovioModule.cwrap("vrvToolkit_getAvailableOptions", "string", ["number"]);
  mapping.getDefaultOptions = VerovioModule.cwrap("vrvToolkit_getDefaultOptions", "string", ["number"]);
  mapping.getDescriptiveFeatures = VerovioModule.cwrap("vrvToolkit_getDescriptiveFeatures", "string", ["number", "string"]);
  mapping.getElementAttr = VerovioModule.cwrap("vrvToolkit_getElementAttr", "string", ["number", "string"]);
  mapping.getElementsAtTime = VerovioModule.cwrap("vrvToolkit_getElementsAtTime", "string", ["number", "number"]);
  mapping.getExpansionIdsForElement = VerovioModule.cwrap("vrvToolkit_getExpansionIdsForElement", "string", ["number", "string"]);
  mapping.getHumdrum = VerovioModule.cwrap("vrvToolkit_getHumdrum", "string", ["number"]);
  mapping.convertMEIToHumdrum = VerovioModule.cwrap("vrvToolkit_convertMEIToHumdrum", "string", ["number", "string"]);
  mapping.convertHumdrumToHumdrum = VerovioModule.cwrap("vrvToolkit_convertHumdrumToHumdrum", "string", ["number", "string"]);
  mapping.convertHumdrumToMIDI = VerovioModule.cwrap("vrvToolkit_convertHumdrumToMIDI", "string", ["number", "string"]);
  mapping.getLog = VerovioModule.cwrap("vrvToolkit_getLog", "string", ["number"]);
  mapping.getMEI = VerovioModule.cwrap("vrvToolkit_getMEI", "string", ["number", "string"]);
  mapping.getNotatedIdForElement = VerovioModule.cwrap("vrvToolkit_getNotatedIdForElement", "string", ["number", "string"]);
  mapping.getOptions = VerovioModule.cwrap("vrvToolkit_getOptions", "string", ["number"]);
  mapping.getPageCount = VerovioModule.cwrap("vrvToolkit_getPageCount", "number", ["number"]);
  mapping.getPageWithElement = VerovioModule.cwrap("vrvToolkit_getPageWithElement", "number", ["number", "string"]);
  mapping.getTimeForElement = VerovioModule.cwrap("vrvToolkit_getTimeForElement", "number", ["number", "string"]);
  mapping.getTimesForElement = VerovioModule.cwrap("vrvToolkit_getTimesForElement", "string", ["number", "string"]);
  mapping.getMIDIValuesForElement = VerovioModule.cwrap("vrvToolkit_getMIDIValuesForElement", "string", ["number", "string"]);
  mapping.getVersion = VerovioModule.cwrap("vrvToolkit_getVersion", "string", ["number"]);
  mapping.loadData = VerovioModule.cwrap("vrvToolkit_loadData", "number", ["number", "string"]);
  mapping.loadZipDataBase64 = VerovioModule.cwrap("vrvToolkit_loadZipDataBase64", "number", ["number", "string"]);
  mapping.loadZipDataBuffer = VerovioModule.cwrap("vrvToolkit_loadZipDataBuffer", "number", ["number", "number", "number"]);
  mapping.redoLayout = VerovioModule.cwrap("vrvToolkit_redoLayout", null, ["number", "string"]);
  mapping.redoPagePitchPosLayout = VerovioModule.cwrap("vrvToolkit_redoPagePitchPosLayout", null, ["number"]);
  mapping.renderData = VerovioModule.cwrap("vrvToolkit_renderData", "string", ["number", "string", "string"]);
  mapping.renderToExpansionMap = VerovioModule.cwrap("vrvToolkit_renderToExpansionMap", "string", ["number"]);
  mapping.renderToMIDI = VerovioModule.cwrap("vrvToolkit_renderToMIDI", "string", ["number"]);
  mapping.renderToPAE = VerovioModule.cwrap("vrvToolkit_renderToPAE", "string", ["number"]);
  mapping.renderToSVG = VerovioModule.cwrap("vrvToolkit_renderToSVG", "string", ["number", "number", "number"]);
  mapping.renderToTimemap = VerovioModule.cwrap("vrvToolkit_renderToTimemap", "string", ["number", "string"]);
  mapping.resetOptions = VerovioModule.cwrap("vrvToolkit_resetOptions", null, ["number"]);
  mapping.resetXmlIdSeed = VerovioModule.cwrap("vrvToolkit_resetXmlIdSeed", null, ["number", "number"]);
  mapping.select = VerovioModule.cwrap("vrvToolkit_select", "number", ["number", "string"]);
  mapping.setOptions = VerovioModule.cwrap("vrvToolkit_setOptions", null, ["number", "string"]);
  mapping.validatePAE = VerovioModule.cwrap("vrvToolkit_validatePAE", "string", ["number", "string"]);
  return mapping[method];
}
var VerovioToolkit = class _VerovioToolkit {
  constructor(VerovioModule) {
    this.VerovioModule = VerovioModule;
    if (!this.VerovioModule) {
      throw new Error("VerovioToolkit needs VerovioModule passed as argument to the constructor.");
    }
    this.proxy = createEmscriptenProxy(this.VerovioModule);
    this.ptr = this.proxy.constructor();
    _VerovioToolkit.instances.push(this);
  }
  destroy() {
    _VerovioToolkit.instances.splice(_VerovioToolkit.instances.findIndex((i) => i.ptr === this.ptr), 1);
    this.proxy.destructor(this.ptr);
  }
  edit(editorAction) {
    return this.proxy.edit(this.ptr, JSON.stringify(editorAction));
  }
  editInfo() {
    return JSON.parse(this.proxy.editInfo(this.ptr));
  }
  getAvailableOptions() {
    return JSON.parse(this.proxy.getAvailableOptions(this.ptr));
  }
  getDefaultOptions() {
    return JSON.parse(this.proxy.getDefaultOptions(this.ptr));
  }
  getDescriptiveFeatures(options) {
    return JSON.parse(this.proxy.getDescriptiveFeatures(this.ptr, JSON.stringify(options)));
  }
  getElementAttr(xmlId) {
    return JSON.parse(this.proxy.getElementAttr(this.ptr, xmlId));
  }
  getElementsAtTime(millisec) {
    return JSON.parse(this.proxy.getElementsAtTime(this.ptr, millisec));
  }
  getExpansionIdsForElement(xmlId) {
    return JSON.parse(this.proxy.getExpansionIdsForElement(this.ptr, xmlId));
  }
  getHumdrum() {
    return this.proxy.getHumdrum(this.ptr);
  }
  convertHumdrumToHumdrum(data) {
    return this.proxy.convertHumdrumToHumdrum(this.ptr, data);
  }
  convertHumdrumToMIDI(data) {
    return this.proxy.convertHumdrumToMIDI(this.ptr, data);
  }
  convertMEIToHumdrum(data) {
    return this.proxy.convertMEIToHumdrum(this.ptr, data);
  }
  getLog() {
    return this.proxy.getLog(this.ptr);
  }
  getMEI(options = {}) {
    return this.proxy.getMEI(this.ptr, JSON.stringify(options));
  }
  getMIDIValuesForElement(xmlId) {
    return JSON.parse(this.proxy.getMIDIValuesForElement(this.ptr, xmlId));
  }
  getNotatedIdForElement(xmlId) {
    return this.proxy.getNotatedIdForElement(this.ptr, xmlId);
  }
  getOptions(defaultValues) {
    if (defaultValues === true) {
      console.warn("This function (with 'true' parameter) is deprecated. Use getDefaultOptions() instead.");
      return JSON.parse(this.proxy.getDefaultOptions(this.ptr));
    } else if (defaultValues === false) {
      console.warn("This function (with 'false' parameter) is deprecated. Use getOptions() instead.");
      return JSON.parse(this.proxy.getOptions(this.ptr));
    } else {
      return JSON.parse(this.proxy.getOptions(this.ptr));
    }
  }
  getPageCount() {
    return this.proxy.getPageCount(this.ptr);
  }
  getPageWithElement(xmlId) {
    return this.proxy.getPageWithElement(this.ptr, xmlId);
  }
  getTimeForElement(xmlId) {
    return this.proxy.getTimeForElement(this.ptr, xmlId);
  }
  getTimesForElement(xmlId) {
    return JSON.parse(this.proxy.getTimesForElement(this.ptr, xmlId));
  }
  getVersion() {
    return this.proxy.getVersion(this.ptr);
  }
  loadData(data) {
    return this.proxy.loadData(this.ptr, data);
  }
  loadZipDataBase64(data) {
    return this.proxy.loadZipDataBase64(this.ptr, data);
  }
  loadZipDataBuffer(data) {
    if (!(data instanceof ArrayBuffer)) {
      console.error("Parameter for loadZipDataBuffer has to be of type ArrayBuffer");
      return false;
    }
    var dataArray = new Uint8Array(data);
    var dataSize = dataArray.length * dataArray.BYTES_PER_ELEMENT;
    var dataPtr = this.VerovioModule._malloc(dataSize);
    this.VerovioModule.HEAPU8.set(dataArray, dataPtr);
    var res = this.proxy.loadZipDataBuffer(this.ptr, dataPtr, dataSize);
    this.VerovioModule._free(dataPtr);
    return res;
  }
  redoLayout(options = {}) {
    this.proxy.redoLayout(this.ptr, JSON.stringify(options));
  }
  redoPagePitchPosLayout() {
    this.proxy.redoPagePitchPosLayout(this.ptr);
  }
  renderData(data, options) {
    return this.proxy.renderData(this.ptr, data, JSON.stringify(options));
  }
  renderToExpansionMap() {
    return JSON.parse(this.proxy.renderToExpansionMap(this.ptr));
  }
  renderToMIDI() {
    return this.proxy.renderToMIDI(this.ptr);
  }
  renderToPAE() {
    return this.proxy.renderToPAE(this.ptr);
  }
  renderToSVG(pageNo = 1, xmlDeclaration = false) {
    return this.proxy.renderToSVG(this.ptr, pageNo, xmlDeclaration);
  }
  renderToTimemap(options = {}) {
    return JSON.parse(this.proxy.renderToTimemap(this.ptr, JSON.stringify(options)));
  }
  resetOptions() {
    this.proxy.resetOptions(this.ptr);
  }
  resetXmlIdSeed(seed) {
    return this.proxy.resetXmlIdSeed(this.ptr, seed);
  }
  select(selection) {
    return this.proxy.select(this.ptr, JSON.stringify(selection));
  }
  setOptions(options) {
    options = this.preprocessOptions(options);
    return this.proxy.setOptions(this.ptr, JSON.stringify(options));
  }
  validatePAE(data) {
    if (data instanceof Object) {
      data = JSON.stringify(data);
    }
    return JSON.parse(this.proxy.validatePAE(this.ptr, data));
  }
  preprocessOptions(options) {
    if (!options.hasOwnProperty("fontAddCustom")) {
      return options;
    }
    const files = options["fontAddCustom"];
    let filesInBase64 = [];
    for (const file of files) {
      if (!/^https?:\/\//.test(file)) {
        filesInBase64.push(file);
        continue;
      }
      const request = new XMLHttpRequest();
      request.open("GET", file, false);
      request.send(null);
      if (request.status === 200) {
        filesInBase64.push(request.responseText);
      } else {
        console.error(`${file} could not be retrieved`);
      }
    }
    options["fontAddCustom"] = filesInBase64;
    return options;
  }
};
VerovioToolkit.instances = [];
var LOG_OFF = 0;
var LOG_ERROR = 1;
var LOG_WARNING = 2;
var LOG_INFO = 3;
var LOG_DEBUG = 4;
function enableLog(level, VerovioModule) {
  return VerovioModule.cwrap("enableLog", null, ["number"])(level);
}
function enableLogToBuffer(value, VerovioModule) {
  return VerovioModule.cwrap("enableLogToBuffer", null, ["number"])(value);
}
export {
  LOG_DEBUG,
  LOG_ERROR,
  LOG_INFO,
  LOG_OFF,
  LOG_WARNING,
  VerovioToolkit,
  enableLog,
  enableLogToBuffer
};
//# sourceMappingURL=verovio_esm.js.map
