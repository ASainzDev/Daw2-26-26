"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRouter = void 0;
const express_1 = require("express");
const pool_1 = require("../db/pool");
exports.contactsRouter = (0, express_1.Router)();
exports.contactsRouter.get("/", async (_req, res) => {
    try {
        const [rows] = await pool_1.pool.query("SELECT id, full_name, phone, email, created_at FROM contacts ORDER BY id ASC");
        res.json({
            ok: true,
            count: Array.isArray(rows) ? rows.length : 0,
            data: rows
        });
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            message: "Error leyendo contactos",
            error: err instanceof Error ? err.message : String(err)
        });
    }
});
