const subreddits = ["books", "anime", "bleach", "meme"];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let reddit of subreddits) {
    console.log(`Visit reddit.com/r/${reddit}`);
}