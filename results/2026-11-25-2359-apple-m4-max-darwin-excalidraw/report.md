# excalidraw

> 735 JavaScript and TypeScript, 89 JSON, 3 CSS, 85 SCSS, 17 Markdown, 2 YAML, 3 HTML files, formatted by 10 formatters. `bun@1.4.4`, `prettier@3.9.10` print exactly what `prettier@3.10.1` prints in every language it formats.

| | |
|---|---|
| **Machine** | Apple M4 Max, 16 cores, 48 GiB |
| **System** | macOS 27.0.1 (26A434), Node v26.0.0, local machine |
| **When** | 2026-11-25 23:59 UTC, 3 min |
| **Method** | check mode, median of 7 rounds after one warm-up per language; order rotated every round |
| **Reference** | `prettier@3.10.1`, with Prettier's default style written out |
| **Run** | `2026-11-25-2359-apple-m4-max-darwin-excalidraw` |

## JavaScript and TypeScript

735 files, 8.6 MiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 735 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 735 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 735 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 735 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 692 (94.1%) | 43 | ⚠️ differs |
| `oxfmt@0.78.0` | 691 (94.0%) | 44 | ⚠️ differs |
| `biome@2.6.7` | 674 (91.7%) | 61 | ⚠️ differs |
| `biome@2.6.8` | 674 (91.7%) | 61 | ⚠️ differs |
| `dprint@0.64.3` | 202 (27.5%) | 533 | ⚠️ differs |
| `dprint@0.65.0` | 202 (27.5%) | 533 | ⚠️ differs |

