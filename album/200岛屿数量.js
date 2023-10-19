var numIslands = function (grid) {
    let res = 0;
    // 遍历每一个节点，如果是陆地，则计数一次
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            // 获取第一个陆地
            if (grid[x][y] === "1") {
                // 以该陆地为中心，将相连的陆地改成海洋
                track(grid, x, y)
                res++
            }
        }
    }
    return res;
};

function track(grid, x, y) {
    let lenx = grid.length;
    let leny = grid[0].length;
    // 以x，y为中心，从四个方法，将相连的陆地修改成海洋。
    grid[x][y] = "0";

    if (x - 1 >= 0 && grid[x - 1][y] === "1") {
        track(grid, x - 1, y)
    }
    if (x + 1 < lenx && grid[x + 1][y] === "1") {
        track(grid, x + 1, y)
    }
    if (y - 1 >= 0 && grid[x][y - 1] === "1") {
        track(grid, x, y - 1)
    }
    if (y + 1 < leny && grid[x][y + 1] === "1") {
        track(grid, x, y + 1)
    }
}