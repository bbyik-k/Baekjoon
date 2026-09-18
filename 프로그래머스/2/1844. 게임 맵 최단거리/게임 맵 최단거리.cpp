#include<vector>
#include<queue>
using namespace std;

int dy[4] = {-1, 1, 0, 0};
int dx[4] = {0, 0, -1, 1};

int solution(vector<vector<int> > maps)
{
    int sy = 0, sx = 0; //탐색 시작 위치 고정
    
    int n = (int)maps.size(), m = (int)maps[0].size(); //map 사이즈
    
    vector<vector<int>> dist(n, vector<int>(m,-1)); //거리측정맵 생성
    queue<pair<int, int>> q; //큐
    q.push({sy, sx});
    dist[sy][sx] = 1; //지나온 블럭 1부터 시작
    
    while(!q.empty()){
        auto [y,x] = q.front(); q.pop();
        
        for(int d=0; d<4; d++){
            int ny = y + dy[d], nx = x + dx[d];
            
            if(ny < 0 || ny >= n || nx < 0 || nx >= m) continue; //맵 벗어나면 제외
            if(dist[ny][nx] != -1) continue; // 이미 방문 제외
            if(maps[ny][nx] == 0) continue; // 벽 제외
            dist[ny][nx] = dist[y][x] + 1;
            q.push({ny, nx});
        }
    }
    return dist[n-1][m-1];
}