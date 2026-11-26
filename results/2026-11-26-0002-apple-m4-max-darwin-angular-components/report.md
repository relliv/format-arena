# angular-components

> 2433 JavaScript and TypeScript, 124 JSON, 276 CSS, 434 SCSS, 278 Markdown, 4 YAML, 684 Angular templates files, formatted by 10 formatters. No formatter prints exactly what `prettier@3.10.1` prints in every language.

| | |
|---|---|
| **Machine** | Apple M4 Max, 16 cores, 48 GiB |
| **System** | macOS 27.0.1 (26A434), Node v26.0.0, local machine |
| **When** | 2026-11-26 00:02 UTC, 7 min |
| **Method** | check mode, median of 7 rounds after one warm-up per language; order rotated every round |
| **Reference** | `prettier@3.10.1`, with Prettier's default style written out |
| **Run** | `2026-11-26-0002-apple-m4-max-darwin-angular-components` |

## JavaScript and TypeScript

2433 files, 11.0 MiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 2433 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 2433 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 2432 (100.0%) | 1 | ⚠️ differs |
| `oxfmt@0.78.0` | 2394 (98.4%) | 39 | ⚠️ differs |
| `oxfmt@0.79.0` | 2394 (98.4%) | 39 | ⚠️ differs |
| `tidy@2.0.0` | 2338 (96.1%) | 95 | ⚠️ differs |
| `biome@2.6.7` | 2134 (87.7%) | 299 | ⚠️ differs |
| `biome@2.6.8` | 2134 (87.7%) | 299 | ⚠️ differs |
| `dprint@0.64.3` | 787 (32.3%) | 1646 | ⚠️ differs |
| `dprint@0.65.0` | 787 (32.3%) | 1646 | ⚠️ differs |

