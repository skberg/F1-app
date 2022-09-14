-- CreateTable
CREATE TABLE "DriverStanding" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Driver_standing" TEXT NOT NULL,
    "driver_points" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TeamsStanding" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Teams_standing" TEXT NOT NULL,
    "Teams_points" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "driver" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "driver_name" TEXT NOT NULL,
    "driver_number" INTEGER NOT NULL,
    "driver_points" INTEGER NOT NULL,
    "driver_age" INTEGER NOT NULL,
    "driver_Teams" TEXT NOT NULL,
    "driver_podium" TEXT NOT NULL,
    "driver_country" TEXT NOT NULL,
    "driver_height" TEXT NOT NULL,
    "driver_pfb" TEXT NOT NULL,
    "driver_img" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "team_name" TEXT NOT NULL,
    "team_points" TEXT NOT NULL,
    "racing_drivers" TEXT NOT NULL,
    "driver_img" TEXT NOT NULL,
    "team_nas" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "track" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "track_name" TEXT NOT NULL,
    "track_date" TEXT NOT NULL,
    "track_map" TEXT NOT NULL,
    "track_nas" TEXT NOT NULL
);
