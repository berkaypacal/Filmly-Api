/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import { Movie, MovieItem } from "./movie.interface";
import * as MovieService from "./movies.service";

/**
 * Router Definition
 */
export const moviesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

moviesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const movieItems: MovieItem[] = await MovieService.findAll();
    res.status(200).send(movieItems);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET items/:id

moviesRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: MovieItem = await MovieService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST items

moviesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: Movie = req.body;

    const newItem = await MovieService.create(item);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// PUT items/:id

moviesRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: MovieItem = req.body;

    const existingItem: MovieItem = await MovieService.find(id);

    if (existingItem) {
      const updatedItem = await MovieService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await MovieService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

moviesRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await MovieService.remove(id);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
