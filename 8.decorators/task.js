function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let result = cache.filter(item => item.hash === hash);
    if (result.length === 1) {
      console.log("Из кэша: " + result[0].value);
      return "Из кэша: " + result[0].value;
    } else {
      let value = func(...args);
      if (cache.length > 5) {
        cache.shift();
      } else {
        cache.push({ hash, value });
      }
      console.log("Вычисляем: " + value);
      return "Вычисляем: " + value;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let nextCall = true;

  function wrapper(...args) {
    if (nextCall) {
      func.apply(this, ...args);
      nextCall = false;
      return;
    }
    clearTimeout(interval);
    let interval = setTimeout(() => {
      func.apply(this, ...args);
      nextCall = true;
    }, ms)
  }
  return wrapper;
}

function debounceDecorator2(debounceDecoratorNew) {
  let count = 0;
  function wrapper(...args) {
    wrapper.history = count++;
    return debounceDecoratorNew.call(this, ...args);
  }
  return wrapper;
}