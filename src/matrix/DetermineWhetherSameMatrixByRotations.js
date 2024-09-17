/***************************************************************************
 * Problem No. : 1886
 * Problem Name: Determine Whether Matrix Can Be Obtained By Rotation
 * Date        : September 17, 2024
 * Author      : @codingbro
 *
 * meta        : tag-matrix
 ***************************************************************************/

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  for (let i = 0; i < 4; i++) {
    if (isEqual(mat, target)) {
      return true;
    } else {
      rotate(mat);
    }
  }

  return false;
};

const isEqual = (mat, target) => {
  const n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] !== target[i][j]) {
        return false;
      }
    }
  }

  return true;
};

const rotate = (mat) => {
  const n = mat.length;

  // rotate based on the diagonal
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }

  // reverse each row to get final 90-degree increment
  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }
};

module.exports = {
  findRotation
};
