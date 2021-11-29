export enum UnitsInterface {
    METROS = "METROS",
    SEGUNDOS = "SEGUNDOS",
}

export enum ModalitiesInterface {
    Rasos100m = "100m rasos",
    LancamentoDeDardo = "Lançamento de Dardo"
}

export default class CompetitionModel {
    constructor(
        private id: string,
        private competition: string,
        private athlete: string,
        private value: string,
        private unit: UnitsInterface,
        private modalities: ModalitiesInterface
    ) { }

    public getId(): string {
        return this.id;
    }

    public getCompetition(): string {
        return this.competition;
    }

    public getAthlete(): string {
        return this.athlete;
    }

    public getValue(): string {
        return this.value;
    }

    public getUnit(): UnitsInterface {
        return this.unit;
    }

    public getModalities(): ModalitiesInterface {
        return this.modalities;
    }
}
