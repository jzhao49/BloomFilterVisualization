import { doHash } from "./mumurhash";

class BloomFilter {
    constructor(size, k) {
        this.size = size;
        this.k = k;
        this.bf = Array(size).fill(0);
        
        this.hashes = Array();
        for(var i = 0; i < this.k; i++) {
            this.hashes.push(doHash(key, i))
        }
    }

    get_hashed_idxs(key) {
        hashed_idxs = Array();
        for (hash in this.hashes) {
            hashed_idxs.push(hash(key) % this.size)    
        }
        return hashed_idxs;
    }

    insert(key) {
        hashed_idxs = this.get_hashed_idxs(key);
        for (hashed_idx in hashed_idxs) {
            this.bf[hashed_idx] = 1;
        }
    }

    query(key) {
        hashed_idxs = this.get_hashed_idxs(key)
        results = Array()

        for (hashed_idx in hashed_idxs) {
            results.push(this.bf[hashed_idx])
        }

        return results.every(el => el === 1)
    }
    
}