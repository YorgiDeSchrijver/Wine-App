'use client';
import { vars } from 'nativewind';

export const config = {
  light: vars({
    /* Primary */
    "--color-primary-0": "255 255 255",
    "--color-primary-50": "246 246 246",
    "--color-primary-100": "230 230 230",
    "--color-primary-200": "200 200 200",
    "--color-primary-300": "170 170 170",
    "--color-primary-400": "140 140 140",
    "--color-primary-500": "110 110 110",
    "--color-primary-600": "80 80 80",
    "--color-primary-700": "50 50 50",
    "--color-primary-800": "30 30 30",
    "--color-primary-900": "10 10 10",
    "--color-primary-950": "5 5 5",

    /* Secondary */
    "--color-secondary-0": "240 240 255",
    "--color-secondary-50": "230 230 255",
    "--color-secondary-100": "200 200 255",
    "--color-secondary-200": "170 170 255",
    "--color-secondary-300": "140 140 255",
    "--color-secondary-400": "110 110 255",
    "--color-secondary-500": "80 80 255",
    "--color-secondary-600": "60 60 200",
    "--color-secondary-700": "50 50 170",
    "--color-secondary-800": "40 40 140",
    "--color-secondary-900": "30 30 110",
    "--color-secondary-950": "20 20 80",

    /* Tertiary */
    "--color-tertiary-0": "255 240 240",
    "--color-tertiary-50": "255 230 230",
    "--color-tertiary-100": "255 200 200",
    "--color-tertiary-200": "255 170 170",
    "--color-tertiary-300": "255 140 140",
    "--color-tertiary-400": "255 110 110",
    "--color-tertiary-500": "255 80 80",
    "--color-tertiary-600": "200 60 60",
    "--color-tertiary-700": "170 50 50",
    "--color-tertiary-800": "140 40 40",
    "--color-tertiary-900": "110 30 30",
    "--color-tertiary-950": "80 20 20",

    /* Error */
    "--color-error-0": "255 245 245",
    "--color-error-50": "255 235 235",
    "--color-error-100": "255 200 200",
    "--color-error-200": "255 170 170",
    "--color-error-300": "255 130 130",
    "--color-error-400": "255 100 100",
    "--color-error-500": "255 70 70",
    "--color-error-600": "230 50 50",
    "--color-error-700": "200 40 40",
    "--color-error-800": "170 30 30",
    "--color-error-900": "140 20 20",
    "--color-error-950": "100 10 10",

    /* Success */
    "--color-success-0": "245 255 245",
    "--color-success-50": "235 255 235",
    "--color-success-100": "200 255 200",
    "--color-success-200": "170 255 170",
    "--color-success-300": "130 255 130",
    "--color-success-400": "100 255 100",
    "--color-success-500": "70 255 70",
    "--color-success-600": "50 230 50",
    "--color-success-700": "40 200 40",
    "--color-success-800": "30 170 30",
    "--color-success-900": "20 140 20",
    "--color-success-950": "10 100 10",

    /* Warning */
    "--color-warning-0": "255 250 230",
    "--color-warning-50": "255 240 220",
    "--color-warning-100": "255 230 200",
    "--color-warning-200": "255 200 170",
    "--color-warning-300": "255 170 140",
    "--color-warning-400": "255 140 110",
    "--color-warning-500": "255 110 80",
    "--color-warning-600": "255 90 60",
    "--color-warning-700": "255 70 40",
    "--color-warning-800": "230 60 30",
    "--color-warning-900": "200 50 20",
    "--color-warning-950": "170 40 10",

    /* Info */
    "--color-info-0": "240 250 255",
    "--color-info-50": "220 240 255",
    "--color-info-100": "200 230 255",
    "--color-info-200": "170 210 255",
    "--color-info-300": "140 190 255",
    "--color-info-400": "110 170 255",
    "--color-info-500": "80 150 255",
    "--color-info-600": "60 120 230",
    "--color-info-700": "40 100 200",
    "--color-info-800": "30 80 170",
    "--color-info-900": "20 60 140",
    "--color-info-950": "10 40 100",
  }),
  dark: vars({
    "--color-primary-0": "34 40 49",
    "--color-primary-50": "57 62 70",
    "--color-primary-100": "68 71 79",
    "--color-primary-200": "84 90 100",
    "--color-primary-300": "100 109 120",
    "--color-primary-400": "128 140 154",
    "--color-primary-500": "162 176 192",
    "--color-primary-600": "195 209 224",
    "--color-primary-700": "217 229 240",
    "--color-primary-800": "232 241 248",
    "--color-primary-900": "241 248 252",
    "--color-primary-950": "245 251 253",

    /* Secondary */
    "--color-secondary-0": "30 35 39",
    "--color-secondary-50": "40 46 52",
    "--color-secondary-100": "50 57 64",
    "--color-secondary-200": "65 73 82",
    "--color-secondary-300": "80 90 100",
    "--color-secondary-400": "100 111 123",
    "--color-secondary-500": "130 143 157",
    "--color-secondary-600": "160 175 192",
    "--color-secondary-700": "195 209 224",
    "--color-secondary-800": "215 229 241",
    "--color-secondary-900": "235 245 251",
    "--color-secondary-950": "245 251 253",

    /* Tertiary */
    "--color-tertiary-0": "25 35 35",
    "--color-tertiary-50": "33 44 44",
    "--color-tertiary-100": "42 55 55",
    "--color-tertiary-200": "53 68 68",
    "--color-tertiary-300": "67 84 84",
    "--color-tertiary-400": "84 105 105",
    "--color-tertiary-500": "112 140 140",
    "--color-tertiary-600": "144 180 180",
    "--color-tertiary-700": "176 217 217",
    "--color-tertiary-800": "206 235 235",
    "--color-tertiary-900": "230 247 247",
    "--color-tertiary-950": "240 251 251",

    /* Error */
    "--color-error-0": "50 23 23",
    "--color-error-50": "60 28 28",
    "--color-error-100": "70 32 32",
    "--color-error-200": "90 40 40",
    "--color-error-300": "115 50 50",
    "--color-error-400": "145 64 64",
    "--color-error-500": "176 84 84",
    "--color-error-600": "210 110 110",
    "--color-error-700": "230 140 140",
    "--color-error-800": "245 176 176",
    "--color-error-900": "252 210 210",
    "--color-error-950": "253 230 230",

    /* Success */
    "--color-success-0": "18 40 33",
    "--color-success-50": "20 50 41",
    "--color-success-100": "25 60 50",
    "--color-success-200": "30 75 64",
    "--color-success-300": "36 90 76",
    "--color-success-400": "45 115 96",
    "--color-success-500": "60 140 120",
    "--color-success-600": "80 175 150",
    "--color-success-700": "115 210 190",
    "--color-success-800": "150 230 210",
    "--color-success-900": "190 245 230",
    "--color-success-950": "210 252 240",

    /* Warning */
    "--color-warning-0": "45 40 25",
    "--color-warning-50": "55 50 30",
    "--color-warning-100": "70 64 40",
    "--color-warning-200": "85 75 50",
    "--color-warning-300": "100 90 60",
    "--color-warning-400": "130 110 75",
    "--color-warning-500": "160 140 95",
    "--color-warning-600": "200 175 120",
    "--color-warning-700": "230 210 160",
    "--color-warning-800": "245 230 190",
    "--color-warning-900": "252 245 215",
    "--color-warning-950": "253 250 230",

    /* Info */
    "--color-info-0": "10 25 35",
    "--color-info-50": "12 32 44",
    "--color-info-100": "15 40 50",
    "--color-info-200": "18 50 64",
    "--color-info-300": "24 64 80",
    "--color-info-400": "30 80 100",
    "--color-info-500": "40 100 130",
    "--color-info-600": "55 130 170",
    "--color-info-700": "80 160 200",
    "--color-info-800": "110 200 230",
    "--color-info-900": "160 230 250",
    "--color-info-950": "200 245 252",

    /* Typography */
    "--color-typography-0": "245 245 245",
    "--color-typography-50": "240 240 240",
    "--color-typography-100": "230 230 230",
    "--color-typography-200": "210 210 210",
    "--color-typography-300": "180 180 180",
    "--color-typography-400": "150 150 150",
    "--color-typography-500": "120 120 120",
    "--color-typography-600": "90 90 90",
    "--color-typography-700": "60 60 60",
    "--color-typography-800": "40 40 40",
    "--color-typography-900": "25 25 25",
    "--color-typography-950": "15 15 15",

    /* Background */
    "--color-background-0": "15 15 15",
    "--color-background-50": "25 25 25",
    "--color-background-100": "40 40 40",
    "--color-background-200": "60 60 60",
    "--color-background-300": "80 80 80",
    "--color-background-400": "110 110 110",
    "--color-background-500": "140 140 140",
    "--color-background-600": "180 180 180",
    "--color-background-700": "210 210 210",
    "--color-background-800": "230 230 230",
    "--color-background-900": "245 245 245",
    "--color-background-950": "255 255 255",

    /* Background Special */
    "--color-background-error": "50 30 30",
    "--color-background-warning": "55 40 30",
    "--color-background-success": "40 50 45",
    "--color-background-muted": "45 45 45",
    "--color-background-info": "20 35 45",

    /* Focus Ring Indicator */
    "--color-indicator-primary": "190 190 190",
    "--color-indicator-info": "80 160 230",
    "--color-indicator-error": "230 80 80",
  }),
};
