/*
  Warnings:

  - You are about to drop the column `saldo` on the `servicio` table. All the data in the column will be lost.
  - Added the required column `bancoId` to the `Servicio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `metodopago` ADD COLUMN `saldo` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `servicio` DROP COLUMN `saldo`,
    ADD COLUMN `bancoId` INTEGER NOT NULL,
    MODIFY `estado` BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE `Servicio` ADD CONSTRAINT `Servicio_bancoId_fkey` FOREIGN KEY (`bancoId`) REFERENCES `Banco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
