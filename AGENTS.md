# AGENTS.md – holdbooking

## Projektet
Holdbooking-app. Admin opretter hold (web), medlemmer booker og afmelder (mobil).
Eksamensprojekt på EK Webudvikling, 2. semester (Fullstack, Databaser 2, Udviklingsmiljøer).

## Struktur
- `backend/` – NestJS REST API, TypeORM, PostgreSQL
- `web/` – Next.js (admin) *(kommer senere)*
- `mobile/` – Expo / React Native (medlem) *(kommer senere)*
- `docker-compose.yml` – Postgres til udvikling (port 5434)

## Kommandoer (kør i `backend/`)
- `npm run start:dev` – start API med hot reload (kræver `docker compose up -d` i roden)
- `npm run lint` – oxlint
- `npm run build` – byg
- `npm test` – tests

## Konventioner
- Lagdeling: Controller (routes, DTO'er, guards) → Service (forretningsregler) → Repository (TypeORM)
- Al input valideres med DTO'er og `class-validator`
- Importér altid fra pakkenavnet (`'@nestjs/common'`, `'typeorm'`), aldrig fra interne stier
- Forretningsregler ligger i backenden, ikke i frontends
- Booking oprettes i én transaktion med pessimistisk lås på holdet

## Regler for AI-agenter
- Ingen ændringer uden at `npm run lint` og `npm run build` er grønne
- Ændringer i booking-, auth- eller adgangslogik kræver en test
- Commit ikke, og tilføj ikke Co-Authored-By. Udvikleren committer selv
- Ret aldrig `.env`. Nye variabler tilføjes i `.env.example`