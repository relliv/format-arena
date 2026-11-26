# vite

> 1621 JavaScript and TypeScript, 397 JSON, 207 CSS, 29 SCSS, 11 Less, 80 Markdown, 3 YAML, 158 HTML files, formatted by 10 formatters. `prettier@3.9.10` prints exactly what `prettier@3.10.1` prints in every language it formats.

| | |
|---|---|
| **Machine** | Apple M4 Max, 16 cores, 48 GiB |
| **System** | macOS 27.0.1 (26A434), Node v26.0.0, local machine |
| **When** | 2026-11-25 23:56 UTC, 3 min |
| **Method** | check mode, median of 7 rounds after one warm-up per language; order rotated every round |
| **Reference** | `prettier@3.10.1`, with Prettier's default style written out |
| **Run** | `2026-11-25-2356-apple-m4-max-darwin-vite` |

## JavaScript and TypeScript

1621 files, 3.1 MiB; 2 files left out because `prettier@3.10.1` cannot format them (run.json).

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 1621 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 1621 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 1619 (99.9%) | 2 | ⚠️ differs |
| `tidy@2.0.0` | 1619 (99.9%) | 2 | ⚠️ differs |
| `oxfmt@0.78.0` | 1599 (98.6%) | 22 | ⚠️ differs |
| `oxfmt@0.79.0` | 1599 (98.6%) | 22 | ⚠️ differs |
| `biome@2.6.7` | 1560 (96.2%) | 61 | ⚠️ differs |
| `biome@2.6.8` | 1560 (96.2%) | 61 | ⚠️ differs |
| `dprint@0.64.3` | 1213 (74.8%) | 408 | ⚠️ differs |
| `dprint@0.65.0` | 1213 (74.8%) | 408 | ⚠️ differs |

