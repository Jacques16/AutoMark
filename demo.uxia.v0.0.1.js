/*
 *
 * demo.uxia.js v0.0.1
 * (c) copyright 2023-2024 RAKOTOMAMONJY Jacques Lyard
 * all right reserved
 *
 */
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

(function (global, factory, construct) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Uxia = factory(construct);
})(this, function () {
  "use strict";

  var Uxia,
    module,
    rand = new Object();
  module = {
    require: require,
    component: component
  };
  function require() {
    //...
  }
  function component() {}
  Uxia = arguments[0].bind(rand);
  for (var _i in module) {
    Uxia[_i] = module[_i];
  }
  Uxia.$__root = rand;
  return Uxia;
}, function () {
  function isUndef(v) {
    return v === undefined || v === null;
  }
  function isDef(v) {
    return v !== undefined && v !== null;
  }
  function isTrue(v) {
    return v === true;
  }
  function isFalse(v) {
    return v === false;
  }
  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }
  function isString(obj) {
    return obj !== null && typeof obj === 'string';
  }
  function isFunc(obj) {
    return obj !== null && typeof obj === 'function';
  }
  function isNameOk(name) {
    eachTag(autoProp.view, function (e) {
      var q = e.getAttribute(key.id);
      q = q && q !== null ? q.split(' ') : false;
      if (q && q.length !== 1) {
        return console["error" ? "error" : "log"]("Failed to execute '" + q.join("' and '") + "' components on 'HTMLcollection' : only 1 argument required, but " + q.length + " present.");
      }
      data.names[q[0]] = e;
    });
    return data.names.hasOwnProperty(name) ? true : name !== undefined ? debug.warn("'" + name + "' is not defined, choose a new name and try again") : true;
  }
  function eachTag(name, callBack) {
    var e = document.getElementsByTagName(name);
    if (e.length) {
      for (var i in e) {
        if (!isNaN(i)) {
          callBack(e[i], i);
        } else {}
      }
    } else {}
  }
  function getPathByCall(str, obj) {
    var i = str.change(['{', '}', ' '], '');
    var apply = i.match(stripStringRE);
    i = i.change([stripStringRE, /(\(|\))/g, ' ']);
    var gp = parsePath(i);
    if (!isFunc(gp)) {
      return; //console.error(i + ' could not be parse')
    }

    var res = gp(obj);
    return res;
  }
  function UParse(str) {
    var defaultTagRE = /\[((?:.|\n)+?)\]\=\>\[\{\{((?:.|\n)+?)\}\}\]/g;
    var test = defaultTagRE.exec(str);
    return !test ? str : test && test.length == 3 ? {
      key: test[1],
      value: test[2]
    } : str;
  }
  function ULink(i, value) {
    var str = value ? "[" + i + "]=>[{{" + value + "}}]" : "";
    return str;
  }
  function clearAll() {
    var _loop = function _loop() {
      var i = _step.value;
      setTimeout(function () {
        i.innerHTML = "";
      }, 0);
    };
    for (var _iterator = _createForOfIteratorHelperLoose(output), _step; !(_step = _iterator()).done;) {
      _loop();
    }
  }
  var inBrowser = typeof window !== 'undefined';
  var arg = arguments;
  var nativeUa = {
    root: {},
    code: function code(e) {}
  };
  var isUnaryTag = tagName('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');
  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = tagName('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');
  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = tagName('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');
  var isHTMLTag = tagName('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot,ua');
  var autoProp = {
    id: {},
    style: {},
    genered: {},
    repertoria: {},
    elementName: 'automark-element',
    view: 'view-marker',
    defaultElement: [{
      name: "BODY",
      identifier: '___autoDefaultBodyElementId___'
    }, {
      name: "HTML",
      identifier: '___autoDefaultHTMLElementId___'
    }, {
      name: "HEAD",
      identifier: '___autoDefaultHeadElementId___'
    }]
  };
  var data = {
    uamodel: {},
    style: {},
    repertoria: {},
    names: {},
    designed: {},
    path: {},
    call: {},
    meta: {},
    identifier: {},
    identified: {},
    elements: {},
    dynamicVal: {},
    $dynamicVal: {},
    removed: {}
  };
  var cycle = {
    firstAppend: true
  };
  function caller(methods, callData) {
    if (methods) {
      for (method in methods) {
        if (!callData[method]) {
          callData[method] = {};
        }
        callData[method] = methods[method];
      }
    }
  }
  function callUaData(indexOfArg) {
    if (!arg[indexOfArg]) {
      return console.error("arguments unfounded");
    }
    var _i_d_s_ = autoProp.id[indexOfArg];
    var _id_ = {};
    for (var c in _i_d_s_) {
      if (!data.elements[indexOfArg]) {
        data.elements[indexOfArg] = {};
      }
      if (!data.elements[indexOfArg].hasOwnProperty(c)) {} else {
        Object.keys(_i_d_s_).forEach(function (c) {
          var x = '_' + indexOfArg;
          var exe = new RegExp(x).exec(c);
          if (exe) {
            c = c.replace(exe[0], '');
            if (data.identified[indexOfArg] && data.identified[indexOfArg].hasOwnProperty(c)) {
              _id_[c] = getid(_i_d_s_[x + c].id);
            }
          }
        });

        // _id_[c] = _i_d_s_[c]
      }
    }

    if (!data.call[indexOfArg]) {
      data.call[indexOfArg] = {};
    }
    for (var r in _id_) {
      if (getid(r)) {
        _id_[r] = getid(r);
      }
    }
    Object.assign(data.call[indexOfArg], _id_);
    caller(arg[indexOfArg].data, data.call[indexOfArg]);
    caller(data.uamodel[indexOfArg], data.call[indexOfArg]);
    caller(data.objStyle, data.call[indexOfArg]);
    caller(arg[indexOfArg][key.methods], data.call[indexOfArg]);
    caller({
      frames: arg[indexOfArg].frames
    }, data.call[indexOfArg]);
    return data.call[indexOfArg];
  }
  var debug = {
    warn: function warn(msg) {
      return console["error" ? "error" : "log"](msg);
    },
    noAvailable: function noAvailable() {
      return "Page no available.";
    },
    conflict: function conflict(identifier) {
      return "is already defined, choose a new " + identifier + " and try again.";
    },
    "window": function window(outp, row) {
      return outp.innerHTML = "<code style='padding: 15px; display: block'>" + row + "</code>";
    }
  };
  var system = {
    off: false,
    time: 0,
    "catch": function _catch(callBack) {
      clearAll();
      setTimeout(function () {
        debug.window(output[0], isFunc(callBack) ? callBack() : callBack);
      }, 0);
    },
    define: function define(model) {
      arr = model;
      if (Array.isArray(model)) {
        model = model[model.length - 1];
      }
      if (isHTMLTag.indexOf(model) !== -1 && !compare.string2("style", model)) {
        model = "textContent";
      }
      if (model == "addStyle" || model == "style") {
        typeOfValue = "style:" + model;
      } else if (model == "addClass" || model == "class" || model === "className") {
        typeOfValue = "class:" + model;
      } else if (model == "addText") {
        typeOfValue = "string:" + model;
      } else {
        typeOfValue = Array.isArray(this.value) ? "array" : uadd.tclass === model ? "class" : typeof this.value;
        typeOfValue += ":" + (isAutoEValide(model) || arr.length === 1 ? "textContent" : model);
      }
      return typeOfValue;
    }
  };
  var remove = {
    autoElement: deleteAutoElement
  };
  var add = {
    style: addStyle
  };
  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var nativeJs = /\[((?:.|\r?\n)+?)\]/g;
  var regexEscapeRE = /[-.*^${}()|[\]\/\\]/g;
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
  function newElement(path, element) {
    var i = 0,
      id,
      action;
    mark = marker(path[i]);
    action = spliter(this.own);
    action = action[action.length - 1];
    if (!path.length) {
      if (isHTMLTag.indexOf(action) !== -1 && !compare.string2("style", action)) {
        action = system.define.call({
          value: this.value
        }, marker(action).name.toLowerCase());
      } else {
        action = system.define.call({
          value: this.value
        }, action);
      }
      data.repertoria[this.iarg][this.own] = {
        indexOfArg: this.iarg,
        value: this.value,
        e: element,
        id: element.id,
        action: action,
        nameFrames: this.nameFrames,
        path: this.fpath,
        own: this.own
      };
      if (!data.path[this.iarg][this.fpath]) {
        data.path[this.iarg][this.fpath] = {};
      }
      data.path[this.iarg][this.fpath][action] = this.value;
      data.path[this.iarg][this.fpath].e = element;
      element && element.id ? autoProp.id[this.iarg][element.id] = element : false;
      return update.value({
        e: element,
        output: this.output,
        action: action,
        indexOfArg: this.iarg,
        nameFrames: this.nameFrames,
        own: this.own,
        path: this.fpath
      }, this.value);
    }
    if (mark.id && getid(mark.id)) {
      path.shift();
      return newElement.call(this, path, getid(mark.id));
    } else {
      //setValue *______*
      //we supposed its just a string for the moment
      if (rootRE(this.iglobal)) {
        return;
      }
      if (!isString(this.value)) {
        if (Array.isArray(this.value)) {
          // return 
        }
        return console.error("No programed {{ " + typeof this.value + " }} could not be insered", this.value);
      }
      if (!isNaN(this.iglobal) && mark.e.id) {}
      if (element) {
        element.append(mark.e);
      } else {
        this.output.append(mark.e);
      }
      path.shift();
      return newElement.call(this, path, mark.e);
    }
    /*____*/
  }

  var uadd = {
    text: "addText",
    content: "textContent",
    style: "addStyle",
    "class": "addClass",
    "tclass": "toggleClass",
    append: "append",
    write: "write",
    whole: "wholeText",
    model: "xmodel"
  };
  HTMLElement.prototype.addText = function (proto, content, iarg) {
    var element;
    if (proto === uadd.text || proto === uadd.write || proto === uadd.whole) {
      return this.append(content);
    } else if (proto === uadd["class"] || proto === "class") {
      return proto === uadd["class"] ? this.className += " " + content + " " : this.className = content;
    } else if (proto === uadd.style || proto === "style") {
      return proto === uadd.style ? this.style += ";" + content + ";" : this.style = content;
    } else {
      if (proto === "id") {
        data.designed[content] = this;
        return autoProp.id[iarg][content] = {
          el: this,
          addClass: "",
          addStyle: "",
          className: this.className,
          style: this.getAttribute("style")
        };
      }
      if (proto === uadd.model) {
        data.call[iarg][content][rootKey.parent] = this;
      }
      return this[proto] = content;
    }
  };
  function define() {
    if (this.e && this.key && this.value) {
      return isString(this.value) ? this.e.addText(this.key, this.value, this.indexOfArg) : false;
    }
  }
  String.prototype.change = function (array, to, bool) {
    var method = "replaceAll",
      str = this;
    bool === false || !bool ? method = "replaceAll" : method = "replace";
    for (var _i2 in array) {
      str = str[method](array[_i2], !to ? '' : to);
    }
    return str;
  };
  function ev(value) {
    var isdval = value.match(defaultTagRE),
      validepath,
      res,
      $ = this,
      isjVal,
      ec;
    if (isdval && isdval.length) {
      isdval.forEach(function (dval) {
        validepath = dval.change(['{', ' ', '}']);
        res = getPathByCall(validepath, $);
        value = value.replace(dval, isFunc(res) ? res.call($) : res);
      });
    }
    isjVal = value.match(nativeJs);
    if (isjVal && isjVal.length) {
      isjVal.forEach(function (jval) {
        ec = /(?:\[)(.+)(?:\])/g.exec(jval);
        value = value.replace(jval, eval(ec[1]));
      });
    }
    return value;
  }
  function wholeText(h, callBack) {
    var h1Nodes = h.childNodes;
    for (var _i3 = 0; _i3 < h1Nodes.length; _i3++) {
      callBack.call({
        n: h1Nodes,
        i: _i3
      }, h1Nodes[_i3].wholeText);
    }
  }
  var cloning = function cloning(e, _boolean) {
    return e.cloneNode(_boolean);
  };
  var xiaEvent = {
    update: "onupdate",
    value: "onvalue",
    ready: "onready",
    toggle: "ontoggle",
    computed: "computed"
  };
  var datablank = "data:blank";
  var update = {
    global: function global(globaldata, a, b) {
      update.superglobal(null, this.output, this.indexOfArg, this.nameFrames, globaldata, b);
      update.stylesheet.call({
        iarg: this.indexOfArg
      });
    },
    value: function value(row, _value) {
      if (!row) {
        return console.error(row);
      }
      var callData = callUaData(row.indexOfArg),
        q,
        j,
        k,
        l,
        m,
        n,
        toggleClass,
        isArr = Array.isArray(_value) ? _value.toString() : null;
      call = data.call[row.indexOfArg];
      if (!call) {
        return console.warn('PROBLEM');
      }
      var type = row.action ? row.action.split(':') : console.error("action didn't defined");
      if (row.freeze) {
        if (row.freeze.indexOf(row.action) !== -1) {
          return;
        }
      }
      if (type[1] === "onupdate" && type[0] === "string") {
        type[0] = "function";
      }
      if (isEvent(type[1])) {
        type[0] = "function";
      }
      if (isFunc(_value) && rootRE(type[1]) && rootKey.hasOwnProperty(rootRE(type[1])[2])) {
        delete data.path[row.indexOfArg][row.path];
        return;
      }
      var uparsev = UParse(isObject(_value) ? _value[Object.keys(_value)[0]] : _value);
      _value = uparsev.value ? uparsev.value : _value;
      function xmodel(xm, obj) {
        var val, result;
        function run(obj) {
          Object.keys(obj).forEach(function (i) {
            val = obj[i];
            if (isString(val) || Array.isArray(val)) {
              if (val === xm) {
                result = obj;
              }
            } else if (isObject(obj[i])) {
              return run(obj[i]);
            }
          });
          if (result) {
            return result;
          } else {}
        }
        return run(obj);
      }
      function deleteChild(ob, t) {
        var cuteA = spliter(t),
          mov;
        function run(obj) {
          var _loop2 = function _loop2() {
            var cutedB = spliter(_i4);
            function sniffer(ob1, ob2) {
              function run(a, b, index) {
                if (!a[index]) {
                  var action = 'string:' + uadd.model;
                  if (ob[joiner(b)].hasOwnProperty(action)) {
                    return mov = ob[joiner(b)][action];
                  }
                  return delete ob[joiner(b)];
                }
                var ismatch = b[index] === a[index];
                if (ismatch) {
                  index++;
                  run(a, b, index);
                } else {
                  return;
                }
              }
              return run(ob1, ob2, 0);
            }
            sniffer(cuteA, cutedB);
          };
          for (var _i4 in obj) {
            _loop2();
          }
        }
        run(ob);
        return mov;
      }
      if (type[1] === uadd.model) {
        if (!call.hasOwnProperty(_value)) {
          call[_value] = {};
          var ob = xmodel(_value, arg[row.indexOfArg].frames);
        }
        data.call[row.indexOfArg][_value][rootKey.hide] = function () {
          row.e.style.display = "none";
        };
        data.call[row.indexOfArg][_value][rootKey.remove] = function () {
          if (!call.hasOwnProperty(_value)) {
            return console.warn("This element was deleted");
          }
          var ob, parent, x, child;
          ob = data.path[row.indexOfArg];
          parent = ob[row.fpath];
          x = deleteChild(ob, row.fpath);
          function sniffXmodel(xmodel, iarg, callback) {
            function run(ob) {
              for (var _i5 in ob) {
                if (isString(ob[_i5]) || Array.isArray(ob[_i5])) {
                  if (_i5 === uadd.model && ob[_i5] === xmodel) {
                    if (callback && isFunc(caller)) {
                      Object.keys(ob).forEach(function (n) {
                        callback(ob, n, ob[n]);
                      });
                    } else {
                      return ob;
                    }
                  }
                } else {
                  return run(ob[_i5]);
                }
              }
            }
            run(arg[iarg].frames);
          }
          sniffXmodel(x, row.indexOfArg, function (inside, n) {
            if (n !== uadd.model) {
              delete inside[n];
            } else {
              child = getid(inside.$_parent.id).childNodes;
              var _loop3 = function _loop3() {
                var c = _step2.value;
                setTimeout(function () {
                  c.remove();
                }, 0);
              };
              for (var _iterator2 = _createForOfIteratorHelperLoose(child), _step2; !(_step2 = _iterator2()).done;) {
                _loop3();
              }
              delete inside[n];
            }
          });
        };
        data.call[row.indexOfArg][_value][rootKey.parent] = row.e;
        return;
      }
      Array.prototype[rootKey.shift] = shift;
      Array.prototype[rootKey.push] = push;
      Array.prototype[rootKey.unshift] = unshift;
      Array.prototype[rootKey.init] = arrayRemove;
      Array.prototype[rootKey.del] = function () {
        return left.call(this, arguments, row);
      };
      Array.prototype[rootKey.pop] = pop;
      function push(a) {
        if (!a) {
          return;
        }
        this.push(a);
      }
      function whereWeAre(arr, i, nameKey, callback) {
        var _decomposition;
        function runner(ob) {
          var frames = ob;
          for (var _j in frames) {
            if (Array.isArray(frames[_j]) || !isObject(frames[_j])) {
              if (Array.isArray(frames[_j]) && _j === nameKey) {
                return _j;
              }
            } else {
              runner(frames[_j]);
            }
          }
        }
        var y = runner(arg[i].frames),
          res = [];
        decomposition((_decomposition = {}, _decomposition[y] = arr, _decomposition), function (_path) {
          if (spliter(_path).length !== -1) {
            var ai = AI.structure(_path.split('.'), row.indexOfArg),
              vn;
            ai.pop();
            vn = joiner(ai);
            var ry = vn ? vn.split('.') : '';
            if (callback && isFunc(callback)) {
              for (var h = 0; h < ry.length; h++) {
                callback(ry[h]);
                res.push(ry[h]);
              }
            } else {
              res.indexOf(vn) === -1 ? res.push(vn) : false;
            }
          }
        }, i);
        return res;
      }
      function pop(nameKey) {
        var iarg = row.indexOfArg;
        if (this.length !== 0 && Array.isArray(this)) {
          var _i6 = this.length - 1;
          var mayhere = whereWeAre(this, row.indexOfArg, nameKey);
          if (Array.isArray(mayhere)) {
            mayhere = mayhere[_i6];
          }
          var comp = /(.+?)(?:[0-9]){0,}$/g.exec(mayhere);
          var finalLink = comp[1] + _i6;
          if (data.path[iarg].hasOwnProperty(finalLink)) {
            data.path[iarg][finalLink].e.remove();
            delete data.path[iarg][finalLink];
            this.pop();
          } else {
            console.error("Uxia didn't found the element");
          }
        } else {
          return;
        }
      }
      function lastIndex(str) {
        return /(?:(.+?))([0-9]){0,}$/g.exec(str);
      }
      var _int = /(?:(.+?))([0-9]){0,}$/g;
      function shift(nameKey) {
        if (nameKey) {
          return console.error("Uxia key Undefined");
        }
        var a = this,
          mayhere,
          x = data.path[row.indexOfArg],
          index,
          fp,
          ram = {},
          next;
        if (a.length) {
          mayhere = whereWeAre(a, row.indexOfArg, nameKey);
          if (Array.isArray(mayhere)) {
            mayhere = mayhere[0];
          }
          var split = mayhere.split('.');
          var cleaned = [];
          fp = lastIndex(mayhere); /*int.exec(mayhere);*/
          for (var _i7 = 0; _i7 < split.length; _i7++) {
            cleaned.push(marker(split[_i7]).name.toLowerCase());
          }
          index = parseFloat(fp[2]);
          a.shift();
          x[mayhere].e.remove();
          delete x[mayhere];
          index = index + 1;
          next = fp[1] + index;
          if (x.hasOwnProperty(next)) {
            Object.keys(x).forEach(function (keys) {
              var ser = fp[1];
              var isN = new RegExp(ser, 'g');
              var d;
              var newp;
              if (keys.match(isN)) {
                d = lastIndex(keys);
                if (d && d.length === 3) {
                  ram[keys] = x[keys];
                  delete x[keys];
                  newp = d[1] + (parseFloat(d[2]) - 1);
                  x[newp] = ram[d[1] + d[2]];
                }
              }
            });
          } else {}
        }
      }
      function unshift(a) {
        this.unshift(a);
      }
      function arrayRemove(a) {
        if (this.length !== 0) {
          for (var _i8 = 0; _i8 < this.length; _i8++) {
            for (var _j2 in data.path[row.indexOfArg]) {
              if (_j2 == row.fpath) {
                var category = _j2;
                var exist = /(?:(.+?))([0-9]){0,}$/g.exec(_j2);
                var vpath;
                if (exist && exist.length) {
                  vpath = exist[1] + _i8;
                  if (data.path[0].hasOwnProperty(vpath)) {
                    data.path[row.indexOfArg][vpath].e.remove();
                    delete data.path[row.indexOfArg][vpath];
                  }
                }
              } else {}
            }
          }
        }
        function del(q) {
          if (q && q.length) {
            q.pop();
            return del(q);
          } else {
            return a ? q[rootKey.push](a) : true;
          }
        }
        return del(this);
      }
      function allchild(el, value) {
        var createNode = el.childNodes,
          text,
          isupdt;
        for (var _i9 = 0; _i9 < createNode.length; _i9++) {
          text = createNode[_i9].wholeText ? createNode[_i9].wholeText : '#';
          isupdt = text.match(defaultTagRE);
          if (isupdt && isupdt.length && createNode[_i9].wholeText) {}
          if (Object.keys(createNode[_i9].childNodes).length) {
            allchild(createNode[_i9], value);
          } else {
            var str = createNode[_i9].wholeText;
            if (isString(str) && str.match(defaultTagRE)) {
              if (data.dynamicVal.hasOwnProperty(createNode[_i9].wholeText)) {}
              data.dynamicVal[createNode[_i9].wholeText] = {
                node: text,
                o: text,
                dom: createNode[_i9],
                obj: createNode,
                path: createNode[_i9].wholeText,
                i: _i9
              };
            }
          }
        }
      }
      function replaceMove(t) {
        allchild(row.e);
        for (var _i10 in data.dynamicVal) {
          //dvi.o doit rester {{a}}
          var dvi = data.dynamicVal[_i10];
          if (!dvi.o) {
            return;
          }
          var dval = dvi.o.match(defaultTagRE),
            ndv;
          for (var _j3 = 0; _j3 < dval.length; _j3++) {
            var drv = getPathByCall(dval[_j3], call);
            dvi.node = dvi.node.replaceAll(dval[_j3], isFunc(drv) ? drv.call(call) : drv);
            dvi.timevalue = dvi.node;
            dvi.obj[dvi.i].replaceWith(dvi.node);
            if (cycle.firstAppend) {
              //...
            }
          }
          dvi.node = dvi.o;
        }
      }
      if (type[0] === "function" && isString(_value) && _value.split(' ').length > 1 && !call[_value] && !xiaEvent.hasOwnProperty(type[1].change(['on', ' '], null)) && !call.hasOwnProperty(_value.change([regexEscapeRE, ' '], null))) {
        type[0] = "array";
      }
      if (type[0] === "string" || type[0] === "number") {
        if (_value === undefined) {
          return console.warn("value actually not defined");
        }
        if (type[1] === "textContent") {
          // row.e.textContent = value
        } else if (type[1] === "innerHTML") {
          // row.e.innerHTML = value
        }

        /**_____**/
        //uamodel est toujours de type string alors elle fonctionneras sans doute mieux ici
        /**_____**/
        if (uparsev.value) {
          _value = uparsev.value;
        }
        var isvar = isString(_value) ? _value.match(defaultTagRE) : _value[type[1]];
        var own;
        if (isvar) {
          for (var _i11 = 0; _i11 < isvar.length; _i11++) {
            var _Object$assign;
            !data.$dynamicVal.hasOwnProperty(row.indexOfArg) ? data.$dynamicVal[row.indexOfArg] = {} : false;
            Object.assign(data.$dynamicVal[row.indexOfArg], (_Object$assign = {}, _Object$assign[row.path] = row, _Object$assign));
            data.$dynamicVal[row.indexOfArg][row.path].value = _value;
            esc.call(data.call[row.indexOfArg], isvar[_i11], function (a, b, c) {
              if (!c) {
                if (call.hasOwnProperty(a)) {
                  if (isFunc(call[a])) {
                    if (isUnaryTag.lastIndexOf(row.e.tagName.toLowerCase()) !== -1) {
                      _value = _value.replace(b, call[a].call(call));
                    }
                    replaceMove(row.e, _value);
                  }
                }
              }
              if (c && b) {
                if (isUnaryTag.lastIndexOf(row.e.tagName.toLowerCase()) !== -1) {
                  _value = _value.replace(b, c);
                }
                replaceMove(row.e, _value);
              }
            });
          }
          _value = ev.call(call, _value);
        } else {
          if (data.$dynamicVal.hasOwnProperty(row.indexOfArg)) {
            Object.keys(data.$dynamicVal[row.indexOfArg]).forEach(function (path) {
              var ob = data.$dynamicVal[row.indexOfArg][path];
              var dy = ob.value.change(['{', ' ', '}']);
              var dyv = getPathByCall(dy, callData);
              if (!dyv) {
                return;
              }
              var parsed = isFunc(dyv) ? dyv.call(callData) : dyv;
              var m = ob.action.split(':')[1];
              setTimeout(function () {
                ob.e[m] = parsed;
              }, 0);
              !callData.hasOwnProperty(xiaEvent.update) ? callData[xiaEvent.update] = function () {} : true;
            });
          }
        }
        if (type[1] === uadd.write || type[1] === uadd.whole) {
          n = row.e.childNodes;
          uparse = UParse(_value.textContent);
          if (!n.length) {
            row.e.append(_value);
          } else {
            if (uparse && uparse.value) {
              _value = uparse.value;
            }
            if (n.length <= 1) {
              if (row.e.textContent !== _value) {
                row.e.append(_value);
              }
            }
            for (var _i12 = 0; _i12 < n.length; _i12++) {
              if (n[_i12][uadd.whole]) {
                if (n[_i12].wholeText !== _value) {
                  n[_i12].textContent = _value;
                }
              } else {}
            }
          }
        } else {
          // if (!tag2(row.e)) {
          if (isUnaryTag.lastIndexOf(row.e.tagName.toLowerCase()) !== -1) {
            //console.warn('UNARY' + row.e.tagName)
            return row.e.setAttribute(type[1], _value);
          }
          if (Object.keys(autoProp.id).length) {
            if (autoProp.id && autoProp.id[row.indexOfArg][marker(type[1]).id]) {
              type[1] = "textContent";
            }
          }
          _value = isObject(_value) ? _value[type[1]] : _value;
          var same = row.e[type[1]] === _value ? true : false;
          _value = isString(_value) ? _value.replaceAll('\n', "") : _value;
          if (same) {
            return;
          } else {
            var getXEvent = function getXEvent(xe) {
              var child = xe.children;
              function config(e) {
                if (!e) {
                  return;
                }
                var attrs = e.getAttributeNames();
                if (attrs && attrs.length) {
                  for (var _i14 = 0; _i14 < attrs.length; _i14++) {
                    //var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
                    var isxattr = /on-(\w+)/g.exec(attrs[_i14]);
                    if (isxattr && isxattr.length) {
                      var bindName = e.getAttribute(isxattr[0]),
                        nameB,
                        argB,
                        isArgB,
                        fnName;
                      fnName = /(\w+)(\(.+\))/g;
                      isArgB = fnName.exec(bindName);
                      nameB = isArgB && isArgB.length ? isArgB[1] : bindName;
                      argB = isArgB && isArgB.length ? isArgB[2] : null;
                      if (call.hasOwnProperty(nameB)) {
                        var _setFunction$call;
                        var s = argB ? argB.match(stripStringRE) : null;
                        if (s) {
                          s.forEach(function (each, i) {
                            var open = /^(`|'|")(.+)("|'|`)$/g;
                            s[i] = open.exec(each)[2];
                          });
                        }
                        var event = attrs[_i14].change('-');
                        var bval = call[nameB];
                        if (event === xiaEvent.value) {
                          bval = nameB;
                        }
                        setFunction.call(callData, e, (_setFunction$call = {}, _setFunction$call[event] = bval, _setFunction$call.apply = s, _setFunction$call), event, row.indexOfArg, row.nameFrames, row.output);
                      }
                    }
                  }
                }
              }
              for (var _i15 in child) {
                if (!isNaN(_i15)) {
                  if (child[_i15].children.length) {
                    getXEvent(child[_i15]);
                  }
                  config(child[_i15]);
                }
              }
            };
            if (isString(_value)) {
              var vm = document.createElement('view-marker'),
                strA,
                strB;
              vm.innerHTML = _value;
              strA = vm.innerHTML;
              strB = row.e.innerHTML;
              if (strA === strB || cycle.firstAppend === false) {
                if (row.e.innerHTML == vm.innerHTML) {
                  return;
                }
              } else {
                setTimeout(function () {
                  cycle.firstAppend = false;
                }, 500);
              }
              var a = row.e.innerHTML.toString();
              var b = _value.toString();
              var w = ['&quot;', ' ', '\n', /('|"|`)/g];
              a = a.change(w, null);
              b = b.change(w, null);
              if (a == b) {
                return;
              } else {
                if (data.path[0][row.fpath]) {
                  var back = function back(p) {
                    var a = spliter(p),
                      marker;
                    for (var _i13 = 0; _i13 < a.length; _i13++) {
                      //...
                    }
                  };
                }
              }
            }
            HTMLElement.prototype.isproto = function (proto) {
              if (undefined === this[proto]) {
                return false;
              } else {
                return true;
              }
            };
            var trueproto = row.e.isproto(type[1]);

            // !trueproto ? type[1] = 'textContent' : false

            row.e[type[1]] = _value;
            replaceMove(row.e);
            getXEvent(row.e);
          }
        }
      } else if (type[0] === "style") {
        //value = uparsev.value ? uparsev.value : value
        q = row.e.getAttribute("style");
        j = isFunc(_value) ? _value.call(callData) : _value;
        if (type[1] === "addStyle") {
          m = [' ', ';'];
          k = q ? q.change(m, null) : '';
          l = j.change(m, null);
          k !== l ? row.e.style = q + ';' + j : false;
        } else {
          row.e.style = j;
        }
      } else if (type[0] === "class") {
        // value = uparsev.value ? uparsev.value : value;
        q = row.e.className;
        j = isFunc(_value) ? _value.call(callData) : isString(_value) ? _value : console.error("_____object_____");
        if (type[1] === "addClass") {
          m = [' '];
          k = q.change(m, null);
          if (!j.split(m[0]).length) {
            !row.e.classList.contains(k) ? row.e.classList.add(k) : false;
          } else {
            j.split(m[0]).filter(function (e) {
              return e !== ' ';
            }).forEach(function (x) {
              !row.e.classList.contains(x) ? row.e.classList.add(x) : false;
            });
          }
        } else if (type[1] === "toggleClass") {
          k = _value.split(' ');
          if (k && k.length) {
            for (var _i16 = 0; _i16 < k.length; _i16++) {
              toggleClass = row.e.classList.contains(k[_i16]);
              if (toggleClass) {
                row.e.classList.remove(k[_i16]);
              } else {
                row.e.classList.add(k[_i16]);
              }
            }
          }
        } else {
          row.e.className = Array.isArray(_value) ? isArr.change(',', ' ') : _value;
        }
      } else if (type[0] === "function" || 'function' === typeof _value) {
        var _setFunction$call2;
        setFunction.call(callData, row.e, (_setFunction$call2 = {}, _setFunction$call2[type[1]] = _value, _setFunction$call2), type[1], row.indexOfArg, row.nameFrames, row.output);
      } else {
        if (_value.length && isString(_value[0]) || "array" === type[0]) {
          //its a string = attribute
          row.e.setAttribute(type[1], isArr ? isArr.change(',', ' ') : _value);
        } else if (_value.length && isObject(_value[0])) {
          return console.warn("parsing error");
        } else {}
      }
    },
    superglobal: function superglobal(path, output, i, nameFrames, globaldata, freeze) {
      bootLoader(globaldata, function (obj, iarg) {
        if (iarg == "undefined") {
          return console.warn("<<<<error>>>><<<< need help ? >>>>");
        }
        var frames;
        frames = obj[iarg].frames;
        decomposition(frames, function (path, value, isov, iglobal) {
          var paths = spliter(path),
            row,
            type,
            fpath;
          if (paths.length) {
            //alert()
            paths = AI.structure(paths, iarg);
          }
          last = paths[paths.length - 1];
          mark = marker(paths[paths.length - 1]);
          if (isHTMLTag.indexOf(mark.name.toLowerCase()) === -1 || compare.string2("style", last)) {
            fpath = joiner(paths);
            fpath = spliter(fpath);
            fpath.pop();
            fpath = joiner(fpath);
          } else {
            fpath = joiner(paths);
          }
          var isExist = data.repertoria[iarg][joiner(paths)];
          if (!isNaN(iglobal)) {
            var isenumered = /[0-9]$/g;
            if (!fpath.match(isenumered)) {
              fpath += iglobal;
            }
          }
          var datapath = data.path[iarg][fpath];
          if (!fpath) {
            // return
          }
          if (data.path[iarg].hasOwnProperty(fpath)) {
            if (!datapath.e) {
              return;
            }
            var action = system.define.call({
              value: value
            }, spliter(path));

            //console.log(path)

            datapath[action] = value;
            update.value({
              action: action,
              e: datapath.e,
              indexOfArg: iarg,
              nameFrames: nameFrames,
              output: output,
              path: fpath,
              datapath: datapath,
              fpath: fpath,
              freeze: freeze ? freeze.freeze : null
            }, value);
          } else {
            var savePath = joiner(paths);
            if (rootRE(paths[paths.length - 2])) {
              return;
            }
            var caller = {
              value: value,
              iglobal: iglobal,
              nameFrames: nameFrames,
              iarg: iarg,
              savePath: savePath,
              fpath: fpath,
              own: path,
              output: output
            };
            if (fpath !== 'data:blank') {
              update.newElement.call(caller, spliter(fpath));
            }
          }
        }, i);
      });
    },
    stylesheet: function stylesheet(objStyle, autoStyle, arg) {
      if (objStyle && autoStyle && arg) {
        create.style(objStyle);
        add.style(autoStyle, arg, this.iarg);
      } else {
        //...create.style(data.objStyle);
        add.style(autoProp.style, arg, this.iarg);
      }
    },
    newElement: newElement
  };
  var rootKey = {
    dir: "_$_",
    toStr: "$_css",
    parent: "$_parent",
    hide: "$_hide",
    remove: "$_remove",
    current: "$_current",
    pop: "$_pop",
    shift: "$_shift",
    push: "$_push",
    prop: "$_prop",
    unshift: "$_unshift",
    splice: "$_splice",
    del: "$_del",
    init: "$_init",
    len: "$_vlen"
  };
  Array.prototype[rootKey.len] = arrlen;
  function arrlen() {
    var array = this;
    if (array.length === 0) {
      return 0;
    }
    if (!Array.isArray(array)) {
      console.log(arguments);
      return console.warn("not a array");
    }
    if (array.length) {
      array = array.filter(function (e) {
        return e !== "undefined";
      });
    }
    return array.length;
  }
  var create = {
    event: createEvent,
    "while": For,
    autoElement: function autoElement(lastElement, i, value) {
      var e = document.createElement(autoProp.elementName);
      lastElement.append(e);
      e[i] = value;
    },
    style: function (_style) {
      function style(_x) {
        return _style.apply(this, arguments);
      }
      style.toString = function () {
        return _style.toString();
      };
      return style;
    }(function (styles) {
      for (style in styles) {
        var str = "";
        var props = styles[style];
        var _loop4 = function _loop4() {
            propStr = prop;
            str2 = "";
            if ('object' === typeof props[prop]) {
              for (g in props[prop]) {
                propStr2 = g;
                str2 += normalise(g, props[prop], g);
              }
              autoProp.style[prop + rootKey.dir + style] = str2;
            }
            function normalise(propStr, props, prop) {
              isUpp = upper(propStr);
              if (isUpp) {
                propStr = propStr.replace(isUpp[0], '-' + isUpp[0].toLowerCase());
              }
              return "string" === typeof props[prop] ? propStr + ':' + props[prop] + ';' : "";
            }
            str += normalise(propStr, props, prop);
          },
          str2;
        for (prop in props) {
          _loop4();
        }
        autoProp.style[style] = str;
      }
    })
  };
  function tagName(str, find) {
    return str.split(',');
  }
  var AI = {
    structure: structure
  };
  function structure(path, iarg) {
    for (var _i17 in path) {
      var isid = marker(path[_i17]);
      if (isHTMLTag.indexOf(isid.name.toLowerCase()) !== -1) {
        if (isid.id) {
          if (!data.identified[iarg]) {
            data.identified[iarg] = {};
          }
          data.identified[iarg][isid.id] = undefined;
        }
      }
    }
    if (path.length && !marker(path[0]).id) {
      path[0] += '_' + path[0] + iarg + "frames";
    }
    var datapath = joiner(path);
    if (!Array.isArray(path)) {
      path = spliter(path);
      if (!path.length) {
        return system.off = true;
      }
    }
    var len = path.length - 1,
      index = 0,
      current,
      before,
      id,
      token;
    function next(index) {
      if (index >= len) {
        if (isAutoEValide(path[index])) {
          indexOfPath = path[index].replaceAll(autoProp.elementName + '-', '');
          if (!marker(path[index - 1]).id) {
            indexOfPath = '_' + path[index - 1] + indexOfPath;
            path[index - 1] += indexOfPath;
            path[index] = "";
            path = path.filter(function (e) {
              return e !== '';
            });
          }
        }

        /** test **/

        for (var _i18 = 0; _i18 < path.length; _i18++) {
          var isht = isHTMLTag.indexOf(marker(path[_i18]).name.toLowerCase());
          var mar = marker(path[_i18]);
          if (isht !== -1) {
            if (mar.id) {
              path[_i18] = mar.name.toLowerCase() + '_' + iarg + mar.id;
            }
          }
        }
        return path;
      }
      //index actuel
      current = path[index];
      //index actuel marquÃ© 
      currentMarker = marker(current);
      //si c'est automark element;
      if (isAutoEValide(path[index])) {
        var _indexOfPath = current.replaceAll(autoProp.elementName + '-', '');
        !marker(path[index - 1]).id ? _indexOfPath = '_' + path[index - 1] + _indexOfPath : false;
        path[index - 1] += _indexOfPath;
        path[index] = "";
        path = path.filter(function (e) {
          return e !== "";
        });
        if (isHTMLTag.indexOf(marker(path[index]).name.toLowerCase()) !== -1 && !compare.string2("style", path[index])) {
          path[index] += '_' + path[index] + '_' + path[index - 1] + '_';
        }
      } else {
        if (isHTMLTag.indexOf(marker(path[index]).name.toLowerCase()) !== -1 && !compare.string2("style", path[index])) {
          if (path[index - 1]) {
            if (!marker(path[index]).id) {
              path[index] += '_' + marker(path[index]).name + '_' + path[index - 1];
            }
          } else {}
        }
      }
      index++;
      return next(index);
    }
    return next(0);
  }
  function boot(row, indexOfArg, nameFrames, methods, etc) {
    if (!data.repertoria[indexOfArg]) {
      data.repertoria[indexOfArg] = {};
    }
    if (!data.path[indexOfArg]) {
      data.path[indexOfArg] = {};
    }
    var id = spliter(row.path);
    var type = row.typeOfValue.split(':');
    if (!data.path[indexOfArg][row.path]) {
      data.path[indexOfArg][row.path] = {};
    }
    if (!data.path[indexOfArg][row.path][row.typeOfValue]) {
      data.path[indexOfArg][row.path][row.typeOfValue] = {};
    }
    if (!row.value[type[1]] && type[0] === "string") {
      row.value = {
        textContent: row.value
      };
    }
    data.path[indexOfArg][row.path][row.typeOfValue] = row.value[type[1]];
    data.repertoria[indexOfArg][row.ownpath] = {
      own: row.ownpath,
      path: row.path,
      id: marker(id[id.length - 1]).id,
      value: row.value,
      indexOfArg: indexOfArg,
      nameFrames: nameFrames,
      methods: methods,
      action: row.typeOfValue
    };
  }
  function loadData() {
    var e = gettag(autoProp.view);
    var fetch = data.repertoria;
    var nameAutoElement;
    var count = e.length;
    function call(fetch, index) {
      for (var i in fetch) {
        var _loop5 = function _loop5() {
            if (!e.length) {
              return {
                v: console["error" ? "error" : "warn"]("<" + autoProp.view + "> element undefined")
              };
            }
            nameAutoElement = e[index].getAttribute(key.id);
            function run(index) {
              if (!e[index]) {
                return;
              }
              application({
                path: fetch[i][j].path,
                $path: fetch[i][j].path,
                value: fetch[i][j].value,
                key: j,
                nameFrames: fetch[i][j].nameFrames,
                action: fetch[i][j].action
              }, e[index], fetch[i][j].indexOfArg, fetch[i][j].methods);
            }
            if (nameAutoElement === fetch[i][j].nameFrames) {
              run(index);
            } else {
              if (!fetch[i][j].nameFrames) {
                run(index);
              }
            }
          },
          _ret;
        for (var j in fetch[i]) {
          _ret = _loop5();
          if (_ret) return _ret.v;
        }
      }
      index++;
      return index !== count ? call(fetch, index) : false;
    }
    return Object.keys(fetch).length ? call(fetch, 0) : false;
  }
  var compare = {
    nativeMark: sameAutoTag,
    string2: function string2(a, b) {
      if (isString(a) && isString(b)) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a === b ? true : false;
      }
    }
  };
  function sameAutoTag(a) {
    return isObject(a) && a ? a.tagName.toLowerCase() === autoProp.elementName : console.error('element ' + a);
  }
  function tag2(a) {
    if (!a) {
      return console.error('string ' + a);
    }
    if (typeof a !== "string") {
      if (compare.nativeMark(a)) {
        return true;
      }
      a = a.outerHTML;
    }
    function flik(a) {
      var e = /\<((?:.|\n)+?)\>(.+){0,}\<\/((?:.|\n)+?)\>/g;
      return e.exec(a);
    }
    var test = flik(a);
    return test && test.length ? true : false;
  }
  function isEvent(str) {
    var rgxp = /^(on)(\w+)/;
    if (Array.isArray(str) && str.length == 1) {
      str = str[0];
    }
    if (!isString(str)) {
      return console.error(str + " is not a string => " + typeof str);
    }
    var isE = str.match(rgxp);
    return isE ? isE : false;
  }
  function createEvent(e, event, Func) {
    return e.addEventListener(event, function (e) {
      Func(this, e);
    });
  }
  function getid(element) {
    var e = document.getElementById(element);
    return e ? e : false;
  }
  function gettag(element) {
    var e = document.getElementsByTagName(element);
    return e.length ? e : false;
  }
  function isMaped(element, v) {
    if (!vm) {
      if (typeof v === 'string' || !Array.isArray(v)) {
        vm = element;
      } else {
        if (path.length !== 1) {
          vm = element;
        } else {
          vm = "";
        }
      }
      return false;
    } else {
      return true;
    }
  }
  function upper(str) {
    var rgxp = /([A-Z])/g;
    return rgxp.exec(str);
  }
  function For(array, Fn) {
    for (var _i19 = 0; _i19 < array.length; _i19++) {
      Fn(array[_i19]);
    }
  }
  function cleaner(obj) {
    //effacer tous les id
    //j'ai fini par abandonner cette idée, peut-être plus tart j'y reviendrai 
    /*
    if ('object' === typeof obj && Object.keys(obj).length) {
     for (i in obj) {
      if (!isNaN(i)) {
       for (j in obj[i]) {
        var e = getid(j);
        if (e) {
         e.removeAttribute('id');
         obj[i][j] = e
        }
       }
      }
     }
    } else {
     if (obj.id) {
      obj.removeAttribute('id');
     }
    }
    /*
    if ('object' === typeof obj && Object.keys(obj).length) {
     
     for (i in obj) {
      var e = getid(i);
      if (e) {
       e.removeAttribute('id');
       obj[i] = e
      }
     }
    } else {
     if (obj.id) {
      obj.removeAttribute('id');
     }
    }
    */
  }
  function marker(namePath$, indexOfArg) {
    if (!namePath$) {
      // return console.error("unknown")
    }
    var row = isMarked(namePath$);
    if (!row.name) {
      // return console.error("unknown")
    }
    var name = row.name;
    var id = row.bind;
    var elem;
    if (name !== "" && isString(name)) {
      elem = name === "IMG" ? new Image() : document.createElement(name);
    }
    if (id !== "") {
      if (!id.match(/^(auto|Default|\$)/g)) {
        id = id.toLowerCase();
      } else {}
      elem.setAttribute('id', id);
      if (!data.elements[indexOfArg]) {
        data.elements[indexOfArg] = {};
      } else {
        data.elements[indexOfArg][id] = elem;
      }
      if (indexOfArg) {
        if (autoProp.id && autoProp.id.hasOwnProperty(id) && elem) {}
        if (!autoProp.id[indexOfArg]) {
          var _autoProp$id$indexOfA;
          autoProp.id[indexOfArg] = (_autoProp$id$indexOfA = {}, _autoProp$id$indexOfA[id] = elem, _autoProp$id$indexOfA);
        } else {
          autoProp.id[indexOfArg][id] = elem;
        }
      } else {
        data.identifier[id] = elem;
        setTimeout(function () {
          //data.identifier[id] = getid(elem.id);
        }, 1000);
      }
    }
    return {
      e: elem,
      id: id,
      name: name,
      isindex: row.isindex
    };
  }
  function isMarked(str) {
    if (!str) {
      //  return console.error("unknown ")
    }
    //trois cas
    //1 h1.0 = h1 index 0
    //2 h1Header = h1 id header 
    var idRE = /(?:([a-z0-9]{0,})([_A-Za-z0-9]{0,}))/g;
    var testid = idRE.exec(str);
    var isdefault = autoProp.defaultElement;
    if (testid && testid[1]) {
      testid[1] = testid[1].toUpperCase();
      for (i in isdefault) {
        if (testid[1] == isdefault[i].name) {
          testid[2] = isdefault[i].identifier;
        }
      }
    }
    if (str === autoProp.elementName || new RegExp(autoProp.elementName, 'g').test(str)) {
      testid[1] = autoProp.elementName;
    }
    return testid ? {
      isindex: false,
      data: testid,
      name: testid[1],
      bind: testid[2]
    } : false;
    //si isindex = true alors il y a un index => {bind} contient l'index
    //si isindex = false alors tableau 1 => {bind} contient soit id / rien
  }

  function ElementListener(row, value) {
    if (row.type === uadd["class"] || row.type === "className") {
      q = row.e.className;
      j = isFunc(value) ? value.call(this) : value;
      if (row.type === uadd["class"]) {
        m = [' '];
        k = q.change(m, null);
        l = j.change(m, null);
        k !== l ? row.e.className += ' ' + j + ' ' : false;
      } else {
        value ? row.e.className = value : false;
      }
    } else if (row.type === uadd.style || row.type === "style") {
      q = row.e.getAttribute("style");
      j = isFunc(value) ? value.call(this) : value;
      if (row.type === "addStyle") {
        m = [' ', ';'];
        k = q.change(m, null);
        l = j.change(m, null);
        k !== l ? row.e.style = q + ';' + j : false;
      } else {
        value ? row.e.style = value : false;
      }
    } else if (row.type === uadd.write || row.type === uadd.whole) {
      wholeText(row.e, function () {
        if (this.n[this.i].wholeText) {
          value ? this.n[this.i].textContent = value : false;
        }
      });
    }
  }
  function designed(i) {
    var _this = this;
    var fetch,
      row,
      each,
      listener = ["className", "style", uadd.write, uadd["class"], uadd.style, uadd.whole];
    row = data.designed;
    for (each in row) {
      fetch = autoProp.id[i][each];
      listener.forEach(function (n) {
        ElementListener.call(_this, {
          type: n,
          e: fetch.el
        }, fetch[n]);
      });
    }
  }
  function esc(a, callback) {
    if (!isString(a)) {
      return;
    }
    var ismatch = a.match(defaultTagRE),
      own;
    if (ismatch && ismatch.length) {
      for (var _i20 = 0; _i20 < ismatch.length; _i20++) {
        if (isFunc(ismatch[_i20])) {
          return;
        }
        // console.log(ismatch[i])
        // own = ismatch[i].replace(regexEscapeRE, '').change([' '], null);
        own = ismatch[_i20].change([regexEscapeRE], null);
        own = own.change([" "], null);
        if (this.hasOwnProperty(own)) {
          if (!isFunc(this[own])) {
            callback(this[own], ismatch[_i20], a.replace(ismatch[_i20], this[own]));
          } else {
            callback(own, ismatch[_i20]);
          }
        }
      }
    }
  }
  function setFunction(lastElement, v, i, indexOfArg, nameFrames, output) {
    var _this2 = this,
      _arguments = arguments;
    var global = this;
    var on = isEvent(i),
      functionReturn = !isEvent(i) ? v[i].call(this) : v[i],
      typeFuncValue = typeof functionReturn,
      argArray,
      thisarg = this,
      globalCaller = {
        output: output,
        indexOfArg: indexOfArg,
        nameFrames: nameFrames
      };
    function outside_config() {
      for (var _j4 in Uxia.$__root) {
        var mark = marker(_j4).id.toLowerCase();
        if (data.identifier.hasOwnProperty(mark)) {
          for (var _i21 in arg) {
            data.meta[mark] = Uxia.$__root[_j4];
          }
          delete Uxia.$__root[_j4];
        } else {}
      }
      /*
      if (!Object.keys(Uxia.$__root).length) {
       console.log(autoProp.id[0])
       for (let j in data.meta) {
        if (autoProp.id[0].hasOwnProperty(j)) {
      
        } else {
         // console.warn(autoProp.id[0])
        }
       }
      }
      */
    }

    window.onload = function () {
      update.global.call(globalCaller, arg, _this2, {
        freeze: ['class:toggleClass']
      });
      if (_this2.hasOwnProperty(xiaEvent.ready)) {
        _this2.onready.call(_this2);
      }
    };

    //si c'est un Ã©vÃ¨nement 
    if (on.length) {
      var listener = function listener(event, callback) {
        var _this4 = this;
        if (event === xiaEvent.update) {
          return toggle.call(this, callback);
        } else if (event === xiaEvent.value) {
          if (this.hasOwnProperty(callback)) {
            if (this[callback] == "") {
              lastElement.value = "";
            }
            lastElement.onblur = function () {
              if (isFunc(_this4[callback])) {
                //so weird
              } else {
                _this4[callback] = lastElement.value;
              }
              if (_this4.hasOwnProperty(xiaEvent.update)) {
                _this4[xiaEvent.update].call(_this4);
              }
              for (var _j6 in arg[indexOfArg].data) {
                if (_this4.hasOwnProperty(_j6)) {
                  arg[indexOfArg].data[_j6] = _this4[_j6];
                }
              }
              update.global.call(globalCaller, arg, _this4);
            };
          }
        }
      };
      var toggle = function toggle(fetch) {
        var _this5 = this;
        var q,
          s,
          equal,
          c2,
          c3,
          d1 = [],
          d2 = [],
          target;
        if (isFunc(fetch)) {
          fetch = fetch();
        } else {
          esc.call(this, fetch, function (value, o, replaced) {
            if (!replaced) {
              if (_this5.hasOwnProperty(value)) {
                if (isFunc(_this5[value])) {
                  replaced = fetch.replace(o, _this5[value].call(_this5));
                }
              }
            }
            target = replaced.match(nativeJs);
            if (target) {
              for (var _i22 in target) {
                target = replaced.replace(regexEscapeRE, '');
              }
            } else {
              target = replaced;
            }
            if (eval(target)) {
              lastElement.style.display = "block";
            } else {
              lastElement.style.display = "none";
            }
          });
          return;
        }
        var isOk = [];
        for (var _j7 in fetch) {
          var s = arg[indexOfArg].data[_j7];
          isOk.push(s === fetch[_j7]);
        }
        if (isOk.lastIndexOf(false) !== -1) {
          lastElement.style.display = "none";
        } else {
          lastElement.style.display = "block";
        }
      };
      /*
        setTimeout(() => {
         if (this.hasOwnProperty(xiaEvent.update)) {
          this[xiaEvent.update].call(this)
         
         }
        }, 0)
        */
      return !xiaEvent.hasOwnProperty(i.change('on')) ? lastElement[i] = function (target) {
        Uxia.$_setTimeout = function (fn, time) {
          setTimeout(function () {
            fn.call(global);
            update.global.call(globalCaller, arg, global);
          }, time);
        };
        var internalArg = new RegExp(stripStringRE, 'g').exec(v[i]);
        if (internalArg) {
          if (isString(v[i])) {
            v[i] = v[i].change(['(', stripStringRE, ')'], '');
            v.apply = internalArg;
          }
        }
        var toapply = _arguments;
        _this2[rootKey.current] = lastElement;
        var step, isjs, func, cd;
        if (isFunc(v[i])) {
          if (v.apply) {
            v[i].apply(_this2, v.apply);
          } else {
            v[i].call(_this2, target);
          }
        } else {
          isjs = v[i].match(nativeJs);
          if (isjs) {
            esc.call(_this2, v[i], function (a, b) {
              func = _this2[a];
              if (!isFunc(func)) {
                v[i] = v[i].replace(b, a);
              } else {
                v[i] = v[i].replace(b, "\"" + func.name + "\"");
              }
            });
            v[i] = v[i].replace(regexEscapeRE, '');
            var ev = eval(v[i]);
            if (_this2.hasOwnProperty(ev)) {
              if (v.apply) {
                _this2[ev].apply(_this2, v.apply);
              } else {
                _this2[ev].call(_this2, target);
              }
            } else {
              var dxn = /(\w+)/g;
              return console.error(ev + " undefined");
            }
          } else {
            v[i] = v[i].change([regexEscapeRE, ' '], null);
            if (_this2.hasOwnProperty(v[i])) {
              if (v.apply) {
                _this2[v[i]].apply(_this2, v.apply);
              } else {
                _this2[v[i]].call(_this2, target);
              }
            } else {
              return console.error(v[i] + " undefined");
            }
          }
        }
        function execute(fetch) {
          if (fetch.ob.hasOwnProperty(fetch.key)) {
            fetch.ob[fetch.key].call(this);
          } else {
            // console.warn("[Warning] `" + fetch.key + "` was not defined in method");
            return false;
          }
        }
        execute.call(_this2, {
          key: xiaEvent.update,
          ob: _this2
        });
        for (var _j5 in arg[indexOfArg].data) {
          if (_this2.hasOwnProperty(_j5)) {
            arg[indexOfArg].data[_j5] = _this2[_j5];
          }
        }
        /***
         * for (let j in Uxia.$__root) {
         *  var mark = marker(j).id.toLowerCase();
         *  if (data.identifier.hasOwnProperty(mark)) {
         *   Uxia.$__root[j].$__current = data.identifier[mark];
         *   Uxia.$__root[j].$__remove = () => {
         *    data.identifier[mark].remove();
         *    delete Uxia.$__root[j]
         *   }
         *  } else {}
         * }
         * **/

        // this.hasOwnProperty(xiaEvent.update) ? this[xiaEvent.update].call(this) : false

        function matcher(ob) {
          function run(o) {
            var _this3 = this;
            Object.keys(o).forEach(function (i) {
              if (isObject(o[i])) {
                run.call(_this3, o[i]);
              } else {
                if (i === uadd.model) {
                  if (_this3.hasOwnProperty(o[i])) {
                    Object.keys(_this3[o[i]]).forEach(function (j) {
                      if (!o.hasOwnProperty(j)) {
                        o[j] = _this3[o[i]][j];
                      }
                    });
                  } else {}
                }
              }
            });
          }
          return run.call(this, ob);
        }
        var narg = matcher.call(_this2, arg[indexOfArg].frames);
        update.global.call(globalCaller, arg, _this2);
      } : listener.call(this, i, v[i]);
    } else {
      argArray = !Array.isArray(functionReturn) && isObject(functionReturn) ? Object.values(functionReturn) : functionReturn;
      if (i === 'setAttribute') {
        return argArray.length === 2 ? lastElement[i](argArray[0], argArray[1]) : false;
      } else {
        esc.call(this, functionReturn, function (a, b, c) {
          functionReturn = c;
        });
        lastElement[i] = functionReturn;
      }
    }
  }
  function application(e, output, indexOfArg, methods) {
    var nameFrames = e.nameFrames;
    var vmodel,
      path = spliter(e.path),
      v = e.value,
      about = {
        id: [],
        element: []
      };
    var show = {
      lastPath: function lastPath() {
        return path[0];
      },
      lastPathNexted: function lastPathNexted() {
        return path.length > 0 ? path[0 + 1] : false;
      },
      index: function index(i) {
        return path[i - 1];
      }
    };
    function setAttribute(lastElement, v, i) {
      var isClass, isStyle, array;
      if (Array.isArray(v)) {
        array = v;
      } else {
        array = v[i];
      }
      isClass = string(array).replace(' ');
      isStyle = string(array).replace(';');
      if ('class' == i) {
        lastElement.className = isClass;
      } else if ('style' == i) {
        lastElement[i] = isStyle;
      } else {
        lastElement.setAttribute(i, isClass);
      }
    }
    function setValue(lastElement, v, vm) {
      var meta = callUaData(indexOfArg);
      caller({
        frames: arg[indexOfArg].frames
      }, data.call[indexOfArg]);
      update.value({
        e: lastElement,
        output: output,
        action: e.action,
        indexOfArg: indexOfArg,
        nameFrames: e.nameFrames,
        vmodel: vmodel,
        path: e.path
      }, !v[e.action.split(':')[1]] ? v : v[e.action.split(':')[1]]);
      if (vm) {
        var attrs = vm.getAttributeNames(),
          event,
          bindE;
        attrs.forEach(function (each) {
          event = each.change(['-']);
          if (xiaEvent.hasOwnProperty(event.change(['on']))) {
            var _setFunction$call3;
            bindE = vm.getAttribute(each);
            apply = bindE.match(stripStringRE);
            bindE = bindE.change([apply, regexEscapeRE]);
            setFunction.call(meta, lastElement, (_setFunction$call3 = {}, _setFunction$call3[event] = bindE, _setFunction$call3.apply = apply, _setFunction$call3), event, indexOfArg, nameFrames, output);
          }
        });
      }
      upRep(lastElement);
      if (vm && !getid(vm.id)) {
        var liquifior = function liquifior(index, vm) {
          var e, id;
          if (vm.children.length === index) {
            return output.append(vm);
          }
          if (vm.children.length) {
            e = vm.children[index];
            id = getid(e.id);
            if (id) {
              id.append(e.children[index]);
              e.remove();
            }
            index++;
            liquifior.call({
              id: e.id
            }, index, vm);
          }
          ;
        };
        liquifior(0, vm);
      } else {
        runExpress(vm, lastElement, output);
      }
      if (!autoProp.id[indexOfArg]) {
        autoProp.id[indexOfArg] = {};
      }
      if (!lastElement.id) {
        return;
      }
      data.identifier[lastElement.id] = getid(lastElement.id);
      autoProp.id[indexOfArg][lastElement.id] = getid(lastElement.id);
      if (!data.identified[indexOfArg]) {
        return;
      }
      if (data.identified[indexOfArg].hasOwnProperty(lastElement.id)) {
        data.identified[indexOfArg][lastElement.id] = getid(lastElement.id);
      }
      if (data.identified[indexOfArg].hasOwnProperty(vmodel.id)) {
        data.identified[indexOfArg][vmodel.id] = getid(vmodel.id);
      }

      /****/
    }

    function readyFunction(v, callData) {
      return v.call(callData);
    }
    //une fonction qui transforme path en objet HTML
    function upRep(fetch) {
      var codePath = data.repertoria[indexOfArg][e.path];
      var codeLinkn = data.path[indexOfArg][e.path];
      codeLinkn.e = fetch;
      if (data.repertoria[indexOfArg].hasOwnProperty(e.key)) {
        data.repertoria[indexOfArg][e.key].e = fetch;
      } else {}
    }
    function stringToObject(path, v, lastElement) {
      if (!path.length) {
        //si il n'y a plus de chemin, insÃ©rer le texte
        if (lastElement.id && getid(lastElement.id)) {
          lastElement = getid(lastElement.id);
          if (vmodel.children.length) {
            vmodel.children[0].remove();
          }
        }
        return setValue(lastElement, v, vmodel);
      }
      var mark;
      //crÃ©er l'Ã©lÃ©ment 
      mark = marker(show.lastPath(), indexOfArg);
      upRep(mark.e);
      if (!vmodel) {
        vmodel = mark.e;
        path.shift();
      } else {
        lastElement.append(mark.e);
        path.shift();
      }
      stringToObject(path, v, mark.e);
    }
    if (!system.off) {
      stringToObject(path, v);
    } else {
      return debug.window(output, debug.noAvailable());
    }
    if (vmodel && vmodel.id) {
      //...
    }
    function append(vm) {
      return output.append(vm);
    }
    function runExpress(vm) {
      var child,
        parent,
        idA,
        idB,
        idC,
        root,
        each,
        finished = false,
        isnewid = false,
        attrs;
      attrs = vm.getAttributeNames();
      function call(vm, original, isnewid) {
        parent = vm;
        function isIdExist(model, original) {
          var child = model.children.length ? model.children[0] : false;
          var docOk = getid(model.id);
          return docOk && child ? isIdExist(child, model) : noid(model, original);
          function noid(founded, original) {
            var parent;
            var childs = founded.childNodes;
            if (original && original.id) {
              var idfound = getid(original.id);
              idfound.append(founded);
            } else {}
          }
        }
        return isIdExist(vm);
      }
      return call(vm);
    }
  }
  function isAutoEValide(n) {
    var q = new RegExp(autoProp.elementName, 'g').test(n);
    return q ? q : false;
  }
  var view = {
    marker: viewMarker,
    app: boot
  };
  function viewMarker(callback) {
    var name = document.getElementsByTagName(autoProp.view);
    for (var _iterator3 = _createForOfIteratorHelperLoose(name), _step3; !(_step3 = _iterator3()).done;) {
      i = _step3.value;
      callback(i);
      cleaner(autoProp.id);
    }
  }
  /**________ MECANISM__________**/
  var findPath = function findPath(ob, key, value) {
    var path = [];
    var keyExists = function keyExists(obj) {
      if (!obj || typeof obj !== "object" && !Array.isArray(obj)) {
        return false;
      } else if (obj.hasOwnProperty(key) && obj[key] === value) {
        return true;
      } else if (!value && obj.hasOwnProperty(key)) {
        return true;
      } else if (Array.isArray(obj)) {
        var parentKey = path.length ? path.pop() : "";
        for (var _i23 = 0; _i23 < obj.length; _i23++) {
          path.push(parentKey + "[" + _i23 + "]");
          var result = keyExists(obj[_i23], key);
          if (result) {
            return result;
          }
          path.pop();
        }
      } else {
        for (var _k in obj) {
          path.push(_k);
          var _result = keyExists(obj[_k], key);
          if (_result) {
            return _result;
          }
          path.pop();
        }
      }
      return false;
    };
    keyExists(ob);
    return path.join(".") + ("." + key);
  };
  function parsePath(path, obj) {
    var bailRE = /[^\w.$]/;
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }
  var key = {
    frames: "frames",
    style: "css",
    id: "name",
    methods: "methods",
    prop: "$__prop",
    root: "$_",
    data: "data",
    arg: arguments
  };
  function shortcut(ob) {
    return {
      parse: function parse(path_src) {
        var psrc = parsePath(path_src);
        return psrc(ob);
      }
    };
  }
  function finder(arg, keys) {
    return shortcut(arg).parse(findPath(arg, keys));
  }
  function sort(obj) {
    var allObj = {};
    var arrObj = obj;
    function call(arrObj) {
      for (i in arrObj) {
        if (!Array.isArray(arrObj[i]) || i == "className" || i === "id") {
          allObj[i] = arrObj[i];
          if (this.action === "delete") {
            delete arrObj[i];
          }
        } else {
          if (this.action === "add") {
            for (j in allObj) {
              arrObj[j] = allObj[j];
            }
          }
        }
      }
      return this.action === "delete" ? call.call({
        action: "add"
      }, arrObj) : false;
    }
    call.call({
      action: "delete"
    }, arrObj);
    return arrObj;
  }
  function dixo(paths, n) {
    var last, mark, tag, str;
    var _loop6 = function _loop6() {
        if (!isNaN(paths[p])) {
          indexZ = p - 1;
          last = paths[indexZ];
          mark = marker(last);
          if (mark.id) {
            token = autoProp.elementName + '-';
            if (isNaN(n)) {
              tag = token + paths[p];
            } else {
              tag = token + n;
            }
            paths[p] = mark.name.toLowerCase() + '.' + tag;
          }
          if (!mark.id) {
            var _sniffer = function sniffer(paths, index) {
              var n = paths[indexZ - index];
              function idFound(found, i) {
                //console.log(paths)
              }
              index--;
              return !marker(n).id ? _sniffer(paths, index) : idFound(n, index);
            };
            paths[p] = autoProp.elementName + '-' + paths[p];
          }
        }
      },
      token;
    for (var p in paths) {
      _loop6();
    }
    str = joiner(paths);
    return spliter(str);
  }
  function decomposition(obj, fn, iarg) {
    var isObjVal;
    var about = {
      isWhile: false,
      id: false,
      propOutside: {}
    };
    var path = new Array();
    var status = false;
    var executor = function executor(obj, n) {
      if ('object' === typeof obj && !Array.isArray(obj)) {
        isObjVal = obj;
        $__prop = {};
        var propOutsiding = {};
        var concat = "";
        Object.keys(obj).forEach(function (k) {
          if (k === uadd.model) {
            if (!data.uamodel[iarg]) {
              data.uamodel[iarg] = {};
            }
            if (!data.call[iarg]) {
              data.call[iarg] = {};
            }
            data.uamodel[iarg][obj[k]] = obj;
            data.call[iarg][obj[k]] = obj;
          }
          var prop,
            isIntKeys = false;
          if (!isNaN(k)) {
            about.isWhile = true;
            isIntKeys = true;
            prop = obj[rootKey.prop];
            if (prop) {
              Object.keys(prop).forEach(function (j) {
                if (isString(prop[j])) {
                  if (j !== "style") {
                    obj[k][j] += ' ' + prop[j];
                  } else {
                    obj[k][j] += ';' + prop[j];
                  }
                } else {
                  var _Object$assign2;
                  Object.assign(obj[k], (_Object$assign2 = {}, _Object$assign2[j] = prop[j], _Object$assign2));
                }
              });
            }
          } else {
            if (obj[rootKey.prop]) {
              prop = obj[rootKey.prop];
              var last = path[path.length - 1];
              for (var _j8 in prop) {
                obj[k][_j8] = prop[_j8];
              }
            }
          }

          /***/
        });

        if (obj[rootKey.prop]) {
          delete obj[rootKey.prop];
        }
        Object.keys(obj).forEach(function (k) {
          if (k === rootKey.parent || k === rootKey.hide || k === rootKey.remove) {
            return;
          }
          path.push(k);
          var result = executor(obj[k], k);
          if (result) {
            if (fn) {
              about.propOutside = propOutsiding;
              if (!about.id) {}
              if (Array.isArray(obj[k]) && isObject(obj[k])) {
                if (obj[k].length === 0) {
                  dxo = dixo(joiner(path).split('.'), n).join(".");
                  var _last = dxo.split('.'),
                    xd;
                  xd = _last.pop();
                  _last.push('innerHTML');
                  fn.call(about, _last.join('.'), ' ', obj, k, isObjVal);
                }
                if (obj[k].length && !isObject(obj[k][0])) {
                  dxo = dixo(joiner(path).split('.'), n).join(".");
                  fn.call(about, dixo(dxo.split('.'), n).join("."), obj[k], obj, k, isObjVal);
                  /***/
                } else {
                  var objv = {};
                  for (var b = 0; b < obj[k].length; b++) {
                    if (!isObject(obj[k][b])) {
                      // return
                    }
                    if (obj[k][b].hasOwnProperty(uadd.model)) {
                      console.log(obj[k][b]);
                    }
                    if (datablank !== obj[k][b]) {
                      var createid = path.push(b);
                      for (var c in obj[k][b]) {
                        var value = obj[k][b][c];
                        var _dxo = void 0;
                        var paths = void 0;
                        path.push(c);
                        _dxo = dixo(path, b).join(".");
                        if (path.length !== 1) {
                          paths = AI.structure(_dxo.split('.'), iarg);
                        }
                        about.dixo = paths;
                        // console.log(paths)
                        fn.call(about, dixo(path, b).join("."), value, obj[k][b], k, obj[k][b]);
                        path.pop();
                      }
                      path.pop();
                    } else {
                      //...
                    }
                  }
                }
              } else {
                var _dxo2, _paths;
                _dxo2 = dixo(joiner(path).split('.'), n).join(".");
                var fpath = path.join('.').split('.');
                if (fpath.length !== 1) {
                  var cb = _dxo2.split('.');
                  _paths = AI.structure(cb, iarg);
                } else {
                  //...
                }
                about.dxo = _paths;
                fn.call(about, dixo(_dxo2.split('.'), n).join("."), obj[k], obj, k, isObjVal);
              }
            }
          } else {}
          path.pop();
        });
      } else {
        return true;
      }
    };
    executor(obj);
  }
  function add_root_methods(styleobj) {
    var _loop7 = function _loop7(f) {
      styleobj[f][rootKey.toStr] = function () {
        update.stylesheet();
        return autoProp.style[f];
      };
    };
    for (var f in styleobj) {
      _loop7(f);
    }
  }
  function bootLoader(base, callback) {
    for (i in base) {
      var styles = base[i][key.style];
      var names = base[i][key.id];
      var additional = base[i][key.data];
      isNameOk(names);
      if (data) {
        data.additionalData = additional;
      }
      if (styles) {
        add_root_methods(styles);
        data.objStyle = styles;
        create.style(styles);
      }
      if (!base[i][key.frames] || !Object.keys(base[i][key.frames]).length) {
        return console.error(key.frames + " undefined or empty at {{" + i + "}} arguments");

        /**
         * ___ if object do not contain frames ___
        for (method in arguments[i][key.methods]) {
         for (prop in autoProp.id) {
          if (!isNaN(prop)) {
           autoProp.id[prop][method] = arguments[i][key.methods][method]
          }
         }
        }
        ___**/
      } else {
        !data.index ? data.index = [i] : data.index.push(i);
        callback(base, i);
      }
    }
  }
  bootLoader(arg, function (obj, i) {
    autoMark(obj[i], i);
  });
  function spliter(a) {
    return a && isString(a) ? a.split(".") : console.error(a + ' is not a string');
  }
  function joiner(a) {
    return a && Array.isArray(a) ? a.join(".") : console.error(a + ' is not a Array');
  }
  function autoMark(data, indexOfArg) {
    if (!data) {
      return;
    }
    var bop = new Array(),
      pathList = new Object(),
      frames = data[key.frames],
      methods = data[key.methods];
    if (!Object.keys(frames).length) {//return false 
    }
    decomposition(frames, function (path, value, obj, i, isov) {
      var paths = spliter(path);
      var typeOfValue;
      if (paths.length) {
        paths = AI.structure(paths, indexOfArg);
      }
      path = joiner(paths);
      var fPath = path,
        mode = {
          "while": false,
          identifier: false
        },
        mark;
      var last = function last(init) {
        pathArr = spliter(path);
        return pathArr[pathArr.length - init];
      };
      if (rootRE(last(2))) {
        nativeUa.root[last(3)] = {
          parentKeys: last(2),
          id: marker(last(3)).id,
          value: isov,
          path: [path]
        };
        return;
      }
      mark = marker(last(1));
      ;
      if (isAutoEValide(last(2))) {
        value = isov;
      }
      if (Object.keys(this.propOutside).length) {
        value = this.propOutside;
      }
      if (isHTMLTag.indexOf(last(1) == -1) && isString(value)) {
        var str = value;
      }
      if ("string" === typeof value || Array.isArray(value) || "function" === typeof value) {
        if (isHTMLTag.indexOf(mark.name.toLowerCase()) === -1 || compare.string2("style", last(1))) {
          var np = spliter(fPath);
          np.pop();
          fPath = joiner(np);
          if (isov[last(1)]) {
            if (isString(value) && isov[last(1)] !== value || isFunc(value) && isov[last(1)].name !== value.name) {
              var _value2;
              value = (_value2 = {}, _value2[last(1)] = value, _value2);
            } else {
              var _value3;
              value = (_value3 = {}, _value3[last(1)] = isov[last(1)], _value3);
            }
            typeOfValue = system.define.call({
              value: isov[last(1)]
            }, last(1));
          } else {
            if (isFunc(value)) {
              var _value4;
              value = (_value4 = {}, _value4[last(1)] = value, _value4);
              typeOfValue = "function:" + last(1);
            } else if (isString(value)) {
              if (!isNaN(i)) {
                fPath += i;
                i = 'textContent';
              }
              typeOfValue = "string:" + i;
              value = ULink(i, value);
            } else if (Array.isArray(value)) {
              var _value5;
              value = (_value5 = {}, _value5[last(1)] = value, _value5);
              typeOfValue = "array:" + last(1);
            }
          }
        } else {
          typeOfValue = "string:textContent";
        }
      } else {
        var np = spliter(fPath);
        np.pop();
        fPath = joiner(np);
      }
      typeOfValue = system.define.call({
        value: isov[last(1)] ? isov[last(1)] : value
      }, last(1));
      view.app({
        path: fPath,
        value: value,
        name: data[key.id],
        ownpath: path,
        indexE: 0,
        typeOfValue: typeOfValue
      }, indexOfArg, data[key.id], methods);
      /**____**/
    }, indexOfArg);
  }
  function deleteAutoElement(name) {
    var e = document.getElementsByTagName(name);
    if (!e.length) {
      return;
    }
    function getAttrsProperty(e) {
      var attrs = e.getAttributeNames();
      var obj = {};
      for (i in attrs) {
        obj[attrs[i]] = e.getAttribute(attrs[i]);
      }
      return obj;
    }
    function call(e) {
      var _loop8 = function _loop8() {
          ischild = e[i].children;
          text = e[i].textContent;
          if (!ischild.length) {
            if (text) {
              p = e[i].parentElement;
              attrs = e[i].getAttributeNames();
              obj = {};
              for (j in attrs) {
                obj[attrs[j]] = e[i].getAttribute(attrs[j]);
                p.setAttribute(attrs[j], e[i].getAttribute(attrs[j]));
              }
              if (p) {
                g = e[i].getAttributeNames();
                e[i].remove();
                p.textContent = text;
              } else {}
            } else {
              if (e[i].tagName.toLowerCase() === autoProp.elementName) {
                e[i].remove();
              } else {
                return {
                  v: console.warn("code #1")
                };
              }
            }
            deleteAutoElement(name);
          } else {
            var deleteWrap = function deleteWrap(y) {
              var h = [];
              for (var _iterator4 = _createForOfIteratorHelperLoose(y.children), _step4; !(_step4 = _iterator4()).done;) {
                j = _step4.value;
                h.push(j);
              }
              h.forEach(function (n) {
                y.after(n);
              });
              y.remove();
            };
            deleteWrap(e[i]);
            deleteAutoElement(name);
          }
        },
        ischild,
        text,
        p,
        attrs,
        obj,
        g,
        _ret2;
      for (i = 0; i < e.length; i++) {
        _ret2 = _loop8();
        if (_ret2) return _ret2.v;
      }
    }
    return call(e);
  }
  function run_style() {
    for (var _i24 in arg) {
      add.style(autoProp.style, arguments, _i24);
    }
  }
  function rootRE(str) {
    var rgxp = /^(\$_)((?:.|\n)+)/g;
    return rgxp.exec(str);
  }
  function typeOfStyle(str) {
    var rgxp = /^(class|id|tag)((?:.|\n)+)/g;
    return rgxp.exec(str);
  }
  function addStyle(styles, arg, index) {
    var styleElement = document.getElementsByTagName("style");
    var i = index;
    var styletxt = "";
    var _loop9 = function _loop9() {
        classType = typeOfStyle(style);
        id = style;
        prop = styles[style];
        isidRoot = rootRE(id);
        str = "";
        if (Array.isArray(isidRoot) && isidRoot.length && isidRoot[2]) {
          isidRoot[2] = '_' + index + isidRoot[2];
        }
        exist = isidRoot ? data.elements[index].hasOwnProperty(isidRoot[2]) : null;
        autoProp.id = data.call;
        if (exist) {
          e = getid(data.elements[index][isidRoot[2]].id);
        } else {
          if (isidRoot) {
            e = document.getElementById(isidRoot[2]);
            if (e) {
              exist = true;
            }
          }
        }
        if (isidRoot) {
          if (exist) {
            classMark = 'uxia-' + isidRoot[2] + '-' + index;
            classList = e.className;
            classList = classMark;
            str = "." + classMark.replaceAll(" ", "") + " { " + prop + " }";
            styletxt += str;
            autoProp.genered[id] = classMark;
            if (!e.classList.contains(classMark)) {
              e.classList.add(classMark);
            }
            /*
            return {
              v: e.style = prop
            };
            /**/
            e.style = prop
          }
        } else if (classType && classType.length === 3) {
          if ("class" === classType[1]) {
            id = "." + classType[2];
          } else if ("id" === classType[1]) {
            id = "#" + classType[2];
          } else if ("tag" === classType[1]) {
            id = classType[2];
          }
          str = id.toLowerCase() + " { " + prop + " }";
          styletxt += str;
        } else {
          separe = style.split(rootKey.dir);
          if (separe.length !== 2) {
            return {
              v: void 0
            };
          }
          effet = separe[0];
          styleRoot = rootRE(separe[1]);
          classType$1 = typeOfStyle(separe[1]);
          if (classType$1) {
            if ("class" === classType$1[1]) {
              id = "." + classType$1[2];
            } else if ("id" === classType$1[1]) {
              id = "#" + id.toLowerCase();
            } else if ("tag" === classType$1[1]) {
              id = classType$1[2];
            }
            str = "" + id.toLowerCase() + effet + " { " + prop + " }";
            styletxt += str;
          } else if (styleRoot) {
            var rootEffet = function rootEffet(effet) {
              if (!autoProp.genered[nameStyleRoot]) {
                return;
              }
              var generedClassName = autoProp.genered[nameStyleRoot];
              str = "." + generedClassName.change(' ', null) + effet + " { " + propRoot + " }";
              return str ? str : '';
            }; 
            nameStyleRoot = styleRoot[0];
            propRoot = prop;
            str = rootEffet(effet);
            styletxt += str ? str : "";
          }
        }
      },
      classType,
      id,
      prop,
      isidRoot,
      str,
      e,
      exist,
      classMark,
      classList,
      separe,
      effet,
      styleRoot,
      classType$1,
      nameStyleRoot,
      propRoot,
      _ret3;
    for (style in styles) {
      _ret3 = _loop9();
      if (_ret3) return _ret3.v;
    }
    setTimeout(function () {
      if (styleElement.length) {
        var autostyle = document.createElement('style');
        autostyle.setAttribute('id', 'uxia-style');
        autostyle.setAttribute('type', 'text/css');
        autostyle.textContent = styletxt;
        if (getid('uxia-style')) {
          getid('uxia-style').textContent = styletxt;
          //  console.log(styletxt)
        } else {
          document.getElementsByTagName("head")[0].append(autostyle);
        }
      }
    }, 0);
    /***/
  }

  function nativeUaRoot() {
    var row, id;
    for (i in nativeUa.root) {
      row = nativeUa.root[i];
      id = getid(row.id);
      if (id) {
        if (row.parentKeys === "$__code" || row.parentKeys === "$__viewCode") {
          //if native code
        }
      }
    }
  }
  setTimeout(function () {
    nativeUaRoot();
    remove.autoElement(autoProp.elementName);
    var fetch = data.identifier;
    for (var id in fetch) {
      if (getid(fetch[id].id)) {
        //  getid(fetch[id].id).removeAttribute('id');
      } else {}
    }
    for (var _i25 in arg) {
      if (arg[_i25]["extends"]) {
        var _e = document.getElementsByTagName(autoProp.view)[_i25],
          parent = void 0;
        if (parent) {
          //...
        }
      }
    }
  }, 0);
  loadData();
  run_style();
  caller(arg, Uxia);
  return Uxia;
});
/** 1811 **/
/** 2045 **/
