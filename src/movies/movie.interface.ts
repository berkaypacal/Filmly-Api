export interface Movie {
  name: string;
  image_url: string[];
}

export interface MovieItem extends Movie {
  id: number;
}
