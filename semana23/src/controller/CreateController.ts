import { Request, Response } from 'express';
import { CreateBusiness } from '../business/CreateBusiness';
import CompetitionData from '../data/CompetitionData';
import IdGenerator from '../services/IdGenerator';

export interface CreateCompetitionDTORequest {
    competition: string;
    athlete: string;
    value: string;
    unit: string;
    modalities: string;
}

export class CreateController {
    public async createCompetitionController(req: Request, res: Response): Promise<void> {
        try {
            const input: CreateCompetitionDTORequest = {
                competition: req.body.competition,
                athlete: req.body.athlete,
                value: req.body.value,
                unit: req.body.unit,
                modalities: req.body.modalities,
            };

            const result = await new CreateBusiness(
                new IdGenerator(),
                new CompetitionData()
            ).competitionBusiness(input);

            res.status(200).send(result);
        } catch (error) {
            console.log(error);
            res.status(error.statusCode).send({ message: error.message });
        }
    }
    
}