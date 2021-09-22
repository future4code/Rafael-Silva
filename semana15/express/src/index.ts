import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countries } from "./utils/countries";
import { country } from "./utils/types";

const app: Express = express();

app.use(express.json());
app.use(cors());

//Endpoint 1 - Buscar todos os países

app.get("/countries", (req: Request, res: Response) => {
    try {
        const result = countries.map((country) => {
            return {
                id: country.id,
                name: country.name
            };
        });

        res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send("Bad request!");
    }
});

// Endpoint 3 - Busca com filtros

app.get("/countries/search", (req: Request, res: Response) => {
    try {
        if (req.query.name || req.query.capital || req.query.continent) {
            // console.log(req.query.name);
            const search = countries.filter((country) => {

                
                const name: any = req.query.name;
                const capital: any = req.query.capital;
                const continent: any = req.query.continent;

                return (
                    country.name.includes(name) ||
                    country.capital.includes(capital) ||
                    country.continent.includes(continent)
                );
            });

            if (search.length > 0) {
                res.statusCode = 200;
                res.send(search);
            } else {
                res.statusCode = 404;
                throw new Error("Country not found!");
            }
        } else {
            res.statusCode = 400;
            throw new Error("Invalid query parameter!");
        }
    } catch (error: any) {
        res.send(error.message);
    }
});

// Endpoint 2 - Buscar país por id

app.get("/countries/:id", (req: Request, res: Response) => {
    try {
        if (!Number(req.params.id)) {
            res.statusCode = 400;
            throw new Error("Invalid id!");
        }

        const country: country | undefined = countries.find((c) => c.id === Number(req.params.id));

        if (country) {
            res.status(200).send(country);
        } else {
            res.statusCode = 404;
            throw new Error("Country not found!");
        }
    } catch (error: any) {
        res.send(error.message);
    }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
