#include <string>
#include <vector>
#include <queue>
#include <iostream>

using namespace std;

int dy[4] = {-1, 1, 0, 0};
int dx[4] = {0, 0, -1, 1};

int bfs(const vector<string>& maps, int sy, int sx, char target){
    int n = (int)maps.size(), m = (int)maps[0].size();
    vector<vector<int>> dist(n, vector<int>(m, -1));
    queue<pair<int, int>> q;
    
    dist[sy][sx] = 0; //시작지점 0
    q.push({sy, sx});
    
    while(!q.empty()){
        auto [y, x] = q.front(); q.pop();
        
        for(int d=0; d<4; d++){
            int ny = y + dy[d], nx = x + dx[d];
            
            if(ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
            if(dist[ny][nx] != -1) continue;
            if(maps[ny][nx] == 'X') continue;
            
            dist[ny][nx] = dist[y][x] + 1;
            
            if(maps[ny][nx] == target) {return dist[ny][nx];}
            
            q.push({ny, nx});
        }
        
        
    }
    return -1;
}


int solution(vector<string> maps) {
    
    int sy, sx, ly, lx;
    int n = (int)maps.size(), m = (int)maps[0].size();
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            if(maps[i][j] == 'S') {sy=i; sx=j;}
            if(maps[i][j] == 'L') {ly=i; lx=j;}
        }
    }
    
    int toL = bfs(maps, sy, sx, 'L');
    if(toL == -1) {return -1;}
    
    int toE = bfs(maps, ly, lx, 'E');
    if(toE == -1) {return -1;}
    
    return toL + toE;
}