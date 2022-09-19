import comments from "~/comments.json";

export const state = () => ({
    comments: comments
})

export const getters = {
    GET_COMMENT_BY_ID: state => commentId => {
        return state.comments.find(comment => comment.id === Number(commentId))
    },
    SET_COMMENTS: state => comments => {
        state.comments = comments;
    }
}

export const mutations = {
    increment(state) {
        state.counter++
    }
}

export const actions = {
    GET_COMMENTS: async state => {
        state;
        let comments = await this.$axios.$get("https://jsonplaceholder.typicode.com/comments");
        console.log("comments")
        console.log("comments: ", comments)
    }
}
