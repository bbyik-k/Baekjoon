#include <string>
#include <vector>
#include <queue>

using namespace std;

int dy[4] = {-1, 1, 0, 0};
int dx[4] = {0, 0, -1, 1};

int bfs(const vector<string>& maps, int sy, int sx, char target){
    int n = (int)maps.size(), m = (int)maps[0].size();
    vector<vector<int>> dist(n, vector<int>(m, -1));
    queue<pair<int, int>> q;
    
    dist[sy][sx] = 0; //현재 위치는 0초
    q.push({sy, sx});
    
    while(!q.empty()){
        auto [y, x] = q.front(); q.pop();
        
        for(int d=0; d<4; d++){
            int ny = y+dy[d], nx = x+dx[d];
            
            if(ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
            if(dist[ny][nx] != -1) continue;
            if(maps[ny][nx] == 'X') continue;
            
            dist[ny][nx] = dist[y][x] + 1;
            if(maps[ny][nx] == target){return dist[ny][nx];}
            q.push({ny, nx});
        }
    }
    return -1;
}

int solution(vector<string> maps) {
    int sizeY = (int)maps.size(), sizeX = (int)maps[0].size();
    
    int sy, sx, ly, lx; //시작점 yx, 레버 yx
    
    for(int i=0; i<sizeY; i++){
        for(int j=0; j<sizeX; j++){
            if(maps[i][j] == 'S'){sy = i; sx = j;}
            if(maps[i][j] == 'L'){ly = i; lx = j;}
        }
    }
    
    //레버까지 최단거리
    int toL = bfs(maps, sy, sx, 'L');
    if(toL == -1) return -1;
    
    //출구까지 최단거리
    int toE = bfs(maps, ly, lx, 'E');
    if(toE == -1) return -1;
   
    return toL + toE;
}