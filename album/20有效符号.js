var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count++
                track(grid, i, j)
            }
        }
    }

    function track(x, y) {
        if (x < 0 || x >= m || y < 0 || y >= n) {
            return
        }
        if (grid[x][y] === 0) {
            return;
        }
        grid[x][y] = 0;
        track(x, y + 1)
        track(x, y - 1)
        track(x - 1, y)
        track(x + 1, y)
    }
}


console.log('123'[11])