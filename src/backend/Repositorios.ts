import { PrismaClient } from "@prisma/client";

export default class Repositorios {
  protected static db: PrismaClient = new PrismaClient();
}
