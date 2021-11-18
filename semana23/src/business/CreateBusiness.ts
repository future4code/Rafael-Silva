
import ErrorMessage from '../error/ErrorMessage';
import IdGenerator from '../services/IdGenerator';
import { CreateCompetitionDTORequest } from '../controller/CreateController';
import CompetitionModel, { ModalitiesInterface, UnitsInterface } from '../models/CompetitionModel';
import CompetitionData from '../data/CompetitionData';

export class CreateBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private competitionData: CompetitionData
       
    ) { }

    public competitionBusiness = async (input: CreateCompetitionDTORequest): Promise<object> => {
        const { competition, athlete, value, unit, modalities} = input;

        if (!competition || !athlete || !value) {
            throw new ErrorMessage("Todos os campos são obrigatórios", 422);
        }

        if (!(unit in UnitsInterface)){
            throw new ErrorMessage("Unidade de medida inválida. Aceito somente 'METROS' ou 'SEGUNDOS'", 422);
        }

        if (!(modalities in ModalitiesInterface)){
            throw new ErrorMessage("Modalidade inválida. Aceito somente 'Lançamento de Dardo' ou '100m rasos'", 422);
        }

        const id = this.idGenerator.generate();

        const newCompetition = new CompetitionModel(
            id,
            competition,
            athlete,
            value,
            unit as UnitsInterface,
            modalities as ModalitiesInterface
        )

        const result = await this.competitionData.create(newCompetition);


        if (result === false) {
            throw new ErrorMessage(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
                400
            );
        } else {
            return {
                message: 'Competição cadastrado com sucesso!'
            };
        }
    };

    

}