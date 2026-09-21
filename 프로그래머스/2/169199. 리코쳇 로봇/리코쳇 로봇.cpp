#include <string>
#include <vector>
#include <queue>
#include <iostream>

using namespace std;

int dy[4] = {-1, 1, 0, 0};
int dx[4] = {0, 0, -1, 1};

int bfs(const vector<string>& maps, int sy, int sx){
    int n = (int)maps.size(), m = (int)maps[0].size();
    
    vector<vector<int>> dist(n, vector<int>(m, -1));
    queue<pair<int,int>> q;
    
    dist[sy][sx] = 0;
    q.push({sy, sx});
    
    while(!q.empty()){
        auto [y,x] = q.front(); q.pop();
        
        for(int d=0; d<4; d++){
            int ny = y, nx = x;
            // cout << "11 ny: " << ny << " nx: " << nx << endl;
            while(1){
                int ty = ny + dy[d], tx = nx + dx[d];
                
                // cout << "22 ty: " << ty << " tx: " << tx << endl;
            
                if(ty < 0 || ty >= n || tx <0 || tx >= m) break; //맵 범위
                
                if(maps[ty][tx] == 'D') break; //벽 건너 뛰기 
                ny = ty; nx = tx;
            }
            if(dist[ny][nx] != -1) continue; //방문 건너 뛰기
            dist[ny][nx] = dist[y][x] + 1;
            if(maps[ny][nx] == 'G') {
                return dist[ny][nx];
            }
            q.push({ny, nx});
        }
    }
    
    // for(int i=0; i<n; i++){
    //     for(int j=0; j<m; j++){
    //         cout << dist[i][j];
    //     }
    //     cout << '\n';
    // }
    
    return -1;
    
}

int solution(vector<string> board) {
    
    int answer = 0;
    
    int n = (int)board.size(), m = (int)board[0].size();
    int rx, ry, gx, gy;
    
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            if(board[i][j] == 'R') {rx = i; ry = j;};
            // if(board[i][j] == "G") {gx = i; gy = j;};
        }
    }
    
    answer = bfs(board, rx, ry);
    // bfs(board, gx, gy);
    
    return answer;
    
    
}