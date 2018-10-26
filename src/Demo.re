module Observable = {
  let observers = ref([]);
  let subscribe = observer => observers := [observer, ...observers^];
  let next = value =>
    List.iter(observer => observer#next(value), observers^);
};

module Alex = {
  include Observable;
  let count = ref(0);
  let next = _ => count := count^ + 1;
};

Alex.next();

/* module Observable = { */
/*   type t('a) = {mutable observers: list('a)}; */
/*   let make = () => {observers: []}; */
/*   let next = (observable, value) => */
/*     List.iter(observer => observer#next(value), observable.observers); */
/*   let subscribe = (observable, observer) => */
/*     observable.observers = [observer, ...observable.observers]; */
/* }; */

/* type therapist = {mutable beersTracked: int}; */
/* type alcoholic = {mutable beersConsumed: int}; */

/* let edwin = Observable.make(); */
/* let alex = Observable.make(); */
/* let freud = {beersTracked: 0}; */

/* let drink = observable => { */
/*   observable.beersConsumed = observable.beersConsumed + 1; */
/*   List.iter( */
/*     observer => observer.beersTracked = observer.beersTracked + 1, */
/*     observable.observers, */
/*   ); */
/* }; */

/* subscribe(edwin, freud); */
/* subscribe(alex, freud); */
/* drink(edwin); */
/* drink(alex); */
/* let num = freud.beersTracked; */
/* Js.log({j|The therapist counted $num beers|j}); */