**Speed, as shipped** (check mode over all 2433 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.070 s** | 0.043 to 0.089 | 102.0× | 0.590 s | 44 MiB |
| `bun@1.4.4` | **0.074 s** | 0.073 to 0.076 | 96.4× | 0.840 s | 91 MiB |
| `dprint@0.65.0` | **0.123 s** | 0.122 to 0.129 | 57.7× | 1.48 s | 184 MiB |
| `dprint@0.64.3` | **0.124 s** | 0.119 to 0.134 | 57.2× | 1.47 s | 179 MiB |
| `biome@2.6.7` | **0.127 s** | 0.125 to 0.155 | 56.1× | 1.36 s | 223 MiB |
| `biome@2.6.8` | **0.127 s** | 0.126 to 0.135 | 56.1× | 1.38 s | 224 MiB |
| `oxfmt@0.78.0` | **0.399 s** | 0.385 to 0.415 | 17.8× | 4.58 s | 1170 MiB |
| `oxfmt@0.79.0` | **0.406 s** | 0.387 to 0.435 | 17.5× | 4.68 s | 1165 MiB |
| `prettier@3.10.1` | **7.10 s** | 6.97 to 7.23 | 1.0× | 12.33 s | 473 MiB |
| `prettier@3.9.10` | **7.11 s** | 6.75 to 7.35 | 1.0× | 12.45 s | 511 MiB |

**Speed, 1 thread** (check mode over all 2433 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.198 s** | 0.196 to 0.219 | NaN× | 0.190 s | 22 MiB |
| `tidy@2.0.0` | **0.237 s** | 0.235 to 0.260 | NaN× | 0.220 s | 17 MiB |
| `oxfmt@0.79.0` | **1.11 s** | 1.08 to 1.18 | NaN× | 1.51 s | 278 MiB |
| `oxfmt@0.78.0` | **1.11 s** | 1.11 to 1.23 | NaN× | 1.52 s | 277 MiB |
| `dprint@0.65.0` | **1.15 s** | 1.13 to 1.29 | NaN× | 1.22 s | 60 MiB |
| `dprint@0.64.3` | **1.17 s** | 1.15 to 1.18 | NaN× | 1.23 s | 59 MiB |

## JSON

124 files, 117 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 124 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 124 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 124 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 124 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 124 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 124 (100.0%) | 0 | ✅ identical |
| `biome@2.6.7` | 123 (99.2%) | 1 | ⚠️ differs |
| `biome@2.6.8` | 123 (99.2%) | 1 | ⚠️ differs |
| `dprint@0.64.3` | 102 (82.3%) | 22 | ⚠️ differs |
| `dprint@0.65.0` | 102 (82.3%) | 22 | ⚠️ differs |

**Speed, as shipped** (check mode over all 124 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.007 s** | 0.006 to 0.008 | 20.8× | 0.010 s | 6 MiB |
| `bun@1.4.4` | **0.010 s** | 0.010 to 0.011 | 14.4× | 0.020 s | 18 MiB |
| `dprint@0.64.3` | **0.013 s** | 0.013 to 0.015 | 11.4× | 0.040 s | 35 MiB |
| `dprint@0.65.0` | **0.013 s** | 0.013 to 0.015 | 10.8× | 0.040 s | 36 MiB |
| `biome@2.6.8` | **0.014 s** | 0.014 to 0.015 | 10.6× | 0.040 s | 36 MiB |
| `biome@2.6.7` | **0.014 s** | 0.013 to 0.015 | 10.3× | 0.030 s | 36 MiB |
| `oxfmt@0.78.0` | **0.038 s** | 0.036 to 0.042 | 3.8× | 0.040 s | 71 MiB |
| `oxfmt@0.79.0` | **0.039 s** | 0.037 to 0.043 | 3.8× | 0.040 s | 71 MiB |
| `prettier@3.10.1` | **0.146 s** | 0.144 to 0.155 | 1.0× | 0.220 s | 119 MiB |
| `prettier@3.9.10` | **0.149 s** | 0.145 to 0.162 | 1.0× | 0.230 s | 120 MiB |

**Speed, 1 thread** (check mode over all 124 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.008 s** | 0.007 to 0.008 | NaN× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.010 s** | 0.010 to 0.010 | NaN× | 0.000 s | 8 MiB |
| `dprint@0.64.3` | **0.020 s** | 0.020 to 0.021 | NaN× | 0.020 s | 31 MiB |
| `dprint@0.65.0` | **0.020 s** | 0.019 to 0.022 | NaN× | 0.020 s | 32 MiB |
| `oxfmt@0.78.0` | **0.034 s** | 0.034 to 0.035 | NaN× | 0.030 s | 63 MiB |
| `oxfmt@0.79.0` | **0.035 s** | 0.033 to 0.035 | NaN× | 0.030 s | 63 MiB |

## CSS

276 files, 93 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 276 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 276 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 276 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 276 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 276 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 276 (100.0%) | 0 | ✅ identical |
| `biome@2.6.7` | 275 (99.6%) | 1 | ⚠️ differs |
| `biome@2.6.8` | 275 (99.6%) | 1 | ⚠️ differs |
| `dprint@0.64.3` | 245 (88.8%) | 31 | ⚠️ differs |
| `dprint@0.65.0` | 245 (88.8%) | 31 | ⚠️ differs |

**Speed, as shipped** (check mode over all 276 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.011 s** | 0.010 to 0.011 | 27.5× | 0.030 s | 6 MiB |
| `dprint@0.64.3` | **0.018 s** | 0.018 to 0.018 | 16.6× | 0.090 s | 35 MiB |
| `dprint@0.65.0` | **0.019 s** | 0.018 to 0.019 | 15.7× | 0.090 s | 36 MiB |
| `bun@1.4.4` | **0.019 s** | 0.019 to 0.020 | 15.1× | 0.130 s | 24 MiB |
| `biome@2.6.7` | **0.023 s** | 0.023 to 0.024 | 12.7× | 0.150 s | 39 MiB |
| `biome@2.6.8` | **0.023 s** | 0.022 to 0.024 | 12.6× | 0.150 s | 40 MiB |
| `oxfmt@0.79.0` | **0.048 s** | 0.046 to 0.050 | 6.2× | 0.180 s | 76 MiB |
| `oxfmt@0.78.0` | **0.048 s** | 0.047 to 0.050 | 6.1× | 0.180 s | 76 MiB |
| `prettier@3.10.1` | **0.294 s** | 0.290 to 0.323 | 1.0× | 0.470 s | 153 MiB |
| `prettier@3.9.10` | **0.296 s** | 0.290 to 0.310 | 1.0× | 0.470 s | 156 MiB |

**Speed, 1 thread** (check mode over all 276 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.016 s** | 0.016 to 0.019 | NaN× | 0.000 s | 5 MiB |
| `bun@1.4.4` | **0.018 s** | 0.018 to 0.021 | NaN× | 0.010 s | 9 MiB |
| `dprint@0.64.3` | **0.031 s** | 0.029 to 0.034 | NaN× | 0.050 s | 31 MiB |
| `dprint@0.65.0` | **0.031 s** | 0.030 to 0.034 | NaN× | 0.050 s | 32 MiB |
| `oxfmt@0.79.0` | **0.039 s** | 0.039 to 0.043 | NaN× | 0.030 s | 64 MiB |
| `oxfmt@0.78.0` | **0.040 s** | 0.039 to 0.044 | NaN× | 0.030 s | 64 MiB |

## SCSS

434 files, 1.1 MiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 434 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 380 (87.6%) | 54 | ⚠️ differs |
| `prettier@3.9.10` | 380 (87.6%) | 54 | ⚠️ differs |
| `tidy@2.0.0` | 380 (87.6%) | 54 | ⚠️ differs |
| `oxfmt@0.79.0` | 313 (72.1%) | 121 | ⚠️ differs |
| `oxfmt@0.78.0` | 312 (71.9%) | 122 | ⚠️ differs |
| `biome@2.6.7` | 257 (59.2%) | 177 | ⚠️ differs |
| `biome@2.6.8` | 257 (59.2%) | 177 | ⚠️ differs |
| `dprint@0.64.3` | 211 (48.6%) | 223 | ⚠️ differs |
| `dprint@0.65.0` | 211 (48.6%) | 223 | ⚠️ differs |

**Speed, as shipped** (check mode over all 434 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.012 s** | 0.011 to 0.013 | 68.4× | 0.080 s | 10 MiB |
| `bun@1.4.4` | **0.018 s** | 0.018 to 0.019 | 45.5× | 0.130 s | 30 MiB |
| `dprint@0.64.3` | **0.020 s** | 0.020 to 0.023 | 42.2× | 0.120 s | 40 MiB |
| `dprint@0.65.0` | **0.021 s** | 0.020 to 0.022 | 40.2× | 0.120 s | 41 MiB |
| `biome@2.6.7` | **0.026 s** | 0.025 to 0.026 | 32.3× | 0.180 s | 63 MiB |
| `biome@2.6.8` | **0.026 s** | 0.025 to 0.027 | 31.9× | 0.180 s | 63 MiB |
| `oxfmt@0.79.0` | **0.044 s** | 0.043 to 0.047 | 19.1× | 0.170 s | 91 MiB |
| `oxfmt@0.78.0` | **0.045 s** | 0.044 to 0.048 | 18.6× | 0.180 s | 90 MiB |
| `prettier@3.9.10` | **0.839 s** | 0.822 to 0.928 | 1.0× | 1.38 s | 184 MiB |
| `prettier@3.10.1` | **0.840 s** | 0.825 to 0.863 | 1.0× | 1.36 s | 183 MiB |

**Speed, 1 thread** (check mode over all 434 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.030 s** | 0.029 to 0.035 | NaN× | 0.020 s | 10 MiB |
| `tidy@2.0.0` | **0.030 s** | 0.029 to 0.033 | NaN× | 0.020 s | 6 MiB |
| `oxfmt@0.78.0` | **0.056 s** | 0.055 to 0.056 | NaN× | 0.050 s | 67 MiB |
| `oxfmt@0.79.0` | **0.057 s** | 0.054 to 0.060 | NaN× | 0.050 s | 67 MiB |
| `dprint@0.64.3` | **0.072 s** | 0.072 to 0.083 | NaN× | 0.080 s | 32 MiB |
| `dprint@0.65.0` | **0.073 s** | 0.072 to 0.082 | NaN× | 0.080 s | 33 MiB |

## Markdown

278 files, 3.1 MiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 278 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 276 (99.3%) | 2 | ⚠️ differs |
| `bun@1.4.4` | 275 (98.9%) | 3 | ⚠️ differs |
| `tidy@2.0.0` | 268 (96.4%) | 10 | ⚠️ differs |
| `oxfmt@0.79.0` | 215 (77.3%) | 63 | ⚠️ differs |
| `oxfmt@0.78.0` | 214 (77.0%) | 64 | ⚠️ differs |
| `biome@2.6.7` | 166 (59.7%) | 112 | ⚠️ differs |
| `biome@2.6.8` | 166 (59.7%) | 112 | ⚠️ differs |
| `dprint@0.64.3` | 128 (46.0%) | 150 | ⚠️ differs |
| `dprint@0.65.0` | 128 (46.0%) | 150 | ⚠️ differs |

**Speed, as shipped** (check mode over all 278 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.018 s** | 0.018 to 0.019 | 141.8× | 0.090 s | 34 MiB |
| `bun@1.4.4` | **0.026 s** | 0.025 to 0.028 | 99.7× | 0.120 s | 86 MiB |
| `dprint@0.64.3` | **0.050 s** | 0.050 to 0.052 | 52.2× | 0.290 s | 127 MiB |
| `dprint@0.65.0` | **0.051 s** | 0.051 to 0.053 | 50.8× | 0.290 s | 129 MiB |
| `biome@2.6.8` | **0.077 s** | 0.076 to 0.078 | 33.9× | 0.270 s | 112 MiB |
| `biome@2.6.7` | **0.077 s** | 0.075 to 0.083 | 33.7× | 0.280 s | 112 MiB |
| `oxfmt@0.79.0` | **0.098 s** | 0.095 to 0.102 | 26.7× | 0.270 s | 209 MiB |
| `oxfmt@0.78.0` | **0.099 s** | 0.094 to 0.116 | 26.3× | 0.280 s | 207 MiB |
| `prettier@3.10.1` | **2.61 s** | 2.59 to 2.72 | 1.0× | 4.86 s | 829 MiB |
| `prettier@3.9.10` | **2.78 s** | 2.70 to 2.94 | 0.9× | 5.05 s | 756 MiB |

**Speed, 1 thread** (check mode over all 278 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.050 s** | 0.050 to 0.051 | NaN× | 0.030 s | 24 MiB |
| `bun@1.4.4` | **0.054 s** | 0.054 to 0.056 | NaN× | 0.040 s | 44 MiB |
| `oxfmt@0.78.0` | **0.135 s** | 0.133 to 0.137 | NaN× | 0.150 s | 138 MiB |
| `oxfmt@0.79.0` | **0.135 s** | 0.134 to 0.139 | NaN× | 0.150 s | 138 MiB |
| `dprint@0.64.3` | **0.205 s** | 0.203 to 0.225 | NaN× | 0.220 s | 75 MiB |
| `dprint@0.65.0` | **0.206 s** | 0.204 to 0.212 | NaN× | 0.220 s | 77 MiB |

## YAML

4 files, 4 KiB.

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 4 (100.0%) | 0 | ✅ identical |
| `biome@2.6.7` | 4 (100.0%) | 0 | ✅ identical |
| `biome@2.6.8` | 4 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 4 (100.0%) | 0 | ✅ identical |
| `dprint@0.64.3` | 4 (100.0%) | 0 | ✅ identical |
| `dprint@0.65.0` | 4 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.78.0` | 4 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 4 (100.0%) | 0 | ✅ identical |
| `prettier@3.9.10` | 4 (100.0%) | 0 | ✅ identical |
| `tidy@2.0.0` | 4 (100.0%) | 0 | ✅ identical |

**Speed, as shipped** (check mode over all 4 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.005 | 12.5× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.008 | 8.6× | 0.000 s | 10 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.009 to 0.011 | 6.0× | 0.000 s | 30 MiB |
| `biome@2.6.8` | **0.010 s** | 0.010 to 0.012 | 5.9× | 0.000 s | 28 MiB |
| `biome@2.6.7` | **0.011 s** | 0.010 to 0.012 | 5.7× | 0.000 s | 28 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.011 | 5.7× | 0.010 s | 31 MiB |
| `oxfmt@0.79.0` | **0.037 s** | 0.035 to 0.037 | 1.7× | 0.030 s | 66 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.035 to 0.038 | 1.7× | 0.030 s | 66 MiB |
| `prettier@3.9.10` | **0.061 s** | 0.061 to 0.062 | 1.0× | 0.060 s | 78 MiB |
| `prettier@3.10.1` | **0.061 s** | 0.061 to 0.063 | 1.0× | 0.060 s | 78 MiB |

**Speed, 1 thread** (check mode over all 4 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.004 to 0.005 | NaN× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.006 to 0.007 | NaN× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.010 to 0.011 | NaN× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.011 | NaN× | 0.010 s | 30 MiB |
| `oxfmt@0.79.0` | **0.032 s** | 0.031 to 0.033 | NaN× | 0.020 s | 62 MiB |
| `oxfmt@0.78.0` | **0.032 s** | 0.031 to 0.033 | NaN× | 0.020 s | 62 MiB |

## Angular templates

684 files, 908 KiB; 12 files left out because `prettier@3.10.1` cannot format them (run.json).

| Formatter | Same as reference | Differs | Result |
|---|--:|--:|---|
| `prettier@3.10.1` | 684 (100.0%) | 0 | ✅ identical |
| `oxfmt@0.79.0` | 684 (100.0%) | 0 | ✅ identical |
| `bun@1.4.4` | 679 (99.3%) | 5 | ⚠️ differs |
| `oxfmt@0.78.0` | 679 (99.3%) | 5 | ⚠️ differs |
| `prettier@3.9.10` | 679 (99.3%) | 5 | ⚠️ differs |
| `tidy@2.0.0` | 299 (43.7%) | 385 | ⚠️ differs |
| `biome@2.6.8` | 209 (30.6%) | 475 | ⚠️ differs |
| `biome@2.6.7` | 207 (30.3%) | 477 | ⚠️ differs |
| `dprint@0.64.3` | 188 (27.5%) | 496 | ⚠️ differs |
| `dprint@0.65.0` | 188 (27.5%) | 496 | ⚠️ differs |

**Speed, as shipped** (check mode over all 684 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.019 s** | 0.019 to 0.035 | 82.6× | 0.100 s | 15 MiB |
| `dprint@0.64.3` | **0.029 s** | 0.029 to 0.031 | 55.2× | 0.180 s | 41 MiB |
| `dprint@0.65.0` | **0.030 s** | 0.029 to 0.032 | 53.7× | 0.180 s | 42 MiB |
| `bun@1.4.4` | **0.036 s** | 0.035 to 0.038 | 44.5× | 0.330 s | 46 MiB |
| `biome@2.6.8` | **0.042 s** | 0.039 to 0.043 | 38.0× | 0.360 s | 63 MiB |
| `biome@2.6.7` | **0.043 s** | 0.042 to 0.073 | 37.5× | 0.360 s | 62 MiB |
| `oxfmt@0.78.0` | **0.519 s** | 0.500 to 0.602 | 3.1× | 6.79 s | 1495 MiB |
| `oxfmt@0.79.0` | **0.600 s** | 0.580 to 0.633 | 2.7× | 7.96 s | 1502 MiB |
| `prettier@3.9.10` | **1.59 s** | 1.55 to 1.66 | 1.0× | 2.50 s | 232 MiB |
| `prettier@3.10.1` | **1.60 s** | 1.56 to 1.75 | 1.0× | 2.47 s | 235 MiB |

**Speed, 1 thread** (check mode over all 684 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.041 s** | 0.041 to 0.050 | NaN× | 0.030 s | 9 MiB |
| `bun@1.4.4` | **0.049 s** | 0.048 to 0.053 | NaN× | 0.040 s | 15 MiB |
| `dprint@0.65.0` | **0.081 s** | 0.080 to 0.086 | NaN× | 0.120 s | 34 MiB |
| `dprint@0.64.3` | **0.081 s** | 0.080 to 0.088 | NaN× | 0.130 s | 33 MiB |
| `oxfmt@0.78.0` | **1.44 s** | 1.40 to 1.51 | NaN× | 2.23 s | 282 MiB |
| `oxfmt@0.79.0` | **1.45 s** | 1.43 to 1.50 | NaN× | 2.20 s | 285 MiB |

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
