// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

var shared = [
  "print",
  "next"
];

function observable_init($$class) {
  var ids = CamlinternalOO.new_methods_variables($$class, [
        "subscribe",
        "next"
      ], ["observers"]);
  var subscribe = ids[0];
  var next = ids[1];
  var observers = ids[2];
  CamlinternalOO.set_methods($$class, /* array */[
        subscribe,
        (function (self$1, observer) {
            self$1[observers][0] = /* :: */[
              observer,
              self$1[observers][0]
            ];
            return /* () */0;
          }),
        next,
        (function (self$1, value) {
            return List.iter((function (observer) {
                          return Caml_oo_curry.js2(-922581773, 1, observer, value);
                        }), self$1[observers][0]);
          })
      ]);
  return (function (_, self) {
      var self$1 = CamlinternalOO.create_object_opt(self, $$class);
      self$1[observers] = /* record */[/* contents : [] */0];
      return self$1;
    });
}

var observable = CamlinternalOO.make_class([
      "next",
      "subscribe"
    ], observable_init);

var alex = Curry._1(observable[0], 0);

var $$class = CamlinternalOO.create_table(shared);

var ids = CamlinternalOO.new_methods_variables($$class, shared, ["count"]);

var print = ids[0];

var next = ids[1];

var count = ids[2];

CamlinternalOO.set_methods($$class, /* array */[
      next,
      (function (self$2, _) {
          self$2[count][0] = self$2[count][0] + 1 | 0;
          return /* () */0;
        }),
      print,
      (function (self$2, _) {
          console.log(self$2[count]);
          return /* () */0;
        })
    ]);

function obj_init() {
  var self = CamlinternalOO.create_object_opt(0, $$class);
  self[count] = /* record */[/* contents */0];
  return self;
}

CamlinternalOO.init_class($$class);

var therapist = obj_init(0);

Caml_oo_curry.js2(421006154, 2, alex, therapist);

Caml_oo_curry.js2(-922581773, 3, alex, /* () */0);

Caml_oo_curry.js2(-922581773, 4, alex, /* () */0);

Caml_oo_curry.js2(-930392019, 5, therapist, /* () */0);

exports.observable = observable;
exports.alex = alex;
exports.therapist = therapist;
/* observable Not a pure module */
