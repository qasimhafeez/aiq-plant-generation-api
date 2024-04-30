"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var plantRoutes_1 = __importDefault(require("./routes/plantRoutes"));
var app = (0, express_1.default)();
var port = 6005;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", function (req, res) {
    res.send("root dir");
});
app.use("/api/plants", plantRoutes_1.default);
app.listen(port, function () {
    console.log("Server is listening at http://localhost:".concat(port));
});
