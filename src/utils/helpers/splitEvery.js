export default (array, length) =>
  array.reduce((result, item, index) => {
    if (index % length === 0) result.push([]);
    result[Math.floor(index / length)].push(item);
    return result;
  }, []);
