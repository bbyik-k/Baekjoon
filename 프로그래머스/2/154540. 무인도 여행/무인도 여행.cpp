#include <string>
#include <vector>
#include <queue>
#include <iostream>
#include <algorithm>

using namespace std;

vector<string> worldMaps;
int sizeY, sizeX;

int dy[4] = {-1, 1, 0, 0};
int dx[4] = {0, 0, -1, 1};

int bfs(int sy, int sx){
    
    queue<pair<int,int>> q;
    
    int total = worldMaps[sy][sx] -'0';
    worldMaps[sy][sx] = 'X';
    q.push({sy, sx});
    
    while(!q.empty()){
        auto [y, x] = q.front(); q.pop();
        
        for(int d=0; d<4; d++){
            int ny = y + dy[d], nx = x + dx[d];
            
            if(ny < 0 || ny >= sizeY || nx < 0 || nx >= sizeX) continue;
            if(worldMaps[ny][nx] == 'X') continue;
            
            total += worldMaps[ny][nx] -'0';
            worldMaps[ny][nx] = 'X';
            q.push({ny, nx});
        }
    }
    return total;
}

vector<int> solution(vector<string> maps) {
    vector<int> answer;
    
    worldMaps = maps;
    
    sizeY = (int)worldMaps.size(), sizeX = (int)worldMaps[0].size();
    vector<int> totalList;
    
    for(int i=0; i<sizeY; i++){
        for(int j=0; j<sizeX; j++){
            if (worldMaps[i][j] != 'X'){
                int total = bfs(i, j);
                totalList.push_back(total);
            }
        }
    }
    
    
    //1. [0][0] 부터 X 가 아닌 지점 찾아서, 찾으면 bfs -> 연결된 땅 탐색 시작
    //2. bfs내의 total 변수 등에 누적합을 구하고
    //3. 방문한 곳은 X 표시
    //4. 누적합 반환하여 리스트에 담기
    //5. 다시 1의 for문 진행
    //6. 모두 X가 되면 오름차순 후 반환
    
    // return answer;
    sort(totalList.begin(), totalList.end());
    // if((int)totalList.size() < 1) {return [-1];}
    if((int)totalList.size() < 1) {totalList.push_back(-1);};
    return totalList;
}