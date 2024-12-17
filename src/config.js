import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "mysql://root:VNtejfOANVLhLQRCzmDXniISrIRePBSa@junction.proxy.rlwy.net:19607/railway";
export const DB_USER = process.env.DB_USER || "mysql://root:VNtejfOANVLhLQRCzmDXniISrIRePBSa@junction.proxy.rlwy.net:19607/railway";
export const DB_PASSWORD = process.env.DB_PASSWORD || "mysql://root:VNtejfOANVLhLQRCzmDXniISrIRePBSa@junction.proxy.rlwy.net:19607/railway";
export const DB_DATABASE = process.env.DB_DATABASE || "railway";
export const DB_PORT = process.env.DB_PORT || 3306;
