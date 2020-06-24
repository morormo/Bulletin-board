export const initialState = {
  posts: {
    data:[
      {
        id: 1,
        name: 'Daniel Stokłosa',
        description: 'Lorem ipsum',
        email: 'morormo@gmail.com',
      },
      {
       id: 2,
       name: 'Daniel Stokłosa1',
       description: 'Lorem ipsum',
       email: 'morormo@gmail.com',
     },
     {
       id: 3,
       name: 'Daniel Stokłosa2',
       description: 'Lorem ipsum',
       email: 'morormo@gmail.com',
     },
     {
       id: 4,
       name: 'Daniel Stokłosa3',
       description: 'Lorem ipsum',
       email: 'morormo@gmail.com',
     },
    ],
  },
    loading: {
      active: false,
      error: false,
    },
    userLogged: true,
};