**Speed, as shipped** (check mode over all 1621 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.031 s** | 0.030 to 0.065 | 84.2× | 0.230 s | 26 MiB |
| `bun@1.4.4` | **0.053 s** | 0.051 to 0.053 | 49.7× | 0.550 s | 56 MiB |
| `dprint@0.64.3` | **0.060 s** | 0.060 to 0.062 | 43.3× | 0.620 s | 116 MiB |
| `dprint@0.65.0` | **0.062 s** | 0.060 to 0.067 | 42.1× | 0.620 s | 117 MiB |
| `biome@2.6.7` | **0.070 s** | 0.069 to 0.088 | 37.1× | 0.690 s | 112 MiB |
| `biome@2.6.8` | **0.071 s** | 0.070 to 0.073 | 36.9× | 0.690 s | 110 MiB |
| `oxfmt@0.79.0` | **0.074 s** | 0.072 to 0.077 | 35.5× | 0.580 s | 107 MiB |
| `oxfmt@0.78.0` | **0.074 s** | 0.066 to 0.076 | 35.5× | 0.570 s | 108 MiB |
| `prettier@3.9.10` | **2.57 s** | 2.47 to 2.74 | 1.0× | 5.12 s | 390 MiB |
| `prettier@3.10.1` | **2.61 s** | 2.50 to 2.81 | 1.0× | 5.18 s | 363 MiB |

**Speed, 1 thread** (check mode over all 1621 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.101 s** | 0.095 to 0.108 | NaN× | 0.090 s | 17 MiB |
| `tidy@2.0.0` | **0.109 s** | 0.106 to 0.118 | NaN× | 0.090 s | 12 MiB |
| `oxfmt@0.79.0` | **0.130 s** | 0.127 to 0.137 | NaN× | 0.140 s | 71 MiB |
| `oxfmt@0.78.0` | **0.132 s** | 0.128 to 0.138 | NaN× | 0.140 s | 71 MiB |
| `dprint@0.64.3` | **0.461 s** | 0.451 to 0.494 | NaN× | 0.510 s | 47 MiB |
| `dprint@0.65.0` | **0.482 s** | 0.450 to 0.491 | NaN× | 0.530 s | 48 MiB |

## JSON

397 files, 107 KiB; 1 files left out because `prettier@3.10.1` cannot format them (run.json).

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 397 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 397 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 397 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 397 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 397 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 397 (100.0%) | 0 | ✅ identical |
| `biome@2.6.7` | 396 (99.7%) | 1 | ⚠️ differs |
| `biome@2.6.8` | 396 (99.7%) | 1 | ⚠️ differs |
| `dprint@0.64.3` | 134 (33.8%) | 263 | ⚠️ differs |
| `dprint@0.65.0` | 134 (33.8%) | 263 | ⚠️ differs |

**Speed, as shipped** (check mode over all 397 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.012 s** | 0.012 to 0.013 | 21.9× | 0.040 s | 6 MiB |
| `dprint@0.64.3` | **0.020 s** | 0.020 to 0.022 | 13.4× | 0.100 s | 34 MiB |
| `bun@1.4.4` | **0.021 s** | 0.020 to 0.022 | 13.0× | 0.150 s | 21 MiB |
| `dprint@0.65.0` | **0.021 s** | 0.021 to 0.022 | 12.8× | 0.100 s | 35 MiB |
| `biome@2.6.7` | **0.025 s** | 0.025 to 0.026 | 10.8× | 0.170 s | 35 MiB |
| `biome@2.6.8` | **0.025 s** | 0.024 to 0.026 | 10.6× | 0.180 s | 35 MiB |
| `oxfmt@0.78.0` | **0.049 s** | 0.048 to 0.053 | 5.5× | 0.220 s | 74 MiB |
| `oxfmt@0.79.0` | **0.051 s** | 0.050 to 0.054 | 5.2× | 0.220 s | 74 MiB |
| `prettier@3.9.10` | **0.263 s** | 0.254 to 0.294 | 1.0× | 0.380 s | 148 MiB |
| `prettier@3.10.1` | **0.269 s** | 0.251 to 0.282 | 1.0× | 0.390 s | 147 MiB |

**Speed, 1 thread** (check mode over all 397 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.017 s** | 0.017 to 0.019 | NaN× | 0.010 s | 4 MiB |
| `bun@1.4.4` | **0.018 s** | 0.018 to 0.022 | NaN× | 0.010 s | 8 MiB |
| `dprint@0.64.3` | **0.039 s** | 0.038 to 0.039 | NaN× | 0.060 s | 31 MiB |
| `dprint@0.65.0` | **0.039 s** | 0.038 to 0.041 | NaN× | 0.060 s | 32 MiB |
| `oxfmt@0.79.0` | **0.041 s** | 0.039 to 0.047 | NaN× | 0.040 s | 63 MiB |
| `oxfmt@0.78.0` | **0.041 s** | 0.040 to 0.046 | NaN× | 0.040 s | 63 MiB |

## CSS

207 files, 98 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 207 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 207 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 207 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 207 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 192 (92.8%) | 15 | ⚠️ differs |
| `tidy@2.0.0` | 192 (92.8%) | 15 | ⚠️ differs |
| `biome@2.6.7` | 191 (92.3%) | 16 | ⚠️ differs |
| `biome@2.6.8` | 191 (92.3%) | 16 | ⚠️ differs |
| `dprint@0.64.3` | 188 (90.8%) | 19 | ⚠️ differs |
| `dprint@0.65.0` | 188 (90.8%) | 19 | ⚠️ differs |

**Speed, as shipped** (check mode over all 207 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.009 s** | 0.008 to 0.009 | 32.3× | 0.020 s | 6 MiB |
| `bun@1.4.4` | **0.014 s** | 0.013 to 0.014 | 20.2× | 0.060 s | 22 MiB |
| `dprint@0.65.0` | **0.016 s** | 0.015 to 0.018 | 18.1× | 0.050 s | 37 MiB |
| `dprint@0.64.3` | **0.016 s** | 0.015 to 0.017 | 17.4× | 0.050 s | 36 MiB |
| `biome@2.6.7` | **0.019 s** | 0.018 to 0.028 | 14.8× | 0.090 s | 41 MiB |
| `biome@2.6.8` | **0.019 s** | 0.018 to 0.020 | 14.7× | 0.090 s | 41 MiB |
| `oxfmt@0.78.0` | **0.042 s** | 0.040 to 0.045 | 6.7× | 0.090 s | 76 MiB |
| `oxfmt@0.79.0` | **0.043 s** | 0.041 to 0.045 | 6.6× | 0.090 s | 76 MiB |
| `prettier@3.10.1` | **0.282 s** | 0.279 to 0.303 | 1.0× | 0.450 s | 137 MiB |
| `prettier@3.9.10` | **0.282 s** | 0.278 to 0.287 | 1.0× | 0.450 s | 137 MiB |

**Speed, 1 thread** (check mode over all 207 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.012 s** | 0.011 to 0.013 | NaN× | 0.000 s | 5 MiB |
| `bun@1.4.4` | **0.013 s** | 0.013 to 0.015 | NaN× | 0.000 s | 8 MiB |
| `dprint@0.64.3` | **0.026 s** | 0.025 to 0.029 | NaN× | 0.040 s | 31 MiB |
| `dprint@0.65.0` | **0.028 s** | 0.026 to 0.029 | NaN× | 0.030 s | 32 MiB |
| `oxfmt@0.79.0` | **0.041 s** | 0.038 to 0.043 | NaN× | 0.030 s | 64 MiB |
| `oxfmt@0.78.0` | **0.043 s** | 0.038 to 0.044 | NaN× | 0.040 s | 64 MiB |

## SCSS

29 files, 3 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 29 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 29 (100.0%) | 0 | ✅ identical |
| `dprint@0.64.3` | 29 (100.0%) | 0 | ✅ identical |
| `dprint@0.65.0` | 29 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 29 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 29 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 29 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 29 (100.0%) | 0 | ✅ identical |
| `biome@2.6.7` | 28 (96.6%) | 1 | ⚠️ differs |
| `biome@2.6.8` | 28 (96.6%) | 1 | ⚠️ differs |

**Speed, as shipped** (check mode over all 29 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.006 s** | 0.005 to 0.007 | 13.6× | 0.000 s | 5 MiB |
| `bun@1.4.4` | **0.008 s** | 0.007 to 0.009 | 10.4× | 0.000 s | 13 MiB |
| `biome@2.6.7` | **0.012 s** | 0.011 to 0.013 | 7.5× | 0.010 s | 33 MiB |
| `dprint@0.64.3` | **0.012 s** | 0.011 to 0.013 | 7.2× | 0.030 s | 33 MiB |
| `dprint@0.65.0` | **0.013 s** | 0.012 to 0.014 | 7.0× | 0.030 s | 34 MiB |
| `biome@2.6.8` | **0.013 s** | 0.011 to 0.014 | 6.8× | 0.010 s | 33 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.035 to 0.040 | 2.3× | 0.030 s | 68 MiB |
| `oxfmt@0.79.0` | **0.038 s** | 0.035 to 0.041 | 2.3× | 0.030 s | 68 MiB |
| `prettier@3.9.10` | **0.086 s** | 0.083 to 0.088 | 1.0× | 0.100 s | 86 MiB |
| `prettier@3.10.1` | **0.087 s** | 0.084 to 0.090 | 1.0× | 0.100 s | 87 MiB |

**Speed, 1 thread** (check mode over all 29 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.007 | NaN× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.009 | NaN× | 0.000 s | 8 MiB |
| `dprint@0.64.3` | **0.012 s** | 0.011 to 0.013 | NaN× | 0.000 s | 30 MiB |
| `dprint@0.65.0` | **0.013 s** | 0.012 to 0.014 | NaN× | 0.010 s | 31 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.034 to 0.040 | NaN× | 0.020 s | 63 MiB |
| `oxfmt@0.78.0` | **0.036 s** | 0.034 to 0.039 | NaN× | 0.020 s | 63 MiB |

## Less

11 files, 2 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 11 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 11 (100.0%) | 0 | ✅ identical |
| `dprint@0.64.3` | 11 (100.0%) | 0 | ✅ identical |
| `dprint@0.65.0` | 11 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 11 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 11 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 11 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 11 (100.0%) | 0 | ✅ identical |

**Speed, as shipped** (check mode over all 11 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.006 | 13.8× | 0.000 s | 5 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.008 | 9.5× | 0.000 s | 11 MiB |
| `dprint@0.64.3` | **0.011 s** | 0.010 to 0.012 | 6.3× | 0.020 s | 31 MiB |
| `dprint@0.65.0` | **0.012 s** | 0.011 to 0.012 | 5.9× | 0.020 s | 32 MiB |
| `oxfmt@0.78.0` | **0.036 s** | 0.035 to 0.038 | 1.9× | 0.030 s | 67 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.035 to 0.037 | 1.9× | 0.030 s | 67 MiB |
| `prettier@3.9.10` | **0.068 s** | 0.068 to 0.074 | 1.0× | 0.070 s | 77 MiB |
| `prettier@3.10.1` | **0.070 s** | 0.068 to 0.074 | 1.0× | 0.070 s | 78 MiB |

**Speed, 1 thread** (check mode over all 11 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.004 to 0.005 | NaN× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.006 s** | 0.006 to 0.007 | NaN× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.011 s** | 0.011 to 0.011 | NaN× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.011 to 0.011 | NaN× | 0.010 s | 30 MiB |
| `oxfmt@0.79.0` | **0.032 s** | 0.031 to 0.034 | NaN× | 0.020 s | 63 MiB |
| `oxfmt@0.78.0` | **0.032 s** | 0.031 to 0.033 | NaN× | 0.020 s | 63 MiB |

## Markdown

80 files, 1.2 MiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 80 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 80 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 80 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 80 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 75 (93.8%) | 5 | ⚠️ differs |
| `oxfmt@0.79.0` | 75 (93.8%) | 5 | ⚠️ differs |
| `dprint@0.64.3` | 60 (75.0%) | 20 | ⚠️ differs |
| `dprint@0.65.0` | 60 (75.0%) | 20 | ⚠️ differs |
| `biome@2.6.7` | 48 (60.0%) | 32 | ⚠️ differs |
| `biome@2.6.8` | 48 (60.0%) | 32 | ⚠️ differs |

**Speed, as shipped** (check mode over all 80 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.010 s** | 0.009 to 0.011 | 124.4× | 0.040 s | 15 MiB |
| `bun@1.4.4` | **0.013 s** | 0.012 to 0.014 | 95.7× | 0.030 s | 53 MiB |
| `dprint@0.64.3` | **0.021 s** | 0.020 to 0.022 | 58.1× | 0.100 s | 60 MiB |
| `dprint@0.65.0` | **0.022 s** | 0.020 to 0.023 | 56.3× | 0.100 s | 61 MiB |
| `biome@2.6.8` | **0.033 s** | 0.032 to 0.035 | 36.3× | 0.100 s | 70 MiB |
| `biome@2.6.7` | **0.034 s** | 0.032 to 0.036 | 36.1× | 0.100 s | 70 MiB |
| `oxfmt@0.78.0` | **0.039 s** | 0.038 to 0.044 | 30.9× | 0.050 s | 98 MiB |
| `oxfmt@0.79.0` | **0.041 s** | 0.038 to 0.044 | 29.7× | 0.060 s | 98 MiB |
| `prettier@3.10.1` | **1.21 s** | 1.16 to 1.28 | 1.0× | 2.33 s | 338 MiB |
| `prettier@3.9.10` | **1.22 s** | 1.18 to 1.32 | 1.0× | 2.24 s | 345 MiB |

**Speed, 1 thread** (check mode over all 80 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.017 s** | 0.017 to 0.020 | NaN× | 0.010 s | 10 MiB |
| `bun@1.4.4` | **0.023 s** | 0.023 to 0.027 | NaN× | 0.010 s | 23 MiB |
| `oxfmt@0.78.0` | **0.052 s** | 0.052 to 0.055 | NaN× | 0.050 s | 72 MiB |
| `oxfmt@0.79.0` | **0.053 s** | 0.052 to 0.057 | NaN× | 0.050 s | 72 MiB |
| `dprint@0.64.3` | **0.065 s** | 0.064 to 0.074 | NaN× | 0.060 s | 39 MiB |
| `dprint@0.65.0` | **0.066 s** | 0.065 to 0.074 | NaN× | 0.070 s | 40 MiB |

## YAML

3 files, 3 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 3 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 3 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 3 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 3 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 3 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 3 (100.0%) | 0 | ✅ identical |
| `biome@2.6.7` | 2 (66.7%) | 1 | ⚠️ differs |
| `biome@2.6.8` | 2 (66.7%) | 1 | ⚠️ differs |
| `dprint@0.64.3` | 2 (66.7%) | 1 | ⚠️ differs |
| `dprint@0.65.0` | 2 (66.7%) | 1 | ⚠️ differs |

**Speed, as shipped** (check mode over all 3 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.005 | 12.6× | 0.000 s | 5 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.007 | 9.1× | 0.000 s | 9 MiB |
| `biome@2.6.8` | **0.010 s** | 0.010 to 0.014 | 6.2× | 0.000 s | 28 MiB |
| `biome@2.6.7` | **0.010 s** | 0.010 to 0.011 | 5.9× | 0.000 s | 27 MiB |
| `dprint@0.64.3` | **0.011 s** | 0.010 to 0.011 | 5.8× | 0.010 s | 30 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.011 to 0.012 | 5.5× | 0.010 s | 30 MiB |
| `oxfmt@0.78.0` | **0.036 s** | 0.035 to 0.037 | 1.7× | 0.030 s | 65 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.034 to 0.039 | 1.7× | 0.030 s | 66 MiB |
| `prettier@3.10.1` | **0.062 s** | 0.062 to 0.066 | 1.0× | 0.060 s | 76 MiB |
| `prettier@3.9.10` | **0.063 s** | 0.062 to 0.066 | 1.0× | 0.060 s | 76 MiB |

**Speed, 1 thread** (check mode over all 3 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.004 to 0.005 | NaN× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.006 s** | 0.006 to 0.007 | NaN× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.011 s** | 0.010 to 0.011 | NaN× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.011 to 0.012 | NaN× | 0.010 s | 30 MiB |
| `oxfmt@0.79.0` | **0.032 s** | 0.032 to 0.034 | NaN× | 0.020 s | 62 MiB |
| `oxfmt@0.78.0` | **0.032 s** | 0.031 to 0.033 | NaN× | 0.020 s | 62 MiB |

## HTML

158 files, 149 KiB; 4 files left out because `prettier@3.10.1` cannot format them (run.json).

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 158 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 158 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 158 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 158 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 158 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 157 (99.4%) | 1 | ⚠️ differs |
| `dprint@0.64.3` | 73 (46.2%) | 85 | ⚠️ differs |
| `dprint@0.65.0` | 73 (46.2%) | 85 | ⚠️ differs |
| `biome@2.6.7` | 58 (36.7%) | 100 | ⚠️ differs |
| `biome@2.6.8` | 58 (36.7%) | 100 | ⚠️ differs |

**Speed, as shipped** (check mode over all 158 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.008 s** | 0.008 to 0.012 | 41.3× | 0.020 s | 11 MiB |
| `bun@1.4.4` | **0.013 s** | 0.012 to 0.014 | 25.5× | 0.050 s | 38 MiB |
| `biome@2.6.7` | **0.018 s** | 0.018 to 0.019 | 18.2× | 0.080 s | 45 MiB |
| `biome@2.6.8` | **0.018 s** | 0.017 to 0.019 | 18.1× | 0.080 s | 45 MiB |
| `dprint@0.64.3` | **0.018 s** | 0.018 to 0.020 | 17.7× | 0.080 s | 41 MiB |
| `dprint@0.65.0` | **0.019 s** | 0.018 to 0.020 | 17.3× | 0.080 s | 42 MiB |
| `oxfmt@0.79.0` | **0.041 s** | 0.038 to 0.043 | 7.9× | 0.090 s | 79 MiB |
| `oxfmt@0.78.0` | **0.041 s** | 0.038 to 0.044 | 7.9× | 0.090 s | 78 MiB |
| `prettier@3.10.1` | **0.326 s** | 0.322 to 0.349 | 1.0× | 0.590 s | 163 MiB |
| `prettier@3.9.10` | **0.331 s** | 0.319 to 0.361 | 1.0× | 0.590 s | 168 MiB |

**Speed, 1 thread** (check mode over all 158 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.013 s** | 0.013 to 0.014 | NaN× | 0.000 s | 8 MiB |
| `bun@1.4.4` | **0.015 s** | 0.014 to 0.016 | NaN× | 0.000 s | 13 MiB |
| `dprint@0.64.3` | **0.035 s** | 0.034 to 0.036 | NaN× | 0.040 s | 32 MiB |
| `dprint@0.65.0` | **0.036 s** | 0.034 to 0.039 | NaN× | 0.040 s | 33 MiB |
| `oxfmt@0.79.0` | **0.039 s** | 0.038 to 0.041 | NaN× | 0.030 s | 66 MiB |
| `oxfmt@0.78.0` | **0.040 s** | 0.038 to 0.043 | NaN× | 0.030 s | 66 MiB |

## Formatters

| Formatter | Package | Languages | Default threads | Version output | Binary sha256 |
|---|---|---|---|---|---|
| prettier@3.10.1 | prettier@3.10.1 | js, json, css, scss, less, markdown, yaml, html, angular | 1 | 3.10.1 | 9fe2ddfe1e45b373 |
| biome@2.6.7 | @biomejs/biome@2.6.7 | js, json, css, scss, markdown, yaml, html, angular | per-core | Version: 2.6.7 | 5ea2cd7d212b1013 |
| biome@2.6.8 | @biomejs/biome@2.6.8 | js, json, css, scss, markdown, yaml, html, angular | per-core | Version: 2.6.8 | 16c2a522889a6797 |
| bun@1.4.4 | bun@1.4.4 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | 1.4.4 | 0a2237cdcfa0d16e |
| dprint@0.64.3 | dprint@0.64.3, @dprint/typescript@0.101.0, @dprint/json@0.26.0, @dprint/markdown@0.29.0, dprint-plugin-malva@0.16.1, dprint-plugin-yaml@0.6.0, dprint-plugin-markup@0.28.0 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | dprint 0.64.3 | de19b9ad9d2a70b5 |
| dprint@0.65.0 | dprint@0.65.0, @dprint/typescript@0.101.0, @dprint/json@0.26.0, @dprint/markdown@0.29.0, dprint-plugin-malva@0.16.1, dprint-plugin-yaml@0.6.0, dprint-plugin-markup@0.28.0 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | dprint 0.65.0 | a0e191b7a7f7d62b |
| oxfmt@0.78.0 | oxfmt@0.78.0 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | Version: 0.78.0 | ecab4e2f1bebaab1 |
| oxfmt@0.79.0 | oxfmt@0.79.0 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | Version: 0.79.0 | ecab4e2f1bebaab1 |
| prettier@3.9.10 | prettier@3.9.10 | js, json, css, scss, less, markdown, yaml, html, angular | 1 | 3.9.10 | 6e922134a3c76fd4 |
| tidy@2.0.0 | lukeed/tidy release@2.0.0 (v2.0.0, published 2026-11-24, added before 7 days as a reviewed exception) | js, json, css, scss, less, markdown, yaml, html, angular | per-core | tidy 2.0.0 | 02f558417b51e06f |

## Conditions

- busy process: com.apple.Virtualization.VirtualMachine at 55.3% CPU
