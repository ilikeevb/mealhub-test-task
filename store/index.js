export const state = () => ({
    opencomment: null,
    comments: [],
    page: 1,
})

export const getters = {
    GET_OPEN_COMMENT: state => {
        return state.opencomment;
    },
    GET_COMMENTS: state => {
        return state.comments.slice((state.page * 10) - 10, state.page * 10)
    },
    GET_ACTIVE_PAGE: state => {
        return state.page;
    },
    GET_PAGES: state => {
        return Math.ceil(state.comments.length / 10)
    }
}

export const mutations = {
    SET_COMMENTS(state, comments) {
        state.comments = comments;
        state.opencomment = null;
    },
    SET_COMMENT(state, data) {
        state.opencomment = data;
    },
    OPEN_PAGE(state, page) {
        state.page = page;
    }
}

export const actions = {
    async GET_COMMENTS(context) {
        const comments = await this.$axios.get("comments");
        context.commit('SET_COMMENTS', comments.data);
    },

    async GET_COMMENT_BY_ID(context, commentId) {
        const comment = await this.$axios.get(`comments?id=${commentId}`);
        const post = await this.$axios.get(`posts/${comment.data[0].postId}`);

        context.commit('SET_COMMENT', { comment: comment.data[0], post: post.data });
    }
}
