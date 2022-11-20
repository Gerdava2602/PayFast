/*
  Warnings:

  - Added the required column `tipo` to the `Metodopago` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Transaccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `franquicia` to the `Transaccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nroCuotas` to the `Transaccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sede` to the `Transaccion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `banco` ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `metodopago` ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `tipo` ENUM('debito', 'credito') NOT NULL;

-- AlterTable
ALTER TABLE `servicio` ADD COLUMN `saldo` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `transaccion` ADD COLUMN `estado` ENUM('pendiente', 'aprobado', 'rechazado') NOT NULL,
    ADD COLUMN `franquicia` VARCHAR(191) NOT NULL,
    ADD COLUMN `nroCuotas` INTEGER NOT NULL,
    ADD COLUMN `sede` VARCHAR(191) NOT NULL,
    MODIFY `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
