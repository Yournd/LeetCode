/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let tmp = init;
    return {
        increment: () => {
            return ++tmp;
        },
        decrement: () => {
            return --tmp;
        },
        reset: () => {
            return tmp = init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */