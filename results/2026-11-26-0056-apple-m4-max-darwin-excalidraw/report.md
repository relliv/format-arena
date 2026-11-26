# excalidraw

> 735 JavaScript and TypeScript, 89 JSON, 3 CSS, 85 SCSS, 17 Markdown, 2 YAML, 3 HTML files, formatted by 10 formatters. `bun@1.4.4`, `prettier@3.9.10` print exactly what `prettier@3.10.1` prints in every language it formats.

| | |
|---|---|
| **Machine** | Apple M4 Max, 16 cores, 48 GiB |
| **System** | macOS 27.0.1 (26A434), Node v26.0.0, local machine |
| **When** | 2026-11-26 00:56 UTC, 3 min |
| **Method** | check mode, median of 7 rounds after one warm-up per language; order rotated every round |
| **Reference** | `prettier@3.10.1`, with Prettier's default style written out |
| **Run** | `2026-11-26-0056-apple-m4-max-darwin-excalidraw` |

## JavaScript and TypeScript

735 files, 8.6 MiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 735 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 735 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 735 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 735 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 692 (94.1%) | 43 | 24 | ⚠️ differs |
| `oxfmt@0.78.0` | 691 (94.0%) | 44 | 24 | ⚠️ differs |
| `biome@2.6.7` | 674 (91.7%) | 61 | 31 | ⚠️ differs |
| `biome@2.6.8` | 674 (91.7%) | 61 | 31 | ⚠️ differs |
| `dprint@0.64.3` | 202 (27.5%) | 533 | 4 | ⚠️ differs |
| `dprint@0.65.0` | 202 (27.5%) | 533 | 4 | ⚠️ differs |

