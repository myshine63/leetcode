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
    // 处理越界
    if (x < 0 || x >= lenx || y < 0 || y >= leny) {
        return
    }
    // 当遇到海洋的时候，也需要终止,可以和上面合并写到一起
    if (grid[x][y] === '0') {
        return;
    }
    grid[x][y] = '0'; // 将陆地修改成海洋，避免重复遍历
    track(grid, x + 1, y);
    track(grid, x - 1, y);
    track(grid, x, y + 1);
    track(grid, x, y - 1);
}