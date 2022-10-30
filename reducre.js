const inislaState = {
    user:{},
    songs: [],
    
}

const reducer = (state = inislaState, action) => {
    switch (action.type) {
        case "ADDSONG": {
            const songs = [...state.songs]
            songs.push(action.song)
            return {
                ...state,
                song: songs
            }
        }
        case "LOGIN": {
            return {
                ...state,
                user: action.users
            }

        }
        case "SAVE_SONGS": {
            return {
                ...state,
                songs: action.songs

            }

        }
        case "UPDATE_SONG": {
            console.log(action.song)
            let index = state.songs.indexOf(state.songs.find(x => x.Id == action.song.Id))
            if (index)
                state.songs[index] = action.song
            return {
                ...state,
                songs: state.songs
            }
        }

        case "DELETE_SONG": {
            const d = state.songs.filter(x => x.Id != action.id)
            return {
                ...state,
                songs: d,
            }
        }


        default: return { ...state }
    }
}
export default reducer