# leetcode-in-ts
My practices of LeetCode problems in TypeScript / JavaScript

### How to Run the Sample Solution Code
1. Use the following command to initialize the project after you git clone this project
```
$ npm i
```
2. Use ts-node to run a specific *.ts file to see the result, ie.
```
$ npm run dev src/array/greedy/AssignCookies.ts
```
As you can see, you need to specify the path to the targeting *.ts file you want to run.  
3. Besides Step 2, you can also use already setup ts-jest framework to test a corresponding *.test.ts file
```
$ npm test AssignCookies.test.ts
```

### Searching in this Repository
I have enabled searching by tag by adding meta to each source file. During search you may append `tag-` as prefix of the tag string. For example, to search on problems on arrays: you navigate to [this repo url](https://github.com/starwavelin/leetcode-in-ts) and enter following on search box: `tag-array`

Supported list of problem categories for searching,
 * [Array](../../search?utf8=✓&q=tag-array)
 * [String](../../search?utf8=✓&q=tag-string)
 * [Two Pointers](../../search?utf8=✓&q=tag-two-pointers)
 * [Sliding Window](../../search?utf8=✓&q=tag-sliding-window)
 * [Interval](../../search?utf8=✓&q=tag-interval)
 * [Sort](../../search?utf8=✓&q=tag-sort)
 * [Linked List](../../search?utf8=✓&q=tag-linked-list)
 * [Hash](../../search?utf8=✓&q=tag-hash)
 * [Array Map](../../search?utf8=✓&q=tag-array-map)
 * [Stack](../../search?utf8=✓&q=tag-stack)
 * [Queue](../../search?utf8=✓&q=tag-queue)
 * [Binary Search](../../search?utf8=✓&q=tag-binary-search)
 * [Binary Tree](../../search?utf8=✓&q=tag-binary-tree)
 * [Binary Search Tree](../../search?utf8=✓&q==tag-binary-search-tree)
 * [Divide and Conquer](../../search?utf8=✓&q==tag-divide-and-conquer)
 * [Advanced Tree](../../search?utf8=✓&q==tag-advanced-tree)
 * [Graph](../../search?utf8=✓&q=tag-graph)
 * [Matrix](../../search?utf8=✓&q=tag-matrix)
 * [Backtracking](../../search?utf8=✓&q=tag-backtracking)
 * [Dynamic Programming](../../search?utf8=✓&q=tag-dp)
 * [Bit](../../search?utf8=✓&q=tag-bit)
 * [Math](../../search?utf8=✓&q=tag-math)
 * [Data Structure Design](../../search?utf8=✓&q=tag-data-structure)
 * [Recursion](../../search?utf8=✓&q=tag-recursion)
 * [Circular Array](../../search?utf8=✓&q=tag-circular-array)
 * [Topological Sort](../../search?utf8=✓&q=tag-topological-sort)
 * [Breadth First Search](../../search?utf8=✓&q=tag-bfs)
 * [Depth First Search](../../search?utf8=✓&q=tag-dfs)
 * [Greedy Algorithm](../../search?utf8=✓&q=tag-greedy)
 * [Heap](../../search?utf8=✓&q=tag-heap)


### Algorithmic Problem List

**Selective Problems 2,001 - 2,500**

**Selective Problems 1,501 - 2,000**

**Selective Problems 1,001 - 1,500**
| No.    | Problem                                              | Difficulty  | Tags  | Videos |
|--------|------------------------------------------------------|-------------|-------|--------|
| 1046	 | [Last Stone Weight](src/heap/LastStoneWeight.js) | Easy | Heap | |
| 1021	 | [Remove Outermost Parentheses](src/stack/RemoveOutermostParentheses.ts) | Easy | Stack | |


**Selective Problems 251 - 1,000**
| No.    | Problem                                              | Difficulty  | Tags  | Videos |
|--------|------------------------------------------------------|-------------|-------|--------|
| 981	 | [Time Based Key-Value Store](src/data_structure/TimeBasedKeyValueStore.js), [TS解](src/data_structure/TimeBasedKeyValueStore.ts) | Medium | Hash, Binary Search, Data Structure | |
| 973	 | [K Closest Points to Origin](src/heap/KClosestPointsToOrigin.js) | Medium | Heap | |
| 905	 | [Sort Array By Parity](src/array/two_pointers/SortArrayByParity.ts) | Easy | Two Pointers, Array, Sort | |
| 875	 | [Koko eating bananas](src/binary_search/KokoEatingBananas.js) | Medium | Binary Search | |
| 852	 | [Peak Index in a Mountain Array](src/binary_search/PeakIndexInAMountainArray.js) | Medium | Binary Search | |
| 739	 | [Daily Temperatures](src/stack/DailyTemperatures.ts) | Medium | Stack | |
| 716	 | [Max Stack](src/stack/MaxStack.ts)                   | Easy | Stack | |
| 704	 | [Binary Search](src/binary_search/BinarySearch1.js), [Version 2](src/binary_search/BinarySearch2.js), [Version 3](src/binary_search/BinarySearch3.js)                   | Easy | Binary Search | |
| 621	 | [Task Schedule](src/heap/TaskScheduleSol1.js), [Solution 2](src/heap/TaskScheduleSol2.js) | Medium | Heap, Hash, Sort, Math | |
| 503	 | [Next Greater Element II](src/stack/NextGreaterElement2.ts) | Easy | Stack | |
| 500	 | Keyboard Row                                                                         | Easy | | |
| 499	 | The Maze III                                                                         | Hard | | |
| 498	 | Diagonal Traverse	                                                                | Medium | | |
| 496	 | [Next Greater Element I](src/stack/NextGreaterElement1.ts) | Easy | Hash, Stack | |
| 495	 | Teemo Attacking                                                                      | Medium | | |
| 494	 | Target Sum                                                                                                         | Medium | | |
| 493	 | Reverse Pairs                                                                                                      | Hard | | |
| 492	 | Construct the Rectangle	                                                                                           | Easy | | |
| 491	 | Increasing Subsequences                                                                                            |	Medium | | |
| 490	 | The Maze                                                                                                           | Medium | | |
| 488	 | Zuma Game                                                                                                          | Hard | | |
| 487	 | Max Consecutive Ones II $                                                                                          | Medium | | |
| 486	 | Predict the Winner                                                                                                 | Medium | | |
| 485	 | Max Consecutive Ones                                                                                               | Easy | | |
| 484	 | Find Permutation $                                                                                                 | Medium | | |
| 483	 | Smallest Good Base                                                                                                 | Hard | | |
| 482	 | License Key Formatting                                                                                             | Medium | | |
| 481	 | Magical String                                                                                                     | Medium | | |
| 480	 | Sliding Window Median                                                                                              | Hard | | |
| 479	 | Largest Palindrome Product                                                                                         | Easy | | |
| 477	 | Total Hamming Distance                                                                                             | Medium | | |
| 476	 | Number Complement                                                                                                  | Easy | | |
| 475	 | Heaters                                                                                                            | Easy | | |
| 474	 | Ones and Zeroes                                                                                                    | Medium | | |
| 473	 | Matchsticks to Square                                                                                              | Medium | | |
| 472	 | Concatenated Words                                                                                                 | Hard | | |
| 471	 | Encode String with Shortest Length $                                                                               | Hard | | |
| 469	 | Convex Polygon $                                                                                                   | Medium | | |
| 468	 | Validate IP Address                                                                                                | Medium | | |
| 467	 | Unique Substrings in Wraparound String                                                                             | Medium | | |
| 466	 | Count The Repetitions                                                                                              | Hard | | |
| 465	 | Optimal Account Balancing $                                                                                        | Hard | | |
| 464	 | Can I Win                                                                                                          | Medium | | |
| 463	 | Island Perimeter                                                                                                   | Easy | | |
| 462	 | Minimum Moves to Equal Array Elements II                                                                           | Medium | | |
| 461	 | Hamming Distance                                                                                                   | Easy | | |
| 460	 | LFU Cache                                                                                                          | Hard | | |
| 459	 | Repeated Substring Pattern                                                                                         | Easy | | |
| 458	 | Poor Pigs                                                                                                          | Easy | | |
| 457	 | Circular Array Loop                                                                                                | Medium | | |
| 456	 | 132 Pattern                                                                                                        | Medium | | |
| 455	 | [Assign Cookies](src/array/greedy/AssignCookies.ts)  | Easy | Array, Greedy | |
| 454	 | [4Sum II](src/hash/FourSumII.js) | Medium | Hash | |
| 453	 | Minimum Moves to Equal Array Elements                                                                              | Easy | | |
| 452	 | Minimum Number of Arrows to Burst Balloons                                                                         | Medium | | |
| 451	 | Sort Characters By Frequency                                                                                       | Medium | | |
| 450	 | Delete Node in a BST                                                                                               | Medium | | |
| 449	 | Serialize and Deserialize BST                                                                                      | Medium | | |
| 448	 | Find All Numbers Disappeared in an Array                                                                           | Easy | | |
| 447	 | Number of Boomerangs                                                                                               | Easy | | |
| 446	 | Arithmetic Slices II - Subsequence                                                                                 | Hard | | |
| 445	 | Add Two Numbers II                                                                                                 | Medium | | |
| 444	 | Sequence Reconstruction $                                                                                          | Medium | | |
| 442	 | Find All Duplicates in an Array                                                                                    | Medium | | |
| 441	 | Arranging Coins                                                                                                    | Easy  | | |
| 440	 | K-th Smallest in Lexicographical Order                                                                             | Hard | | |
| 439	 | Ternary Expression Parser $                                                                                        | Medium | | |
| 438	 | Find All Anagrams in a String                                                                                      | Easy  | | |
| 437	 | Path Sum III                                                                                                       | Easy | | |
| 436	 | Find Right Interval                                                                                                | Medium | | |
| 435	 | Non-overlapping Intervals                                                                                          | Medium | | |
| 434	 | Number of Segments in a String                                                                                     | Easy  | | |
| 433	 | Minimum Genetic Mutation                                                                                           | Medium | | |
| 432	 | All O`one Data Structure                                                                                           | Hard  | | |
| 425	 | Word Squares                                                                                                       | Hard | | |
| 424	 | Longest Repeating Character Replacement                                                                            | Medium | | |
| 423	 | Reconstruct Original Digits from English                                                                           | Medium | | |
| 422	 | Valid Word Square $                                                                                                | Easy | | |
| 421	 | [Maximum XOR of Two Numbers in an Array](src/bit/MaxXORFromTwoNums.java)                                       | Medium | | |
| 420	 | Strong Password Checker                                                                                            | Hard | | |
| 419	 | Battleships in a Board                                                                                             | Medium | | |
| 418	 | Sentence Screen Fitting $                                                                                          | Medium | | |
| 417	 | [Pacific Atlantic Water Flow](src/graph/PacificAtlanticWaterFlow.java)                                             | Medium | | |
| 416	 | Partition Equal Subset Sum                                                                                         | Medium | | |
| 415	 | Add Strings                                                                                                        | Easy | | |
| 414	 | Third Maximum Number                                                                                               | Easy | | |
| 413	 | Arithmetic Slices                                                                                                  | Medium | | |
| 412	 | Fizz Buzz                                                                                                          | Easy  | | |
| 411	 | Minimum Unique Word Abbreviation $                                                                                 | Hard | | |
| 410	 | Split Array Largest Sum                                                                                            | Hard | | |
| 409	 | Longest Palindrome                                                                                                 | Easy | | |
| 408	 | Valid Word Abbreviation $                                                                                          | Easy | | |
| 407	 | Trapping Rain Water II                                                                                             | Hard | | |
| 406	 | Queue Reconstruction by Height                                                                                     | Medium | | |
| 405	 | Convert a Number to Hexadecimal                                                                                    | Easy | | |
| 404	 | Sum of Left Leaves                                                                                                 | Easy | | |
| 403	 | Frog Jump                                                                                                          | Hard | | |
| 402	 | Remove K Digits                                                                                                    | Medium | | |
| 401	 | Binary Watch                                                                                                       | Easy | | |
| 400	 | Nth Digit                                                                                                          | Easy | | |
| 399	 | Evaluate Division                                                                                                  | Medium | | |
| 398	 | Random Pick Index                                                                                                  | Medium | | |
| 397	| Integer Replacement                                                                                                | Easy | | |
| 396	| Rotate Function                                                                                                    | Easy | | |
| 395	| Longest Substring with At Least K Repeating Characters                                                             | Medium | | |
| 394	| Decode String                                                                                                      | Medium | | |
| 393	| UTF-8 Validation                                                                                                   | Medium | | |
| 392	| Is Subsequence                                                                                                     | Medium | | |
| 391	| Perfect Rectangle                                                                                                  | Hard  | | |
| 390	| Elimination Game                                                                                                   | 	Medium | | |
| 389	| Find the Difference                                                                                                | Easy  | | |
| 388	| Longest Absolute File Path                                                                                         | Medium | | |
| 387	| First Unique Character in a String                                                                                 | Easy | | |
| 386	| Lexicographical Numbers                                                                                            | Medium | | |
| 385	| Mini Parser                                                                                                        | Medium | | |
| 384	| Shuffle an Array                                                                                                   | Medium | | |
| 383	| [Ransom Note](src/hash/RansomNote.java)                                                                            | Easy  | | |
| 382	| Linked List Random Node                                                                                            | Medium | | |
| 381	| Insert Delete GetRandom O(1) - Duplicates allowed                                                                  | Hard | | |
| 380	| Insert Delete GetRandom O(1)                                                                                       | Medium | | |
| 379	| Design Phone Directory $                                                                                           | Medium | | |
| 378	| [Kth Smallest Element in a Sorted Matrix](src/heap/KthSmallestElementInASortedMatrixSol1.js), [Solution 2](src/heap/KthSmallestElementInASortedMatrixSol2.js) | Medium | Heap, Binary Search | |
| 377	| Combination Sum IV                                                                                                 | Medium | | |
| 376	| Wiggle Subsequence                                                                                                 | Medium | | |
| 375	| Guess Number Higher or Lower II                                                                                    | Medium | | |
| 374	| Guess Number Higher or Lower                                                                                       | Easy | | |
| 373	| Find K Pairs with Smallest Sums                                                                                    | Medium | | |
| 372	| Super Pow                                                                                                          | Medium | | |
| 371	| Sum of Two Integers                                                                                                | Easy | | |
| 370	| Range Addition $                                                                                                   | Medium | | |
| 369	| Plus One Linked List $                                                                                             | Medium | | |
| 368	| Largest Divisible Subset                                                                                           | Medium | | |
| 367	| Valid Perfect Square                                                                                               | Medium | | |
| 366	| Find Leaves of Binary Tree $                                                                                       | Medium | | |
| 365	| Water and Jug Problem                                                                                              | Medium | | |
| 364	| Nested List Weight Sum II $                                                                                        | Medium | | |
| 363	| Max Sum of Rectangle No Larger Than K                                                                              | Hard | | |
| 362	| Design Hit Counter $                                                                                               | Medium | | |
| 361	| Bomb Enemy $                                                                                                       | Medium | | |
| 360	| Sort Transformed Array $                                                                                           | Medium | | |
| 359	| Logger Rate Limiter $                                                                                              | Easy | | |
| 358	| Rearrange String k Distance Apart $                                                                                | Hard | | |
| 357	| Count Numbers with Unique Digits                                                                                   | Medium | | |
| 356	| Line Reflection $                                                                                                  | Medium | | |
| 355	| [Design Twitter Solution 1](src/data_structure/DesignTwitterSol1.js), [TS Solution 1](src/data_structure/DesignTwitterSol1.ts), [TS Solution 2](src/data_structure/DesignTwitterSol2.ts)  | Medium | Map, Set, Array, Heap, Design | |
| 354	| Russian Doll Envelopes                                                                                             | Hard | | |
| 353	| Design Snake Game $                                                                                                | Medium | | |
| 352	| Data Stream as Disjoint Intervals                                                                                  | Hard | | |
| 351	| Android Unlock Patterns $                                                                                          | Medium | | |
| 350	| [Intersection of Two Arrays II](src/array/two_pointers/IntersectionOfTwoArrays2.js)  | Easy | Two Pointers, Hash | |
| 349	| [Intersection of Two Arrays](src/array/two_pointers/IntersectionOfTwoArrays.js) | Easy | Two Pointers, Binary Search | |
| 348	| Design Tic-Tac-Toe $                                                                | Medium | | |
| 347	| [Top K Frequent Elements](src/heap/TopKFrequentElementsSol1.js), [Solution 2](src/heap/TopKFrequentElementsSol2.js), [Solution 3](src/heap/TopKFrequentElementsSol3.js), [Solution 4](src/heap/TopKFrequentElementsSol4.js) | Medium | Sort, Heap, Bucket Sort | |
| 346	| Moving Average from Data Stream  $                                                                                 | Easy | | |
| 345	| Reverse Vowels of a String                                                                                         | Easy | | |
| 344	| Reverse String                                                                                                     | Easy | | |
| 343	| Integer Break                                                                                                      | Medium | | |
| 342	| [Power of Four](src/math/PowerOf4.java)                                                                            | Easy | | |
| 341	| Flatten Nested List Iterator $                                                                                     | Medium | | |
| 340	| [Longest Substring with At Most K Distinct Characters](src/string/LongestSubstringWithAtMostKDistinctChars.java) $ | Hard | | |
| 339	| Nested List Weight Sum $                                                                                           | Easy | | |
| 338	| Counting Bits                                                                                                      | Medium | | |
| 337	| House Robber III                                                                                                   | Medium | | |
| 336	| Palindrome Pairs                                                                                                   | Hard | | |
| 335	| Self Crossing                                                                                                      | Medium | | |
| 334	| Increasing Triplet Subsequence                                                                                     | Medium | | |
| 333	| Largest BST Subtree $                                                                                              | Medium | | |
| 332	| Reconstruct Itinerary                                                                                              | Medium | | |
| 331	| Verify Preorder Serialization of a Binary Tree                                                                     | Medium | | |
| 330	| Patching Array                                                                                                     | Medium | | |
| 329	| Longest Increasing Path in a Matrix                                                                                | Medium | | |
| 328	| Odd Even Linked List                                                                                               | Easy | | |
| 327	| Count of Range Sum                                                                                                 | Hard | | |
| 326	| [Power of Three](src/math/PowerOf3.java)                                                                           | Easy | | |
| 325	| Maximum Size Subarray Sum Equals k $                                                                               | Easy | | |
| 324	| Wiggle Sort II                                                                                                     | Medium | | |
| 323	| Number of Connected Components in an Undirected Graph $                                                            | Medium | | |
| 322	| Coin Change                                                                                                        | Medium | | |
| 321	| Create Maximum Number                                                                                              | Hard | | |
| 320	| Generalized Abbreviation $                                                                                         | Medium | | |
| 319	| Bulb Switcher                                                                                                      | Medium | | |
| 318	| Maximum Product of Word Lengths                                                                                    | Medium | | |
| 317	| Shortest Distance from All Buildings $                                                                             | Hard | | |
| 316	| Remove Duplicate Letters                                                                                           | Medium | | |
| 315	| Count of Smaller Numbers After Self                                                                                | Hard | | |
| 314	| Binary Tree Vertical Order Traversal $                                                                             | Medium | | |
| 313	| Super Ugly Number                                                                                                  | Medium | | |
| 312	| Burst Balloons                                                                                                     | Medium | | |
| 311	| Sparse Matrix Multiplication $                                                                                     | Medium | | |
| 310	| Minimum Height Trees                                                                                               | Medium | | |
| 309	| Best Time to Buy and Sell Stock with Cooldown                                                                      | Medium | | |
| 308	| Range Sum Query 2D - Mutable $                                                                                     | Hard | | |
| 307	| Range Sum Query - Mutable                                                                                          | Medium | | |
| 306	| Additive Number                                                                                                    | Medium | | |
| 305	| Number of Islands II $                                                                                             | Hard | | |
| 304	| Range Sum Query 2D - Immutable                                                                                     | Medium | | |
| 303	| Range Sum Query - Immutable                                                                                        | Easy | | |
| 302	| Smallest Rectangle Enclosing Black Pixels $                                                                        | Hard | | |
| 301	| Remove Invalid Parentheses                                                                                         | Hard | | |
| 300	| Longest Increasing Subsequence                                                                                     | Medium | | |
| 299	| Bulls and Cows                                                                                                     | Easy | | |
| 298	| Binary Tree Longest Consecutive Sequence $                                                                         | Medium | | |
| 297	| [Serialize and Deserialize Binary Tree](src/binary_tree/SerializeDeserializeBT.java)                                | Medium | | |
| 296	| Best Meeting Point $                                                                                               | Hard | | |
| 295	| [Find Median from Data Stream](src/heap/FindMedianFromDataStreamSol1.js), [Solution 2](src/heap/FindMedianFromDataStreamSol2.js) | Hard | Sort, Heap | |
| 294	| Flip Game II $                                                                                                     | Medium | | |
| 293	| Flip Game $                                                                                                        | Easy | | |
| 292	| Nim Game                                                                                                           | Easy | | |
| 291	| Word Pattern II $                                                                                                  | Hard | | |
| 290	| Word Pattern                                                                                                       | Easy | | |
| 289	| [Game of Life](src/array/GameOfLife.java)                                                                          | Medium | | |
| 288	| Unique Word Abbreviation $                                                                                         | Easy | | |
| 287	| [Find the Duplicate Number](src/binary_search/FindTheDuplicateNumber.js) | Medium | Binary Search,  | |
| 286	| Walls and Gates $                                                                                                  | Medium | | |
| 285	| Inorder Successor in BST $                                                                                         | Medium | | |
| 284	| Peeking Iterator                                                                                                   | Medium | | |
| 283	| [Move Zeroes](src/array/MoveZeros.java)                                                                            | Easy | | |
| 282	| Expression Add Operators                                                                                           | Hard | | |
| 281	| Zigzag Iterator $                                                                                                  | Medium | | |
| 280	| Wiggle Sort $                                                                                                      | Medium | | |
| 279	| Perfect Squares                                                                                                    | Medium | | |
| 278	| [First Bad Version](src/binary_search/FirstBadVersion.js)                                                          | Easy | Binary Search | |
| 277	| Find the Celebrity $                                                                                               | Medium | | |
| 276	| Paint Fence $                                                                                                      | Easy | | |
| 275	| H-Index II                                                                                                         | Medium | | |
| 274	| H-Index                                                                                                            | Medium | | |
| 273	| Integer to English Words                                                                                           | Medium | | |
| 272	| Closest Binary Search Tree Value II $                                                                              | Hard | | |
| 271	| [Encode and Decode Strings $](src/data_structure/EncodeAndDecodeStrings.js)           | Medium | Design, String | |
| 270	| Closest Binary Search Tree Value $                                                                                 | Easy | | |
| 269	| Alien Dictionary $                                                                                                 | Hard | | |
| 268	| Missing Number                                                                                                     | Medium | | |
| 267	| Palindrome Permutation II $                                                                                        | Medium | | |
| 266	| Palindrome Permutation $                                                                                           | Easy | | |
| 265	| Paint House II $                                                                                                   | Hard | | |
| 264	| Ugly Number II                                                                                                     | Medium | | |
| 263	| Ugly Number                                                                                                        | Easy | | |
| 261	| Graph Valid Tree $                                                                                                 | Medium | | |
| 260	| Single Number III                                             | Medium | Bit | [讲解](https://youtu.be/kOMJAZ0t_F4) |
| 259	| [3Sum Smaller](src/array/two_pointers/ThreeSumSmaller.js) $   | Medium | | |
| 258	| Add Digits                                                                                                         | Easy | | |
| 257	| Binary Tree Paths                                                                                                  | Easy | | |
| 256	| Paint House $                                                                                                      | Medium | | |
| 255	| Verify Preorder Sequence in Binary Search Tree $                                                                   | Medium | | |
| 254	| Factor Combinations $                                                                                              | Medium | | |
| 253	| Meeting Rooms II $                                                                                                 | Medium | | |
| 252	| Meeting Rooms $                                                                                                    | Easy | | |
| 251	| Flatten 2D Vector $                                                                                                | Medium | | |

**Problem 1 - 250**

| No.    | Problem                                              | Difficulty  | Tags  | Videos |
|--------|------------------------------------------------------|-------------|-------|--------|
| 250	 | Count Univalue Subtrees                            | Medium | | |
| 249	 | Group Shifted Strings	                            | Easy | | |
| 248	 | Strobogrammatic Number III                         | Hard | | |
| 247	 | Strobogrammatic Number II                          | Medium | | |
| 246	 | Strobogrammatic Number                            | Easy | | |
| 245	 | Shortest Word Distance III                         | Medium | | |
| 244	 | Shortest Word Distance II                          | Medium | | |
| 243	 | Shortest Word Distance                            | Easy | | |
| 242	 | [Valid Anagram](src/hash/ValidAnagram.ts)            | Easy | Hash, ArrayMap | [讲解](https://youtu.be/PaqSyN63kB8)|
| 241	 | Different Ways to Add Parentheses                    | Medium | | |
| 240	 | [Search a 2D Matrix II](src/binary_search/SearchA2DMatrix2.js) | Medium | Matrix | |
| 239	 | Sliding Window Maximum                               | Hard | | |
| 238	 | [Product of Array Except Self](src/math/ProductOfArrayExceptSelfSol1.js), [Solution 2](src/math/ProductOfArrayExceptSelfSol2.js) | Medium | Math, Array | |
| 237	 | Delete Node in a Linked List                         | Easy | | |
| 236	 | Lowest Common Ancestor of a Binary Tree              | Medium | | |
| 235	 | Lowest Common Ancestor of a Binary Search Tree       | Medium | | |
| 234	 | Palindrome Linked List                               | Easy | | |
| 233	 | Number of Digit One                                  | Medium | | |
| 232	 | [Implement Queue using Stacks](src/stack/ImplementQueueUsingStacks.ts) | Easy | Stack | |
| 231	 | Power of Two	                                        | Easy | | |
| 230	 | Kth Smallest Element in a BST                        | Medium | | |
| 229	 | Majority Element II	                                | Medium | | |
| 228	 | Summary Ranges                                       | Easy | | |
| 227	 | Basic Calculator II                                  | Medium | | |
| 226	 | Invert Binary Tree                                   | Easy | | |
| 225	 | [Implement Stack using Queues](src/stack/ImplementStackUsingQueues.ts) | Medium | Queue | |
| 224	 | Basic Calculator                                     | Medium | | |
| 223	 | Rectangle Area                                       | Easy | | |
| 222	 | Count Complete Tree Nodes                            | Medium | | |
| 221	 | Maximal Square                                       | Medium | | |
| 220	 | Contains Duplicate III                               | Medium | | |
| 219	 | Contains Duplicate II                                | Easy | | |
| 218	 | The Skyline Problem                                  | Hard | | |
| 217	 | Contains Duplicate                                   | Easy | | |
| 216	 | Combination Sum III                                  | Medium | | |
| 215	 | Kth Largest Element in an Array                      | Medium | | |
| 214	 | Shortest Palindrome                                  | Hard | | |
| 213	 | House Robber II                                      | Medium | | |
| 212	 | Word Search II                                       | Hard | | |
| 211	 | Add and Search Word - Data structure design          | Medium | | |
| 210	 | [Course Schedule II](src/graph/CourseSchedule2.ts)   | Medium | Graph, Topological Sort | |
| 209	 | Minimum Size Subarray Sum                            | Medium | | |
| 208	 | Implement Trie (Prefix Tree)                         | Medium | | |
| 207	 | [Course Schedule](src/graph/CourseSchedule.ts)       | Medium | Graph, Topological Sort | |
| 206	 | Reverse Linked List                                  | Easy | | |
| 205	 | Isomorphic Strings                                   | Easy | | |
| 204	 | Count Primes                                         | Easy | | |
| 203	 | Remove Linked List Elements                          | Easy | | |
| 202	 | Happy Number                                         | Easy | | |
| 201	 | Bitwise AND of Numbers Range                         | Medium | | |
| 200	 | [Number of Islands](src/graph/NumberOfIslands.ts)    | Medium | Graph, Matrix | |
| 199	 | Binary Tree Right Side View                          | Medium | | |
| 198	 | House Robber                                         | Easy | | |
| 191	 | Number of 1 Bits                                     | Easy | | |
| 190	 | Reverse Bits                                         | Easy | | |
| 189	 | Rotate Array                                         | Easy | | |
| 188	 | Best Time to Buy and Sell Stock IV                   | Hard | | |
| 187	 | Repeated DNA Sequences                               | Medium | | |
| 186	 | [Reverse Words in a String II](src/string/two_pointers/ReverseWordsInAString2.ts) | Medium | Two Pointers | [讲解](https://youtu.be/bSf8iwxYSgo) |
| 179	 | Largest Number                                       | Medium | | |
| 174	 | Dungeon Game                                         | Hard | | |
| 173	 | Binary Search Tree Iterator                          | Medium | | |
| 172	 | Factorial Trailing Zeroes                            | Easy | | |
| 171	 | Excel Sheet Column Number                            | Easy | | |
| 170	 | Two Sum III - Data structure design                  | Easy | | |
| 169	 | Majority Element                                     | Easy | | |
| 168	 | Excel Sheet Column Title                             | Easy | | |
| 167	 | Two Sum II - Input array is sorted $                 | Medium | | [Video](https://youtu.be/SGaWWnFSV-0)|
| 166	 | Fraction to Recurring Decimal                        | Medium | | |
| 165	 | Compare Version Numbers                              | Easy | | |
| 164	 | Maximum Gap                                          | Hard | | |
| 163	 | Missing Ranges                                       | Medium | | |
| 162	 | [Find Peak Element](src/binary_search/FindPeakElement.js) | Medium | Binary Search | |
| 161	 | One Edit Distance                                    | Medium | | |
| 160	 | Intersection of Two Linked Lists                     | Easy | | |
| 159	 | Longest Substring with At Most Two Distinct Characters |	Hard | | |
| 158	 | Read N Characters Given Read4 II - Call multiple times |	Hard | | |
| 157	 | Read N Characters Given Read4 $                      | Easy | | |
| 156	 | Binary Tree Upside Down $                            | Medium | | |
| 155	 | [Min Stack](src/stack/MinStack.ts)                   | Easy | Stack, Data Structure | |
| 154	 | Find Minimum in Rotated Sorted Array II              | Hard | | |
| 153	 | [Find Minimum in Rotated Sorted Array](src/binary_search/FindMinimumInRotatedSortedArray.js) | Medium | Binary Search | |
| 152	 | Maximum Product Subarray                             | Medium | | |
| 151	 | [Reverse Words in a String](src/string/two_pointers/ReverseWordsInAString1.ts) | Medium | Two Pointers | [讲解](https://youtu.be/54uU5Zhzorw) |
| 150	 | [Evaluate Reverse Polish Notation](src/stack/EvaluateReversePolishNotation.ts) | Medium | Stack | |
| 149	 | Max Points on a Line                                 | Hard | | |
| 148	 | Sort List                                            | Medium | | |
| 147	 | Insertion Sort List                                  | Medium | | |
| 146	 | [LRU Cache](src/data_structure/LRUCacheSol1.ts), Solution 2   | Hard | Map, LinkedList | |
| 145	 | Binary Tree Postorder Traversal                      | Hard | | |
| 144	 | Binary Tree Preorder Traversal                       | Medium | | |
| 143	 | Reorder List                                         | Medium | | |
| 142	 | Linked List Cycle II                                 | Medium | | |
| 141	 | Linked List Cycle                                    | Medium | | |
| 140	 | Word Break II                                        | Hard | | |
| 139	 | Word Break                                           | Medium | | |
| 138	 | [Copy List with Random Pointer](src/linked_list/CopyListWithRandomPointer.ts) | Medium | Linked List, Hash | |
| 137	 | Single Number II                                     | Medium | Bit | [讲解](https://youtu.be/puXcQpwgcD0) |
| 136	 | Single Number                                        | Medium | Bit, Hash | [讲解](https://youtu.be/7xU7g04FJHw) |
| 135	 | [Candy](src/array/greedy/Candy.ts)                   | Hard | Greedy, Array, Math | |
| 134	 | Gas Station                                          | Medium | | |
| 133	 | [Clone Graph](src/graph/CloneGraph.ts)               | Medium | Graph | [讲解1](https://youtu.be/5e6buIyUvhs) [讲解2](https://youtu.be/F2ofVoR0adw)|
| 132	 | Palindrome Partitioning II                           | Hard | | |
| 131	 | Palindrome Partitioning                              | Medium | | |
| 130	 | Surrounded Regions                                   | Medium | | |
| 129	 | Sum Root to Leaf Numbers                             | Medium | | |
| 128	 | [Longest Consecutive Sequence](src/hash/LongestConsecutiveSequence.js) | Medium | Set, Hash | |
| 127	 | Word Ladder                                          | Medium | | |
| 126	 | Word Ladder II                                       | Hard | | |
| 125	 | [Valid Palindrome](src/string/two_pointers/ValidPalindrome.ts)                                     | Easy | Two Pointers | |
| 124	 | Binary Tree Maximum Path Sum                         | Hard | | |
| 123	 | Best Time to Buy and Sell Stock III                  | Hard | | |
| 122	 | Best Time to Buy and Sell Stock II                   | Medium | | |
| 121	 | Best Time to Buy and Sell Stock                      | Medium | | |
| 120	 | Triangle                                             | Medium | | |
| 119	 | Pascal's Triangle II                                 | Easy | | |
| 118	 | Pascal's Triangle                                    | Easy | | |
| 117	 | Populating Next Right Pointers in Each Node II       | Hard | | |
| 116	 | Populating Next Right Pointers in Each Node          | Medium | | |
| 115	 | Distinct Subsequences                                | Hard | | |
| 114	 | Flatten Binary Tree to Linked List                   | Medium | | |
| 113	 | Path Sum II                                          | Medium | | |
| 112	 | Path Sum                                             | Easy | | |
| 111	 | Minimum Depth of Binary Tree                         | Easy | | |
| 110	 | Balanced Binary Tree                                 | Easy | | |
| 109	 | Convert Sorted List to Binary Search Tree            | Medium | | |
| 108	 | Convert Sorted Array to Binary Search Tree           | Medium | | |
| 107	 | Binary Tree Level Order Traversal II                 | Easy | | |
| 106	 | Construct Binary Tree from Inorder and Postorder Traversal  | Medium | | |
| 105	 | Construct Binary Tree from Preorder and Inorder Traversal   | Medium | | |
| 104	 | Maximum Depth of Binary Tree                         | Easy | | |
| 103	 | Binary Tree Zigzag Level Order Traversal             | Medium | | |
| 102	 | Binary Tree Level Order Traversal                    | Easy | | |
| 101	 | Symmetric Tree                                       | Easy | | |
| 100	 | Same Tree                                            | Easy | | |
| 99	 | Recover Binary Search Tree                           | Hard | | |
| 98	 | Validate Binary Search Tree                          | Medium | | |
| 97	 | Interleaving String                                  | Hard | | |
| 96	 | Unique Binary Search Trees                           | Medium | | |
| 95	 | Unique Binary Search Trees II                        | Medium | | |
| 94	 | Binary Tree Inorder Traversal                        | Medium | | |
| 93	 | Restore IP Addresses                                 | Medium | | |
| 92	 | Reverse Linked List II                               | Medium | | |
| 91	 | Decode Ways                                          | Medium | | |
| 90	 | Subsets II                                           | Medium | | |
| 89	 | Gray Code                                            | Medium | | |
| 88	 | [Merge Sorted Array](src/array/two_pointers/MergeSortedArrays.ts) | Easy | Array | [讲解](https://youtu.be/eCtTFp6k8Ls) |
| 87	 | Scramble String                                      | Hard | | |
| 86	 | Partition List                                       | Medium | | |
| 85	  | Maximal Rectangle                                   | Hard | | |
| 84	  | Largest Rectangle in Histogram                      | Hard | | |
| 83	  | Remove Duplicates from Sorted List                  | Easy | | |
| 82	  | Remove Duplicates from Sorted List II               | Medium | | |
| 81	  | Search in Rotated Sorted Array II                   | Medium | | |
| 80	  | [Remove Duplicates from Sorted Array II](src/array/two_pointers/RemoveDuplicatesFromSortedArray2.ts) | Medium | Two Pointers | |
| 79	  | Word Search                                         | Medium | | |
| 78	  | Subsets                                             | Medium | | |
| 77	  | Combinations                                        | Medium | | |
| 76	  | Minimum Window Substring                            | Hard | | |
| 75	  | Sort Colors]                                        | Medium | | |
| 74	  | [Search a 2D Matrix](src/binary_search/SearchA2DMatrix.js) | Medium | Binary Search, Matrix | |
| 73	  | Set Matrix Zeroes                                   | Medium | | |
| 72	  | Edit Distance                                       | Hard | | |
| 71	  | Simplify Path                                       | Medium | | |
| 70	  | Climbing Stairs                                     | Easy | | |
| 69	  | Sqrt(x)                                             | Medium | | |
| 68	  | Text Justification                                  | Hard | | |
| 67	  | Add Binary                                          | Easy | | |
| 66	  | Plus One                                            | Easy | | |
| 65	  | Valid Number                                        | Hard | | |
| 64	  | Minimum Path Sum                                    | Medium | | |
| 63	  | Unique Paths II                                     | Medium | | |
| 62	  | Unique Paths                                        | Medium | | |
| 61	  | Rotate List                                         | Medium | | |
| 60	  | Permutation Sequence                                | Medium | | |
| 59	  | Spiral Matrix II                                    | Medium | | |
| 58	  | Length of Last Word                                 | Easy | | |
| 57	  | [Insert Interval](src/interval/InsertInterval.ts)   | Medium | Interval | |
| 56	  | [Merge Intervals](src/interval/MergeIntervals.ts)   | Medium | Interval, Sort | |
| 55	  | Jump Game                                           | Medium | | |
| 54	  | Spiral Matrix                                       | Medium | | |
| 53	  | Maximum Subarray                                    | Medium | | |
| 52	  | N-Queens II                                         | Hard | | |
| 51      | N-Queens                                            | Hard | | |
| 50      | Pow(x, n)                                           | Medium | | |
| 49      | [Group Anagrams](src/hash/GroupAnagrams.ts)         | Medium | Hash| [讲解](https://www.youtube.com/watch?v=G0WEebYHJ-E)|
| 48      | Rotate Image                                        | Medium | | |
| 47      | Permutations II                                     | Hard | | |
| 46      | Permutations                                        | Medium | | |
| 45      | Jump Game II	                                    | Hard | | |
| 44      | Wildcard Matching	                                | Hard | | |
| 43      |	Multiply Strings                                    | Medium | | |
| 42      |	Trapping Rain Water	                                | Hard | | |
| 41      | First Missing Positive	                            | Hard | | |
| 40      |	Combination Sum II	                                | Medium | | |
| 39      |	Combination Sum	                                    | Medium | | |
| 38      |	Count and Say                                       | Easy | | |
| 37      |	Sudoku Solver                                       | Hard | | |
| 36      |	[Valid Sudoku](src/hash/ValidSudoku.js)             | Medium | Hash, Set | |
| 35      | [Search Insert Position](src/binary_search/SearchInsertPosition.js) | Medium | Binary Search | |
| 34      | [Find First and Last Position of Element in Sorted Array](src/binary_search/SearchRange.js)	| Medium | Binary Search | |
| 33      | [Search in Rotated Sorted Array](src/binary_search/SearchInRotatedSortedArray.js) | Medium | Binary Search | |
| 32      | Longest Valid Parentheses	                        | Hard | | |
| 31      |	Next Permutation	                                | Medium | | |
| 30      | Substring with Concatenation of All Words	        | Hard | | |
| 29      | Divide Two Integers		                            | Medium | | |
| 28      | Implement strStr()	                                | Easy | | |
| 27      | Remove Element	                                    | Easy | | |
| 26      | [Remove Duplicates from Sorted Array](src/array/two_pointers/RemoveDuplicatesFromSortedArray.ts) | Easy | Two Pointers | |
| 25      | Reverse Nodes in k-Group	                        | Hard | | |
| 24      | Swap Nodes in Pairs		                            | Medium | | |
| 23      | Merge k Sorted Lists	                            | Hard | | |
| 22      |	Generate Parentheses	                            | Medium | | |
| 21      | Merge Two Sorted Lists	                            | Easy | | |
| 20      | [Valid Parentheses](src/stack/ValidParentheses.ts)	| Easy | Stack  | |
| 19      | Remove Nth Node From End of List	                | Easy | Linked List | |
| 18      | [4Sum](src/array/two_pointers/FourSum.js)	        | Medium | Sort, DFS | |
| 17      | Letter Combinations of a Phone Number	            | Medium | | |
| 16      | [3Sum Closest](src/array/two_pointers/ThreeSumClosest.js)	 | Medium | Sort | |
| 15      | [3Sum](src/array/two_pointers/ThreeSum.js),	[3Sum Recursive Solution](src/array/two_pointers/ThreeSumRecursive.js) | Medium | Sort, Two Pointers | |
| 14      |	Longest Common Prefix	                            | Easy | | |
| 13      | Roman to Integer		                            | Easy | | |
| 12      | Integer to Roman		                            | Medium | | |
| 11      | Container With Most Water	                        | Medium | | |
| 10      | Regular Expression Matching		                    | Hard | | |
| 9       | Palindrome Number	                                | Easy | | |
| 8	      | String to Integer	                                | Easy | String, Math | |
| 7	      | Reverse Integer	                                    | Easy | | |
| 6       | ZigZag Conversion	                                | Easy | | |
| 5	      | Longest Palindromic Substring	                    | Medium | | |
| 4	      | [Median of Two Sorted Arrays](src/binary_search/MedianOfTwoSortedArrays.js) | Hard | Sort, Merge Sort, Binary Search | [讲解1](https://youtu.be/raYYmEwyJ0o)|
| 3       | Longest Substring Without Repeating Characters      | Medium | String, Hash, Two Pointers | |
| 2       | Add Two Numbers                                     | Medium | | |
| 1       | [Two Sum](src/array/two_pointers/TwoSum.ts)         | Medium | Two Pointers | |

[[↑] Back to top](#leetcode-in-ts)


### Acknowledgement

- [How to Setup a new TypeScript Project](https://www.digitalocean.com/community/tutorials/typescript-new-project)

[[↑] Back to top](#leetcode-in-ts)