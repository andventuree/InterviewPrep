/* Reading: ch 10 - Scalability and memory limits

Don't actually need experience with distributed systems or system design. It only tests for the most basic of CS knowledge. Break down a tricky problem. Simply have reasoning for your decisions.

Generally speaking, scale problems means:
1) too many requests or
2) Too much data!
There comes a point when there is too much data for 1 computer. So the issue here is how to divide up static data so its still accessible.
  a) By order of appearance
    Pro: Easy to scale, just add more machines when current one is full
    Con: Look up table gets complex and large
  b) By hash value
    Pro: No look up table,
    Con: Once table is full, it'll need to shift data around
  c) By actual value - separate data by context of value - e.g., Mexico vs US
    Pro: Reduces system latency (lag)
    Con: ???
  d) Arbitrarily
    Pro: Allows for better load balancing. Does not imply large lookup table.
    Con: ???

Example problem: Given a million documents, how do you find all documents that contain a list of words?

Steps:
1. Make believe, scale down the issue presented. - Rather than 1 million docs, imagine you just had 10 documents. How do you handle this.
2. Now get real, go back to original problem and how would you approach the presented issue? Provide an actually solution. Use a hash table to break up data and divide it by keywords.
3. Solve problems, is basically showing how your step 2 assumptions work out.

*/


/*

RFK Scale: applied to systems + databases
Graph indicating course of action to take depending on bottleneck limitation

Systems
x axis - Add more resources to handle general requests
y axis - Add a resource to handle specific requests
z axis - separate systems geographically (add an CDN closer to users)

Databases
x axis - Sharding - Make a copy of the data so if one DB is overwhelmed, other can help
y axis - Add a specific DB (e.g., Redis, MemcacheD, NoSQL, SQL)
z axis - separate database geographically (have specific DB for USA, China, Europe)

When adding additional resources, either copied or separated, there needs to be a load balancer type of mechanism to determine how a request makes it to the right resource to get the right information.

*/

