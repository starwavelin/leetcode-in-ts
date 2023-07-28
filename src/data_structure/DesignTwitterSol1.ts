/***************************************************************************
 * Problem No. : 355
 * Problem Name: Design Twitter
 * Date        : July 26, 2023
 * Author      : @codingbro
 *
 * meta        : tag-map, tag-set, tag-data-structure
 ***************************************************************************/

class Twitter {
    userMap: Map<number, Set<number>>;
    tweets: Array<any>;

    constructor() {
        this.userMap = new Map<number, Set<number>>();
        this.tweets = [];
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.userMap.has(userId)) {
            this.userMap.set(userId, new Set<number>());
        }
        this.tweets.push({ tweetId, userId });
    }

    getNewsFeed(userId: number): number[] {
        const res: number[] = [];
        const followees = this.userMap.get(userId);
        for (let i = this.tweets.length - 1; i >= 0 && res.length < 10; i--) {
            if (followees?.has(this.tweets[i].userId) || this.tweets[i].userId === userId) {
                res.push(this.tweets[i].tweetId);
            }
        }
        return res;
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.userMap.has(followerId)) {
            this.userMap.set(followerId, new Set<number>());
        }
        this.userMap.get(followerId)?.add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        this.userMap.get(followerId)?.delete(followeeId);
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
