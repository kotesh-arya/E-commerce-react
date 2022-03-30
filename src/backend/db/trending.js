import {
    v4 as uuid
} from "uuid";

/**
 * trending Database can be added here.
 * You can add trending of your wish with different attributes
 * */

export const trending = [{
        _id: uuid(),
        trendingTitle: "Sherlock's Hat",
        imageSource: "https://daily-fashion.netlify.app/Components/Homepage/HomePage-assets/trending-image-sherlock-cap.jpg",
        description: "Transform yourself into a detective look with this Sherlock's Hat.By the comfort you get in this winter, you can pull out your style with a lengthy coat.",

    },
    {
        _id: uuid(),
        trendingTitle: "Johnny depp scarf",
        imageSource: "https://daily-fashion.netlify.app/Components/Homepage/HomePage-assets/trending-image-scarf.jpg",
        description: "The best companion for this freezing winter, which gives you a rugged look from out side and cozy warm feel from inside. Be a Double-game player.",


    },



];