**Speed, as shipped** (check mode over all 735 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.020 s** | 0.019 to 0.025 | 197.9× | 0.180 s | 50 MiB |
| `bun@1.4.4` | **0.026 s** | 0.025 to 0.027 | 155.8× | 0.220 s | 76 MiB |
| `oxfmt@0.79.0` | **0.049 s** | 0.049 to 0.053 | 81.4× | 0.230 s | 137 MiB |
| `oxfmt@0.78.0` | **0.050 s** | 0.049 to 0.054 | 80.6× | 0.240 s | 137 MiB |
| `biome@2.6.7` | **0.069 s** | 0.067 to 0.079 | 58.5× | 0.680 s | 179 MiB |
| `biome@2.6.8` | **0.070 s** | 0.068 to 0.082 | 57.2× | 0.680 s | 177 MiB |
| `dprint@0.64.3` | **0.095 s** | 0.093 to 0.103 | 42.2× | 0.980 s | 199 MiB |
| `dprint@0.65.0` | **0.098 s** | 0.095 to 0.101 | 41.0× | 0.980 s | 201 MiB |
| `prettier@3.10.1` | **4.02 s** | 3.96 to 4.32 | 1.0× | 8.00 s | 438 MiB |
| `prettier@3.9.10` | **4.14 s** | 3.98 to 4.50 | 1.0× | 7.99 s | 521 MiB |

**Speed, 1 thread** (check mode over all 735 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.105 s** | 0.105 to 0.107 | NaN× | 0.090 s | 23 MiB |
| `tidy@2.0.0` | **0.132 s** | 0.131 to 0.144 | NaN× | 0.120 s | 17 MiB |
| `oxfmt@0.79.0` | **0.176 s** | 0.174 to 0.184 | NaN× | 0.170 s | 77 MiB |
| `oxfmt@0.78.0` | **0.177 s** | 0.176 to 0.179 | NaN× | 0.170 s | 77 MiB |
| `dprint@0.64.3` | **0.821 s** | 0.814 to 0.894 | NaN× | 0.820 s | 70 MiB |
| `dprint@0.65.0` | **0.824 s** | 0.809 to 0.841 | NaN× | 0.820 s | 71 MiB |

## JSON

89 files, 2.0 MiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 89 (100.0%) | 0 | ✅ identical |
| `biome@2.6.7` | 89 (100.0%) | 0 | ✅ identical |
| `biome@2.6.8` | 89 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 89 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 89 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 89 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 89 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 89 (100.0%) | 0 | ✅ identical |
| `dprint@0.64.3` | 78 (87.6%) | 11 | ⚠️ differs |
| `dprint@0.65.0` | 78 (87.6%) | 11 | ⚠️ differs |

**Speed, as shipped** (check mode over all 89 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.007 s** | 0.007 to 0.008 | 43.5× | 0.010 s | 14 MiB |
| `bun@1.4.4` | **0.009 s** | 0.009 to 0.010 | 33.2× | 0.020 s | 18 MiB |
| `dprint@0.64.3` | **0.015 s** | 0.015 to 0.016 | 20.7× | 0.060 s | 62 MiB |
| `dprint@0.65.0` | **0.016 s** | 0.016 to 0.018 | 19.6× | 0.070 s | 63 MiB |
| `biome@2.6.8` | **0.016 s** | 0.016 to 0.018 | 19.1× | 0.060 s | 60 MiB |
| `biome@2.6.7` | **0.017 s** | 0.017 to 0.019 | 18.1× | 0.060 s | 59 MiB |
| `oxfmt@0.79.0` | **0.037 s** | 0.036 to 0.040 | 8.6× | 0.040 s | 84 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.036 to 0.040 | 8.5× | 0.040 s | 84 MiB |
| `prettier@3.9.10` | **0.298 s** | 0.295 to 0.315 | 1.1× | 0.520 s | 173 MiB |
| `prettier@3.10.1` | **0.314 s** | 0.308 to 0.330 | 1.0× | 0.540 s | 173 MiB |

**Speed, 1 thread** (check mode over all 89 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.015 s** | 0.015 to 0.017 | NaN× | 0.000 s | 8 MiB |
| `tidy@2.0.0` | **0.017 s** | 0.017 to 0.018 | NaN× | 0.010 s | 5 MiB |
| `oxfmt@0.79.0` | **0.043 s** | 0.042 to 0.051 | NaN× | 0.030 s | 65 MiB |
| `oxfmt@0.78.0` | **0.043 s** | 0.043 to 0.048 | NaN× | 0.030 s | 65 MiB |
| `dprint@0.64.3` | **0.048 s** | 0.048 to 0.050 | NaN× | 0.040 s | 32 MiB |
| `dprint@0.65.0` | **0.049 s** | 0.048 to 0.053 | NaN× | 0.050 s | 33 MiB |

## CSS

3 files, 1 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 3 (100.0%) | 0 | ✅ identical |
| `biome@2.6.7` | 3 (100.0%) | 0 | ✅ identical |
| `biome@2.6.8` | 3 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 3 (100.0%) | 0 | ✅ identical |
| `dprint@0.64.3` | 3 (100.0%) | 0 | ✅ identical |
| `dprint@0.65.0` | 3 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 3 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 3 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 3 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 3 (100.0%) | 0 | ✅ identical |

**Speed, as shipped** (check mode over all 3 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.005 | 12.5× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.008 | 8.6× | 0.000 s | 9 MiB |
| `biome@2.6.8` | **0.010 s** | 0.010 to 0.010 | 6.0× | 0.000 s | 28 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.009 to 0.012 | 6.0× | 0.010 s | 30 MiB |
| `biome@2.6.7` | **0.011 s** | 0.010 to 0.011 | 5.7× | 0.000 s | 28 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.012 | 5.6× | 0.000 s | 31 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.034 to 0.039 | 1.7× | 0.030 s | 66 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.035 to 0.039 | 1.7× | 0.030 s | 66 MiB |
| `prettier@3.10.1` | **0.061 s** | 0.061 to 0.063 | 1.0× | 0.060 s | 74 MiB |
| `prettier@3.9.10` | **0.063 s** | 0.061 to 0.065 | 1.0× | 0.060 s | 75 MiB |

**Speed, 1 thread** (check mode over all 3 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.004 s** | 0.004 to 0.005 | NaN× | 0.000 s | 3 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.007 | NaN× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.010 to 0.011 | NaN× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.011 | NaN× | 0.010 s | 30 MiB |
| `oxfmt@0.79.0` | **0.032 s** | 0.031 to 0.033 | NaN× | 0.020 s | 63 MiB |
| `oxfmt@0.78.0` | **0.032 s** | 0.031 to 0.033 | NaN× | 0.020 s | 63 MiB |

## SCSS

85 files, 221 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 85 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 85 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 85 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 85 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 83 (97.6%) | 2 | ⚠️ differs |
| `oxfmt@0.79.0` | 83 (97.6%) | 2 | ⚠️ differs |
| `biome@2.6.7` | 80 (94.1%) | 5 | ⚠️ differs |
| `biome@2.6.8` | 80 (94.1%) | 5 | ⚠️ differs |
| `dprint@0.64.3` | 74 (87.1%) | 11 | ⚠️ differs |
| `dprint@0.65.0` | 74 (87.1%) | 11 | ⚠️ differs |

**Speed, as shipped** (check mode over all 85 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.006 s** | 0.006 to 0.007 | 48.3× | 0.000 s | 7 MiB |
| `bun@1.4.4` | **0.009 s** | 0.009 to 0.011 | 32.5× | 0.010 s | 22 MiB |
| `dprint@0.64.3` | **0.013 s** | 0.013 to 0.015 | 22.8× | 0.040 s | 37 MiB |
| `dprint@0.65.0` | **0.014 s** | 0.014 to 0.015 | 21.7× | 0.040 s | 38 MiB |
| `biome@2.6.8` | **0.015 s** | 0.015 to 0.016 | 19.9× | 0.040 s | 44 MiB |
| `biome@2.6.7` | **0.016 s** | 0.015 to 0.016 | 19.4× | 0.040 s | 44 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.037 to 0.039 | 8.2× | 0.050 s | 77 MiB |
| `oxfmt@0.79.0` | **0.038 s** | 0.037 to 0.039 | 8.0× | 0.050 s | 77 MiB |
| `prettier@3.9.10` | **0.300 s** | 0.293 to 0.304 | 1.0× | 0.530 s | 132 MiB |
| `prettier@3.10.1` | **0.306 s** | 0.298 to 0.327 | 1.0× | 0.530 s | 131 MiB |

**Speed, 1 thread** (check mode over all 85 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.009 s** | 0.009 to 0.009 | NaN× | 0.000 s | 6 MiB |
| `bun@1.4.4` | **0.012 s** | 0.011 to 0.012 | NaN× | 0.000 s | 9 MiB |
| `dprint@0.64.3` | **0.026 s** | 0.025 to 0.027 | NaN× | 0.030 s | 31 MiB |
| `dprint@0.65.0` | **0.027 s** | 0.025 to 0.027 | NaN× | 0.030 s | 32 MiB |
| `oxfmt@0.79.0` | **0.038 s** | 0.038 to 0.040 | NaN× | 0.020 s | 65 MiB |
| `oxfmt@0.78.0` | **0.039 s** | 0.038 to 0.040 | NaN× | 0.030 s | 65 MiB |

## Markdown

17 files, 203 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 17 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 17 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 17 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 17 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 17 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 16 (94.1%) | 1 | ⚠️ differs |
| `biome@2.6.7` | 12 (70.6%) | 5 | ⚠️ differs |
| `biome@2.6.8` | 12 (70.6%) | 5 | ⚠️ differs |
| `dprint@0.64.3` | 12 (70.6%) | 5 | ⚠️ differs |
| `dprint@0.65.0` | 12 (70.6%) | 5 | ⚠️ differs |

**Speed, as shipped** (check mode over all 17 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.007 s** | 0.006 to 0.008 | 48.9× | 0.000 s | 9 MiB |
| `bun@1.4.4` | **0.010 s** | 0.010 to 0.011 | 32.8× | 0.000 s | 26 MiB |
| `dprint@0.65.0` | **0.017 s** | 0.016 to 0.018 | 19.3× | 0.030 s | 39 MiB |
| `dprint@0.64.3` | **0.017 s** | 0.016 to 0.017 | 19.3× | 0.030 s | 38 MiB |
| `biome@2.6.8` | **0.021 s** | 0.021 to 0.022 | 15.4× | 0.020 s | 43 MiB |
| `biome@2.6.7` | **0.022 s** | 0.021 to 0.022 | 15.3× | 0.020 s | 43 MiB |
| `oxfmt@0.79.0` | **0.037 s** | 0.036 to 0.038 | 9.0× | 0.030 s | 76 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.036 to 0.037 | 9.0× | 0.040 s | 76 MiB |
| `prettier@3.9.10` | **0.328 s** | 0.322 to 0.330 | 1.0× | 0.610 s | 215 MiB |
| `prettier@3.10.1` | **0.331 s** | 0.329 to 0.351 | 1.0× | 0.640 s | 220 MiB |

**Speed, 1 thread** (check mode over all 17 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.007 s** | 0.007 to 0.007 | NaN× | 0.000 s | 8 MiB |
| `bun@1.4.4` | **0.010 s** | 0.010 to 0.011 | NaN× | 0.000 s | 16 MiB |
| `dprint@0.65.0` | **0.020 s** | 0.019 to 0.021 | NaN× | 0.010 s | 35 MiB |
| `dprint@0.64.3` | **0.020 s** | 0.020 to 0.020 | NaN× | 0.010 s | 34 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.034 to 0.037 | NaN× | 0.020 s | 68 MiB |
| `oxfmt@0.78.0` | **0.036 s** | 0.035 to 0.037 | NaN× | 0.020 s | 68 MiB |

## YAML

2 files, 1 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 2 (100.0%) | 0 | ✅ identical |
| `biome@2.6.7` | 2 (100.0%) | 0 | ✅ identical |
| `biome@2.6.8` | 2 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 2 (100.0%) | 0 | ✅ identical |
| `dprint@0.64.3` | 2 (100.0%) | 0 | ✅ identical |
| `dprint@0.65.0` | 2 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 2 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 2 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 2 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 2 (100.0%) | 0 | ✅ identical |

**Speed, as shipped** (check mode over all 2 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.006 | 11.7× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.008 | 7.9× | 0.000 s | 8 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.009 to 0.011 | 5.7× | 0.010 s | 29 MiB |
| `biome@2.6.8` | **0.010 s** | 0.010 to 0.011 | 5.6× | 0.000 s | 27 MiB |
| `biome@2.6.7` | **0.010 s** | 0.010 to 0.013 | 5.4× | 0.000 s | 26 MiB |
| `dprint@0.65.0` | **0.010 s** | 0.010 to 0.011 | 5.4× | 0.000 s | 30 MiB |
| `oxfmt@0.78.0` | **0.036 s** | 0.034 to 0.041 | 1.5× | 0.030 s | 66 MiB |
| `oxfmt@0.79.0` | **0.037 s** | 0.036 to 0.038 | 1.5× | 0.030 s | 66 MiB |
| `prettier@3.10.1` | **0.056 s** | 0.055 to 0.063 | 1.0× | 0.050 s | 72 MiB |
| `prettier@3.9.10` | **0.056 s** | 0.055 to 0.061 | 1.0× | 0.050 s | 72 MiB |

**Speed, 1 thread** (check mode over all 2 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.004 s** | 0.004 to 0.005 | NaN× | 0.000 s | 3 MiB |
| `bun@1.4.4` | **0.007 s** | 0.006 to 0.007 | NaN× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.009 to 0.010 | NaN× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.010 s** | 0.010 to 0.012 | NaN× | 0.010 s | 30 MiB |
| `oxfmt@0.79.0` | **0.032 s** | 0.032 to 0.033 | NaN× | 0.020 s | 62 MiB |
| `oxfmt@0.78.0` | **0.032 s** | 0.031 to 0.037 | NaN× | 0.020 s | 62 MiB |

## HTML

3 files, 31 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 3 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 3 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 3 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 3 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 2 (66.7%) | 1 | ⚠️ differs |
| `oxfmt@0.79.0` | 2 (66.7%) | 1 | ⚠️ differs |
| `biome@2.6.7` | 0 (0.0%) | 3 | ⚠️ differs |
| `biome@2.6.8` | 0 (0.0%) | 3 | ⚠️ differs |
| `dprint@0.64.3` | 0 (0.0%) | 3 | ⚠️ differs |
| `dprint@0.65.0` | 0 (0.0%) | 3 | ⚠️ differs |

**Speed, as shipped** (check mode over all 3 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.006 | 21.8× | 0.000 s | 7 MiB |
| `bun@1.4.4` | **0.008 s** | 0.007 to 0.009 | 15.2× | 0.000 s | 14 MiB |
| `dprint@0.64.3` | **0.012 s** | 0.011 to 0.013 | 10.0× | 0.010 s | 31 MiB |
| `biome@2.6.8` | **0.012 s** | 0.011 to 0.013 | 9.9× | 0.000 s | 33 MiB |
| `biome@2.6.7` | **0.012 s** | 0.011 to 0.013 | 9.7× | 0.000 s | 33 MiB |
| `dprint@0.65.0` | **0.013 s** | 0.012 to 0.014 | 9.3× | 0.010 s | 32 MiB |
| `oxfmt@0.79.0` | **0.037 s** | 0.036 to 0.040 | 3.1× | 0.030 s | 69 MiB |
| `oxfmt@0.78.0` | **0.038 s** | 0.036 to 0.038 | 3.1× | 0.030 s | 69 MiB |
| `prettier@3.9.10` | **0.116 s** | 0.114 to 0.129 | 1.0× | 0.170 s | 117 MiB |
| `prettier@3.10.1` | **0.117 s** | 0.111 to 0.130 | 1.0× | 0.170 s | 117 MiB |

**Speed, 1 thread** (check mode over all 3 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.006 s** | 0.006 to 0.006 | NaN× | 0.000 s | 6 MiB |
| `bun@1.4.4` | **0.009 s** | 0.009 to 0.009 | NaN× | 0.000 s | 11 MiB |
| `dprint@0.64.3` | **0.013 s** | 0.013 to 0.014 | NaN× | 0.000 s | 30 MiB |
| `dprint@0.65.0` | **0.014 s** | 0.013 to 0.015 | NaN× | 0.000 s | 31 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.036 to 0.040 | NaN× | 0.020 s | 65 MiB |
| `oxfmt@0.79.0` | **0.037 s** | 0.036 to 0.041 | NaN× | 0.020 s | 65 MiB |

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

- busy process: mds_stores at 37.7% CPU
- busy process: com.apple.Virtualization.VirtualMachine at 132.9% CPU