**Speed, as shipped** (check mode over all 735 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.025 s** | 0.021 to 0.032 | 162.2× | 0.230 s | 48 MiB |
| `bun@1.4.4` | **0.026 s** | 0.025 to 0.032 | 156.0× | 0.220 s | 76 MiB |
| `oxfmt@0.79.0` | **0.052 s** | 0.049 to 0.055 | 77.7× | 0.240 s | 137 MiB |
| `oxfmt@0.78.0` | **0.053 s** | 0.051 to 0.054 | 77.1× | 0.240 s | 137 MiB |
| `biome@2.6.8` | **0.071 s** | 0.069 to 0.084 | 57.0× | 0.690 s | 178 MiB |
| `biome@2.6.7` | **0.071 s** | 0.067 to 0.077 | 56.7× | 0.690 s | 178 MiB |
| `dprint@0.64.3` | **0.095 s** | 0.094 to 0.139 | 42.5× | 0.980 s | 201 MiB |
| `dprint@0.65.0` | **0.098 s** | 0.097 to 0.107 | 41.3× | 0.990 s | 202 MiB |
| `prettier@3.10.1` | **4.05 s** | 3.82 to 4.12 | 1.0× | 7.81 s | 461 MiB |
| `prettier@3.9.10` | **4.21 s** | 4.05 to 4.36 | 1.0× | 8.10 s | 573 MiB |

**Speed, 1 thread** (check mode over all 735 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.110 s** | 0.109 to 0.114 | 36.8× | 0.090 s | 23 MiB |
| `tidy@2.0.0` | **0.136 s** | 0.131 to 0.151 | 29.9× | 0.120 s | 17 MiB |
| `oxfmt@0.78.0` | **0.181 s** | 0.177 to 0.195 | 22.4× | 0.170 s | 77 MiB |
| `oxfmt@0.79.0` | **0.181 s** | 0.176 to 0.191 | 22.4× | 0.170 s | 77 MiB |
| `dprint@0.64.3` | **0.835 s** | 0.816 to 0.905 | 4.9× | 0.840 s | 69 MiB |
| `dprint@0.65.0` | **0.847 s** | 0.821 to 0.925 | 4.8× | 0.850 s | 71 MiB |

## JSON

89 files, 2.0 MiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 89 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.7` | 89 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.8` | 89 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 89 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 89 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 89 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 89 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 89 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.64.3` | 78 (87.6%) | 11 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 78 (87.6%) | 11 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 89 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.007 s** | 0.007 to 0.007 | 44.3× | 0.020 s | 14 MiB |
| `bun@1.4.4` | **0.009 s** | 0.009 to 0.010 | 34.9× | 0.020 s | 18 MiB |
| `dprint@0.64.3` | **0.016 s** | 0.015 to 0.017 | 20.8× | 0.070 s | 62 MiB |
| `dprint@0.65.0` | **0.016 s** | 0.015 to 0.016 | 20.3× | 0.070 s | 63 MiB |
| `biome@2.6.8` | **0.017 s** | 0.016 to 0.017 | 19.4× | 0.060 s | 60 MiB |
| `biome@2.6.7` | **0.017 s** | 0.016 to 0.019 | 19.3× | 0.060 s | 59 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.036 to 0.041 | 8.9× | 0.040 s | 85 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.036 to 0.038 | 8.8× | 0.040 s | 85 MiB |
| `prettier@3.9.10` | **0.302 s** | 0.296 to 0.311 | 1.1× | 0.530 s | 173 MiB |
| `prettier@3.10.1` | **0.323 s** | 0.308 to 0.336 | 1.0× | 0.560 s | 174 MiB |

**Speed, 1 thread** (check mode over all 89 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.015 s** | 0.015 to 0.016 | 21.4× | 0.000 s | 8 MiB |
| `tidy@2.0.0` | **0.018 s** | 0.017 to 0.018 | 18.4× | 0.010 s | 5 MiB |
| `oxfmt@0.78.0` | **0.044 s** | 0.043 to 0.054 | 7.4× | 0.030 s | 65 MiB |
| `oxfmt@0.79.0` | **0.044 s** | 0.042 to 0.044 | 7.4× | 0.040 s | 65 MiB |
| `dprint@0.64.3` | **0.047 s** | 0.047 to 0.048 | 6.8× | 0.040 s | 32 MiB |
| `dprint@0.65.0` | **0.048 s** | 0.047 to 0.051 | 6.7× | 0.050 s | 33 MiB |

## CSS

3 files, 1 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.7` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.8` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.64.3` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.65.0` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 3 (100.0%) | 0 | 0 | ✅ identical |

**Speed, as shipped** (check mode over all 3 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.006 | 12.9× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.009 | 9.1× | 0.000 s | 9 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.009 to 0.012 | 6.6× | 0.010 s | 30 MiB |
| `biome@2.6.8` | **0.010 s** | 0.010 to 0.012 | 6.4× | 0.000 s | 28 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.012 | 6.1× | 0.000 s | 31 MiB |
| `biome@2.6.7` | **0.011 s** | 0.010 to 0.012 | 5.9× | 0.000 s | 28 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.035 to 0.040 | 1.8× | 0.030 s | 67 MiB |
| `oxfmt@0.79.0` | **0.038 s** | 0.036 to 0.039 | 1.7× | 0.030 s | 66 MiB |
| `prettier@3.9.10` | **0.065 s** | 0.061 to 0.070 | 1.0× | 0.060 s | 75 MiB |
| `prettier@3.10.1` | **0.066 s** | 0.061 to 0.072 | 1.0× | 0.060 s | 74 MiB |

**Speed, 1 thread** (check mode over all 3 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.004 s** | 0.004 to 0.005 | 15.4× | 0.000 s | 3 MiB |
| `bun@1.4.4` | **0.007 s** | 0.006 to 0.007 | 9.9× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.010 to 0.011 | 6.6× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.011 | 6.2× | 0.000 s | 30 MiB |
| `oxfmt@0.79.0` | **0.031 s** | 0.031 to 0.033 | 2.1× | 0.020 s | 63 MiB |
| `oxfmt@0.78.0` | **0.032 s** | 0.031 to 0.033 | 2.0× | 0.020 s | 63 MiB |

## SCSS

85 files, 221 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 85 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 85 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 85 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 85 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 83 (97.6%) | 2 | 0 | ⚠️ differs |
| `oxfmt@0.79.0` | 83 (97.6%) | 2 | 0 | ⚠️ differs |
| `biome@2.6.7` | 80 (94.1%) | 5 | 0 | ⚠️ differs |
| `biome@2.6.8` | 80 (94.1%) | 5 | 0 | ⚠️ differs |
| `dprint@0.64.3` | 74 (87.1%) | 11 | 2 | ⚠️ differs |
| `dprint@0.65.0` | 74 (87.1%) | 11 | 2 | ⚠️ differs |

**Speed, as shipped** (check mode over all 85 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.006 s** | 0.006 to 0.007 | 50.7× | 0.010 s | 7 MiB |
| `bun@1.4.4` | **0.010 s** | 0.009 to 0.011 | 33.7× | 0.010 s | 22 MiB |
| `dprint@0.64.3` | **0.014 s** | 0.013 to 0.016 | 23.4× | 0.040 s | 37 MiB |
| `dprint@0.65.0` | **0.014 s** | 0.014 to 0.015 | 22.6× | 0.040 s | 38 MiB |
| `biome@2.6.8` | **0.016 s** | 0.015 to 0.018 | 20.4× | 0.040 s | 44 MiB |
| `biome@2.6.7` | **0.016 s** | 0.015 to 0.017 | 19.7× | 0.040 s | 44 MiB |
| `oxfmt@0.79.0` | **0.038 s** | 0.037 to 0.040 | 8.5× | 0.050 s | 77 MiB |
| `oxfmt@0.78.0` | **0.038 s** | 0.036 to 0.039 | 8.5× | 0.050 s | 77 MiB |
| `prettier@3.9.10` | **0.309 s** | 0.303 to 0.315 | 1.0× | 0.540 s | 133 MiB |
| `prettier@3.10.1` | **0.322 s** | 0.301 to 0.345 | 1.0× | 0.560 s | 131 MiB |

**Speed, 1 thread** (check mode over all 85 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.009 s** | 0.009 to 0.011 | 35.3× | 0.000 s | 6 MiB |
| `bun@1.4.4` | **0.012 s** | 0.011 to 0.013 | 27.6× | 0.000 s | 9 MiB |
| `dprint@0.64.3` | **0.026 s** | 0.026 to 0.029 | 12.3× | 0.030 s | 31 MiB |
| `dprint@0.65.0` | **0.027 s** | 0.026 to 0.029 | 11.8× | 0.030 s | 32 MiB |
| `oxfmt@0.78.0` | **0.039 s** | 0.037 to 0.041 | 8.2× | 0.040 s | 65 MiB |
| `oxfmt@0.79.0` | **0.040 s** | 0.037 to 0.042 | 8.1× | 0.040 s | 65 MiB |

## Markdown

17 files, 203 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 17 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 17 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 17 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 17 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 17 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 16 (94.1%) | 1 | 0 | ⚠️ differs |
| `biome@2.6.7` | 12 (70.6%) | 5 | 0 | ⚠️ differs |
| `biome@2.6.8` | 12 (70.6%) | 5 | 0 | ⚠️ differs |
| `dprint@0.64.3` | 12 (70.6%) | 5 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 12 (70.6%) | 5 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 17 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.007 s** | 0.006 to 0.007 | 48.3× | 0.000 s | 9 MiB |
| `bun@1.4.4` | **0.010 s** | 0.010 to 0.012 | 33.0× | 0.000 s | 25 MiB |
| `dprint@0.64.3` | **0.017 s** | 0.016 to 0.018 | 19.2× | 0.030 s | 38 MiB |
| `dprint@0.65.0` | **0.017 s** | 0.017 to 0.019 | 18.8× | 0.030 s | 39 MiB |
| `biome@2.6.8` | **0.021 s** | 0.020 to 0.022 | 15.7× | 0.020 s | 43 MiB |
| `biome@2.6.7` | **0.022 s** | 0.021 to 0.024 | 15.1× | 0.020 s | 43 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.034 to 0.040 | 9.2× | 0.030 s | 76 MiB |
| `oxfmt@0.78.0` | **0.036 s** | 0.034 to 0.038 | 9.1× | 0.030 s | 76 MiB |
| `prettier@3.10.1` | **0.329 s** | 0.323 to 0.352 | 1.0× | 0.630 s | 219 MiB |
| `prettier@3.9.10` | **0.331 s** | 0.321 to 0.338 | 1.0× | 0.620 s | 216 MiB |

**Speed, 1 thread** (check mode over all 17 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.007 s** | 0.007 to 0.007 | 46.3× | 0.000 s | 8 MiB |
| `bun@1.4.4` | **0.010 s** | 0.010 to 0.013 | 31.6× | 0.000 s | 16 MiB |
| `dprint@0.64.3` | **0.020 s** | 0.018 to 0.021 | 16.6× | 0.010 s | 34 MiB |
| `dprint@0.65.0` | **0.020 s** | 0.019 to 0.021 | 16.3× | 0.010 s | 35 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.035 to 0.039 | 8.9× | 0.020 s | 68 MiB |
| `oxfmt@0.79.0` | **0.037 s** | 0.035 to 0.039 | 8.8× | 0.020 s | 68 MiB |

## YAML

2 files, 1 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 2 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.7` | 2 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.8` | 2 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 2 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.64.3` | 2 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.65.0` | 2 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 2 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 2 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 2 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 2 (100.0%) | 0 | 0 | ✅ identical |

**Speed, as shipped** (check mode over all 2 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.006 | 11.5× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.007 | 8.2× | 0.000 s | 8 MiB |
| `dprint@0.64.3` | **0.009 s** | 0.009 to 0.010 | 5.9× | 0.000 s | 29 MiB |
| `biome@2.6.8` | **0.010 s** | 0.010 to 0.011 | 5.6× | 0.000 s | 27 MiB |
| `dprint@0.65.0` | **0.010 s** | 0.010 to 0.011 | 5.4× | 0.010 s | 30 MiB |
| `biome@2.6.7` | **0.010 s** | 0.009 to 0.011 | 5.4× | 0.000 s | 26 MiB |
| `oxfmt@0.79.0` | **0.035 s** | 0.034 to 0.038 | 1.6× | 0.030 s | 66 MiB |
| `oxfmt@0.78.0` | **0.036 s** | 0.034 to 0.038 | 1.5× | 0.030 s | 66 MiB |
| `prettier@3.9.10` | **0.055 s** | 0.054 to 0.058 | 1.0× | 0.050 s | 72 MiB |
| `prettier@3.10.1` | **0.055 s** | 0.054 to 0.062 | 1.0× | 0.050 s | 72 MiB |

**Speed, 1 thread** (check mode over all 2 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.004 s** | 0.004 to 0.005 | 12.8× | 0.000 s | 3 MiB |
| `bun@1.4.4` | **0.006 s** | 0.006 to 0.008 | 8.7× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.008 to 0.011 | 5.8× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.010 s** | 0.009 to 0.011 | 5.3× | 0.000 s | 30 MiB |
| `oxfmt@0.78.0` | **0.032 s** | 0.031 to 0.036 | 1.7× | 0.020 s | 62 MiB |
| `oxfmt@0.79.0` | **0.034 s** | 0.031 to 0.036 | 1.7× | 0.020 s | 62 MiB |

## HTML

3 files, 31 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 2 (66.7%) | 1 | 0 | ⚠️ differs |
| `oxfmt@0.79.0` | 2 (66.7%) | 1 | 0 | ⚠️ differs |
| `biome@2.6.7` | 0 (0.0%) | 3 | 1 | ⚠️ differs |
| `biome@2.6.8` | 0 (0.0%) | 3 | 1 | ⚠️ differs |
| `dprint@0.64.3` | 0 (0.0%) | 3 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 0 (0.0%) | 3 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 3 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.006 | 21.6× | 0.000 s | 7 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.008 | 15.7× | 0.000 s | 14 MiB |
| `biome@2.6.8` | **0.011 s** | 0.011 to 0.013 | 10.5× | 0.000 s | 33 MiB |
| `dprint@0.64.3` | **0.012 s** | 0.011 to 0.012 | 10.1× | 0.010 s | 31 MiB |
| `biome@2.6.7` | **0.012 s** | 0.011 to 0.012 | 9.9× | 0.000 s | 33 MiB |
| `dprint@0.65.0` | **0.013 s** | 0.012 to 0.013 | 9.3× | 0.010 s | 32 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.035 to 0.038 | 3.3× | 0.030 s | 69 MiB |
| `oxfmt@0.78.0` | **0.036 s** | 0.034 to 0.039 | 3.2× | 0.030 s | 69 MiB |
| `prettier@3.9.10` | **0.115 s** | 0.111 to 0.122 | 1.0× | 0.160 s | 117 MiB |
| `prettier@3.10.1` | **0.117 s** | 0.115 to 0.121 | 1.0× | 0.170 s | 117 MiB |

**Speed, 1 thread** (check mode over all 3 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.007 | 22.4× | 0.000 s | 6 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.009 | 15.7× | 0.000 s | 11 MiB |
| `dprint@0.64.3` | **0.012 s** | 0.011 to 0.013 | 9.7× | 0.000 s | 30 MiB |
| `dprint@0.65.0` | **0.013 s** | 0.011 to 0.015 | 9.2× | 0.000 s | 31 MiB |
| `oxfmt@0.78.0` | **0.034 s** | 0.031 to 0.037 | 3.4× | 0.020 s | 65 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.031 to 0.039 | 3.2× | 0.020 s | 65 MiB |

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

- busy process: com.apple.Virtualization.VirtualMachine at 39.4% CPU
