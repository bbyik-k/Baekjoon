#include <vector>
#include <algorithm>
#include <map>
#include <queue>
#include <iostream>
#include <string>
using namespace std;

vector<int> solution(vector<int> answers) {
    vector<int> result;
    vector<int> supo1 = {1, 2, 3, 4, 5};
    vector<int> supo2 = {2, 1, 2, 3, 2, 4, 2, 5};
    vector<int> supo3= {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    
    vector<vector<int>> supo = {
        {1, 2, 3, 4, 5},
        {2, 1, 2, 3, 2, 4, 2, 5},
        {3, 3, 1, 1, 2, 2, 4, 4, 5, 5}
    };
    
    vector<int> correct(3,0);
    
    int n = (int)answers.size();
    for(int i=0; i < n; i++){
        for(int j=0; j<3; j++){
            if(supo[j][i%supo[j].size()] == answers[i]){
                correct[j]++;
            }
        }
            
//         int s1 = supo1[i % supo1.size()];
//         int s2 = supo2[i % supo2.size()];
//         int s3 = supo3[i % supo3.size()];
        
//         if (s1 == answers[i]) {
//             correct[0]++;
//         }
//         if (s2 == answers[i]) {
//             correct[1]++;
//         }
//         if (s3 == answers[i]) {
//             correct[2]++;
//         }    
    }
    int best = *max_element(correct.begin(), correct.end());
    
    
    for (int i=0; i<3; i++){
        if(correct[i] == best){
            result.push_back(i+1);
        }
    }
    
    return result;
}