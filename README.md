Takes an array arr as input.
The goal is to find all elements that appear more than once.
seen: A Set to track elements we've already encountered.
duplicates: A Set to store elements that appear more than once.
Why Sets? Because:
Lookup in a Set is O(1) — lightning-fast.
It prevents storing the same duplicate multiple times.
We loop through each element in the input array arr.
seen.has(item):
If we’ve already seen this item, it means this is a duplicate.
So, we add it to the duplicates Set.
else seen.add(item):
If this is the first time we’re seeing the item, add it to the seen Set.
