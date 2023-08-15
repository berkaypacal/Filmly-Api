// src/items/items.service.ts

import { Movie, MovieItem } from "./movie.interface";
import { MovieItems } from "./movies.interface";

/**
 * Data Model Interfaces
 */

/**
 * In-Memory Store
 */

let movieItems: MovieItems = {
  1: {
    id: 1,
    name: "Burger",
    image_url: ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"],
  },
  2: {
    id: 2,
    name: "Pizza",
    image_url: ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"],
  },
  3: {
    id: 3,
    name: "Tea",
    image_url: ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"],
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<MovieItem[]> =>
  Object.values(movieItems);

export const find = async (id: number): Promise<MovieItem> => movieItems[id];

export const create = async (newItem: Movie): Promise<MovieItem> => {
  const id = new Date().valueOf();

  movieItems[id] = {
    id,
    ...newItem,
  };

  return movieItems[id];
};

export const update = async (
  id: number,
  itemUpdate: Movie
): Promise<MovieItem | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  movieItems[id] = { id, ...itemUpdate };

  return movieItems[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete movieItems[id];
};
