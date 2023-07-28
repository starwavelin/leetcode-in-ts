/***************************************************************************
 * Problem No. : 355
 * Problem Name: Design Twitter
 * Date        : July 26, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap, tag-map, tag-set, tag-data-structure
 ***************************************************************************/

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

class Twitter {
    userMap: Map<number, Set<number>>; // key userId, value: set of followee Ids
    tweetMap: Map<number, any[]>; // key userId, value: list of { tweetId, count } objects
    count: number;

    constructor() {
        this.userMap = new Map<number, Set<number>>();
        this.tweetMap = new Map<number, any[]>();
        this.count = 0;
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.userMap.has(userId)) {
            this.userMap.set(userId, new Set<number>());
        }
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }
        this.tweetMap.get(userId)?.push({ tweetId, count: this.count++ });
    }

    getNewsFeed(userId: number): number[] {
        const res = [];
        const userIds = this.userMap.get(userId) ? [...this.userMap.get(userId)!, userId] : [userId];
        const maxHeap = new MaxPriorityQueue({ priority: (x: any) => x.count });
        for (const id of userIds) {
            const tweetObjs = this.tweetMap.get(id);
            if (tweetObjs) {
                for (const obj of tweetObjs) {
                    maxHeap.enqueue(obj);
                }
            }
        }
        while (maxHeap.size() > 0 && res.length < 10) {
            res.push(maxHeap.dequeue()?.element.tweetId);
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
 * Test
 * Case 1 Input
 * ["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]
 * [[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]
 * output:
 * [null,null,[5],null,null,[6,5],null,[5]]
 */
const twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // should be [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // should be [6,5]
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1)); // should be [5]
