-- CreateTable
CREATE TABLE "servico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endereco" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "agendamento" DATETIME NOT NULL
);
