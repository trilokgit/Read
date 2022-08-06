#include<bits/stdc++.h>
using namespace std;
#define endl "\n"
#define int long long int
const int M = 1e18;
const int N = 1e5 + 10;
const int mod = 1e9 + 7;


int32_t main(){

    ios::sync_with_stdio(0);
    cin.tie(0);
    cin.tie(0);

    int n;
    cin>>n;
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int i = 0;i<n;i++){
        int x;
        cin >> x;
        pq.push(x);
    }
    int ans = 0;
    while(pq.size() != 1){

        int x1 = pq.top();
        pq.pop();
        int x2 = pq.top();
        pq.pop();
        ans =   x1 + x2;
        pq.push(ans);
    }

    cout << ans << endl;
}