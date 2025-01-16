import axios from "axios";

const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337/api";

export interface Hero {
    image: {
        url: string;
    };
    description: {
        children: {
            text: string;
        }[];
    }[];
    slug: string;
    id: number;
    name: string;
}

export interface Troop {
    image: {
        url: string;
    };
    description: {
        children: {
            text: string;
        }[];
    }[];
    slug: string;
    name: string;
}

export const fetchHeroes = async (): Promise<Hero[]> => {
    const response = await axios.get(`${API_URL}/heroes?populate=image`);
    return response.data.data;
};

export const fetchTroops = async (): Promise<Troop[]> => {
    const response = await axios.get(`${API_URL}/troops?populate=image`);
    return response.data.data;
};
