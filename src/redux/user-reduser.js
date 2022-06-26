const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
let initialState = {
  users: [
    // {
    //   id: 1,
    //   fullName: "Dimitry",
    //   followd: true,
    //   status: "i am lookig for a job",
    //   location: { city: "Minsk", country: "Belorus" },
    // },
    // {
    //   followd: true,
    //   id: 2,
    //   fullName: "Yurii",
    //   status: "i am lookig a good job",
    //   location: { city: "Kyiv", country: "Ukrain" },
    // },
    // {
    //   followd: true,
    //   id: 3,
    //   fullName: "Aleksandr",
    //   status: "i want to change my life",
    //   location: { city: "Oslo", country: "Norway" },
    // },
  ],
};

const userReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followd: false };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followd: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUserAC = (users) => ({ type: SET_USERS, users });
export default userReduser;
