export class Post {
    id: string;
    title: string;
    description: string;
    tags: Array<string>;
    photoUrl?: string;
}


export class CreatePostDTO {
    title: string;
    description: string;
    tags: Array<string>;
}

