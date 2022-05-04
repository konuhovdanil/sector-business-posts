import axios from "axios";

export const postsModule = {
    state() {
        return {
            posts: [],
            filteredPosts: [],
            filteredPostsWithSearhAndSort: [],
            pagesCount: 0,
            currentPage: 1,
            searchPhrase: '',
            sortType: {
                direction: 1,
                column: 'id'
            }
        }
    },
    getters: {
        posts(state) {
            return state.posts;
        },
        filteredPosts(state) {
            return state.filteredPosts;
        },
        pagesCount(state) {
            return state.pagesCount;
        },
        currentPage(state) {
            return state.currentPage;
        },
        sortType(state) {
            return state.sortType;
        },
        filteredPostsWithSearhAndSort(state) {
            return state.filteredPostsWithSearhAndSort;
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setFilteredPosts(state, filteredPosts) {
            state.filteredPosts = filteredPosts;
        },
        setPagesCount(state, pagesCount) {
            state.pagesCount = pagesCount;
        },
        setCurrentPage(state, currentPage) {
            state.currentPage = currentPage;
        },
        setSearchPhrase(state, searchPhrase) {
            state.searchPhrase = searchPhrase;
        },
        setSortType(state, sortType) {
            state.sortType = sortType;
        },
        setFilteredPostsWithSearhAndSort(state, filteredPostsWithSearhAndSort) {
            state.filteredPostsWithSearhAndSort = filteredPostsWithSearhAndSort;
        }
    },
    actions: {
        async fetchPosts({commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

                commit('setPosts', response.data);
                commit('setPagesCount', Math.ceil(response.data.length / 10));
            } catch (e) {
                console.log(e);
            }
        },
        filterPosts({state, commit}) {
            const offset = state.currentPage * 10;
            commit('setFilteredPosts', state.posts.slice(offset - 10, offset))
        },
        chooseCurrentPage({state, commit, dispatch}, currentPage) {
            if (currentPage >= 1 && currentPage <= state.pagesCount) {
                commit('setCurrentPage', currentPage);
            }

            dispatch('updateFilteredPostsWithSearhAndSort');
        },
        updateSearchPhrase({commit, dispatch}, searchPhrase) {
            commit('setSearchPhrase', searchPhrase);

            dispatch('updateFilteredPostsWithSearhAndSort');
        },
        updateSortType({commit, dispatch}, sortType) {
            commit('setSortType', sortType);

            dispatch('updateFilteredPostsWithSearhAndSort');
        },
        updateFilteredPostsWithSearhAndSort({state, commit, dispatch}) {
            dispatch('filterPosts');

            const filteredPosts = state.filteredPosts.sort((a, b) => {
                if ( a[state.sortType.column] < b[state.sortType.column] ){
                    return state.sortType.direction === 1 ? -1 : 1;
                }
                if ( a[state.sortType.column] > b[state.sortType.column] ){
                    return state.sortType.direction === 1 ? 1 : -1;
                }
                return 0;
            });

            if (state.searchPhrase !== '') {
                commit('setFilteredPostsWithSearhAndSort', filteredPosts.filter(post => post.id === Number(state.searchPhrase) || post.title.includes(state.searchPhrase) || post.body.includes(state.searchPhrase)));
            } else {
                commit('setFilteredPostsWithSearhAndSort', filteredPosts);
            }
        }
    },
    namespaced: true
}