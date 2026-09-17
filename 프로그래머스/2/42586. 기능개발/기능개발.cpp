#include <vector>
#include <algorithm>
#include <map>
#include <queue>
#include <iostream>
#include <string>
using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    
    int n = (int)progresses.size();
    vector<int> days(n);
    for(int i=0; i<n; i++){
        days[i] = (100+speeds[i]-1 - progresses[i]) / speeds[i];
    }
    
    int currentMax = days[0]; //기준 배포일
    int count = 1;
    
    for(int i=1; i<(int)days.size(); i++){
        if(days[i] <= currentMax){
            count++;
        }else {
            answer.push_back(count);
            currentMax = days[i];
            count = 1;
        }
    }
    
    answer.push_back(count); // 마지막 배포 묶음
    
    return answer;
}