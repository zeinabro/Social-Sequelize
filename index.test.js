const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

const users = require("./seed/users.json")
const profiles = require("./seed/profiles.json")
const posts = require("./seed/posts.json")
const likes = require("./seed/likes.json")
const comments = require("./seed/comments.json")

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    // Write your tests here
    
    test("creating User instance",async function() {
        const user = await User.create(users[0])
        expect(user).toEqual(expect.objectContaining(users[0]));
    })

    test("creating Profile instance",async function() {
        const profile = await Profile.create(profiles[0])
        expect(profile).toEqual(expect.objectContaining(profiles[0]));
    })

    test("creating Post instance",async function() {
        const post = await Post.create(posts[0])
        expect(post).toEqual(expect.objectContaining(posts[0]));
    })

    test("creating Like instance",async function() {
        const like = await Like.create(likes[0])
        expect(like).toEqual(expect.objectContaining(likes[0]));
    })

    test("creating Comment instance",async function() {
        const comment = await Comment.create(comments[0])
        expect(comment).toEqual(expect.objectContaining(comments[0]));
    })

})