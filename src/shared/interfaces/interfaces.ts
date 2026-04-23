export interface INote {
    id: string;
    name: string;
    category: "floral" | "fresh" | "oriental" | "woody" | "citrus" | "fruity" | "spicy" | "gourmand";
    created_at: string;
}

export interface IPerfume {
    id: string;
    name: string; 
    brand: IBrand;
    short_description: string;
    long_description: string;
    price: string;
    gender_target: "male" | "female" | "unisex";
    intensity: "light" | "medium" | "strong";
    season: "summer" | "winter" | "all";
    duration_hours: string;
    stock_quantity: string;
    first_image: string;
    images: string[];
    created_at: Date;
    updated_at: Date;
    top: string[];
    heart: string[];
    base: string[];
}

export interface IBrand {
    id: string;
    name: string;
    country: string;
    description: string;
    created_at: string;
    image: string;
}

export interface IPerfumeNotes {
    perfume_id: string;
    note_id: string;
    top: INote[];
    heart: INote[];
    base: INote[];
}


export interface IUser{
    id: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    birthdate: string;
    postal_code: string;
    province: string;
    created_at: string;
    updated_at: string;
}

export interface IOlfactiveProfile {
    id: string;
    user_id: string;
    preferred_season: "summer" | "winter" | "all";
    preferred_intensity: "light" | "medium" | "strong";
    preferred_occasions: "daily" | "night" | "date" | "sport" | "work";
    confidence_score: number;
    created_at: string;
    updated_at: string;
}

export interface IReviews {
    id: string;
    user_id: string;
    perfume_id: string;
    rating: string;
    comment_text: string;
    created_at: string;
    updated_at: string;
}

export interface UserPerfumeHistory{
    id:string;
    user_id: string;
    perfume_id?: string;
    perfume_name: string;
    brand_name: string;
    liked: boolean;
    created_at: string;
}

export interface IUserPreferredNotes {
    id: string;
    user_id: string;
    notes: INote[];
    preference_level: string;
    created_at: string;
}

export interface IPerfumeFilters {
    search: string;
    brands: string;
    gender: string;
    season: string;
    intensity: string;
    price_min: string;
    price_max: string;
}