#include <iostream>
#include <queue>
#include <string>

using namespace std;

class Point
{
 private:
  int x,y;
  int level;
 
 public:
  Point(int x, int y, int level) : level(level), x(x), y(y) {}
  int GetX() const {return x;}
  int GetY() const {return y;}
  int GetLevel() const {return level;}
};

bool CheckRange(int x, int y, int N, int M) {
 if(x>=0 && x<N && y>=0 && y<M)
  return true;
 else
  return false;
}

int main(int argc, char** argv) {
 int N,M;
 cin >> N >> M;
 
 int (*map)[M] = (int(*)[M])new int[N*M];
 bool (*visit)[M] = (bool(*)[M])new bool[N*M];

 int dx[4] = {-1,0,1,0}, dy[4] = {0,1,0,-1};
 queue<Point> q;
 string w;
 
 for(int i=0; i<N; i++) {
  cin >> w;
  for(int j=0; j<M; j++) {
   map[i][j] = (w[j]-'0');
   if(!map[i][j]) visit[i][j] = true;
  }
 }
 
 int level;
 int x, y;
 
 int m = 10001;
 
 q.push(Point(0,0,1));
 
 while(!q.empty()) {
  Point p = q.front();
  int i = p.GetX();
  int j = p.GetY();
  level = p.GetLevel();
  
  if(i == N-1 && j == M-1) {
   m = min(m, level);
  }
  
  for(int r=0; r<4; r++) {
   x = i + dx[r];
   y = j + dy[r];
   
   if(CheckRange(x,y,N,M) && !visit[x][y]) {
    visit[x][y] = true;
    q.push(Point(x,y,level+1));
   }
  } 
  q.pop();
  level --;
 }
 
 cout << m;
 return 0;
}
