export function getArrangements(denominations) {
  function permutations(arr) {
    let ret = [];

    for (let i = 0; i < arr.length; i = i + 1) {
      let rest = permutations(arr.slice(0, i).concat(arr.slice(i + 1)));

      if (!rest.length) {
        ret.push([arr[i]]);
      } else {
        for (let j = 0; j < rest.length; j = j + 1) {
          ret.push([arr[i]].concat(rest[j]));
        }
      }
    }
    return ret;
  }

  function combinations(arr) {
    function comb(n, src, got, all) {
      if (n == 0) {
        if (got.length > 0) {
          all[all.length] = got;
        }
        return;
      }
      for (let j = 0; j < src.length; j++) {
        comb(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
      }
      return;
    }
    let all = [];
    for (let i = 1; i < arr.length; i++) {
      comb(i, arr, [], all);
    }
    all.push(arr);
    return all;
  }

  const result = [];

  combinations(denominations).forEach(c => {
    permutations(c).forEach(p => {
      result.push(p);
    });
  });

  return result;
}
