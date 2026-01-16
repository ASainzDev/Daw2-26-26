"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contacts_routes_1 = require("./routes/contacts.routes");
const app = (0, express_1.default)();
// Middleware para poder leer JSON en requests (hoy no lo usamos mucho, pero es estándar)
app.use(express_1.default.json());
// Endpoint de salud: útil para comprobar que el servidor vive
app.get("/health", (_req, res) => {
    res.json({ ok: true, status: "up" });
});
// Montamos el router: todas las rutas de contactos cuelgan de /contacts
app.use("/contacts", contacts_routes_1.contactsRouter);
const PORT = Number(process.env.PORT ?? 3000);
app.listen(PORT, () => {
    console.log(`Agenda API escuchando en http://localhost:${PORT}`);
});
