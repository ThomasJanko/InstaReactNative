import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://www.photo-paysage.com/albums/Paysages/Lac-riviere-cascade/thumb_croatie-lacs-plitvice-cascades-7.jpg',
        user: USERS[0].user,
        likes: 4002,
        likes_by_users: [],
        caption: 'Test caption 1',
        profile_picture: USERS[0].image,
        comments: [
            {
               user: 'Thomas',
               comment: "It's beautiful!"
            },
            {
                user: 'Antoine',
                comment: "Thomas the best in the world"
            }
            
        ]
    },

    {
        imageUrl: 'https://blog.vacancesweb.be/wp-content/uploads/2021/09/chan_copy1.jpg',
        user: USERS[1].user,
        likes: 660,
        likes_by_users: [],
        caption: 'Test caption 1',
        profile_picture: USERS[1].image,
        comments: [
            {
               user: 'Thomas',
               comment: "It's beautiful!"
            },
            {
                user: 'Antoine',
                comment: "Thomas the best in the world"
            }
            
        ]
    },

    {
        imageUrl: 'https://img.freepik.com/photos-gratuite/paysage-paisible-paisible-campagne-propre-flux_1417-1106.jpg?w=2000',
        user: USERS[2].user,
        likes: 42015,
        likes_by_users: [],
        caption: 'Test caption 3',
        profile_picture: USERS[2].image,
        comments: [
            // {
            //    user: 'Thomas',
            //    comment: "It's beautiful!"
            // },
            // {
            //     user: 'Antoine',
            //     comment: "Thomas the best in the world"
            // }
            
        ]
    }
]