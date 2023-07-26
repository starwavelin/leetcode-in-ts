/***************************************************************************
 * Problem No. : 355
 * Problem Name: Design Twitter
 * Date        : July 26, 2023
 * Author      : @codingbro
 *
 * meta        : tag-map, tag-set, tag-data-structure
 ***************************************************************************/

/**
 * This solution does not use heap
 */

var Twitter = function() {
    this.userMap = new Map(); // key is the followerId, and value is a set of followeeIds
    this.tweets = []; // store the objects of { tweetId, userId }
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.userMap.has(userId)) {
        this.userMap.set(userId, new Set());
    }
    this.tweets.push({ tweetId, userId });
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const res = [];
    const followees = this.userMap.get(userId);
    for (let i = this.tweets.length - 1; i >=0 && res.length < 10; i--) {
        if (followees.has(this.tweets[i].userId) || this.tweets[i].userId === userId) {
            res.push(this.tweets[i].tweetId);
        }
    }
    return res;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.userMap.has(followerId)) {
        this.userMap.set(followerId, new Set());
    }
    this.userMap.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.userMap.get(followerId).delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */