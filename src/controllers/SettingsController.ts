import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {

  async create(request: Request, response: Response) {
    const { username, chat } = request.body;

    try {
      const settingsService = new SettingsService();

      const settings = await settingsService.create({username, chat})
  
      return response.status(201).json(settings);
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  }
} 

export { SettingsController}