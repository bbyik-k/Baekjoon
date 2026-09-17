#include <vector>
#include <algorithm>
#include <map>
#include <queue>
#include <iostream>
#include <string>
using namespace std;

bool solution(string s)
{
    bool answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // cout << "Hello Cpp" << endl;
    
    int countP = count(s.begin(), s.end(), 'p') + count(s.begin(), s.end(), 'P');
    
    int countY = count(s.begin(), s.end(), 'y') + count(s.begin(), s.end(), 'Y');
    
    

    return countP == countY;
}